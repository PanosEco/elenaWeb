(function () {
  "use strict";

  const motionOK = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.getElementById("site-header");
  const progress = document.querySelector(".progress");
  const vine = document.querySelector(".vine path");
  const toTop = document.getElementById("to-top");
  const parallax = Array.from(document.querySelectorAll("[data-parallax]"));

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  let ticking = false;

  function frame() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const amount = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (progress) progress.style.transform = "scaleX(" + amount + ")";
    if (vine) vine.style.strokeDashoffset = String(1 - amount);
    if (motionOK) {
      const y = window.scrollY;
      parallax.forEach(function (el) {
        const speed = parseFloat(el.dataset.parallax) || 0;
        el.style.transform = "translate3d(0, " + y * speed + "px, 0)";
      });
    }
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
    if (toTop) toTop.classList.toggle("is-visible", window.scrollY > 640);
    ticking = false;
  }

  function requestFrame() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(frame);
    }
  }

  window.addEventListener("scroll", requestFrame, { passive: true });
  window.addEventListener("resize", requestFrame);
  frame();

  const revealables = document.querySelectorAll(".reveal, .line-grow");
  if (!motionOK) {
    revealables.forEach(function (el) {
      el.classList.add("is-in");
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      const siblings = Array.from(el.parentElement.children).filter(function (node) {
        return node.classList.contains("reveal");
      });
      const index = siblings.indexOf(el);
      if (index > 0) el.style.transitionDelay = index * 90 + "ms";
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    revealables.forEach(function (el) {
      observer.observe(el);
    });
  }

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const burger = toggle ? toggle.querySelector(".burger") : null;

  function setMenu(open) {
    if (!menu || !toggle) return;
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    if (burger) burger.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    if (open) {
      const first = menu.querySelector("a");
      if (first) first.focus();
    }
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(menu.hidden);
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    menu.addEventListener("keydown", function (event) {
      if (event.key !== "Tab" || menu.hidden) return;
      const items = Array.from(menu.querySelectorAll("a, button"));
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu && !menu.hidden) {
      setMenu(false);
      if (toggle) toggle.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024 && menu && !menu.hidden) setMenu(false);
  });

  document.querySelectorAll(".acc-item").forEach(function (item) {
    const button = item.querySelector(".acc-button");
    if (!button) return;
    button.addEventListener("click", function () {
      const open = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(open));
    });
  });

  document.querySelectorAll(".photo-slot img").forEach(function (img) {
    function show() {
      if (img.naturalWidth > 0) {
        const slot = img.closest(".photo-slot");
        if (slot) slot.classList.add("has-image");
        if (img.dataset.alt) img.alt = img.dataset.alt;
      }
    }
    img.addEventListener("load", show);
    if (img.complete) show();
  });

  const form = document.getElementById("contact-form");
  const success = document.getElementById("form-success");
  const status = document.getElementById("form-status");

  function fieldError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    const field = input ? input.closest(".field, .check") : null;
    if (error) error.textContent = message;
    if (input) input.setAttribute("aria-invalid", message ? "true" : "false");
    if (field) field.classList.toggle("has-error", Boolean(message));
  }

  function showSuccess(name) {
    if (!form || !success) return;
    form.hidden = true;
    success.hidden = false;
    success.classList.add("is-shown");
    const lead = success.querySelector("[data-success-lead]");
    if (lead) {
      lead.textContent = name
        ? name + ", το μήνυμα είναι έτοιμο σε αυτή τη σελίδα."
        : "Το μήνυμα είναι έτοιμο σε αυτή τη σελίδα.";
    }
    if (status) {
      status.textContent = "Το μήνυμα κρατήθηκε σε αυτή τη σελίδα. Δεν έχει σταλεί email.";
    }
    const back = document.getElementById("reset-form");
    if (back) back.focus();
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const data = new FormData(form);
      if (String(data.get("website") || "").trim()) {
        showSuccess("");
        return;
      }

      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const message = String(data.get("message") || "").trim();
      const consent = data.get("consent");
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const phoneDigits = phone.replace(/[^\d]/g, "");
      let firstInvalid = null;

      const checks = [
        ["name", "name-error", name.length < 2 ? "Γράψτε το όνομά σας." : ""],
        ["email", "email-error", emailOk ? "" : "Χρειάζεται ένα έγκυρο email."],
        [
          "phone",
          "phone-error",
          phone && phoneDigits.length < 10 ? "Ελέγξτε τον αριθμό τηλεφώνου." : "",
        ],
        [
          "message",
          "message-error",
          message.length < 10 ? "Πείτε μου λίγα λόγια ακόμη — τουλάχιστον μία πρόταση." : "",
        ],
      ];

      checks.forEach(function (check) {
        fieldError(check[0], check[1], check[2]);
        if (check[2] && !firstInvalid) firstInvalid = document.getElementById(check[0]);
      });

      const consentMessage = consent ? "" : "Χρειάζεται η συγκατάθεσή σας για να απαντήσω.";
      fieldError("consent", "consent-error", consentMessage);
      if (consentMessage && !firstInvalid) {
        firstInvalid = form.querySelector('input[name="consent"]');
      }

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      showSuccess(name);
    });
  }

  const reset = document.getElementById("reset-form");
  if (reset && form && success) {
    reset.addEventListener("click", function () {
      form.reset();
      form.hidden = false;
      success.hidden = true;
      success.classList.remove("is-shown");
      form.querySelectorAll(".error").forEach(function (el) {
        el.textContent = "";
      });
      form.querySelectorAll("[aria-invalid]").forEach(function (el) {
        el.setAttribute("aria-invalid", "false");
      });
      form.querySelectorAll(".has-error").forEach(function (el) {
        el.classList.remove("has-error");
      });
      if (status) status.textContent = "";
      const first = form.querySelector("input, textarea");
      if (first) first.focus();
    });
  }
})();
