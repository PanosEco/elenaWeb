/* Name, phone, email, photos, and the form address are changed here. */
const CONFIG = {
  name: "",
  phone: "",
  email: "",
  formEndpoint: "",
  images: {
    hero: "",
    portrait: "",
    home: "",
  },
};

var lang = "el";
var EN = {
  "nav:faq": "FAQ",
  "[ΝΑ ΠΡΟΣΤΕΘΕΙ]": "[TO BE ADDED]",
  "Πριν τη δημοσίευση: στοιχεία προς συμπλήρωση (πατήστε για λεπτομέρειες)":
    "Before publishing: items to complete (click for details)",
  "Ονοματεπώνυμο ψυχολόγου (κεφαλίδα, υποσέλιδο, copyright)":
    "Psychologist's full name (header, footer, copyright)",
  "Τρεις φωτογραφίες: εισαγωγική, πορτρέτο, άνετος χώρος στο σπίτι (τώρα εμφανίζονται απλά placeholders)":
    "Three photos: hero, portrait, cozy home space (currently shown as placeholders)",
  "Τηλέφωνο και email": "Phone and email",
  "Κείμενα Πολιτικής Απορρήτου και Όρων Χρήσης": "Privacy Policy and Terms of Use texts",
  "Σύνδεση της φόρμας επικοινωνίας με πραγματικό μηχανισμό αποστολής (αυτή τη στιγμή είναι demo και δεν στέλνει τίποτα)":
    "Connect the contact form to a real sending service (it is a demo right now and sends nothing)",
  "Έλεγχος των όρων (π.χ. ακυρώσεις 24 ωρών) πριν δημοσιευτούν":
    "Review the terms (e.g. 24-hour cancellations) before they go live",
  "Όλα αλλάζουν από το αντικείμενο CONFIG στο αρχείο site.js. Όταν ολοκληρωθούν, διαγράψτε αυτό το πλαίσιο.":
    "Everything is edited in the CONFIG object in site.js. When everything is done, delete this box.",
  "Ψυχολόγος · Online συνεδρίες": "Psychologist · Online sessions",
  Αρχική: "Home",
  Βιογραφικό: "About",
  Υπηρεσίες: "Services",
  Επικοινωνία: "Contact",
  "Κλείστε ραντεβού": "Book a session",
  "Κύριο μενού": "Main menu",
  "Άνοιγμα μενού": "Open menu",
  "Online ψυχολογική υποστήριξη": "Online psychological support",
  "Ένας χώρος για να μιλήσεις, να κατανοήσεις και να προχωρήσεις.":
    "A space to talk, to understand and to move forward.",
  "Ψυχολογική υποστήριξη και ψυχοθεραπευτική προσέγγιση, αποκλειστικά διαδικτυακά.":
    "Psychological support and a psychotherapeutic approach, exclusively online.",
  "Γνωρίστε με": "Get to know me",
  "Ενήλικες & έφηβοι": "Adults & teenagers",
  "Ελληνικά & Αγγλικά": "Greek & English",
  "Συνεδρίες 50 λεπτών": "50-minute sessions",
  "Φωτεινός ήρεμος χώρος με φυσικό φως και φυτά":
    "A bright, calm space with natural light and plants",
  "Φωτεινός ήρεμος χώρος με φυσικό φως και φυτά (placeholder)":
    "A bright, calm space with natural light and plants (placeholder)",
  "Placeholder: αντικαταστήστε με φωτογραφία": "Placeholder: replace with a photo",
  "Placeholder: φωτογραφία ψυχολόγου": "Placeholder: photo of the psychologist",
  "Placeholder πορτρέτου ψυχολόγου": "Placeholder portrait of the psychologist",
  "Ψυχολόγος σε φωτεινό χώρο": "Psychologist in a bright space",
  "Σχετικά με εμένα": "About me",
  "Είμαι ψυχολόγος με άδεια άσκησης επαγγέλματος και ολοκληρώνω τετραετή ψυχοθεραπευτική εκπαίδευση στη Γνωστική Συμπεριφορική Προσέγγιση (CBT), στην Ελληνική Εταιρεία Έρευνας Συμπεριφοράς – Παράρτημα Μακεδονίας.":
    "I am a licensed psychologist, completing a four-year psychotherapy training in the Cognitive Behavioral approach (CBT) at the Hellenic Society for Behavioral Research – Macedonia Branch.",
  "Έχω αποκτήσει επαγγελματική εμπειρία μέσα από την παροχή ψυχολογικής υποστήριξης σε διαφορετικές πληθυσμιακές ομάδες, όπως ενήλικες, παιδιά και οικογένειες. Στο πλαίσιο της επαγγελματικής μου πορείας έχω εργαστεί και με ευάλωτες πληθυσμιακές ομάδες, μεταξύ των οποίων ασυνόδευτοι ανήλικοι και ενήλικες ή οικογένειες αιτούντων άσυλο, αποκτώντας εμπειρία στη διαχείριση διαφορετικών ψυχολογικών δυσκολιών και στην εφαρμογή κατάλληλων παρεμβάσεων.":
    "I have gained professional experience providing psychological support to different groups, such as adults, children and families. Over the course of my career I have also worked with vulnerable populations, including unaccompanied minors and adults or families of asylum seekers, gaining experience in addressing a range of psychological difficulties and applying appropriate interventions.",
  "Παράλληλα, έχω παρακολουθήσει επιμορφωτικά σεμινάρια και συνεχίζω να επενδύω στη διαρκή εκπαίδευση και επαγγελματική μου εξέλιξη.":
    "I have also attended training seminars, and I continue to invest in ongoing education and professional development.",
  "Πραγματοποιώ διαδικτυακές συνεδρίες με ενήλικες και εφήβους, στην ελληνική και αγγλική γλώσσα. Στόχος μου είναι να δημιουργώ ένα ασφαλές και υποστηρικτικό πλαίσιο, όπου κάθε άνθρωπος μπορεί να εκφραστεί ελεύθερα, να αισθανθεί ότι ακούγεται και να διερευνήσει όσα τον απασχολούν με σεβασμό, ενσυναίσθηση και αποδοχή.":
    "I offer online sessions to adults and teenagers, in Greek and English. My aim is to create a safe and supportive setting where every person can express themselves freely, feel heard, and explore what concerns them with respect, empathy and acceptance.",
  "Οι συνεδρίες με ενήλικες και εφήβους πραγματοποιούνται αποκλειστικά διαδικτυακά.":
    "Sessions with adults and teenagers take place exclusively online.",
  "Ψυχοθεραπεία Ενηλίκων": "Psychotherapy for Adults",
  "Ένας χώρος για να διερευνήσεις τις σκέψεις και τα συναισθήματά σου και να διαχειριστείς τις δυσκολίες που σε απασχολούν.":
    "A space to explore your thoughts and feelings and to manage the difficulties that concern you.",
  "Αποκλειστικά online": "Exclusively online",
  "Ψυχοθεραπεία Εφήβων": "Psychotherapy for Teenagers",
  "Υποστήριξη των εφήβων στην αναγνώριση και διαχείριση των συναισθημάτων και των προκλήσεων της καθημερινότητας.":
    "Support for teenagers in recognizing and managing their emotions and the challenges of everyday life.",
  "Συμβουλευτική Υποστήριξη Γονέων": "Parent Counseling Support",
  "Ένας χώρος για γονείς που επιθυμούν να κατανοήσουν καλύτερα τις ανάγκες των παιδιών τους και να ενισχύσουν την επικοινωνία μαζί τους.":
    "A space for parents who want to better understand their children's needs and strengthen communication with them.",
  "Διαδικτυακές συνεδρίες": "Online sessions",
  "Τα θετικά της διαδικτυακής θεραπείας": "The benefits of online therapy",
  "Ευελιξία στον προγραμματισμό των συνεδριών.": "Flexibility in scheduling sessions.",
  "Πρόσβαση από οποιαδήποτε περιοχή.": "Access from any location.",
  "Εξοικονόμηση χρόνου από τις μετακινήσεις.": "Time saved on travel.",
  "Δυνατότητα πραγματοποίησης της συνεδρίας από έναν οικείο και άνετο χώρο.":
    "The option to attend your session from a familiar, comfortable space.",
  "Ευκολότερη προσαρμογή της θεραπείας στην καθημερινότητα.":
    "Therapy that fits more easily into everyday life.",
  "Άνετος χώρος στο σπίτι για διαδικτυακή συνεδρία":
    "A comfortable space at home for an online session",
  "Άνετος χώρος στο σπίτι (placeholder)": "A comfortable space at home (placeholder)",
  "Πριν ξεκινήσουμε": "Before we begin",
  "Συχνές Ερωτήσεις": "Frequently Asked Questions",
  "Τι είναι η Γνωστική Συμπεριφορική Θεραπεία (CBT);":
    "What is Cognitive Behavioral Therapy (CBT)?",
  "Η Γνωστική Συμπεριφορική Θεραπεία είναι μια δομημένη, συνεργατική και επιστημονικά τεκμηριωμένη ψυχοθεραπευτική προσέγγιση. Εστιάζει στη σύνδεση ανάμεσα στις σκέψεις, τα συναισθήματα και τις συμπεριφορές μας, βοηθώντας στην αναγνώριση μοτίβων που μπορεί να επηρεάζουν την καθημερινότητά μας.":
    "Cognitive Behavioral Therapy is a structured, collaborative and scientifically supported psychotherapeutic approach. It focuses on the connection between our thoughts, feelings and behaviors, helping to identify patterns that may affect our everyday lives.",
  "Γιατί να επιλέξω τη διαδικτυακή θεραπεία;": "Why choose online therapy?",
  "Η διαδικτυακή θεραπεία προσφέρει ευελιξία και τη δυνατότητα πρόσβασης στην ψυχολογική υποστήριξη ανεξάρτητα από τον τόπο διαμονής. Παράλληλα, εξοικονομεί χρόνο από τις μετακινήσεις και επιτρέπει τη συμμετοχή στη συνεδρία από έναν οικείο και άνετο χώρο.":
    "Online therapy offers flexibility and access to psychological support regardless of where you live. It also saves travel time and lets you take part in the session from a familiar, comfortable space.",
  "Πώς πραγματοποιούνται οι διαδικτυακές συνεδρίες;": "How do online sessions work?",
  "Οι συνεδρίες πραγματοποιούνται μέσω κατάλληλης πλατφόρμας βιντεοκλήσης. Έχουν αντίστοιχη δομή και διάρκεια με τις δια ζώσης συνεδρίες και προϋποθέτουν έναν ιδιωτικό χώρο, όπου μπορείς να συμμετέχεις με άνεση και ασφάλεια.":
    "Sessions take place through a suitable video-call platform. They have the same structure and length as in-person sessions and require a private space where you can take part comfortably and safely.",
  "Πόση διάρκεια έχει μία συνεδρία;": "How long is a session?",
  "Η διάρκεια κάθε συνεδρίας είναι 50 λεπτά.": "Each session lasts 50 minutes.",
  "Κάθε πότε πραγματοποιούνται οι συνεδρίες;": "How often do sessions take place?",
  "Συνήθως οι συνεδρίες πραγματοποιούνται σε εβδομαδιαία βάση, καθώς η σταθερότητα και η συνέχεια συμβάλλουν στη θεραπευτική διαδικασία. Η συχνότητα μπορεί να προσαρμόζεται ανάλογα με τις ανάγκες και το αίτημα κάθε ατόμου.":
    "Sessions usually take place weekly, as consistency and continuity support the therapeutic process. The frequency can be adjusted to each person's needs and request.",
  "Ποια είναι η πολιτική ακυρώσεων;": "What is the cancellation policy?",
  "Σε περίπτωση που χρειαστεί να ακυρώσεις ή να μεταφέρεις μια συνεδρία, είναι σημαντικό να υπάρχει ενημέρωση όσο το δυνατόν νωρίτερα. Ακυρώσεις που πραγματοποιούνται σε διάστημα μικρότερο των 24 ωρών από την προγραμματισμένη συνεδρία χρεώνονται.":
    "If you need to cancel or reschedule a session, it is important to let me know as early as possible. Cancellations made less than 24 hours before the scheduled session are charged.",
  "Τι να περιμένω στην πρώτη συνεδρία;": "What should I expect in the first session?",
  "Η πρώτη συνεδρία αποτελεί μια ευκαιρία γνωριμίας. Θα συζητήσουμε για όσα σε απασχολούν, το αίτημα και τις προσδοκίες σου, ενώ θα έχεις την ευκαιρία να ενημερωθείς για τον τρόπο και το πλαίσιο της συνεργασίας μας.":
    "The first session is a chance to get to know each other. We will talk about what concerns you, your request and your expectations, and you will have the opportunity to learn about how we will work together and the framework of our collaboration.",
  "Τι γίνεται σε περίπτωση καθυστέρησης ή απουσίας;": "What happens if I am late or absent?",
  "Σε περίπτωση καθυστέρησης, η συνεδρία ολοκληρώνεται στην αρχικά προγραμματισμένη ώρα, περιορίζοντας αντίστοιχα τον διαθέσιμο χρόνο. Σε περίπτωση απουσίας ή ακύρωσης, εφαρμόζεται η πολιτική ακυρώσεων.":
    "If you are late, the session ends at the originally scheduled time, so the available time is shortened accordingly. In case of absence or cancellation, the cancellation policy applies.",
  "Τι ισχύει με την εμπιστευτικότητα;": "What about confidentiality?",
  "Η εμπιστευτικότητα αποτελεί θεμελιώδη αρχή της θεραπευτικής σχέσης. Οι πληροφορίες που μοιράζεσαι παραμένουν εμπιστευτικές, με τις εξαιρέσεις που προβλέπονται από τη νομοθεσία και τους επαγγελματικούς κανόνες δεοντολογίας, όπως σε περιπτώσεις σοβαρού κινδύνου.":
    "Confidentiality is a fundamental principle of the therapeutic relationship. The information you share remains confidential, with the exceptions provided by law and professional codes of ethics, such as in cases of serious risk.",
  "Επικοινώνησε μαζί μου.": "Get in touch.",
  "Για οποιαδήποτε πληροφορία ή για να προγραμματίσεις την πρώτη σου συνεδρία, μπορείς να επικοινωνήσεις μαζί μου. Θα χαρώ να απαντήσω στις ερωτήσεις σου.":
    "For any information, or to schedule your first session, you are welcome to contact me. I will be glad to answer your questions.",
  Τηλέφωνο: "Phone",
  Συνεδρίες: "Sessions",
  "Αποκλειστικά διαδικτυακά": "Exclusively online",
  "Λειτουργία demo.": "Demo mode.",
  "Η φόρμα δεν είναι ακόμη συνδεδεμένη με μηχανισμό αποστολής και δεν στέλνει μηνύματα.":
    "The form is not yet connected to a sending service and does not send messages.",
  "Παρακαλούμε μην συμπεριλαμβάνεις ευαίσθητες πληροφορίες υγείας σε αυτή τη φόρμα. Τα θέματα που σε απασχολούν θα τα συζητήσουμε στη συνεδρία.":
    "Please do not include sensitive health information in this form. We can talk about what concerns you in the session.",
  Ονοματεπώνυμο: "Full name",
  "(προαιρετικό)": "(optional)",
  Μήνυμα: "Message",
  "Αφήστε κενό": "Leave blank",
  "Έχω διαβάσει και αποδέχομαι την": "I have read and accept the",
  "Πολιτική Απορρήτου": "Privacy Policy",
  "Αποστολή μηνύματος": "Send message",
  "Η ψυχική φροντίδα είναι ένα ταξίδι, όχι ένας προορισμός.":
    "Caring for your mind is a journey, not a destination.",
  Ψυχολόγος: "Psychologist",
  "Συνεδρίες αποκλειστικά διαδικτυακά": "Sessions exclusively online",
  "Τηλέφωνο:": "Phone:",
  "Email:": "Email:",
  Πληροφορίες: "Information",
  "Όροι Χρήσης": "Terms of Use",
  ". Με επιφύλαξη παντός δικαιώματος.": ". All rights reserved.",
  "Εδώ θα εμφανιστεί το πλήρες κείμενο, αφού διατυπωθεί και ελεγχθεί από τον/την ψυχολόγο ή νομικό σύμβουλο (π.χ. ανάγκες GDPR για την επεξεργασία προσωπικών δεδομένων).":
    "The full text will appear here once it has been drafted and reviewed by the psychologist or a legal advisor (e.g. GDPR requirements for processing personal data).",
  Κλείσιμο: "Close",
  "Αποστολή…": "Sending…",
  "Η φόρμα βρίσκεται σε λειτουργία demo: το μήνυμά σου δεν έχει σταλεί. Μέχρι να συνδεθεί, χρησιμοποίησε το τηλέφωνο ή το email που εμφανίζονται στη σελίδα.":
    "The form is in demo mode: your message has not been sent. Until it is connected, please use the phone number or email shown on this page.",
  "Το μήνυμά σου εστάλη. Θα επικοινωνήσω μαζί σου σύντομα.":
    "Your message has been sent. I will get back to you soon.",
  "Το μήνυμα δεν στάλθηκε. Δοκίμασε ξανά ή επικοινώνησε τηλεφωνικά.":
    "The message was not sent. Please try again or get in touch by phone.",
  "Το μήνυμα δεν στάλθηκε. Έλεγξε τη σύνδεσή σου και δοκίμασε ξανά.":
    "The message was not sent. Please check your connection and try again.",
  "Ψυχολογική υποστήριξη και ψυχοθεραπευτική προσέγγιση αποκλειστικά διαδικτυακά, για ενήλικες και εφήβους, στα ελληνικά και στα αγγλικά.":
    "Psychological support and a psychotherapeutic approach exclusively online, for adults and teenagers, in Greek and English.",
  "Online ψυχολογική υποστήριξη": "Online psychological support",
  "Αν βρίσκεστε σε άμεσο κίνδυνο, καλέστε το 112 ή το 166. Η γραμμή 1018 λειτουργεί όλο το εικοσιτετράωρο.":
    "If you are in immediate danger, call 112 or 166. The 1018 line is open all day and night.",
  "Μετάβαση στο περιεχόμενο": "Skip to content",
};

function t(s) {
  return lang === "en" && EN[s] ? EN[s] : s;
}

(function () {
  document.querySelectorAll("[data-field]").forEach(function (el) {
    var value = CONFIG[el.dataset.field];
    if (value) {
      el.textContent = value;
      el.classList.remove("ph");
    }
  });

  document.querySelectorAll("[data-slot]").forEach(function (fig) {
    var src = CONFIG.images[fig.dataset.slot];
    if (!src) return;
    var img = document.createElement("img");
    img.src = src;
    img.alt = fig.dataset.alt || "";
    img.loading = "lazy";
    fig.replaceChildren(img);
  });

  if (CONFIG.formEndpoint) {
    var note = document.getElementById("demo-note");
    if (note) note.hidden = true;
  }

  document.getElementById("year").textContent = String(new Date().getFullYear());

  var menuBtn = document.getElementById("menu-btn");
  var panel = document.getElementById("nav-panel");
  function setMenu(open) {
    panel.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? (lang === "en" ? "Close menu" : "Κλείσιμο μενού") : t("Άνοιγμα μενού"));
  }
  menuBtn.addEventListener("click", function () {
    setMenu(!panel.classList.contains("open"));
  });
  panel.addEventListener("click", function (event) {
    if (event.target.closest("a")) setMenu(false);
  });

  var dialog = document.getElementById("legal");
  var titles = { privacy: "Πολιτική Απορρήτου", terms: "Όροι Χρήσης" };
  document.querySelectorAll("[data-legal]").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      document.getElementById("legal-title").textContent = t(titles[button.dataset.legal]);
      if (dialog.showModal) dialog.showModal();
      else dialog.setAttribute("open", "");
    });
  });
  document.getElementById("legal-close").addEventListener("click", function () {
    if (dialog.close) dialog.close();
    else dialog.removeAttribute("open");
  });

  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  function show(message, cls) {
    status.className = cls;
    status.textContent = t(message);
  }
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (form.website.value) return;
    if (!CONFIG.formEndpoint) {
      show(
        "Η φόρμα βρίσκεται σε λειτουργία demo: το μήνυμά σου δεν έχει σταλεί. Μέχρι να συνδεθεί, χρησιμοποίησε το τηλέφωνο ή το email που εμφανίζονται στη σελίδα.",
        "is-demo"
      );
      return;
    }
    show("Αποστολή…", "");
    fetch(CONFIG.formEndpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    })
      .then(function (response) {
        if (response.ok) {
          show("Το μήνυμά σου εστάλη. Θα επικοινωνήσω μαζί σου σύντομα.", "is-ok");
          form.reset();
        } else {
          show("Το μήνυμα δεν στάλθηκε. Δοκίμασε ξανά ή επικοινώνησε τηλεφωνικά.", "is-error");
        }
      })
      .catch(function () {
        show("Το μήνυμα δεν στάλθηκε. Έλεγξε τη σύνδεσή σου και δοκίμασε ξανά.", "is-error");
      });
  });

  var textOrig = new Map();
  var attrOrig = new Map();
  var metaOrig = {};
  var langBtn = document.getElementById("lang-btn");
  var metaSel = {
    description: 'meta[name="description"]',
    ogt: 'meta[property="og:title"]',
    ogd: 'meta[property="og:description"]',
  };

  function applyLang(next) {
    lang = next;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentNode ? node.parentNode.nodeName : "";
        if (parent === "SCRIPT" || parent === "STYLE") return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
    });
    var node;
    while ((node = walker.nextNode())) {
      if (!textOrig.has(node)) textOrig.set(node, node.nodeValue);
      var original = textOrig.get(node);
      var key = (node.parentNode.dataset && node.parentNode.dataset.k) || original.trim();
      node.nodeValue = next === "en" && EN[key] ? original.replace(original.trim(), EN[key]) : original;
    }
    document.querySelectorAll("[aria-label],[data-alt]").forEach(function (el) {
      var record = attrOrig.get(el) || {};
      ["aria-label", "data-alt"].forEach(function (attr) {
        if (!el.hasAttribute(attr)) return;
        if (!(attr in record)) record[attr] = el.getAttribute(attr);
        el.setAttribute(attr, next === "en" && EN[record[attr]] ? EN[record[attr]] : record[attr]);
      });
      attrOrig.set(el, record);
    });
    Object.keys(metaSel).forEach(function (key) {
      var meta = document.querySelector(metaSel[key]);
      if (!meta) return;
      if (!(key in metaOrig)) metaOrig[key] = meta.getAttribute("content");
      meta.setAttribute("content", next === "en" && EN[metaOrig[key]] ? EN[metaOrig[key]] : metaOrig[key]);
    });
    if (!("title" in metaOrig)) metaOrig.title = document.title;
    document.title = next === "en" && EN[metaOrig.title] ? EN[metaOrig.title] : metaOrig.title;
    document.documentElement.lang = next;
    langBtn.textContent = next === "en" ? "EL" : "EN";
    langBtn.setAttribute("lang", next === "en" ? "el" : "en");
    status.className = "";
    status.textContent = "";
    try {
      localStorage.setItem("paper-lang", next);
    } catch (error) {}
  }

  langBtn.addEventListener("click", function () {
    applyLang(lang === "en" ? "el" : "en");
  });
  var saved = null;
  try {
    saved = localStorage.getItem("paper-lang");
  } catch (error) {}
  if (saved === "en") applyLang("en");
})();
