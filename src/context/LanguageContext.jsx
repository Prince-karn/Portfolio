import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      badge: "IN & EU Delivery",
      cta: "Get in Touch"
    },
    hero: {
      badge: "Available for Global Contracts",
      headline: "We engineer fast, secure, and modern web apps & cross-platform mobile apps. Empowering brands in India, Belgium, and globally.",
      ctaProjects: "Explore Projects",
      ctaQuote: "Get a Quote",
      scroll: "Scroll to explore"
    },
    about: {
      badge: "Our Story",
      title: "Indian Ingenuity,",
      titleAccent: "Global Standards",
      p1: "We are 404 Curry not Found, an agile web and mobile development collective based in India. Our name is a tongue-in-cheek nod to our cultural roots and our technical specialization: solving complex, elusive engineering problems.",
      p2: "We build fast, secure, and highly animated interfaces. Working across timezones, we have engineered custom digital platforms for domestic Indian organizations and international companies alike. We have delivered several key products for clients in Europe—notably in Belgium—ensuring compliance with GDPR standards and delivering smooth, performant user interfaces.",
      availability: "Currently taking on select international Q3/Q4 contracts",
      stats: {
        deployed: "Projects Deployed",
        clients: "European Clients (e.g. Belgium)",
        sla: "SLA Adherence",
        satisfaction: "Client Satisfaction"
      }
    },
    services: {
      badge: "Capabilities",
      title: "Full Lifecycle Product Services",
      explore: "Explore Details",
      list: [
        {
          title: "Web Development",
          description: "Custom enterprise-grade web applications designed for reliability, speed, and sleek user experience. Leveraging state-of-the-art architectures.",
          features: [
            "React, Next.js, and TypeScript frontend",
            "Robust Node.js and Express backend",
            "High-performance REST & GraphQL APIs",
            "Secure Database (MongoDB, PostgreSQL)"
          ]
        },
        {
          title: "Mobile Development",
          description: "Stunning iOS and Android native-feeling mobile applications, built using cross-platform capabilities to speed up time-to-market without compromising features.",
          features: [
            "React Native & Flutter implementations",
            "Smooth gesture animations & offline modes",
            "Secure payment integrations (Stripe, UPI)",
            "App Store & Google Play deployments"
          ]
        },
        {
          title: "Project Marketing",
          description: "App Store Optimization, Search Engine Optimization, and product launching strategies designed to get your apps noticed and grow your user base.",
          features: [
            "SEO optimization & web performance audits",
            "ASO (App Store Optimization) copywriting",
            "Social media launch plans & campaign setup",
            "Conversion rate optimization dashboards"
          ]
        },
        {
          title: "UI/UX Product Design",
          description: "Stunning, high-fidelity visual UI designs, wireframes, and prototypes built with user intuition and modern glassmorphic styles in mind.",
          features: [
            "Figma interactive prototyping",
            "Modern dark-mode design & typography systems",
            "Responsive, mobile-first design wireframes",
            "Comprehensive branding & asset sheets"
          ]
        },
        {
          title: "DevOps & Cloud Scale",
          description: "Automated pipelines, cloud management, and Docker integrations that guarantee 99.9% uptime and auto-scale to meet heavy spikes in traffic.",
          features: [
            "AWS, Vercel, and DigitalOcean hosting",
            "Docker containerization & configurations",
            "GitHub Actions CI/CD automation pipelines",
            "Real-time server monitoring & error logging"
          ]
        },
        {
          title: "Support & Optimization",
          description: "Active system audits, speed tuning, version bumps, and security checks to keep your web and mobile products running smoothly year-round.",
          features: [
            "Monthly security audits & dependency bumps",
            "Database optimization & query acceleration",
            "Responsive bug tracking & emergency hotfixes",
            "Active uptime checks & backup automation"
          ]
        }
      ]
    },
    skills: {
      badge: "Capabilities",
      title: "Our Technical Stack",
      categories: {
        frontend: "Frontend Web",
        backend: "Backend & Systems",
        mobile: "Mobile & DevOps"
      }
    },
    testimonials: {
      badge: "Success Stories",
      title: "Trusted Worldwide",
      description: "See reviews from our clients in India, Belgium, and across Europe who have grown their businesses with us.",
      reviews: [
        "404 Curry not Found built our custom cycling route app. Absolute pros in React Native, the performance is flawless and fluid!",
        "Excellent delivery on our high-volume logistics platform. They accommodated our rapid scale challenges beautifully.",
        "We hired them to build our e-commerce presence. The team is super responsive, fast, and understands the European quality standards.",
        "Their work on our patient dashboard was extremely secure, reliable, and compliant. A highly professional offshore partner.",
        "Outstanding Next.js platform. Highly recommended for web projects requiring speed, SEO optimization, and clean architecture.",
        "Our fintech dashboard was delivered on schedule. Their developers are incredibly skilled with Node.js, security audits, and PostgreSQL.",
        "The mobile app they developed exceeded all expectations. Beautiful micro-interactions, fully animated UI, and very intuitive workflows.",
        "Stunning dashboard and bulletproof backend architecture. They write highly maintainable code and help us grow our product."
      ]
    },
    projects: {
      badge: "Our Work",
      title: "Crafted Engineering Products",
      filters: {
        all: "All Apps",
        web: "Web Dev",
        mobile: "Mobile Dev"
      },
      repo: "Repository",
      live: "Live Demo",
      list: [
        {
          title: "VeloQuest Ride Tracker",
          description: "Custom cross-platform cycling navigation and route planner deployed for a bicycle touring enterprise in Brussels, Belgium."
        },
        {
          title: "ShopFlow Headless Storefront",
          description: "Ultra-fast Next.js headless e-commerce portal integrated with custom Shopify APIs, built for a retail brand in Antwerp, Belgium."
        },
        {
          title: "BharatBazaar Delivery Control",
          description: "High-throughput real-time logistics dashboard tracking and routing daily parcel deliveries across metro areas in India."
        },
        {
          title: "FinGrow Wealth Portal",
          description: "A secure investment tracking mobile application with biometric login and real-time Indian stock market price updates."
        },
        {
          title: "ImmoHub Listing Directory",
          description: "A clean, map-based residential property finding website serving clients and agents in Ghent, Belgium."
        }
      ]
    },
    contact: {
      badge: "Connect With Us",
      title: "Start a Project",
      subtitle: "Let's cook up some code!",
      description: "Whether you need a cutting-edge React storefront in Antwerp or a React Native logistics app in Delhi, our team is ready to scale your platform. Drop us a line!",
      mailUs: "Mail Us",
      hubs: "Headquarters & Hubs",
      hubsDesc: "New Delhi, India 🇮🇳 & Ghent, Belgium 🇧🇪",
      successTitle: "Project Request Sent!",
      successDesc: "Thank you! We've received your query and will reply within 12 business hours. Get ready for some high-octane code.",
      successBtn: "Send Another Message",
      form: {
        name: "Your Name",
        email: "Email Address",
        building: "What are we building?",
        web: "Web Application",
        mobile: "Mobile App",
        details: "Project Details",
        placeholder: "Briefly describe your requirements or ideas...",
        submit: "Send Proposal Request"
      }
    },
    footer: {
      description: "We specialize in engineering modern, blazing-fast, and secure web & cross-platform mobile apps. Empowering businesses in India, Belgium, and globally.",
      navigation: "Navigation",
      hubs: "Global Hubs",
      indiaHub: "New Delhi, India 🇮🇳",
      belgiumHub: "Ghent, Belgium 🇧🇪",
      devHQ: "Development Headquarters",
      clientOps: "European Client Operations",
      allRights: "All Rights Reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  nl: {
    nav: {
      home: "Home",
      about: "Over Ons",
      services: "Diensten",
      projects: "Projecten",
      contact: "Contact",
      badge: "IN & EU Levering",
      cta: "Contacteer Ons"
    },
    hero: {
      badge: "Beschikbaar voor Wereldwijde Contracten",
      headline: "Wij ontwikkelen snelle, veilige en moderne web- en cross-platform mobiele applicaties. Voor merken in India, België en wereldwijd.",
      ctaProjects: "Ontdek Projecten",
      ctaQuote: "Vraag Offerte aan",
      scroll: "Scroll om te ontdekken"
    },
    about: {
      badge: "Ons Verhaal",
      title: "Indische Vindingrijkheid,",
      titleAccent: "Wereldwijde Standaarden",
      p1: "Wij zijn 404 Curry not Found, een wendbaar web- en mobiel ontwikkelingscollectief gevestigd in India. Onze naam is een knipoog naar onze culturele wortels en onze technische specialisatie: het oplossen van complexe, ongrijpbare softwareproblemen.",
      p2: "Wij bouwen snelle, veilige en rijk geanimeerde interfaces. Werkend over tijdzones heen, hebben we digitale platforms op maat ontworpen voor zowel Indiase organisaties als internationale bedrijven. We hebben diverse sleutelproducten geleverd voor klanten in Europa—met name in België—waarbij we voldoen aan de GDPR-normen en vloeiende, performante gebruikersinterfaces garanderen.",
      availability: "Momenteel beschikbaar voor selecte internationale Q3/Q4 contracten",
      stats: {
        deployed: "Projecten Opgeleverd",
        clients: "Europese Klanten (o.a. België)",
        sla: "SLA Naleving",
        satisfaction: "Klanttevredenheid"
      }
    },
    services: {
      badge: "Capaciteiten",
      title: "Productdiensten voor de Hele Levenscyclus",
      explore: "Ontdek Details",
      list: [
        {
          title: "Webontwikkeling",
          description: "Op maat gemaakte webapplicaties van enterprise-niveau, ontworpen voor betrouwbaarheid, snelheid en een strakke gebruikerservaring. Gebruikmakend van state-of-the-art architecturen.",
          features: [
            "React, Next.js en TypeScript frontend",
            "Robuuste Node.js en Express backend",
            "Krachtige REST & GraphQL API's",
            "Beveiligde Database (MongoDB, PostgreSQL)"
          ]
        },
        {
          title: "Mobiele Ontwikkeling",
          description: "Prachtige, native-aanvoelende mobiele applicaties voor iOS en Android, gebouwd met cross-platform technologieën om de time-to-market te verkorten zonder in te boeten op functionaliteit.",
          features: [
            "React Native & Flutter implementaties",
            "Vloeiende gebarenanimaties & offline modi",
            "Veilige betalingsintegraties (Stripe, UPI)",
            "App Store & Google Play lanceringen"
          ]
        },
        {
          title: "Project Marketing",
          description: "App Store Optimalisatie, Zoekmachine Optimalisatie en productlanceringsstrategieën ontworpen om uw apps te laten opvallen en uw gebruikersbestand te vergroten.",
          features: [
            "SEO-optimalisatie & webprestatie-audits",
            "ASO (App Store Optimization) copywriting",
            "Social media lanceringsplannen & campagne setup",
            "Conversie-optimalisatie dashboards"
          ]
        },
        {
          title: "UI/UX Productontwerp",
          description: "Strakke, high-fidelity visuele UI-ontwerpen, wireframes en prototypes gebouwd met oog voor gebruikersintuïtie en moderne glassmorphic stijlen.",
          features: [
            "Figma interactieve prototyping",
            "Moderne dark-mode ontwerpen & typografiesystemen",
            "Responsieve, mobile-first wireframes",
            "Uitgebreide branding & asset-sheets"
          ]
        },
        {
          title: "DevOps & Cloud Schaalbaarheid",
          description: "Geautomatiseerde pipelines, cloudbeheer en Docker-integraties die 99,9% uptime garanderen en automatisch schalen om zware pieken in het verkeer op te vangen.",
          features: [
            "AWS, Vercel en DigitalOcean hosting",
            "Docker-containerisatie & configuraties",
            "GitHub Actions CI/CD automatiseringspipelines",
            "Real-time servermonitoring & foutregistratie"
          ]
        },
        {
          title: "Ondersteuning & Optimalisatie",
          description: "Actieve systeemaudits, snelheidstuning, versie-updates en beveiligingscontroles om uw web- en mobiele producten het hele jaar door soepel te laten draaien.",
          features: [
            "Maandelijkse beveiligingsaudits & updates",
            "Database-optimalisatie & query-versnelling",
            "Snelle bugtracking & noodoplossingen",
            "Actieve uptime-controles & geautomatiseerde back-ups"
          ]
        }
      ]
    },
    skills: {
      badge: "Capaciteiten",
      title: "Onze Technische Stack",
      categories: {
        frontend: "Frontend Web",
        backend: "Backend & Systemen",
        mobile: "Mobiel & DevOps"
      }
    },
    testimonials: {
      badge: "Succesverhalen",
      title: "Wereldwijd Vertrouwd",
      description: "Bekijk beoordelingen van onze klanten in India, België en heel Europa die met ons zijn gegroeid.",
      reviews: [
        "404 Curry not Found heeft onze gepersonaliseerde fietsroute-app gebouwd. Absolute professionals in React Native, de prestaties zijn foutloos en vloeiend!",
        "Uitstekende oplevering van ons logistieke platform met hoog volume. Ze hebben onze snelle schaaluitdagingen prachtig opgelost.",
        "We hebben hen ingehuurd om ons e-commerceplatform te bouwen. Het team is super responsief, snel en begrijpt de Europese kwaliteitsnormen.",
        "Hun werk aan ons patiëntendashboard was uiterst veilig, betrouwbaar en compliant. Een zeer professionele offshorepartner.",
        "Uitstekend Next.js platform. Zeer aanbevolen voor webprojecten die snelheid, SEO-optimalisatie en een schone architectuur vereisen.",
        "Ons fintech-dashboard is perfect op schema geleverd. Hun ontwikkelaars zijn ongelooflijk vaardig met Node.js, security audits en PostgreSQL.",
        "De mobiele app die ze hebben ontwikkeld overtrof al onze verwachtingen. Prachtige micro-interacties, volledig geanimeerde UI en zeer intuïtieve workflows.",
        "Prachtig dashboard en een kogelvrije backend-architectuur. Ze schrijven zeer onderhoudbare code en helpen ons product te groeien."
      ]
    },
    projects: {
      badge: "Ons Werk",
      title: "Ontworpen Technische Producten",
      filters: {
        all: "Alle Apps",
        web: "Webontwikkeling",
        mobile: "Mobiele Apps"
      },
      repo: "Repository",
      live: "Live Demo",
      list: [
        {
          title: "VeloQuest Routeplanner",
          description: "Gepersonaliseerde cross-platform cycling navigatie en routeplanner uitgerold voor een fietstoerisme-onderneming in Brussel, België."
        },
        {
          title: "ShopFlow Headless Storefront",
          description: "Ultrasnel Next.js headless e-commerceportaal geïntegreerd met op maat gemaakte Shopify API's, gebouwd voor een retailmerk in Antwerpen, België."
        },
        {
          title: "BharatBazaar Delivery Control",
          description: "Real-time logistiek dashboard met hoge doorvoer voor het volgen en routeren van dagelijkse pakketleveringen in Indiase metropolen."
        },
        {
          title: "FinGrow Wealth Portal",
          description: "Een veilige mobiele app voor het bijhouden van investeringen met biometrische login en real-time updates van de Indiase aandelenmarkt."
        },
        {
          title: "ImmoHub Listing Directory",
          description: "Een schone, kaartgebaseerde website voor het zoeken naar woningen, ten dienste van klanten en makelaars in Gent, België."
        }
      ]
    },
    contact: {
      badge: "Verbind Met Ons",
      title: "Start een Project",
      subtitle: "Laten we wat code koken!",
      description: "Of u nu een geavanceerde React-webwinkel in Antwerpen nodig heeft of een React Native logistieke app in Delhi, ons team staat klaar om uw platform op te schalen. Stuur ons een bericht!",
      mailUs: "Mail Ons",
      hubs: "Hoofdkantoren & Hubs",
      hubsDesc: "New Delhi, India 🇮🇳 & Gent, België 🇧🇪",
      successTitle: "Projectaanvraag Verzonden!",
      successDesc: "Bedankt! We hebben uw aanvraag ontvangen en zullen binnen 12 kantooruren reageren. Maak u klaar voor code van topkwaliteit.",
      successBtn: "Stuur nog een Bericht",
      form: {
        name: "Uw Naam",
        email: "E-mailadres",
        building: "Wat gaan we bouwen?",
        web: "Webapplicatie",
        mobile: "Mobiele App",
        details: "Projectdetails",
        placeholder: "Beschrijf kort uw wensen of ideeën...",
        submit: "Verzend Voorstel-Aanvraag"
      }
    },
    footer: {
      description: "Wij zijn gespecialiseerd in het ontwikkelen van moderne, razendsnelle en veilige web- en cross-platform mobiele apps. Voor bedrijven in India, België en wereldwijd.",
      navigation: "Navigatie",
      hubs: "Wereldwijde Hubs",
      indiaHub: "New Delhi, India 🇮🇳",
      belgiumHub: "Gent, België 🇧🇪",
      devHQ: "Ontwikkelingshoofdkwartier",
      clientOps: "Europese Klantactiviteiten",
      allRights: "Alle rechten voorbehouden.",
      privacy: "Privacybeleid",
      terms: "Algemene Voorwaarden"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      services: "Services",
      projects: "Projets",
      contact: "Contact",
      badge: "Livraison IN & UE",
      cta: "Contactez-nous"
    },
    hero: {
      badge: "Disponible pour Contrats Internationaux",
      headline: "Nous concevons des applications web et mobiles multiplateformes rapides, sécurisées et modernes. Propulsons les marques en Inde, en Belgique et dans le monde entier.",
      ctaProjects: "Explorer les Projets",
      ctaQuote: "Obtenir un Devis",
      scroll: "Faire défiler pour explorer"
    },
    about: {
      badge: "Notre Histoire",
      title: "Ingéniosité Indienne,",
      titleAccent: "Normes Internationales",
      p1: "Nous sommes 404 Curry not Found, un collectif agile de développement web et mobile basé en Inde. Notre nom est un clin d'œil humoristique à nos racines culturelles et à notre spécialisation technique: résoudre des problèmes d'ingénierie complexes et insaisissables.",
      p2: "Nous construisons des interfaces rapides, sécurisées et hautement animées. Travaillant sur plusieurs fuseaux horaires, nous avons conçu des plateformes numériques personnalisées pour des organisations indiennes et des entreprises internationales. Nous avons livré plusieurs produits clés pour des clients en Europe—notamment en Belgique—garantissant la conformité aux normes RGPD et offrant des interfaces utilisateur fluides et performantes.",
      availability: "Actuellement disponible pour certains contrats internationaux Q3/Q4",
      stats: {
        deployed: "Projets Déployés",
        clients: "Clients Européens (ex: Belgique)",
        sla: "Respect des SLA",
        satisfaction: "Satisfaction Client"
      }
    },
    services: {
      badge: "Capacités",
      title: "Services de Cycle de Vie Complet du Produit",
      explore: "Explorer les Détails",
      list: [
        {
          title: "Développement Web",
          description: "Applications web d'entreprise sur mesure conçues pour la fiabilité, la rapidité et une expérience utilisateur élégante. Exploitant des architectures de pointe.",
          features: [
            "Frontend React, Next.js et TypeScript",
            "Backend robuste Node.js et Express",
            "API REST et GraphQL haute performance",
            "Bases de données sécurisées (MongoDB, PostgreSQL)"
          ]
        },
        {
          title: "Développement Mobile",
          description: "Superbes applications mobiles au ressenti natif pour iOS et Android, construites avec des technologies multiplateformes pour accélérer la mise sur le marché sans compromettre les fonctionnalités.",
          features: [
            "Implémentations React Native & Flutter",
            "Animations gestuelles fluides & modes hors ligne",
            "Intégrations de paiement sécurisées (Stripe, UPI)",
            "Déploiements App Store & Google Play"
          ]
        },
        {
          title: "Marketing de Projet",
          description: "Optimisation de l'App Store, référencement naturel et stratégies de lancement de produits conçues pour faire remarquer vos applications et élargir votre base d'utilisateurs.",
          features: [
            "Optimisation SEO & audits de performance web",
            "Rédaction de contenu ASO (App Store Optimization)",
            "Plans de lancement sur les réseaux sociaux",
            "Tableaux de bord d'optimisation des taux de conversion"
          ]
        },
        {
          title: "Design de Produit UI/UX",
          description: "Superbes designs visuels haute fidélité, wireframes et prototypes interactifs construits autour de l'intuition de l'utilisateur et des styles glassmorphic modernes.",
          features: [
            "Prototypage interactif sur Figma",
            "Systèmes de typographie et design dark-mode moderne",
            "Wireframes adaptatifs orientés mobile-first",
            "Charte graphique et fiches de ressources complètes"
          ]
        },
        {
          title: "DevOps & Échelle Cloud",
          description: "Pipelines automatisés, gestion du cloud et intégrations Docker garantissant un taux de disponibilité de 99,9 % et une mise à l'échelle automatique lors de pics de trafic.",
          features: [
            "Hébergement sur AWS, Vercel et DigitalOcean",
            "Conteneurisation Docker & configurations",
            "Pipelines d'automatisation CI/CD avec GitHub Actions",
            "Surveillance des serveurs en temps réel & journalisation des erreurs"
          ]
        },
        {
          title: "Support & Optimisation",
          description: "Audits de système actifs, réglages de vitesse, mises à niveau de version et vérifications de sécurité pour maintenir vos produits web et mobiles performants toute l'année.",
          features: [
            "Audits de sécurité mensuels & mise à jour des dépendances",
            "Optimisation de bases de données & accélération des requêtes",
            "Suivi réactif des bogues & correctifs d'urgence",
            "Vérifications de disponibilité & automatisation des sauvegardes"
          ]
        }
      ]
    },
    skills: {
      badge: "Capacités",
      title: "Notre Pile Technique",
      categories: {
        frontend: "Web Frontend",
        backend: "Backend & Systèmes",
        mobile: "Mobile & DevOps"
      }
    },
    testimonials: {
      badge: "Témoignages de Réussite",
      title: "Reconnu dans le Monde Entier",
      description: "Découvrez les avis de nos clients en Inde, en Belgique et dans toute l'Europe qui ont grandi à nos côtés.",
      reviews: [
        "404 Curry not Found a conçu notre application de cyclisme sur mesure. Des professionnels absolus en React Native, la performance est impeccable !",
        "Excellente livraison pour notre plateforme logistique à fort volume. Ils ont magnifiquement géré nos défis de croissance rapide.",
        "Nous les avons engagés pour développer notre site e-commerce. L'équipe est super réactive, rapide et comprend parfaitement les normes de qualité européennes.",
        "Leur travail sur notre tableau de bord patient était extrêmement sécurisé, fiable et conforme. Un partenaire offshore hautement professionnel.",
        "Plateforme Next.js exceptionnelle. Fortement recommandé pour les projets web nécessitant rapidité, optimisation SEO et architecture propre.",
        "Notre tableau de bord fintech a été livré dans les temps. Leurs développeurs sont incroyablement qualifiés avec Node.js, les audits de sécurité et PostgreSQL.",
        "L'application mobile qu'ils ont développée a dépassé toutes nos attentes. Des micro-interactions magnifiques, une interface utilisateur entièrement animée.",
        "Superbe tableau de bord et architecture backend blindée. Ils écrivent du code très propre et nous aident à faire évoluer le produit."
      ]
    },
    projects: {
      badge: "Notre Travail",
      title: "Produits d'Ingénierie Personnalisés",
      filters: {
        all: "Toutes les Apps",
        web: "Dév Web",
        mobile: "Dév Mobile"
      },
      repo: "Dépôt GitHub",
      live: "Démo Live",
      list: [
        {
          title: "VeloQuest Ride Tracker",
          description: "Outil de navigation et de planification d'itinéraires cyclistes multiplateforme déployé pour une entreprise de tourisme à vélo à Bruxelles, en Belgique."
        },
        {
          title: "Boutique Headless ShopFlow",
          description: "Portail e-commerce ultra-rapide Next.js headless intégré avec les API Shopify, conçu pour une marque de vente au détail à Anvers, en Belgique."
        },
        {
          title: "BharatBazaar Delivery Control",
          description: "Tableau de bord logistique en temps réel à haut débit pour le suivi et le routage des livraisons quotidiennes dans les zones métropolitaines en Inde."
        },
        {
          title: "Portail de Richesse FinGrow",
          description: "Une application mobile sécurisée de suivi des investissements avec authentification biométrique et prix du marché boursier indien en temps réel."
        },
        {
          title: "ImmoHub Listing Directory",
          description: "Un site web épuré de recherche de biens immobiliers basé sur une carte, au service des clients et des agents à Gand, en Belgique."
        }
      ]
    },
    contact: {
      badge: "Contactez-nous",
      title: "Démarrer un Projet",
      subtitle: "Cuisinons du code !",
      description: "Que vous ayez besoin d'une vitrine React de pointe à Anvers ou d'une application logistique React Native à Delhi, notre équipe est prête à faire évoluer votre plateforme. Écrivez-nous !",
      mailUs: "Écrivez-nous",
      hubs: "Sièges Sociaux & Centres",
      hubsDesc: "New Delhi, Inde 🇮🇳 & Gand, Belgique 🇧🇪",
      successTitle: "Demande de projet envoyée !",
      successDesc: "Merci ! Nous avons bien reçu votre demande et vous répondrons sous 12 heures ouvrables. Préparez-vous à du code haute performance.",
      successBtn: "Envoyer un autre message",
      form: {
        name: "Votre Nom",
        email: "Adresse Email",
        building: "Que construisons-nous ?",
        web: "Application Web",
        mobile: "Application Mobile",
        details: "Détails du Projet",
        placeholder: "Décrivez brièvement vos besoins ou vos idées...",
        submit: "Envoyer la Demande de Proposition"
      }
    },
    footer: {
      description: "Nous sommes spécialisés dans le développement d'applications web et mobiles multiplateformes modernes, ultra-rapides et sécurisées. Soutenant les entreprises en Inde, en Belgique et dans le monde.",
      navigation: "Navigation",
      hubs: "Centres Globaux",
      indiaHub: "New Delhi, Inde 🇮🇳",
      belgiumHub: "Gand, Belgique 🇧🇪",
      devHQ: "Siège de Développement",
      clientOps: "Opérations Clients Europe",
      allRights: "Tous droits réservés.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation"
    }
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über Uns",
      services: "Dienstleistungen",
      projects: "Projekte",
      contact: "Kontakt",
      badge: "Lieferung IN & EU",
      cta: "Kontakt Aufnehmen"
    },
    hero: {
      badge: "Verfügbar für weltweite Verträge",
      headline: "Wir entwickeln schnelle, sichere und moderne Web- & plattformübergreifende mobile Apps. Für Marken in Indien, Belgien und weltweit.",
      ctaProjects: "Projekte Erkunden",
      ctaQuote: "Angebot Anfordern",
      scroll: "Scrollen zum Erkunden"
    },
    about: {
      badge: "Unsere Geschichte",
      title: "Indischer Erfindergeist,",
      titleAccent: "Globale Standards",
      p1: "Wir sind 404 Curry not Found, ein agiles Web- und Mobilentwicklungs-Kollektiv mit Sitz in Indien. Unser Name ist eine humorvolle Anspielung auf unsere kulturellen Wurzeln und unsere technische Spezialisierung: die Lösung komplexer, schwer fassbarer Softwareprobleme.",
      p2: "Wir entwickeln schnelle, sichere und hochgradig animierte Schnittstellen. Über Zeitzonen hinweg haben wir maßgeschneiderte digitale Plattformen für indische Organisationen und internationale Unternehmen gleichermaßen realisiert. Wir haben mehrere Schlüsselprodukte für Kunden in Europa—insbesondere in Belgien—geliefert, um die Einhaltung der DSGVO zu gewährleisten und flüssige Benutzeroberflächen zu bieten.",
      availability: "Derzeit verfügbar für ausgewählte internationale Verträge für Q3/Q4",
      stats: {
        deployed: "Projekte Bereitgestellt",
        clients: "Europäische Kunden (z.B. Belgien)",
        sla: "SLA-Einhaltung",
        satisfaction: "Kundenzufriedenheit"
      }
    },
    services: {
      badge: "Fähigkeiten",
      title: "Full-Lifecycle-Produktdienstleistungen",
      explore: "Details Erkunden",
      list: [
        {
          title: "Webentwicklung",
          description: "Maßgeschneiderte Webanwendungen auf Enterprise-Niveau, entwickelt für Zuverlässigkeit, Geschwindigkeit und ein elegantes Benutzererlebnis. Nutzung modernster Architekturen.",
          features: [
            "React, Next.js und TypeScript Frontend",
            "Robustes Node.js und Express Backend",
            "Hochleistungs-REST- & GraphQL-APIs",
            "Sichere Datenbanken (MongoDB, PostgreSQL)"
          ]
        },
        {
          title: "Mobilentwicklung",
          description: "Atemberaubende, nativ anmutende mobile Anwendungen für iOS und Android, entwickelt mit plattformübergreifenden Technologien zur Beschleunigung der Markteinführung ohne Funktionseinbußen.",
          features: [
            "React Native & Flutter Implementierungen",
            "Flüssige Gestenanimationen & Offline-Modus",
            "Sichere Zahlungsintegrationen (Stripe, UPI)",
            "App Store & Google Play Deployments"
          ]
        },
        {
          title: "Projektmarketing",
          description: "App-Store-Optimierung, Suchmaschinenoptimierung und Produkteinführungsstrategien, damit Ihre Apps wahrgenommen werden und Ihre Nutzerbasis wächst.",
          features: [
            "SEO-Optimierung & Web-Performance-Audits",
            "ASO (App Store Optimization) Textierung",
            "Social-Media-Einführungspläne & Kampagnen-Setup",
            "Conversion-Rate-Optimierungs-Dashboards"
          ]
        },
        {
          title: "UI/UX Produktdesign",
          description: "Atemberaubendes, hochpräzises visuelles UI-Design, Wireframes und Prototypen, entwickelt mit Fokus auf Benutzerintuition und moderne Glassmorphic-Stile.",
          features: [
            "Interaktives Figma-Prototyping",
            "Modernes Dark-Mode-Design & Typografiesysteme",
            "Responsive Wireframes im Mobile-First-Stil",
            "Umfassende Branding- & Asset-Richtlinien"
          ]
        },
        {
          title: "DevOps & Cloud-Skalierung",
          description: "Automatisierte Pipelines, Cloud-Management und Docker-Integrationen, die eine Uptime von 99,9 % garantieren und bei hohem Traffic automatisch skalieren.",
          features: [
            "Hosting auf AWS, Vercel und DigitalOcean",
            "Docker-Containerisierung & Konfigurationen",
            "GitHub Actions CI/CD Automatisierungs-Pipelines",
            "Server-Monitoring in Echtzeit & Fehlerprotokollierung"
          ]
        },
        {
          title: "Support & Optimierung",
          description: "Aktive System-Audits, Geschwindigkeitsoptimierung, Versionsupdates und Sicherheitsprüfungen, um Ihre Web- und Mobilprodukte das ganze Jahr über am Laufen zu halten.",
          features: [
            "Monatliche Sicherheits-Audits & Dependency-Updates",
            "Datenbankoptimierung & Abfragebeschleunigung",
            "Schnelles Bug-Tracking & Notfall-Hotfixes",
            "Aktive Uptime-Prüfungen & Backup-Automatisierung"
          ]
        }
      ]
    },
    skills: {
      badge: "Fähigkeiten",
      title: "Unsere Technische Stack",
      categories: {
        frontend: "Frontend Web",
        backend: "Backend & Systeme",
        mobile: "Mobil & DevOps"
      }
    },
    testimonials: {
      badge: "Erfolgsgeschichten",
      title: "Weltweit Vertraut",
      description: "Sehen Sie sich die Bewertungen unserer Kunden in Indien, Belgien und ganz Europa an, die mit uns gewachsen sind.",
      reviews: [
        "404 Curry not Found hat unsere maßgeschneiderte Radroute-App entwickelt. Absolute Profis in React Native, die Leistung ist makellos und flüssig!",
        "Hervorragende Bereitstellung unserer Logistikplattform für große Volumen. Sie haben unsere schnellen Skalierungsherausforderungen hervorragend gemeistert.",
        "Wir haben sie für den Aufbau unserer E-Commerce-Präsenz engagiert. Das Team reagiert super schnell, arbeitet zügig und versteht die europäischen Qualitätsstandards.",
        "Ihre Arbeit an unserem Patientendashboard war äußerst sicher, zuverlässig und compliant. Ein hochprofessioneller Offshore-Partner.",
        "Hervorragende Next.js-Plattform. Sehr zu empfehlen für Webprojekte, die Geschwindigkeit, SEO-Optimierung und eine saubere Architektur erfordern.",
        "Unser Fintech-Dashboard wurde pünktlich geliefert. Ihre Entwickler sind unglaublich geschickt im Umgang mit Node.js, Sicherheitsaudits und PostgreSQL.",
        "Die von ihnen entwickelte mobile App hat alle Erwartungen übertroffen. Wunderschöne Mikrointeraktionen, voll animierte Benutzeroberfläche.",
        "Atemberaubendes Dashboard und kugelsichere Backend-Architektur. Sie schreiben extrem wartbaren Code und helfen uns beim Wachstum."
      ]
    },
    projects: {
      badge: "Unsere Arbeit",
      title: "Konstruierte Softwareprodukte",
      filters: {
        all: "Alle Apps",
        web: "Webentwicklung",
        mobile: "Mobilentwicklung"
      },
      repo: "Repository",
      live: "Live-Demo",
      list: [
        {
          title: "VeloQuest Fahrrad-Tracker",
          description: "Plattformübergreifende Fahrradnavigation und Routenplaner, bereitgestellt für ein Fahrradtourismusunternehmen in Brüssel, Belgien."
        },
        {
          title: "ShopFlow Headless Storefront",
          description: "Ultraschnelles, kopfloses Next.js-E-Commerce-Portal mit benutzerdefinierten Shopify-APIs, entwickelt für eine Marke in Antwerpen, Belgien."
        },
        {
          title: "BharatBazaar Delivery Control",
          description: "Logistik-Dashboard mit hohem Durchsatz zur Echtzeit-Verfolgung und -Steuerung täglicher Paketzustellungen in indischen Metropolregionen."
        },
        {
          title: "FinGrow Wealth Portal",
          description: "Eine sichere mobile Anwendung zur Investitionsverfolgung mit biometrischem Login und Echtzeit-Updates der indischen Börse."
        },
        {
          title: "ImmoHub Immobilienverzeichnis",
          description: "Eine saubere, kartenbasierte Website zur Immobiliensuche für Kunden und Makler in Gent, Belgien."
        }
      ]
    },
    contact: {
      badge: "Verbinden Sie Sich Mit Uns",
      title: "Ein Projekt Starten",
      subtitle: "Lassen Sie uns Code kochen!",
      description: "Egal, ob Sie einen hochmodernen React-Storefront in Antwerpen oder eine React Native Logistik-App in Delhi benötigen, unser Team ist bereit, Ihre Plattform zu skalieren. Schreiben Sie uns!",
      mailUs: "Schreiben Sie uns",
      hubs: "Hauptquartier & Niederlassungen",
      hubsDesc: "Neu-Delhi, Indien 🇮🇳 & Gent, Belgien 🇧🇪",
      successTitle: "Projektanfrage Gesendet!",
      successDesc: "Vielen Dank! Wir haben Ihre Anfrage erhalten und werden innerhalb von 12 Geschäftsstunden antworten. Machen Sie sich bereit für erstklassigen Code.",
      successBtn: "Eine weitere Nachricht senden",
      form: {
        name: "Ihr Name",
        email: "E-Mail-Adresse",
        building: "Was bauen wir?",
        web: "Webanwendung",
        mobile: "Mobile App",
        details: "Projektdetails",
        placeholder: "Beschreiben Sie kurz Ihre Anforderungen oder Ideen...",
        submit: "Angebotsanfrage absenden"
      }
    },
    footer: {
      description: "Wir sind spezialisiert auf die Entwicklung moderner, blitzschneller und sicherer Web- und plattformübergreifender mobiler Apps. Unterstützung für Unternehmen in Indien, Belgien und weltweit.",
      navigation: "Navigation",
      hubs: "Globale Hubs",
      indiaHub: "Neu-Delhi, Indien 🇮🇳",
      belgiumHub: "Gent, Belgien 🇧🇪",
      devHQ: "Entwicklungs-Hauptsitz",
      clientOps: "Europäischer Kundenbetrieb",
      allRights: "Alle Rechte vorbehalten.",
      privacy: "Datenschutzerklärung",
      terms: "Nutzungsbedingungen"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      projects: "Proyectos",
      contact: "Contacto",
      badge: "Entrega IN y UE",
      cta: "Contactar"
    },
    hero: {
      badge: "Disponible para Contratos Globales",
      headline: "Diseñamos aplicaciones web y móviles multiplataforma rápidas, seguras y modernas. Impulsamos marcas en la India, Bélgica y a nivel mundial.",
      ctaProjects: "Explorar Proyectos",
      ctaQuote: "Obtener Presupuesto",
      scroll: "Deslizar para explorar"
    },
    about: {
      badge: "Nuestra Historia",
      title: "Ingenio Indio,",
      titleAccent: "Estándares Globales",
      p1: "Somos 404 Curry not Found, un colectivo ágil de desarrollo web y móvil con sede en la India. Nuestro nombre es un guiño humorístico a nuestras raíces culturales y a nuestra especialización técnica: resolver problemas de ingeniería complejos y escurridizos.",
      p2: "Creamos interfaces rápidas, seguras y altamente animadas. Trabajando en diferentes zonas horarias, hemos desarrollado plataformas digitales personalizadas tanto para organizaciones indias locales como para empresas internacionales. Hemos entregado varios productos clave para clientes en Europa —especialmente en Bélgica— garantizando el cumplimiento de las normas RGPD y ofreciendo interfaces de usuario fluidas y eficientes.",
      availability: "Actualmente disponible para seleccionar contratos internacionales Q3/Q4",
      stats: {
        deployed: "Proyectos Desplegados",
        clients: "Clientes Europeos (ej: Bélgica)",
        sla: "Cumplimiento de SLA",
        satisfaction: "Satisfacción del Cliente"
      }
    },
    services: {
      badge: "Capacidades",
      title: "Servicios de Ciclo de Vida Completo del Producto",
      explore: "Explorar Detalles",
      list: [
        {
          title: "Desarrollo Web",
          description: "Aplicaciones web empresariales personalizadas diseñadas para ofrecer fiabilidad, velocidad y una experiencia de usuario impecable. Utilizando arquitecturas de vanguardia.",
          features: [
            "Frontend en React, Next.js y TypeScript",
            "Backend sólido en Node.js y Express",
            "APIs REST y GraphQL de alto rendimiento",
            "Bases de datos seguras (MongoDB, PostgreSQL)"
          ]
        },
        {
          title: "Desarrollo Móvil",
          description: "Espectaculares aplicaciones móviles para iOS y Android con interfaz nativa, creadas con tecnologías multiplataforma para acelerar el lanzamiento sin perder prestaciones.",
          features: [
            "Implementaciones con React Native y Flutter",
            "Animaciones gestuales fluidas y modos sin conexión",
            "Integración de pagos seguros (Stripe, UPI)",
            "Despliegues en App Store y Google Play"
          ]
        },
        {
          title: "Marketing de Proyectos",
          description: "Optimización de App Store (ASO), posicionamiento en buscadores (SEO) y estrategias de lanzamiento de productos para destacar sus aplicaciones y ganar usuarios.",
          features: [
            "Optimización SEO y auditorías de rendimiento web",
            "Redacción de textos ASO (App Store Optimization)",
            "Planes de lanzamiento en redes sociales y campañas",
            "Paneles de optimización de tasa de conversión"
          ]
        },
        {
          title: "Diseño de Producto UI/UX",
          description: "Increíbles diseños visuales de UI de alta fidelidad, prototipos interactivos y wireframes creados pensando en la intuición del usuario y estilos glassmorphic modernos.",
          features: [
            "Prototipado interactivo con Figma",
            "Diseño en modo oscuro moderno y tipografía",
            "Wireframes adaptables enfocados en mobile-first",
            "Identidad de marca completa y hojas de recursos"
          ]
        },
        {
          title: "DevOps y Escalado Cloud",
          description: "Pipelines automatizados, gestión de la nube e integraciones con Docker que garantizan un 99,9% de tiempo de actividad y escalado automático ante picos de tráfico.",
          features: [
            "Alojamiento en AWS, Vercel y DigitalOcean",
            "Contenedores Docker y configuraciones",
            "Automatización de pipelines CI/CD con GitHub Actions",
            "Monitoreo de servidores en tiempo real y registro de errores"
          ]
        },
        {
          title: "Soporte y Optimización",
          description: "Auditorías activas de sistemas, optimización de velocidad, actualizaciones de versiones y revisiones de seguridad para mantener sus productos activos todo el año.",
          features: [
            "Auditorías mensuales de seguridad y actualizaciones",
            "Optimización de bases de datos y aceleración de consultas",
            "Seguimiento reactivo de errores y correcciones de emergencia",
            "Comprobaciones de actividad y copias de seguridad automatizadas"
          ]
        }
      ]
    },
    skills: {
      badge: "Capacidades",
      title: "Nuestra Stack Técnica",
      categories: {
        frontend: "Web Frontend",
        backend: "Backend y Sistemas",
        mobile: "Móvil y DevOps"
      }
    },
    testimonials: {
      badge: "Historias de Éxito",
      title: "Confianza en Todo el Mundo",
      description: "Vea las opiniones de nuestros clientes en la India, Bélgica y toda Europa que han crecido con nosotros.",
      reviews: [
        "404 Curry not Found diseñó nuestra app de ciclismo. Excelentes profesionales de React Native, ¡el rendimiento es impecable y fluido!",
        "Excelente entrega en nuestra plataforma de logística a gran escala. Resolvieron de forma increíble nuestros retos de crecimiento.",
        "Los contratamos para crear nuestro e-commerce. El equipo es superreactivo, rápido y comprende perfectamente las exigencias de calidad europeas.",
        "Su trabajo en el portal del paciente fue sumamente seguro, fiable y conforme a la normativa. Un socio offshore muy profesional.",
        "Plataforma Next.js excepcional. Altamente recomendado para proyectos web que requieran velocidad, SEO y una arquitectura limpia.",
        "Nuestro portal fintech se entregó a tiempo. Sus desarrolladores son increíblemente hábiles en Node.js, seguridad y PostgreSQL.",
        "La aplicación móvil que desarrollaron superó todas las expectativas. Increíbles micro-interacciones y una interfaz animada.",
        "Impresionante dashboard y arquitectura de backend blindada. Escriben código limpio, fácil de mantener y nos ayudan a crecer."
      ]
    },
    projects: {
      badge: "Nuestro Trabajo",
      title: "Productos de Ingeniería de Precisión",
      filters: {
        all: "Todas las Apps",
        web: "Desarrollo Web",
        mobile: "Desarrollo Móvil"
      },
      repo: "Repositorio",
      live: "Demo en Vivo",
      list: [
        {
          title: "VeloQuest Ride Tracker",
          description: "Planificador de rutas y navegación de ciclismo multiplataforma a medida, desplegado para una empresa de turismo ciclista en Bruselas, Bélgica."
        },
        {
          title: "Tienda Headless ShopFlow",
          description: "Portal e-commerce ultra rápido con Next.js integrado con APIs a medida de Shopify, desarrollado para una marca comercial en Amberes, Bélgica."
        },
        {
          title: "BharatBazaar Delivery Control",
          description: "Panel de control logístico a tiempo real de alto rendimiento para el seguimiento y distribución de paquetes en las metrópolis de la India."
        },
        {
          title: "FinGrow Wealth Portal",
          description: "Aplicación móvil de seguimiento financiero seguro con inicio biométrico y cotización de la bolsa india en tiempo real."
        },
        {
          title: "ImmoHub Listing Directory",
          description: "Portal web interactivo para la búsqueda inmobiliaria mediante mapas, para agentes y compradores en Gante, Bélgica."
        }
      ]
    },
    contact: {
      badge: "Conecte Con Nosotros",
      title: "Iniciar un Proyecto",
      subtitle: "¡Cocinemos un poco de código!",
      description: "¿Necesita un e-commerce innovador con React en Amberes o una aplicación de logística con React Native en Delhi? Nuestro equipo está listo. ¡Escríbanos!",
      mailUs: "Escríbanos",
      hubs: "Sedes y Oficinas",
      hubsDesc: "Nueva Delhi, India 🇮🇳 y Gante, Bélgica 🇧🇪",
      successTitle: "¡Solicitud de Proyecto Enviada!",
      successDesc: "¡Gracias! Hemos recibido su consulta y le responderemos en menos de 12 horas laborables. Prepárese para un código de alta calidad.",
      successBtn: "Enviar Otro Mensaje",
      form: {
        name: "Su Nombre",
        email: "Correo Electrónico",
        building: "¿Qué estamos construyendo?",
        web: "Aplicación Web",
        mobile: "Aplicación Móvil",
        details: "Detalles del Proyecto",
        placeholder: "Describa brevemente sus requisitos o ideas...",
        submit: "Enviar Solicitud de Propuesta"
      }
    },
    footer: {
      description: "Nos especializamos en el desarrollo de aplicaciones web y móviles multiplataforma modernas, rápidas y seguras. Potenciando empresas en la India, Bélgica y el mundo.",
      navigation: "Navegación",
      hubs: "Oficinas Globales",
      indiaHub: "Nueva Delhi, India 🇮🇳",
      belgiumHub: "Gante, Bélgica 🇧🇪",
      devHQ: "Centro de Desarrollo",
      clientOps: "Operaciones de Clientes Europeos",
      allRights: "Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Condiciones de Servicio"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  // Try to load initial language from localStorage, default to 'en'
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("selected_language");
    return saved && translations[saved] ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("selected_language", language);
  }, [language]);

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
