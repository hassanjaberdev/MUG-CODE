// ===============================
// Language System
// ===============================

// Translation object
const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "خدماتنا",
    nav_portfolio: "أعمالنا",
    nav_blog: "المدونة",
    nav_contact: "اتصل بنا",

    btn_order: "اطلب مشروعك",
    btn_whatsapp: "واتساب",
    btn_start: "ابدأ الآن",
    btn_send: "إرسال الرسالة",
    read_more: "اقرأ المزيد",

    hero_title: "نمنح علامتك التجارية أفقاً جديداً للنمو والتميز",
    hero_desc:
      "نُبدع لنرتقي بمشروعك خطوة بخطوة، نصنع حلولًا رقمية تلائمك وتبرز هويتك بوضوح.",

    modal_title: "طلب تنفيذ مشروع",
    modal_subtitle: "املأ البيانات التالية لنبدأ في تنفيذ مشروعك",

    modal_fullname: "الاسم الكامل",
    modal_email: "البريد الإلكتروني",
    modal_phone: "رقم الهاتف",
    modal_project_type: "نوع المشروع",
    modal_budget: "الميزانية المتوقعة",
    modal_deadline: "مدة التسليم المتوقعة",
    modal_message: "اكتب تفاصيل المشروع",
    modal_send: "إرسال الطلب",

    option_choose: "اختر نوع المشروع",
    option_web: "موقع ويب",
    option_store: "متجر إلكتروني",
    option_app: "تطبيق جوال",
    option_uiux: "تصميم UI/UX",
    option_marketing: "تسويق رقمي",
    option_branding: "تصميم هوية",
    option_other: "أخرى",

    option_budget: "الميزانية المتوقعة",
    budget_1: "أقل من 300$",
    budget_2: "300$ - 800$",
    budget_3: "800$ - 1500$",
    budget_4: "1500$ - 3000$",
    budget_5: "أكثر من ذلك",

    option_deadline: "مدة التسليم المتوقعة",
    deadline_1: "أسبوع",
    deadline_2: "أسبوعين",
    deadline_3: "شهر",
    deadline_4: "غير محدد",

    stat_happy: "عميل سعيد",
    stat_projects: "مشروع مكتمل",
    stat_awards: "جائزة",
    stat_years: "سنوات خبرة",

    about_title: "نبذة عنا",
    about_sub:
      "نحن فريق من المبدعين والمطورين المتخصصين في تقديم حلول برمجية مبتكرة",
    about_heading: "نبني المستقبل معاً",
    about_p1: "نحن شركة رائدة في مجال تطوير البرمجيات...",
    about_p2: "فريقنا المتخصص يعمل بشغف ...",
    about_img_alt: "صورة فريق العمل",

    services_title: "خدماتنا",
    services_sub: "نقدم مجموعة شاملة من الخدمات التقنية",

    service_mobile: "تطوير تطبيقات الجوال",
    service_mobile_p: "نصمم ونطور تطبيقات جوال احترافية...",

    service_web: "تطوير المواقع",
    service_web_p: "نبني مواقع ويب متجاوبة وسريعة...",

    proj_pm_title: "تطبيق إدارة المشاريع",
    proj_pm_desc: "تطبيق شامل لإدارة المشاريع والفرق",
    proj_ecom_title: "منصة التجارة الإلكترونية",
    proj_ecom_desc: "متجر إلكتروني متكامل بميزات متقدمة",
    proj_cms_title: "نظام إدارة المحتوى",
    proj_cms_desc: "نظام CMS مخصص للمؤسسات الكبيرة",
    proj_brand_title: "هوية بصرية متكاملة",
    proj_brand_desc: "تصميم شعار وهوية بصرية لشركة ناشئة",
    proj_ad_title: "حملة إعلانية رقمية",
    proj_ad_desc: "حملة تسويقية متكاملة على منصات التواصل",
    proj_social_title: "إدارة حسابات التواصل",
    proj_social_desc: "إدارة كاملة لحسابات شركة على وسائل التواصل",
    proj_social_tag1: "إنشاء المحتوى",
    proj_social_tag2: "التحليلات",

    service_ui: "تصميم UI/UX",
    service_ui_p: "نصمم واجهات مستخدم جذابة...",

    service_cloud: "الحلول السحابية",
    service_cloud_p: "حلول متقدمة لإدارة بياناتك...",

    service_data: "تحليل البيانات",
    service_data_p: "نساعدك في تحليل بياناتك...",

    service_security: "الأمن السيبراني",
    service_security_p: "نحمي أنظمتك من التهديدات...",

    portfolio_title: "أعمالنا",
    portfolio_sub: "تعرف على بعض المشاريع التي نفذناها",

    filter_all: "الكل",
    filter_graphic: "التصميم الجرافيكي",
    filter_web: "برمجة المواقع",
    filter_app: "برمجة التطبيقات",
    filter_marketing: "التسويق الرقمي",
    filter_social: "إدارة الصفحات",
    filter_video: "الإنتاج المرئي",

    testimonials_title: "ماذا يقول عملاؤنا",
    testimonials_subtitle: "آراء عملائنا الكرام",

    testimonial1_text:
      " تجربة رائعة من البداية للنهاية، احترافية في التعامل وجودة في التنفيذ تفوقت على توقعاتنا.",
    testimonial1_name: "فهد بن عبدالله القحطاني",
    testimonial1_role: "المدير التنفيذي – شركة الركن الذهبي",

    testimonial2_text:
      "فريق متعاون وملتزم بالمواعيد، قدّم لنا مشروعًا متكاملًا بأفضل جودة ممكنة وبأسلوب عمل مريح.",
    testimonial2_name: "ريم بنت ناصر العتيبي",
    testimonial2_role: "مديرة مشروع",

    testimonial3_text:
      "خدمة ممتازة ودعم فني متواصل حتى بعد التسليم. شكراً لكم.",
    testimonial3_name: "خالد يوسف",
    testimonial3_role: "رائد أعمال",

    testimonial4_text:
      "سرعة في الإنجاز وإتقان في العمل، أنصح بالتعامل معهم لكل من يبحث عن نتائج مضمونة.",
    testimonial4_name: "خالد بن فهد الدوسري",
    testimonial4_role: "رئيس قسم التقنية",

    testimonial5_text:
      "حلول عملية وأفكار إبداعية ساعدتنا على تطوير مشروعنا وتقديمه للجمهور بأفضل صورة.",
    testimonial5_name: "رانيا خضر الزبن",
    testimonial5_role: "شركة سما الرقمية",

    blog_title: "المدونة",
    blog_sub: "أحدث المقالات والأخبار التقنية",

    blog1_date: "15 نوفمبر 2024",
    blog1_author: "أحمد محمد",
    blog1_title: "مستقبل الذكاء الاصطناعي",
    blog1_excerpt: "كيف سيغير الذكاء الاصطناعي طريقة تطوير التطبيقات ...",

    blog2_date: "10 نوفمبر 2024",
    blog2_author: "سارة علي",
    blog2_title: "أفضل ممارسات تصميم الواجهات",
    blog2_excerpt: "دليل شامل لتصميم واجهات مستخدم جذابة ...",

    blog3_date: "5 نوفمبر 2024",
    blog3_author: "خالد يوسف",
    blog3_title: "الأمن السيبراني للشركات الناشئة",
    blog3_excerpt: "نصائح مهمة لحماية بيانات شركتك ...",

    contact_title: "تواصل معنا",
    contact_sub: "نسعد بالرد على استفساراتك",
    contact_info: "معلومات التواصل",
    contact_address_title: "العنوان",
    contact_address: "غزة –  فلسطين ",
    contact_phone_title: "الهاتف",
    contact_email_title: "البريد الإلكتروني",
    contact_hours_title: "ساعات العمل",
    contact_hours: "الأحد - الخميس: 9:00 ص - 6:00 م",
    contact_send: "أرسل لنا رسالة",

    ph_fullname: "الاسم الكامل",
    ph_email: "البريد الإلكتروني",
    ph_phone: "رقم الهاتف",
    ph_subject: "الموضوع",
    ph_message: "رسالتك",

    footer_slogan: "Innovative Solutions",
    footer_desc: "نحن شركة رائدة في تطوير البرمجيات والحلول التقنية المبتكرة.",

    footer_company: "الشركة",
    footer_about: "من نحن",
    footer_services: "خدماتنا",
    footer_portfolio: "أعمالنا",
    footer_contact: "اتصل بنا",
    footer_jobs: "وظائف",

    footer_services_title: "الخدمات",
    footer_service_app: "تطوير التطبيقات",
    footer_service_web: "تطوير المواقع",
    footer_service_uiux: "تصميم UI/UX",
    footer_service_cloud: "الحلول السحابية",
    footer_service_security: "الأمن السيبراني",

    footer_support: "الدعم",
    footer_help: "المساعدة",
    footer_faq: "الأسئلة الشائعة",
    footer_privacy: "سياسة الخصوصية",
    footer_terms: "الشروط والأحكام",
    footer_docs: "التوثيق",

    footer_follow: "تابعنا",
    footer_blog: "المدونة",
    footer_news: "الأخبار",
    footer_events: "الفعاليات",
    footer_partners: "الشركاء",
    footer_suppliers: "الموردين",

    footer_rights: "جميع الحقوق محفوظة",
  },

  // =============================
  // English Translation
  // =============================
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_blog: "Blog",
    nav_contact: "Contact",

    btn_order: "Order Project",
    btn_whatsapp: "WhatsApp",
    btn_start: "Get Started",
    btn_send: "Send Message",
    read_more: "Read More",

    hero_title: "We take your brand to a new horizon of growth and excellence",
    hero_desc:
      "We create digital solutions tailored to your needs, transforming your ideas into powerful experiences.",

    modal_title: "Start Your Project",
    modal_subtitle: "Fill in the details below and we will start immediately",

    modal_fullname: "Full Name",
    modal_email: "Email Address",
    modal_phone: "Phone Number",
    modal_project_type: "Project Type",
    modal_budget: "Estimated Budget",
    modal_deadline: "Delivery Timeline",
    modal_message: "Project Details",
    modal_send: "Submit Request",

    option_choose: "Select Project Type",
    option_web: "Website",
    option_store: "E-Commerce Store",
    option_app: "Mobile App",
    option_uiux: "UI/UX Design",
    option_marketing: "Digital Marketing",
    option_branding: "Branding",
    option_other: "Other",

    option_budget: "Estimated Budget",
    budget_1: "Less than $300",
    budget_2: "$300 - $800",
    budget_3: "$800 - $1500",
    budget_4: "$1500 - $3000",
    budget_5: "More than that",

    option_deadline: "Delivery Deadline",
    deadline_1: "One Week",
    deadline_2: "Two Weeks",
    deadline_3: "One Month",
    deadline_4: "Not Specified",

    stat_happy: "Happy Clients",
    stat_projects: "Completed Projects",
    stat_awards: "Awards",
    stat_years: "Years of Experience",

    about_title: "About Us",
    about_sub:
      "We are a team of developers and creatives offering innovative software solutions.",
    about_heading: "Building the Future Together",
    about_p1:
      "We are a leading software company that provides modern and effective solutions...",
    about_p2:
      "Our team works passionately to turn your ideas into successful digital products.",
    about_img_alt: "Team Image",

    services_title: "Our Services",
    services_sub: "A comprehensive list of digital solutions we provide",

    service_mobile: "Mobile App Development",
    service_mobile_p: "We design and build high-quality mobile apps...",

    service_web: "Website Development",
    service_web_p: "We build fast, responsive, modern websites...",

    service_ui: "UI/UX Design",
    service_ui_p: "We design beautiful user interfaces...",

    service_cloud: "Cloud Solutions",
    service_cloud_p: "Advanced secure cloud solutions...",

    service_data: "Data Analysis",
    service_data_p: "We help you extract insights from your data...",

    service_security: "Cybersecurity",
    service_security_p: "We protect your systems from cyber threats...",

    portfolio_title: "Our Work",
    portfolio_sub: "A look at some of the projects we’ve delivered",

    proj_pm_title: "Project Management App",
    proj_pm_desc: "A comprehensive app to manage projects and teams",
    proj_ecom_title: "E-commerce Platform",
    proj_ecom_desc: "A full-featured online store with advanced features",
    proj_cms_title: "Content Management System",
    proj_cms_desc: "A custom CMS for large organizations",
    proj_brand_title: "Complete Visual Identity",
    proj_brand_desc: "Logo and visual identity design for a startup",
    proj_ad_title: "Digital Advertising Campaign",
    proj_ad_desc: "A complete marketing campaign across social media platforms",
    proj_social_title: "Social Media Management",
    proj_social_desc: "Full management of a company's social media accounts",
    proj_social_tag1: "Content Creation",
    proj_social_tag2: "Analytics",

    filter_all: "All",
    filter_graphic: "Graphic Design",
    filter_web: "Web Development",
    filter_app: "App Development",
    filter_marketing: "Digital Marketing",
    filter_social: "Social Media",
    filter_video: "Video Production",

    testimonials_title: "What Our Clients Say",
    testimonials_subtitle: "Clients' Testimonials",

    testimonial1_text:
      "A wonderful experience from start to finish, with professionalism and execution quality that exceeded our expectations.",
    testimonial1_name: "Fahad Al-Qahtani",
    testimonial1_role: "CEO – Golden Corner Tech",

    testimonial2_text:
      "A cooperative team committed to deadlines, delivering a complete project with the best possible quality and a smooth workflow.",
    testimonial2_name: "Reem Al-Otaibi",
    testimonial2_role: "Project Manager",

    testimonial3_text:
      "Excellent service and continuous technical support even after delivery. Thank you.",
    testimonial3_name: "Khaled Youssef",
    testimonial3_role: "Entrepreneur",

    testimonial4_text:
      "Fast execution and excellent work quality. I highly recommend working with them for anyone seeking guaranteed results.",
    testimonial4_name: "Khaled Al-Dosari",
    testimonial4_role: "Head of Technology – Sanam Digital",

    testimonial5_text:
      "Practical solutions and creative ideas that helped us improve our project and present it to the public in the best possible way.",
    testimonial5_name: "Rania Khader",
    testimonial5_role: "Co-Founder – Sama Digital",

    blog_title: "Blog",
    blog_sub: "Latest tech articles and news",

    blog1_date: "Nov 15, 2024",
    blog1_author: "Ahmed Mohamed",
    blog1_title: "The Future of AI in Apps",
    blog1_excerpt:
      "How AI is transforming mobile app development, and what's coming next...",

    blog2_date: "Nov 10, 2024",
    blog2_author: "Sara Ali",
    blog2_title: "Best UI/UX Design Practices",
    blog2_excerpt:
      "A complete guide to designing beautiful and intuitive interfaces...",

    blog3_date: "Nov 5, 2024",
    blog3_author: "Khaled Youssef",
    blog3_title: "Cybersecurity for Startups",
    blog3_excerpt:
      "Important steps to protect your company from rising threats...",

    contact_title: "Contact Us",
    contact_sub: "We’re happy to assist you",
    contact_info: "Contact Information",
    contact_address_title: "Address",
    contact_address: "Gaza, Palestine",
    contact_phone_title: "Phone",
    contact_email_title: "Email",
    contact_hours_title: "Working Hours",
    contact_hours: "Sun - Thu: 9:00 AM - 6:00 PM",
    contact_send: "Send a Message",

    ph_fullname: "Full Name",
    ph_email: "Email",
    ph_phone: "Phone Number",
    ph_subject: "Subject",
    ph_message: "Message",

    footer_slogan: "Innovative Solutions",
    footer_desc:
      "We are a leading software company offering modern digital solutions.",

    footer_company: "Company",
    footer_about: "About",
    footer_services: "Services",
    footer_portfolio: "Portfolio",
    footer_contact: "Contact",
    footer_jobs: "Jobs",

    footer_services_title: "Services",
    footer_service_app: "App Development",
    footer_service_web: "Website Development",
    footer_service_uiux: "UI/UX Design",
    footer_service_cloud: "Cloud Solutions",
    footer_service_security: "Cybersecurity",

    footer_support: "Support",
    footer_help: "Help Center",
    footer_faq: "FAQ",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms & Conditions",
    footer_docs: "Documentation",

    footer_follow: "Follow Us",
    footer_blog: "Blog",
    footer_news: "News",
    footer_events: "Events",
    footer_partners: "Partners",
    footer_suppliers: "Suppliers",

    footer_rights: "All Rights Reserved",
  },
};

// =========================================
// APPLY TRANSLATION
// =========================================
function applyTranslation(lang) {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Translate placeholders
  document.querySelectorAll("[data-translate-placeholder]").forEach((input) => {
    const phKey = input.getAttribute("data-translate-placeholder");
    if (translations[lang][phKey]) {
      input.placeholder = translations[lang][phKey];
    }
  });

  // RTL / LTR Direction
  if (lang === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
    document.body.classList.add("rtl");
    document.body.classList.remove("ltr");

    // navbar align
    document.querySelector(".navbar-nav").classList.remove("me-auto");
    document.querySelector(".navbar-nav").classList.add("ms-auto");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
    document.body.classList.add("ltr");
    document.body.classList.remove("rtl");

    // navbar align
    document.querySelector(".navbar-nav").classList.remove("ms-auto");
    document.querySelector(".navbar-nav").classList.add("me-auto");
  }
}

// =========================================
// LANGUAGE BUTTON
// =========================================
const languageBtn = document.getElementById("languageBtn");
let currentLang = localStorage.getItem("siteLang") || "ar";

applyTranslation(currentLang);

languageBtn.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  localStorage.setItem("siteLang", currentLang);
  applyTranslation(currentLang);
});

// ============================ Start Navbar active link ============================
const links = document.querySelectorAll(".navbar a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    // remove active from all links
    links.forEach((l) => l.classList.remove("active"));

    // aad active to the clicked link
    this.classList.add("active");
  });
});
// ============================ End Navbar active link ============================

// Theme Toggle
// ---------------- Theme toggle (robust) ----------------
const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  // SVG fallbacks (in case some builds use SVG icons)
  const moonSVG =
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  const sunSVG =
    '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';

  // Read saved mode (default: dark)
  let isDarkMode = localStorage.getItem("site-mode") !== "light";

  // Apply initial mode + icon
  function applyMode(save = false) {
    if (isDarkMode) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }

    // try find <i> icon first, otherwise fallback to svg
    const iIcon = themeBtn.querySelector("i");
    const svgIcon = themeBtn.querySelector("svg");

    if (iIcon) {
      // ensure only one of the classes exists
      iIcon.classList.remove("fa-moon", "fa-sun");
      iIcon.classList.add(isDarkMode ? "fa-moon" : "fa-sun");
    } else {
      // replace innerHTML with appropriate svg
      themeBtn.innerHTML = isDarkMode ? moonSVG : sunSVG;
    }

    if (save) {
      localStorage.setItem("site-mode", isDarkMode ? "dark" : "light");
    }
  }

  // Toggle on click
  themeBtn.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    applyMode(true);
  });

  // run once on load
  applyMode(false);
}

// ============================ Start WhatsApp Button Scroll ============================
const callBtns = document.querySelectorAll("#callBtn, #whatsappBtn");
const scrollThreshold = 600; // Define the scroll position (600px)

// Listen for the scroll event on the entire window
window.addEventListener("scroll", () => {
  // Check the current vertical scroll position
  if (window.scrollY >= scrollThreshold) {
    // If scrolled past 600px, show all buttons
    callBtns.forEach((btn) => {
      btn.classList.add("show");
    });
  } else {
    // If scrolled back up, hide all buttons
    callBtns.forEach((btn) => {
      btn.classList.remove("show");
    });
  }
});
// ============================ End WhatsApp Button Scroll ============================

// Portfolio Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));
    // Add active class to clicked button
    this.classList.add("active");

    const filter = this.getAttribute("data-filter");

    portfolioCards.forEach((card) => {
      if (filter === "all") {
        card.classList.remove("hidden");
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
        }, 10);
      } else {
        if (card.getAttribute("data-category") === filter) {
          card.classList.remove("hidden");
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.8)";
          setTimeout(() => {
            card.classList.add("hidden");
          }, 300);
        }
      }
    });
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {

    const href = this.getAttribute("href");

    // 1) If link opens a modal → DO NOT smooth scroll
    if (this.hasAttribute("data-bs-toggle")) {
      return; // Bootstrap handles this
    }

    // 2) If href is "#" or empty → stop scroll & avoid JS error
    if (!href || href === "#") {
      e.preventDefault();
      return;
    }

    // 3) Now smooth scroll for valid section IDs
    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});


// Form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.");
  this.reset();
});

// Navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 14, 39, 0.95)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0)";
  }
});

// Stats counter animation
const animateValue = (element, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.innerHTML = Math.floor(progress * (end - start) + start) + "+";
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statCards = document.querySelectorAll(".stat-card h3");
        statCards.forEach((stat, index) => {
          const values = [500, 300, 50, 10];
          setTimeout(() => {
            animateValue(stat, 0, values[index], 2000);
          }, index * 200);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

const statsSection = document.querySelector(".stats-section");
if (statsSection) {
  statsObserver.observe(statsSection);
}

// Add animation on scroll for cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "0";
      entry.target.style.transform = "translateY(30px)";
      setTimeout(() => {
        entry.target.style.transition = "all 0.3s ease-out";
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }, 100);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".service-card, .portfolio-card").forEach((card) => {
  observer.observe(card);
});

//
var swiper = new Swiper(".mySwiper-testimonials", {
  loop: true,
  grabCursor: true,
  rtl: true,
  spaceBetween: 25,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1.3,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2.3,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// Focus first input when modal shown (Bootstrap 5)
const projectModalEl = document.getElementById("projectModal");
if (projectModalEl) {
  projectModalEl.addEventListener("shown.bs.modal", function () {
    const firstInput = projectModalEl.querySelector("input, textarea, select");
    if (firstInput) firstInput.focus();
  });
}
