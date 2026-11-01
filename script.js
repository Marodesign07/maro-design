document.addEventListener("DOMContentLoaded", function () {
    const whatsappNumber = "201145436737";
    const emailAddress = "m.amr88ali@gmail.com";

    // تحديث سنة الفوتر تلقائيًا
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // تجهيز رابط واتساب برسالة
    function openWhatsApp(message) {
        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    }

    // التعامل مع الضغط على أزرار الطلب
    document.addEventListener("click", function (event) {
        const target = event.target;

        if (!(target instanceof Element)) return;

        // طلب لوجو محدد (من صفحة المعرض)
        const designButton = target.closest(
            ".order-button[data-design]"
        );

        if (designButton) {
            event.preventDefault();

            const designName = designButton.dataset.design;

            openWhatsApp(
                `مرحبًا، عايز أطلب ${designName} من معرض MARO DESIGN. ` +
                "ممكن أعرف التفاصيل ومدة التنفيذ؟"
            );

            return;
        }

        // طلب إحدى الخدمات (من الصفحة الرئيسية)
        const serviceButton = target.closest(
            ".order-button[data-service]"
        );

        if (serviceButton) {
            event.preventDefault();

            const serviceName = serviceButton.dataset.service;

            openWhatsApp(
                `مرحبًا، عايز أطلب خدمة ${serviceName} من MARO DESIGN. ` +
                "ممكن أعرف التفاصيل ومدة التنفيذ؟"
            );
        }
    });

    // زر التواصل الأساسي
    const contactButton = document.getElementById("contact-button");

    if (contactButton) {
        contactButton.href = `https://wa.me/${whatsappNumber}`;
        contactButton.target = "_blank";
        contactButton.rel = "noopener noreferrer";
    }

    // روابط البريد الإلكتروني عبر Gmail
    const emailLinks = document.querySelectorAll(
        'a[href^="https://mail.google.com/mail/"]'
    );

    emailLinks.forEach(function (link) {
        link.href =
            "https://mail.google.com/mail/?view=cm&fs=1&to=" +
            encodeURIComponent(emailAddress);
    });
});
