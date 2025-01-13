const translations = {
    en: {
        language: "Language",
        home: "Home",
        catalog: "Catalog",
        about: "About",
        location: "Location",
        contact: "Contacts",
        title: "Crumbs of Love",
        description:
            "Every crumb tells a story, every bite is full of love.<br> Enjoy the delight of our cakes made with heart, just for you.<br> Discover warmth and sweetness in every moment with us.",
        button_catalog: "Check Our Menu",
        catalog_heading: "Find Your Favorite Delicacies",
        catalog_subheading: "We offer a variety of cakes and drinks made with love",
        menu_cupcake_title: "Classic Vanilla Cupcake",
        menu_cupcake_description: "Soft cupcake with sweet vanilla frosting.",
        menu_cupcake_price: "$2.00",
        menu_cheesecake_title: "New York Cheesecake",
        menu_cheesecake_description: "Classic cheesecake with fresh fruit topping.",
        menu_cheesecake_price: "$3.00",
        about_text:
            "Crumbs of Love comes from our passion for cakes and the happiness that can be shared through sweetness.<br> Since 2023, we have been committed to creating cakes with the best ingredients and love in every bite.",
        address: "📍 Jl. Mawar No. 12, Denpasar, Bali",
        phone: "📞 +62 812 3456 7890",
        email: "📧 info@crumbsoflove.com",
        hours_heading: "Opening Hours:",
        weekdays: "Monday - Friday: 08:00 - 20:00",
        weekends: "Saturday - Sunday: 09:00 - 22:00",
        follow_us: "Follow us:",
        rights: "All rights reserved."
    },
    id: {
        language: "Bahasa",
        home: "Beranda",
        catalog: "Katalog",
        about: "Tentang",
        location: "Lokasi",
        contact: "Kontak",
        title: "Crumbs of Love",
        description:
            "Setiap remah membawa cerita, setiap gigitan penuh cinta.<br> Nikmati kelezatan kue-kue kami yang dibuat dengan hati, khusus untuk Anda.<br> Temukan kehangatan dan rasa manis dalam setiap momen bersama kami.",
        button_catalog: "Cek Menu Kami",
        catalog_heading: "Temukan Kelezatan Favoritmu",
        catalog_subheading: "Kami menyajikan berbagai pilihan kue dan minuman yang dibuat dengan cinta",
        menu_cupcake_title: "Cupcake Vanila Klasik",
        menu_cupcake_description: "Cupcake lembut dengan frosting vanila manis.",
        menu_cupcake_price: "Rp25.000",
        menu_cheesecake_title: "Cheesecake New York",
        menu_cheesecake_description: "Kue keju klasik dengan topping buah segar.",
        menu_cheesecake_price: "Rp45.000",
        about_text:
            "Crumbs of Love hadir dari cinta kami terhadap kue dan kebahagiaan yang bisa dibagi melalui rasa manis.<br> Sejak 2023, kami berkomitmen untuk menciptakan kue dengan bahan terbaik dan cinta di setiap gigitan.",
        address: "📍 Jl. Mawar No. 12, Denpasar, Bali",
        phone: "📞 +62 812 3456 7890",
        email: "📧 info@crumbsoflove.com",
        hours_heading: "Jam Operasional:",
        weekdays: "Senin - Jumat: 08.00 - 20.00",
        weekends: "Sabtu - Minggu: 09.00 - 22.00",
        follow_us: "Ikuti kami:",
        rights: "Hak cipta dilindungi."
    }
};

function changeLanguage(language) {
    console.log("Changing language to:", language);
    if (!translations[language]) {
        console.error("Language not supported:", language);
        return;
    }

    localStorage.setItem("selectedLanguage", language);
    const elementsToTranslate = document.querySelectorAll("[data-translate]");
    console.log("Elements to translate:", elementsToTranslate);

    elementsToTranslate.forEach((element) => {
        const key = element.getAttribute("data-translate");
        console.log("Translating key:", key);
        if (translations[language][key]) {
            element.innerHTML = translations[language][key];
            console.log("Translated text:", translations[language][key]);
        }
    });
}

function loadSavedLanguage() {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "id";
    console.log("Loaded saved language:", savedLanguage);
    changeLanguage(savedLanguage);
}


document.addEventListener("DOMContentLoaded", loadSavedLanguage);
