import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      common: {
        brandName: 'Délice Brugge',
        travellersChoice: "Traveller's Choice 2022, 2023 & 2024",
        nav: {
          home: 'Home',
          menu: 'Menu',
          groupMenu: 'Group Menu',
          reserve: 'Reserve',
          language: 'Language',
        },
        cta: {
          bookNow: 'Book now',
          viewMenu: 'View menu',
        },
        address: {
          heading: 'Find us',
          street: 'Wijngaardstraat 21, Minnewaterpark',
          city: '8000 Bruges, Belgium',
          openHours: 'Opening hours 10:00 - 22:00',
          closed: 'Closed on Wednesday',
          phone: 'Phone',
          phone1: '050 33 16 49',
          phone2: '+32 495 60 00 41',
          email: 'info@delicebrugge.be',
        },
        seo: {
          title: 'Délice Brugge | Authentic Belgian Restaurant in Minnewaterpark, Bruges',
          description:
            'Family-owned Belgian restaurant in the heart of Bruges. Enjoy Carbonade Flamande, mussels, rabbit with prunes, and local beers in a cozy setting near Minnewaterpark. Traveller\'s Choice 2022–2024.',
        },
        about: {
          heading: 'About us',
          copy:
            'Nestled in the heart of Minnewaterpark in Bruges, Délice Brugge is a cherished Belgian restaurant that captures the warmth of family-owned hospitality. Our passion is to make every visitor’s experience in Bruges unforgettable, offering authentic Belgian cuisine in a cozy, welcoming atmosphere. Loved by locals and travelers alike, Délice Brugge is where the charm of Belgium comes alive, one delicious meal at a time.',
          extraSeo:
            'Signature dishes include Carbonade Flamande (Flemish beef stew), fresh mussels, rabbit with prunes, and seasonal specials. Ideal for families, couples, and groups exploring Bruges. Located steps from Minnewaterpark, with friendly service and great value.',
        },
        reviews: {
          heading: 'Guests say',
          items: [
            '“Perfect place to experience traditional Belgian food… Carbonade Flamande and mussels were so tasty.”',
            '“Fish and chips were perfect… I had carbonade/stoofvlees. The beef melted in the mouth.”',
            '“Scampi in garlic butter with fresh salad and frites… highly recommend eating here.”',
            '“Lovely small bistro… fish stew with mussels was thoroughly enjoyed. I had the rabbit with prunes, delicious and jammy.”',
          ],
        },
        home: {
          heroTagline: 'Warm hearts, authentic Belgian cuisine',
          subTagline: 'Conviviality & Quality for locals and travelers — fulfill your visit to Bruges.',
          featuresHeading: 'Why dine with us',
          features: [
            'Family-owned hospitality in a cozy bistro near Minnewaterpark',
            'Belgian classics made with care and seasonal ingredients',
            'Loved by travelers — Traveller\'s Choice 2022–2024',
            'Great value: generous portions, local beers, warm service',
          ],
          recommendationsHeading: "Chef's recommendations",
          galleryHeading: 'A glimpse of Délice',
          ctaHeading: 'Make your Bruges visit delicious',
          ctaSub: 'Reserve your table — we look forward to welcoming you.',
        },
        menu: {
          heading: 'Menu',
          viewPdf: 'View full menu (PDF)',
          sections: {
            classics: 'Belgian Classics',
            seafood: 'Seafood',
            pastaVeg: 'Pasta & Vegetarian',
            desserts: 'Desserts',
          },
          items: {
            carbonade: {
              name: 'Carbonade Flamande (Stoofvlees)',
              desc: 'Slow-cooked Flemish beer-braised beef stew, served with frites.',
            },
            mussels: {
              name: 'Mussels',
              desc: 'Fresh mussels prepared in classic Belgian style.',
            },
            fishChips: {
              name: 'Fish & Chips',
              desc: 'Crispy golden batter, flaky white fish, hand-cut fries.',
            },
            fishStew: {
              name: 'Fish Stew with Mussels',
              desc: 'Hearty seafood stew with mussels and aromatic herbs.',
            },
            rabbitPrunes: {
              name: 'Rabbit with Prunes',
              desc: 'Traditional sweet-savory Belgian specialty.',
            },
            scampi: {
              name: 'Scampi in Garlic Butter',
              desc: 'Juicy prawns cooked in garlic butter, salad, and frites.',
            },
            chickenCream: {
              name: 'Chicken in Cream Sauce',
              desc: 'Comforting classic with velvety cream sauce.',
            },
            vegLasagne: {
              name: 'Vegetarian Lasagne',
              desc: 'Layers of vegetables, tomato, and cheese, oven-baked.',
            },
            chocMousse: {
              name: 'Chocolate Mousse',
              desc: 'Rich and airy Belgian chocolate mousse.',
            },
          },
          disclaimer:
            'The live PDF menu is available below. Items shown are highlights based on guest favorites and may vary by season.',
        },
        reserve: {
          heading: 'Reserve a table',
          intro: 'Book instantly via our partner widget.',
        },
        groupMenu: {
          heading: 'GROUP MENU €36.00',
          appetizer: {
            title: 'Appetizer',
            option1: {
              name: 'Huisgemaakte Kaaskroketten',
              translations: {
                en: 'Homemade cheese croquettes',
                fr: 'Croquettes de fromage maison',
                de: 'Käsekroketten',
                es: 'Croquetas de queso caseras'
              }
            },
            option2: {
              name: 'Huisgemaakte Garnaalkroketten',
              translations: {
                en: 'Homemade shrimp croquettes',
                fr: 'Croquettes de crevettes maison',
                de: 'Hausgemachte Garnelenkroketten',
                es: 'Croquetas de gambas caseras'
              }
            }
          },
          mainCourse: {
            title: 'Main Course',
            option1: {
              name: 'Steak Natuur',
              translations: {
                en: 'Natural steak',
                fr: 'Steak nature',
                de: 'Steak Natur',
                es: 'Bistec natural'
              }
            },
            option2: {
              name: 'Gebakken Zalm',
              translations: {
                en: 'Baked salmon',
                fr: 'Saumon cuit',
                de: 'Gebackener Lachs',
                es: 'Salmón horneado'
              }
            }
          },
          dessert: {
            title: 'Dessert',
            option1: {
              name: 'Koffie/Thee',
              translations: {
                en: 'Coffee/Tea',
                fr: 'Café/Thé',
                de: 'Kaffee/Tee',
                es: 'Café/Té'
              }
            },
            option2: {
              name: 'Dame Blanche',
              translations: {
                en: 'Dame Blanche',
                fr: 'Dame Blanche',
                de: 'Dame Blanche',
                es: 'Dame Blanche'
              }
            }
          },
          separator: 'of',
          stars: '★ ★ ★',
          description: 'Perfect for group bookings and special occasions. This pre-fixed menu offers a selection of our finest dishes at an excellent value.',
          contactInfo: 'For group reservations, please contact us directly.'
        },
        footer: {
          rights: 'All rights reserved.',
          btw: 'VAT',
        },
      },
    },
  },
  nl: {
    translation: {
      common: {
        brandName: 'Délice Brugge',
        travellersChoice: 'Travellers\' Choice 2022, 2023 & 2024',
        nav: { home: 'Home', menu: 'Menu', groupMenu: 'Groepsmenu', reserve: 'Reserveren', language: 'Taal' },
        cta: { bookNow: 'Reserveer nu', viewMenu: 'Bekijk menu' },
        address: {
          heading: 'Locatie',
          street: 'Wijngaardstraat 21, Minnewaterpark',
          city: '8000 Brugge, België',
          openHours: 'Openingsuren 10:00 - 22:00',
          closed: 'Gesloten op woensdag',
          phone: 'Telefoon',
          phone1: '050 33 16 49',
          phone2: '+32 495 60 00 41',
          email: 'info@delicebrugge.be',
        },
        seo: {
          title: 'Délice Brugge | Authentiek Belgisch restaurant in Minnewaterpark, Brugge',
          description:
            'Familierestaurant in het hart van Brugge. Geniet van stoofvlees, mosselen, konijn met pruimen en lokale bieren in een gezellige sfeer nabij Minnewaterpark.',
        },
        about: {
          heading: 'Over ons',
          copy:
            'In het hart van het Minnewaterpark in Brugge verwelkomt Délice Brugge u met warme, familiale gastvrijheid. Wij maken uw bezoek aan Brugge onvergetelijk met authentieke Belgische keuken in een knusse, gezellige sfeer.',
          extraSeo:
            'Signatuurgerechten: stoofvlees, verse mosselen, konijn met pruimen en seizoensgerechten. Ideal voor families, koppels en groepen, op wandelafstand van het Minnewaterpark.',
        },
        reviews: {
          heading: 'Wat gasten zeggen',
          items: [
            '“Perfecte plek voor traditionele Belgische keuken… Stoofvlees en mosselen waren heerlijk.”',
            '“Fish and chips waren perfect… Het stoofvlees smolt op de tong.”',
            '“Scampi in lookboter met frisse salade en frietjes… absolute aanrader.”',
            '“Kleine, gezellige bistro… visstoofpot met mosselen smaakte uitstekend. Konijn met pruimen was heerlijk.”',
          ],
        },
        home: {
          heroTagline: 'Warme gastvrijheid, Belgische klassiekers',
          subTagline: 'Gezelligheid en kwaliteit voor locals en reizigers — maak uw Brugge-bezoek compleet.',
          featuresHeading: 'Waarom bij ons eten',
          features: [
            'Familiale gastvrijheid in een knusse bistro bij het Minnewaterpark',
            'Belgische klassiekers met zorg en seizoensingrediënten',
            'Geliefd bij reizigers — Travellers\' Choice 2022–2024',
            'Sterke prijs-kwaliteit: royale porties, lokale bieren, warme service',
          ],
          recommendationsHeading: 'Aanraders van de chef',
          galleryHeading: 'Een kijkje bij Délice',
          ctaHeading: 'Maak uw Brugge-bezoek verrukkelijk',
          ctaSub: 'Reserveer uw tafel — we heten u graag welkom.',
        },
        menu: {
          heading: 'Menu',
          viewPdf: 'Volledig menu (PDF)',
          sections: { classics: 'Belgische klassiekers', seafood: 'Zeevruchten', pastaVeg: 'Pasta & Vegetarisch', desserts: 'Desserts' },
          items: {
            carbonade: { name: 'Stoofvlees', desc: 'Belgische runderstoof met bier, geserveerd met frietjes.' },
            mussels: { name: 'Mosselen', desc: 'Verse mosselen op klassieke Belgische wijze.' },
            fishChips: { name: 'Fish & Chips', desc: 'Krokant beslag, malse witte vis, handgesneden friet.' },
            fishStew: { name: 'Visstoof met mosselen', desc: 'Rijke stoofpot met vis en mosselen.' },
            rabbitPrunes: { name: 'Konijn met pruimen', desc: 'Traditionele zoet-hartige specialiteit.' },
            scampi: { name: 'Scampi in lookboter', desc: 'Sappige scampi in lookboter, met salade en friet.' },
            chickenCream: { name: 'Kip in roomsaus', desc: 'Comfortgerecht met romige saus.' },
            vegLasagne: { name: 'Vegetarische lasagne', desc: 'Groentelaagjes met tomaat en kaas, uit de oven.' },
            chocMousse: { name: 'Chocolademousse', desc: 'Rijke, luchtige Belgische chocolademousse.' },
          },
          disclaimer: 'Het PDF-menu staat hieronder. Geselecteerde favorieten kunnen per seizoen wijzigen.',
        },
        reserve: { heading: 'Reserveer een tafel', intro: 'Boek direct via onze partnerwidget.' },
        groupMenu: {
          heading: 'GROUP MENU €35.00',
          appetizer: {
            title: 'Voorgerecht',
            option1: {
              name: 'Huisgemaakte Kaaskroketten',
              translations: {
                en: 'Homemade cheese croquettes',
                fr: 'Croquettes de fromage maison',
                de: 'Käsekroketten',
                es: 'Croquetas de queso caseras'
              }
            },
            option2: {
              name: 'Huisgemaakte Garnaalkroketten',
              translations: {
                en: 'Homemade shrimp croquettes',
                fr: 'Croquettes de crevettes maison',
                de: 'Hausgemachte Garnelenkroketten',
                es: 'Croquetas de gambas caseras'
              }
            }
          },
          mainCourse: {
            title: 'Hoofdgerecht',
            option1: {
              name: 'Steak Natuur',
              translations: {
                en: 'Natural steak',
                fr: 'Steak nature',
                de: 'Steak Natur',
                es: 'Bistec natural'
              }
            },
            option2: {
              name: 'Gebakken Zalm',
              translations: {
                en: 'Baked salmon',
                fr: 'Saumon cuit',
                de: 'Gebackener Lachs',
                es: 'Salmón horneado'
              }
            }
          },
          dessert: {
            title: 'Nagerecht',
            option1: {
              name: 'Koffie/Thee',
              translations: {
                en: 'Coffee/Tea',
                fr: 'Café/Thé',
                de: 'Kaffee/Tee',
                es: 'Café/Té'
              }
            },
            option2: {
              name: 'Dame Blanche',
              translations: {
                en: 'Dame Blanche',
                fr: 'Dame Blanche',
                de: 'Dame Blanche',
                es: 'Dame Blanche'
              }
            }
          },
          separator: 'of',
          stars: '★ ★ ★',
          description: 'Perfect voor groepsboekingen en bijzondere gelegenheden. Dit vooraf vastgesteld menu biedt een selectie van onze beste gerechten tegen een uitstekende waarde.',
          contactInfo: 'Voor groepsboekingen, neem dan contact met ons op.'
        },
        footer: { rights: 'Alle rechten voorbehouden.', btw: 'BTW' },
      },
    },
  },
  fr: {
    translation: {
      common: {
        brandName: 'Délice Brugge',
        travellersChoice: 'Travellers\' Choice 2022, 2023 & 2024',
        nav: { home: 'Accueil', menu: 'Menu', groupMenu: 'Menu Groupe', reserve: 'Réserver', language: 'Langue' },
        cta: { bookNow: 'Réserver', viewMenu: 'Voir le menu' },
        address: {
          heading: 'Nous trouver',
          street: 'Wijngaardstraat 21, Minnewaterpark',
          city: '8000 Bruges, Belgique',
          openHours: 'Horaires 10:00 - 22:00',
          closed: 'Fermé le mercredi',
          phone: 'Téléphone',
          phone1: '050 33 16 49',
          phone2: '+32 495 60 00 41',
          email: 'info@delicebrugge.be',
        },
        seo: {
          title: 'Délice Brugge | Restaurant belge authentique à Bruges',
          description:
            'Restaurant familial au cœur de Bruges. Dégustez carbonade flamande, moules, lapin aux pruneaux et bières locales dans une ambiance chaleureuse près du Minnewaterpark.',
        },
        about: {
          heading: 'À propos',
          copy:
            'Situé au cœur du Minnewaterpark à Bruges, Délice Brugge incarne la chaleureuse hospitalité familiale belge, avec une cuisine authentique dans une ambiance conviviale.',
          extraSeo:
            'Plats signature : carbonade flamande, moules fraîches, lapin aux pruneaux, suggestions de saison. Idéal pour familles, couples et groupes, à deux pas du Minnewaterpark.',
        },
        reviews: {
          heading: 'Avis des clients',
          items: [
            '« Endroit parfait pour goûter la cuisine belge traditionnelle… Carbonade et moules délicieuses. »',
            '« Fish and chips parfait… La carbonade fond dans la bouche. »',
            '« Scampi au beurre à l’ail avec salade fraîche et frites… fortement recommandé. »',
            '« Petit bistrot chaleureux… la soupe de poisson avec moules était excellente. Lapin aux pruneaux délicieux. »',
          ],
        },
        home: { 
          heroTagline: 'Chaleur, cuisine belge authentique', 
          subTagline: 'Convivialité & Qualité — complétez votre visite à Bruges.',
          featuresHeading: 'Pourquoi manger chez nous',
          features: [
            'Hospitalité familiale dans un bistrot chaleureux près du Minnewaterpark',
            'Classiques belges préparés avec soin et produits de saison',
            'Apprécié des voyageurs — Travellers\' Choice 2022–2024',
            'Excellent rapport qualité-prix: portions généreuses, bières locales, service attentionné',
          ],
          recommendationsHeading: 'Les recommandations du chef',
          galleryHeading: 'Un aperçu de Délice',
          ctaHeading: 'Rendez votre visite à Bruges délicieuse',
          ctaSub: 'Réservez votre table — nous serons ravis de vous accueillir.',
        },
        menu: {
          heading: 'Menu',
          viewPdf: 'Voir le menu (PDF)',
          sections: { classics: 'Classiques belges', seafood: 'Fruits de mer', pastaVeg: 'Pâtes & Végétarien', desserts: 'Desserts' },
          items: {
            carbonade: { name: 'Carbonade flamande', desc: 'Bœuf mijoté à la bière, servi avec frites.' },
            mussels: { name: 'Moules', desc: 'Moules fraîches à la belge.' },
            fishChips: { name: 'Fish & Chips', desc: 'Poisson blanc croustillant, frites.' },
            fishStew: { name: 'Soupe de poisson aux moules', desc: 'Ragoût de fruits de mer aux herbes.' },
            rabbitPrunes: { name: 'Lapin aux pruneaux', desc: 'Spécialité douce-salée traditionnelle.' },
            scampi: { name: 'Scampi au beurre à l’ail', desc: 'Crevettes au beurre d’ail, salade et frites.' },
            chickenCream: { name: 'Poulet à la crème', desc: 'Classique réconfortant à la sauce crémeuse.' },
            vegLasagne: { name: 'Lasagne végétarienne', desc: 'Légumes, tomate et fromage, gratinés.' },
            chocMousse: { name: 'Mousse au chocolat', desc: 'Mousse au chocolat belge riche et aérienne.' },
          },
          disclaimer: 'Le menu PDF en direct est disponible ci-dessous. Les plats peuvent varier selon la saison.',
        },
        reserve: { heading: 'Réserver une table', intro: 'Réservez instantanément via notre widget partenaire.' },
        groupMenu: {
          heading: 'MENU GROUPE €35.00',
          appetizer: {
            title: 'Entrée',
            option1: {
              name: 'Croquettes de fromage maison',
              translations: {
                en: 'Homemade cheese croquettes',
                fr: 'Croquettes de fromage maison',
                de: 'Käsekroketten',
                es: 'Croquetas de queso caseras'
              }
            },
            option2: {
              name: 'Croquettes de crevettes maison',
              translations: {
                en: 'Homemade shrimp croquettes',
                fr: 'Croquettes de crevettes maison',
                de: 'Hausgemachte Garnelenkroketten',
                es: 'Croquetas de gambas caseras'
              }
            }
          },
          mainCourse: {
            title: 'Plat principal',
            option1: {
              name: 'Steak nature',
              translations: {
                en: 'Natural steak',
                fr: 'Steak nature',
                de: 'Steak Natur',
                es: 'Bistec natural'
              }
            },
            option2: {
              name: 'Saumon cuit',
              translations: {
                en: 'Baked salmon',
                fr: 'Saumon cuit',
                de: 'Gebackener Lachs',
                es: 'Salmón horneado'
              }
            }
          },
          dessert: {
            title: 'Dessert',
            option1: {
              name: 'Café/Thé',
              translations: {
                en: 'Coffee/Tea',
                fr: 'Café/Thé',
                de: 'Kaffee/Tee',
                es: 'Café/Té'
              }
            },
            option2: {
              name: 'Dame Blanche',
              translations: {
                en: 'Dame Blanche',
                fr: 'Dame Blanche',
                de: 'Dame Blanche',
                es: 'Dame Blanche'
              }
            }
          },
          separator: 'ou',
          stars: '★ ★ ★',
          description: 'Parfait pour les réservations de groupe et les occasions spéciales. Ce menu préfixé offre une sélection de nos meilleurs plats à un excellent prix.',
          contactInfo: 'Pour les réservations de groupe, veuillez nous contacter directement.'
        },
        footer: { rights: 'Tous droits réservés.', btw: 'TVA' },
      },
    },
  },
  de: {
    translation: {
      common: {
        brandName: 'Délice Brugge',
        travellersChoice: 'Travellers\' Choice 2022, 2023 & 2024',
        nav: { home: 'Start', menu: 'Speisekarte', groupMenu: 'Gruppenmenü', reserve: 'Reservieren', language: 'Sprache' },
        cta: { bookNow: 'Jetzt reservieren', viewMenu: 'Speisekarte ansehen' },
        address: {
          heading: 'Anfahrt',
          street: 'Wijngaardstraat 21, Minnewaterpark',
          city: '8000 Brügge, Belgien',
          openHours: 'Öffnungszeiten 10:00 - 22:00',
          closed: 'Mittwochs geschlossen',
          phone: 'Telefon',
          phone1: '050 33 16 49',
          phone2: '+32 495 60 00 41',
          email: 'info@delicebrugge.be',
        },
        seo: {
          title: 'Délice Brugge | Authentisches belgisches Restaurant in Brügge',
          description:
            'Familiengeführtes belgisches Restaurant in Brügge. Genießen Sie Carbonade Flamande, Muscheln, Kaninchen mit Pflaumen und lokale Biere in gemütlicher Atmosphäre nahe dem Minnewaterpark.',
        },
        about: {
          heading: 'Über uns',
          copy:
            'Im Herzen des Minnewaterparks in Brügge bietet Délice Brugge herzliche, familiengeführte Gastfreundschaft und authentische belgische Küche in gemütlicher Atmosphäre.',
          extraSeo:
            'Signature-Gerichte: Carbonade Flamande, frische Muscheln, Kaninchen mit Pflaumen, saisonale Spezialitäten. Ideal für Familien, Paare und Gruppen nahe dem Minnewaterpark.',
        },
        reviews: {
          heading: 'Gästestimmen',
          items: [
            '„Perfekter Ort für traditionelle belgische Küche… Carbonade und Muscheln waren köstlich.“',
            '„Fish and Chips perfekt… Das Schmorgericht zart wie Butter.“',
            '„Scampi in Knoblauchbutter mit frischem Salat und Pommes… sehr zu empfehlen.“',
            '„Kleines, gemütliches Bistro… Fischeintopf mit Muscheln hervorragend. Kaninchen mit Pflaumen köstlich.“',
          ],
        },
        home: { 
          heroTagline: 'Herzlichkeit, belgische Klassiker', 
          subTagline: 'Geselligkeit & Qualität — perfekter Besuch in Brügge.',
          featuresHeading: 'Warum bei uns essen',
          features: [
            'Familiengeführte Gastfreundschaft im gemütlichen Bistro nahe Minnewaterpark',
            'Belgische Klassiker mit Sorgfalt und saisonalen Zutaten',
            'Beliebt bei Reisenden — Travellers\' Choice 2022–2024',
            'Tolles Preis-Leistungs-Verhältnis: große Portionen, lokale Biere, herzlicher Service',
          ],
          recommendationsHeading: 'Empfehlungen des Küchenchefs',
          galleryHeading: 'Ein Blick auf Délice',
          ctaHeading: 'Machen Sie Ihren Brügge-Besuch köstlich',
          ctaSub: 'Reservieren Sie Ihren Tisch — wir freuen uns auf Sie.',
        },
        menu: {
          heading: 'Speisekarte',
          viewPdf: 'Vollständiges Menü (PDF)',
          sections: { classics: 'Belgische Klassiker', seafood: 'Meeresfrüchte', pastaVeg: 'Pasta & Vegetarisch', desserts: 'Desserts' },
          items: {
            carbonade: { name: 'Carbonade Flamande', desc: 'Belgischer Bierschmorbraten, mit Pommes.' },
            mussels: { name: 'Miesmuscheln', desc: 'Frische Muscheln nach belgischer Art.' },
            fishChips: { name: 'Fish & Chips', desc: 'Knuspriger Teig, zarter Fisch, Pommes.' },
            fishStew: { name: 'Fischeintopf mit Muscheln', desc: 'Kräftiger Eintopf mit Meeresaromen.' },
            rabbitPrunes: { name: 'Kaninchen mit Pflaumen', desc: 'Traditionelle süß-herzhafte Spezialität.' },
            scampi: { name: 'Scampi in Knoblauchbutter', desc: 'Saftige Garnelen mit Salat und Pommes.' },
            chickenCream: { name: 'Hähnchen in Sahnesoße', desc: 'Klassiker mit cremiger Soße.' },
            vegLasagne: { name: 'Vegetarische Lasagne', desc: 'Gemüse, Tomate, Käse, überbacken.' },
            chocMousse: { name: 'Schokoladenmousse', desc: 'Reiches, luftiges belgisches Mousse.' },
          },
          disclaimer: 'Das PDF-Menü steht unten bereit. Saisonale Änderungen möglich.',
        },
        reserve: { heading: 'Tisch reservieren', intro: 'Buchen Sie direkt über das Partner-Widget.' },
        groupMenu: {
          heading: 'MENÜ FÜR GRUPPEN €35.00',
          appetizer: {
            title: 'Vorspeise',
            option1: {
              name: 'Käsekroketten',
              translations: {
                en: 'Homemade cheese croquettes',
                fr: 'Croquettes de fromage maison',
                de: 'Käsekroketten',
                es: 'Croquetas de queso caseras'
              }
            },
            option2: {
              name: 'Hausgemachte Garnelenkroketten',
              translations: {
                en: 'Homemade shrimp croquettes',
                fr: 'Croquettes de crevettes maison',
                de: 'Hausgemachte Garnelenkroketten',
                es: 'Croquetas de gambas caseras'
              }
            }
          },
          mainCourse: {
            title: 'Hauptgericht',
            option1: {
              name: 'Steak Natur',
              translations: {
                en: 'Natural steak',
                fr: 'Steak nature',
                de: 'Steak Natur',
                es: 'Bistec natural'
              }
            },
            option2: {
              name: 'Gebackener Lachs',
              translations: {
                en: 'Baked salmon',
                fr: 'Saumon cuit',
                de: 'Gebackener Lachs',
                es: 'Salmón horneado'
              }
            }
          },
          dessert: {
            title: 'Nachspeise',
            option1: {
              name: 'Kaffee/Thee',
              translations: {
                en: 'Coffee/Tea',
                fr: 'Café/Thé',
                de: 'Kaffee/Tee',
                es: 'Café/Té'
              }
            },
            option2: {
              name: 'Dame Blanche',
              translations: {
                en: 'Dame Blanche',
                fr: 'Dame Blanche',
                de: 'Dame Blanche',
                es: 'Dame Blanche'
              }
            }
          },
          separator: 'oder',
          stars: '★ ★ ★',
          description: 'Ideal für Gruppenbuchungen und besondere Anlässe. Dieses vorgefertigte Menü bietet eine Auswahl unserer besten Gerichte zu einem hervorragenden Preis.',
          contactInfo: 'Für Gruppenbuchungen wenden Sie sich bitte direkt an uns.'
        },
        footer: { rights: 'Alle Rechte vorbehalten.', btw: 'MwSt.' },
      },
    },
  },
  es: {
    translation: {
      common: {
        brandName: 'Délice Brugge',
        travellersChoice: 'Traveller\'s Choice 2022, 2023 y 2024',
        nav: { home: 'Inicio', menu: 'Menú', groupMenu: 'Menú Grupos', reserve: 'Reservas', language: 'Idioma' },
        cta: { bookNow: 'Reservar ahora', viewMenu: 'Ver menú' },
        address: {
          heading: 'Dónde estamos',
          street: 'Wijngaardstraat 21, Minnewaterpark',
          city: '8000 Brujas, Bélgica',
          openHours: 'Horario 10:00 - 22:00',
          closed: 'Cerrado los miércoles',
          phone: 'Teléfono',
          phone1: '050 33 16 49',
          phone2: '+32 495 60 00 41',
          email: 'info@delicebrugge.be',
        },
        seo: {
          title: 'Délice Brugge | Restaurante belga auténtico en Brujas',
          description:
            'Restaurante familiar en el corazón de Brujas. Carbonade flamande, mejillones, conejo con ciruelas y cervezas locales en un ambiente acogedor cerca del Minnewaterpark.',
        },
        about: {
          heading: 'Quiénes somos',
          copy:
            'En el corazón del Minnewaterpark en Brujas, Délice Brugge ofrece hospitalidad familiar y cocina belga auténtica en un ambiente cálido y acogedor.',
          extraSeo:
            'Platos destacados: carbonade flamande, mejillones frescos, conejo con ciruelas y especialidades de temporada. Ideal para familias, parejas y grupos cerca del Minnewaterpark.',
        },
        reviews: {
          heading: 'Opiniones',
          items: [
            '“Lugar perfecto para probar la comida belga tradicional… Carbonade y mejillones deliciosos.”',
            '“Fish and chips perfecto… la carbonade se deshacía en la boca.”',
            '“Gambas al ajillo con ensalada fresca y patatas fritas… muy recomendable.”',
            '“Pequeño bistró acogedor… guiso de pescado con mejillones excelente. Conejo con ciruelas delicioso.”',
          ],
        },
        home: { 
          heroTagline: 'Calidez y cocina belga auténtica', 
          subTagline: 'Convivialidad y calidad — completa tu visita a Brujas.',
          featuresHeading: 'Por qué elegirnos',
          features: [
            'Hospitalidad familiar en un bistró acogedor cerca de Minnewaterpark',
            'Clásicos belgas elaborados con cariño y productos de temporada',
            'Amado por los viajeros — Traveller\'s Choice 2022–2024',
            'Excelente relación calidad-precio: raciones generosas, cervezas locales, servicio amable',
          ],
          recommendationsHeading: 'Recomendaciones del chef',
          galleryHeading: 'Un vistazo a Délice',
          ctaHeading: 'Haz deliciosa tu visita a Brujas',
          ctaSub: 'Reserva tu mesa — estaremos encantados de recibirte.',
        },
        menu: {
          heading: 'Menú',
          viewPdf: 'Ver menú completo (PDF)',
          sections: { classics: 'Clásicos belgas', seafood: 'Mariscos', pastaVeg: 'Pasta y vegetariano', desserts: 'Postres' },
          items: {
            carbonade: { name: 'Carbonade flamande', desc: 'Estofado de ternera a la cerveza belga con patatas fritas.' },
            mussels: { name: 'Mejillones', desc: 'Mejillones frescos al estilo belga.' },
            fishChips: { name: 'Fish & Chips', desc: 'Rebozado crujiente, pescado blanco, patatas.' },
            fishStew: { name: 'Guiso de pescado con mejillones', desc: 'Guiso de mariscos con hierbas aromáticas.' },
            rabbitPrunes: { name: 'Conejo con ciruelas', desc: 'Especialidad tradicional agridulce.' },
            scampi: { name: 'Gambas al ajillo', desc: 'Gambas en mantequilla de ajo, ensalada y patatas.' },
            chickenCream: { name: 'Pollo en salsa de crema', desc: 'Clásico reconfortante con salsa cremosa.' },
            vegLasagne: { name: 'Lasaña vegetariana', desc: 'Capas de verduras, tomate y queso al horno.' },
            chocMousse: { name: 'Mousse de chocolate', desc: 'Mousse belga rica y esponjosa.' },
          },
          disclaimer: 'El menú en PDF está disponible a continuación. Los platos pueden variar según la temporada.',
        },
        reserve: { heading: 'Reservar mesa', intro: 'Reserva al instante con nuestro widget.' },
        groupMenu: {
          heading: 'MENÚ PARA GRUPOS €35.00',
          appetizer: {
            title: 'Entrante',
            option1: {
              name: 'Croquetas de queso caseras',
              translations: {
                en: 'Homemade cheese croquettes',
                fr: 'Croquettes de fromage maison',
                de: 'Käsekroketten',
                es: 'Croquetas de queso caseras'
              }
            },
            option2: {
              name: 'Croquetas de gambas caseras',
              translations: {
                en: 'Homemade shrimp croquettes',
                fr: 'Croquettes de crevettes maison',
                de: 'Hausgemachte Garnelenkroketten',
                es: 'Croquetas de gambas caseras'
              }
            }
          },
          mainCourse: {
            title: 'Plato principal',
            option1: {
              name: 'Bistec natural',
              translations: {
                en: 'Natural steak',
                fr: 'Steak nature',
                de: 'Steak Natur',
                es: 'Bistec natural'
              }
            },
            option2: {
              name: 'Salmón horneado',
              translations: {
                en: 'Baked salmon',
                fr: 'Saumon cuit',
                de: 'Gebackener Lachs',
                es: 'Salmón horneado'
              }
            }
          },
          dessert: {
            title: 'Postre',
            option1: {
              name: 'Café/Té',
              translations: {
                en: 'Coffee/Tea',
                fr: 'Café/Thé',
                de: 'Kaffee/Tee',
                es: 'Café/Té'
              }
            },
            option2: {
              name: 'Dame Blanche',
              translations: {
                en: 'Dame Blanche',
                fr: 'Dame Blanche',
                de: 'Dame Blanche',
                es: 'Dame Blanche'
              }
            }
          },
          separator: 'o',
          stars: '★ ★ ★',
          description: 'Ideal para reservas de grupos y ocasiones especiales. Este menú prefijado ofrece una selección de nuestros mejores platos a un excelente precio.',
          contactInfo: 'Para reservas de grupos, por favor, póngase en contacto con nosotros directamente.'
        },
        footer: { rights: 'Todos los derechos reservados.', btw: 'IVA' },
      },
    },
  },
};

const storedLanguage = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: storedLanguage || 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18next;


