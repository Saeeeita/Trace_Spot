document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        es: {
            name: "Español",
            flag: "es",
            title: "La forma inteligente de mantener tus cosas seguras.",
            description: "Rastrea tus objetos de valor, mascotas y seres queridos con la tecnología más avanzada.",
            getStarted: "EMPEZAR",
            alreadyAccount: "YA TENGO UNA CUENTA",
            dividerPhrase: "Nunca pierdas lo que más te gusta",
            section2Title: "Obtén la ruta más cercana",
            section2Text: "Gracias a tecnologías avanzadas de geolocalización y análisis en tiempo real, puedes encontrar la ruta más eficiente y segura con un clic. La herramienta no solo muestra el camino más corto, sino que calcula automáticamente el tiempo estimado de llegada, considerando factores como el tráfico, obras, clima y medio de transporte. Esto te permite tomar decisiones rápidas, ahorrar tiempo y viajar con confianza.",
            section3Title: "Verifica en todo tiempo donde estan tus pertenencias",
            section3Text: "Verifica en todo tiempo dónde están tus pertenencias. Nunca más te preocupes por perder algo valioso. Nuestro sistema te permite monitorear constantemente la ubicación de tus objetos, ofreciéndote una capa extra de seguridad y la capacidad de reaccionar rápidamente ante cualquier imprevisto.",
            section4Title: "Guarda todas tus direcciones en un solo lugar",
            section4Text: "Olvídate de la tediosa búsqueda y el ingreso repetitivo de datos. Nuestra plataforma te permite centralizar y organizar todas tus ubicaciones frecuentes, desde tu casa y oficina hasta los lugares más visitados. Accede a ellas instantáneamente con un solo clic, simplificando tu planificación, ahorrando tiempo y asegurando que siempre tengas a mano tus destinos importantes.",
            section5Title: "El dispositivo tiene diferentes funciones",
            section5Text: "Más allá de su avanzada capacidad de localización, este equipo te ofrece versatilidad para adaptarlo a tus necesidades. Activa su función de sonido para encontrar rápidamente tus objetos extraviados en casa, o elige la vibración discreta para recibir alertas sin molestar. Estas opciones te brindan un control total y una experiencia personalizada en cada situación.",
            section6Title: "Todos tus datos estan totalmente protegidos",
            section6Text: "Tu privacidad y seguridad son nuestra máxima prioridad. Implementamos las más robustas medidas de cifrado y protocolos de seguridad avanzados para garantizar que tu información personal y tus ubicaciones permanezcan siempre confidenciales y a salvo de accesos no autorizados. Con nosotros, tienes la tranquilidad de que tu privacidad está resguardada en todo momento.",
        },
        en: {
            name: "English",
            flag: "gb",
            title: "The smart way to keep your things safe.",
            description: "Track your valuables, pets, and loved ones with the most advanced technology.",
            getStarted: "GET STARTED",
            alreadyAccount: "I ALREADY HAVE AN ACCOUNT",
            dividerPhrase: "Never lose what you love most",
            section2Title: "Get the closest route",
            section2Text: "Thanks to advanced geolocation technologies and real-time analysis, you can find the most efficient and safest route with a click. The tool not only shows the shortest path, but also automatically calculates the estimated time of arrival, considering factors such as traffic, construction, weather, and mode of transport. This allows you to make quick decisions, save time, and travel with confidence.",
            section3Title: "Verify where your belongings are at all times",
            section3Text: "Verify where your belongings are at all times. Never worry about losing something valuable again. Our system allows you to constantly monitor the location of your objects, offering you an extra layer of security and the ability to react quickly to any unforeseen event.",
            section4Title: "Save all your addresses in one place",
            section4Text: "Forget the tedious search and repetitive data entry. Our platform allows you to centralize and organize all your frequent locations, from your home and office to the most visited places. Access them instantly with a single click, simplifying your planning, saving time and ensuring you always have your important destinations at hand.",
            section5Title: "The device has different functions",
            section5Text: "Beyond its advanced location capability, this device offers versatility to adapt to your needs. Activate its sound function to quickly find your misplaced items at home, or choose discreet vibration to receive alerts without disturbing others. These options give you total control and a personalized experience in every situation.",
            section6Title: "All your data is fully protected",
            section6Text: "Your privacy and security are our top priority. We implement the most robust encryption measures and advanced security protocols to ensure that your personal information and locations remain confidential and safe from unauthorized access at all times. With us, you have the peace of mind that your privacy is protected at all times.",
        },
        fr: {
            name: "Français",
            flag: "fr",
            title: "Le moyen intelligent de garder vos affaires en sécurité.",
            description: "Suivez vos objets de valeur, animaux de compagnie et proches avec la technologie la plus avancée.",
            getStarted: "COMMENCER",
            alreadyAccount: "J'AI DÉJÀ UN COMPTE",
            dividerPhrase: "Ne perdez jamais ce que vous aimez le plus",
            section2Title: "Obtenez l'itinéraire le plus proche",
            section2Text: "Grâce à des technologies de géolocalisation avancées et à une analyse en temps réel, vous pouvez trouver l'itinéraire le plus efficace et le plus sûr en un clic. L'outil ne montre pas seulement le chemin le plus court, mais calcule également automatiquement l'heure d'arrivée estimée, en tenant compte de facteurs tels que la circulation, les travaux, la météo et le mode de transport. Cela vous permet de prendre des décisions rapides, de gagner du temps et de voyager en toute confiance.",
            section3Title: "Vérifiez où se trouvent vos biens à tout moment",
            section3Text: "Vérifiez où se trouvent vos biens à tout moment. Ne vous inquiétez plus de perdre quelque chose de précieux. Notre système vous permet de surveiller constamment l'emplacement de vos objets, vous offrant une couche de sécurité supplémentaire et la possibilité de réagir rapidement à tout événement imprévu.",
            section4Title: "Enregistrez toutes vos adresses en un seul endroit",
            section4Text: "Oubliez la recherche fastidieuse et la saisie de données répétitive. Notre plateforme vous permet de centraliser et d'organiser toutes vos adresses fréquentes, de votre domicile et de votre bureau aux lieux les plus visités. Accédez-y instantanément en un seul clic, simplifiant votre planification, vous faisant gagner du temps et vous assurant d'avoir toujours vos destinations importantes à portée de main.",
            section5Title: "L'appareil a différentes fonctions",
            section5Text: "Au-delà de sa capacité de localisation avancée, cet appareil offre une polyvalence pour s'adapter à vos besoins. Activez sa fonction sonore pour retrouver rapidement vos objets égarés à la maison, ou optez pour la vibration discrète pour recevoir des alertes sans déranger les autres. Ces options vous offrent un contrôle total et une expérience personnalisée dans chaque situation.",
            section6Title: "Toutes vos données sont entièrement protégées",
            section6Text: "Votre vie privée et votre sécurité sont notre priorité absolue. Nous mettons en œuvre les mesures de chiffrement les plus robustes et des protocoles de sécurité avancés pour garantir que vos informations personnelles et vos emplacements restent confidentiels et à l'abri des accès non autorisés à tout moment. Avec nous, vous avez la tranquillité d'esprit que votre vie privée est protégée à tout moment.",
        },
        de: {
            name: "Deutsch",
            flag: "de",
            title: "Der intelligente Weg, Ihre Sachen sicher zu halten.",
            description: "Verfolgen Sie Ihre Wertsachen, Haustiere und Lieben mit der fortschrittlichsten Technologie.",
            getStarted: "LOS GEHT'S",
            alreadyAccount: "ICH HABE BEREITS EIN KONTO",
            dividerPhrase: "Verlieren Sie niemals, was Sie am meisten lieben",
            section2Title: "Holen Sie sich die nächste Route",
            section2Text: "Dank fortschrittlicher Geolokalisierungstechnologien und Echtzeit-Analyse können Sie mit einem Klick die effizienteste und sicherste Route finden. Das Tool zeigt nicht nur den kürzesten Weg, sondern berechnet auch automatisch die geschätzte Ankunftszeit unter Berücksichtigung von Faktoren wie Verkehr, Baustellen, Wetter und Transportmittel. Dies ermöglicht es Ihnen, schnelle Entscheidungen zu treffen, Zeit zu sparen und mit Zuversicht zu reisen.",
            section3Title: "Überprüfen Sie jederzeit, wo sich Ihre Sachen befinden",
            section3Text: "Überprüfen Sie jederzeit, wo sich Ihre Sachen befinden. Machen Sie sich keine Sorgen mehr, etwas Wertvolles zu verlieren. Unser System ermöglicht es Ihnen, den Standort Ihrer Objekte ständig zu überwachen, was Ihnen eine zusätzliche Sicherheitsebene und die Möglichkeit bietet, schnell auf unvorhergesehene Ereignisse zu reagieren.",
            section4Title: "Speichern Sie alle Ihre Adressen an einem Ort",
            section4Text: "Vergessen Sie die mühsame Suche und die sich wiederholende Dateneingabe. Unsere Plattform ermöglicht es Ihnen, alle Ihre häufig besuchten Orte, von Ihrem Zuhause und Büro bis zu den am häufigsten besuchten Orten, zu zentralisieren und zu organisieren. Greifen Sie sofort mit einem einzigen Klick darauf zu, vereinfachen Sie Ihre Planung, sparen Sie Zeit und stellen Sie sicher, dass Sie Ihre wichtigen Ziele immer zur Hand haben.",
            section5Title: "Das Gerät hat verschiedene Funktionen",
            section5Text: "Neben seiner fortschrittlichen Ortungsfunktion bietet dieses Gerät Vielseitigkeit, um sich an Ihre Bedürfnisse anzupassen. Aktivieren Sie seine Tonfunktion, um verlegte Gegenstände zu Hause schnell zu finden, oder wählen Sie die diskrete Vibration, um Benachrichtigungen zu erhalten, ohne andere zu stören. Diese Optionen geben Ihnen die volle Kontrolle und ein personalisiertes Erlebnis in jeder Situation.",
            section6Title: "Alle Ihre Daten sind vollständig geschützt",
            section6Text: "Ihre Privatsphäre und Sicherheit sind unsere oberste Priorität. Wir implementieren die robustesten Verschlüsselungsmaßnahmen und fortschrittliche Sicherheitsprotokolle, um sicherzustellen, dass Ihre persönlichen Informationen und Standorte jederzeit vertraulich und vor unbefugtem Zugriff geschützt bleiben. Bei uns haben Sie die Gewissheit, dass Ihre Privatsphäre jederzeit geschützt ist.",
        },
        pt: {
            name: "Português",
            flag: "pt",
            title: "A maneira inteligente de manter suas coisas seguras.",
            description: "Rastree seus objetos de valor, animais domesticos e pessoas care com a tecnologia mais avançada.",
            getStarted: "COMEÇAR",
            alreadyAccount: "JÁ TENHO UMA CONTA",
            dividerPhrase: "Nunca perca o que você mais ama",
            section2Title: "Obtenha a rota mais próxima",
            section2Text: "Graças às tecnologias avançadas de geolocalização e análise em tempo real, você pode encontrar a rota mais eficiente e segura com um clique. A ferramenta não apenas mostra o caminho mais curto, mas também calcula automaticamente o tempo estimado de chegada, considerando fatores como tráfego, obras, clima e meio de transporte. Isso permite que você tome decisões rápidas, economize tempo e viaje com confiança.",
            section3Title: "Verifique onde estão seus pertences a todo momento",
            section3Text: "Verifique onde estão seus pertences a todo momento. Nunca mais se preocupe em perder algo valioso. Nosso sistema permite que você monitore constantemente a localização de seus objetos, oferecendo uma camada extra de segurança e a capacidade de reagir rapidamente a qualquer imprevisto.",
            section4Title: "Salve todos os seus endereços em um só lugar",
            section4Text: "Esqueça a busca tediosa e a entrada de dados repetitiva. Nossa plataforma permite que você centralize e organize todos os seus locais frequentes, de sua casa e escritório aos lugares mais visitados. Acesse-os instantaneamente com um único clique, simplificando seu planejamento, economizando tempo e garantindo que você sempre tenha seus destinos importantes em mãos.",
            section5Title: "O dispositivo tem diferentes funções",
            section5Text: "Além de sua capacidade de localização avançada, este dispositivo oferece versatilidade para se adaptar às suas necessidades. Ative sua função de som para encontrar rapidamente seus itens perdidos em casa, ou opte pela vibração discreta para receber alertas sem incomodar os outros. Essas opções lhe dão controle total e uma experiência personalizada em cada situação.",
            section6Title: "Todos os seus dados estão totalmente protegidos",
            section6Text: "Sua privacidade e segurança são nossa principal prioridade. Implementamos as medidas de criptografia mais robustas e protocolos de segurança avançados para garantir que suas informações pessoais e locais permaneçam confidenciais e protegidos contra acesso não autorizado a todo momento. Conosco, você tem a tranquilidade de que sua privacidade está protegida a todo momento.",
        },
        it: {
            name: "Italiano",
            flag: "it",
            title: "Il modo intelligente per tenere al sicuro le tue cose.",
            description: "Traccia i tuoi objetos de valor, animales domesticos e persone care con la tecnología più avanzata.",
            getStarted: "INIZIA",
            alreadyAccount: "HO GIÀ UN ACCOUNT",
            dividerPhrase: "Non perdere mai ciò che ami di più",
            section2Title: "Ottieni il percorso più vicino",
            section2Text: "Grazie alle tecnologie avanzate di geolocalizzazione e all'analisi in tempo reale, puoi trovare il percorso più efficiente e sicuro con un clic. Lo strumento non solo mostra il percorso più breve, ma calcola anche automaticamente l'ora di arrivo stimata, tenendo conto di fattori come il traffico, i lavori, il tempo e il mezzo di trasporto. Questo ti permette di prendere decisioni rapide, risparmiare tempo e viaggiare con fiducia.",
            section3Title: "Verifica dove sono i tuoi beni in ogni momento",
            section3Text: "Verifica dove sono i tuoi beni in ogni momento. Non preoccuparti più di perdere qualcosa di prezioso. Il nostro sistema ti permette di monitorare costantemente la posizione dei tuoi oggetti, offrendoti un ulteriore livello di sicurezza e la capacità di reagire rapidamente a qualsiasi imprevisto.",
            section4Title: "Salva tutti i tuoi indirizzi in un unico posto",
            section4Text: "Dimentica la ricerca noiosa e l'inserimento ripetitivo dei dati. La nostra piattaforma ti permette di centralizzare e organizzare tutte le tue posizioni frequenti, dalla tua casa e ufficio ai luoghi più visitati. Accedi istantaneamente con un solo clic, semplificando la tua pianificazione, risparmiando tempo e assicurandoti di avere sempre a portata di mano le tue destinazioni importanti.",
            section5Title: "Il dispositivo ha diverse funzioni",
            section5Text: "Oltre alla sua capacità di localizzazione avanzata, questo dispositivo offre versatilità per adattarsi alle tue esigenze. Attiva la sua funzione sonora per trovare rapidamente i tuoi oggetti smarriti a casa, o opta per la vibrazione discreta per ricevere avvisi senza disturbare gli altri. Queste opzioni ti danno il controllo totale e un'esperienza personalizzata in ogni situazione.",
            section6Title: "Tutti i tuoi dati sono completamente protetti",
            section6Text: "La tua privacy e la tua sicurezza sono la nostra massima priorità. Implementiamo le misure di crittografia più robuste e i protocolli di sicurezza avanzati per garantire che le tue informazioni personali e le tue posizioni rimangano riservate e al sicuro da accessi non autorizzati in ogni momento. Con noi, hai la tranquillità che la tua privacy è protetta in ogni momento.",
        },
        // Puedes añadir más idiomas aquí
    };

    const htmlElement = document.documentElement;
    const langToggleButton = document.getElementById('lang-toggle-button');
    const currentFlag = document.getElementById('current-flag');
    const currentLangName = document.getElementById('current-lang-name');
    const languageDropdown = document.getElementById('language-dropdown');
    const dropdownContent = languageDropdown.querySelector('.py-1');
    const pageTitle = document.getElementById('page-title');
    const pageDescription = document.getElementById('page-description');
    const getStartedButton = document.getElementById('get-started-button');
    const alreadyHaveAccountButton = document.getElementById('already-have-account-button');
    const dividerText = document.getElementById('divider-text');

    // Referencias a los nuevos elementos
    const section2Title = document.getElementById('section2-title');
    const section2Text = document.getElementById('section2-text');
    const section3Title = document.getElementById('section3-title');
    const section3Text = document.getElementById('section3-text');
    const section4Title = document.getElementById('section4-title');
    const section4Text = document.getElementById('section4-text');
    const section5Title = document.getElementById('section5-title');
    const section5Text = document.getElementById('section5-text');
    const section6Title = document.getElementById('section6-title');
    const section6Text = document.getElementById('section6-text');

    function updateContent(langCode) {
        localStorage.setItem('selectedLanguage', langCode);
        htmlElement.lang = langCode;

        pageTitle.textContent = translations[langCode].title;
        pageDescription.textContent = translations[langCode].description;
        getStartedButton.textContent = translations[langCode].getStarted;
        alreadyHaveAccountButton.textContent = translations[langCode].alreadyAccount;
        dividerText.textContent = translations[langCode].dividerPhrase;

        currentFlag.src = `https://flagcdn.com/w20/${translations[langCode].flag}.png`;
        currentFlag.alt = `Bandera de ${translations[langCode].name}`;
        currentLangName.textContent = translations[langCode].name;

        // Actualiza el contenido de las nuevas secciones
        section2Title.textContent = translations[langCode].section2Title;
        section2Text.textContent = translations[langCode].section2Text;
        section3Title.textContent = translations[langCode].section3Title;
        section3Text.textContent = translations[langCode].section3Text;
        section4Title.textContent = translations[langCode].section4Title;
        section4Text.textContent = translations[langCode].section4Text;
        section5Title.textContent = translations[langCode].section5Title;
        section5Text.textContent = translations[langCode].section5Text;
        section6Title.textContent = translations[langCode].section6Title;
        section6Text.textContent = translations[langCode].section6Text;

        document.querySelectorAll('.language-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.lang === langCode) {
                item.classList.add('active');
            }
        });
    }

    function populateDropdown() {
        dropdownContent.innerHTML = '';
        for (const langCode in translations) {
            const langData = translations[langCode];
            const div = document.createElement('div');
            div.classList.add('language-item');
            div.setAttribute('role', 'menuitem');
            div.setAttribute('tabindex', '-1');
            div.dataset.lang = langCode;

            div.innerHTML = `
                <img src="https://flagcdn.com/w20/${langData.flag}.png" alt="Bandera de ${langData.name}" class="w-5 h-5 rounded-full">
                <span>${langData.name}</span>
            `;

            div.addEventListener('click', () => {
                updateContent(langCode);
                languageDropdown.classList.add('hidden');
            });
            dropdownContent.appendChild(div);
        }
    }

    langToggleButton.addEventListener('click', () => {
        languageDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!languageDropdown.contains(event.target) && !langToggleButton.contains(event.target)) {
            languageDropdown.classList.add('hidden');
        }
    });

    populateDropdown();
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        updateContent(savedLanguage);
    } else {
        updateContent('es');
    }
});
