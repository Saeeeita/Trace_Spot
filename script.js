document.addEventListener('DOMContentLoaded', () => {
    // Diccionario de traducciones para múltiples idiomas
    const translations = {
        es: {
            name: "Español",
            flag: "es", // Código de bandera ISO 3166-1 alpha-2
            title: "La forma inteligente de mantener tus cosas seguras.",
            description: "Rastrea tus objetos de valor, mascotas y seres queridos con la tecnología más avanzada.",
            getStarted: "EMPEZAR",
            alreadyAccount: "YA TENGO UNA CUENTA",
            dividerPhrase: "Nunca pierdas lo que más te gusta" // Nueva frase
        },
        en: {
            name: "English",
            flag: "gb", // Usamos 'gb' para la bandera del Reino Unido, o 'us' para Estados Unidos
            title: "The smart way to keep your things safe.",
            description: "Track your valuables, pets, and loved ones with the most advanced technology.",
            getStarted: "GET STARTED",
            alreadyAccount: "I ALREADY HAVE AN ACCOUNT",
            dividerPhrase: "Never lose what you love most" // Nueva frase
        },
        fr: {
            name: "Français",
            flag: "fr",
            title: "Le moyen intelligent de garder vos affaires en sécurité.",
            description: "Suivez vos objetos de valor, animaux de compagnie et proches con la tecnología la plus avancée.",
            getStarted: "COMMENCER",
            alreadyAccount: "J'AI DÉJÀ UN COMPTE",
            dividerPhrase: "Ne perdez jamais ce que vous aimez le plus" // Nueva frase
        },
        de: {
            name: "Deutsch",
            flag: "de",
            title: "Der inteligente Weg, Ihre Sachen sicher zu halten.",
            description: "Verfolgen Sie Ihre Wertsachen, Haustiere y Lieben con la fortschrittlichsten Tecnología.",
            getStarted: "LOS GEHT'S",
            alreadyAccount: "ICH HABE BEREITS EIN KONTO",
            dividerPhrase: "Verlieren Sie niemals, was Sie am meisten lieben" // Nueva frase
        },
        pt: {
            name: "Português",
            flag: "pt",
            title: "A maneira inteligente de manter suas cosas seguras.",
            description: "Rastree seus objetos de valor, animales domesticos e pessoas care con la tecnología más avançada.",
            getStarted: "COMEÇAR",
            alreadyAccount: "JÁ TENHO UMA CONTA",
            dividerPhrase: "Nunca perca o que você mais ama" // Nueva frase
        },
        it: {
            name: "Italiano",
            flag: "it",
            title: "Il modo intelligente per tenere al sicuro le tue cose.",
            description: "Traccia i tuoi objetos de valor, animales domesticos e persone care con la tecnología più avanzata.",
            getStarted: "INIZIA",
            alreadyAccount: "HO GIÀ UN ACCOUNT",
            dividerPhrase: "Non perdere mai ciò que ami di più" // Nueva frase
        }
        // Puedes añadir más idiomas aquí
    };

    // Elementos HTML
    const htmlElement = document.documentElement;
    const langToggleButton = document.getElementById('lang-toggle-button');
    const currentFlag = document.getElementById('current-flag');
    const currentLangName = document.getElementById('current-lang-name');
    const languageDropdown = document.getElementById('language-dropdown');
    const dropdownContent = languageDropdown.querySelector('.py-1'); // El div que contiene los ítems
    const pageTitle = document.getElementById('page-title');
    const pageDescription = document.getElementById('page-description');
    const getStartedButton = document.getElementById('get-started-button');
    const alreadyHaveAccountButton = document.getElementById('already-have-account-button');
    const dividerText = document.getElementById('divider-text'); // Nuevo elemento

    // Función para actualizar el contenido de la página
    function updateContent(langCode) {
        // Guarda el idioma seleccionado en localStorage para persistencia
        localStorage.setItem('selectedLanguage', langCode);

        // Actualiza el atributo lang de la etiqueta <html>
        htmlElement.lang = langCode;

        // Actualiza el contenido de los elementos principales
        pageTitle.textContent = translations[langCode].title;
        pageDescription.textContent = translations[langCode].description;
        getStartedButton.textContent = translations[langCode].getStarted;
        alreadyHaveAccountButton.textContent = translations[langCode].alreadyAccount;
        dividerText.textContent = translations[langCode].dividerPhrase; // Actualiza la nueva frase

        // Actualiza la bandera y el nombre en el botón de toggle
        currentFlag.src = `https://flagcdn.com/w20/${translations[langCode].flag}.png`;
        currentFlag.alt = `Bandera de ${translations[langCode].name}`;
        currentLangName.textContent = translations[langCode].name;

        // Actualiza la clase 'active' en los ítems del dropdown
        document.querySelectorAll('.language-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.lang === langCode) {
                item.classList.add('active');
            }
        });
    }

    // Función para poblar el menú desplegable
    function populateDropdown() {
        dropdownContent.innerHTML = ''; // Limpiar contenido existente
        for (const langCode in translations) {
            const langData = translations[langCode];
            const div = document.createElement('div');
            div.classList.add('language-item');
            div.setAttribute('role', 'menuitem');
            div.setAttribute('tabindex', '-1'); // Para accesibilidad de teclado
            div.dataset.lang = langCode; // Almacenar el código de idioma en el dataset

            div.innerHTML = `
                <img src="https://flagcdn.com/w20/${langData.flag}.png" alt="Bandera de ${langData.name}" class="w-5 h-5 rounded-full">
                <span>${langData.name}</span>
            `;

            div.addEventListener('click', () => {
                updateContent(langCode);
                languageDropdown.classList.add('hidden'); // Ocultar el dropdown al seleccionar
            });
            dropdownContent.appendChild(div);
        }
    }

    // Toggle de visibilidad del menú desplegable
    langToggleButton.addEventListener('click', () => {
        languageDropdown.classList.toggle('hidden');
    });

    // Ocultar el menú desplegable al hacer clic fuera
    document.addEventListener('click', (event) => {
        if (!languageDropdown.contains(event.target) && !langToggleButton.contains(event.target)) {
            languageDropdown.classList.add('hidden');
        }
    });

    // Inicializar: poblar el dropdown y establecer el idioma inicial
    populateDropdown();
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        updateContent(savedLanguage);
    } else {
        updateContent('es'); // Idioma por defecto si no hay nada guardado
    }
});
