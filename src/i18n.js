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
            'Family-owned Belgian restaurant in the heart of Bruges. Enjoy Carbonade Flamande, mussels, steak, and local beers in a cozy setting near Minnewaterpark. Traveller\'s Choice 2022–2024.',
        },
        about: {
          heading: 'About us',
          copy:
            'Nestled in the heart of Minnewaterpark in Bruges, Délice Brugge is a cherished Belgian restaurant that captures the warmth of family-owned hospitality. Our passion is to make every visitor’s experience in Bruges unforgettable, offering authentic Belgian cuisine in a cozy, welcoming atmosphere. Loved by locals and travelers alike, Délice Brugge is where the charm of Belgium comes alive, one delicious meal at a time.',
          extraSeo:
            'Signature dishes include Carbonade Flamande (Flemish beef stew), fresh mussels, steak, and seasonal specials. Ideal for families, couples, and groups exploring Bruges. Located steps from Minnewaterpark, with friendly service and great value.',
        },
        reviews: {
          heading: 'Guests say',
          items: [
            '“Perfect place to experience traditional Belgian food… Carbonade Flamande and mussels were so tasty.”',
            '“Fish and chips were perfect… I had carbonade/stoofvlees. The beef melted in the mouth.”',
            '“Scampi in garlic butter with fresh salad and frites… highly recommend eating here.”',
            '“Lovely small bistro… fish stew with mussels was thoroughly enjoyed. I had the steak, delicious and tender."',
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
            rabbitPrunes: {
              name: 'Steak',
              desc: 'Traditional Belgian steak specialty.',
            },
          },
        },
        reserve: {
          heading: 'Reserve a table',
          intro: 'Book instantly via our partner widget.',
        },
        groupMenu: {
          heading: 'MENU €36.50',
          perPerson: 'per person',
          chooseOne: 'choose one',
          heroDescription: 'Perfect for group bookings and special occasions. Each course offers two delicious options - choose your preference.',
          appetizer: {
            title: 'Appetizer',
            option1: {
              name: 'Homemade cheese croquettes',
              translations: {
                en: 'Homemade cheese croquettes',
                fr: 'Croquettes de fromage maison',
                de: 'Hausgemachte Käsekroketten',
                es: 'Croquetas de queso caseras'
              }
            },
            option2: {
              name: 'Homemade shrimp croquettes',
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
              name: 'Natural steak',
              translations: {
                en: 'Natural steak',
                fr: 'Steak nature',
                de: 'Steak Natur',
                es: 'Bistec natural'
              }
            },
            option2: {
              name: 'Baked salmon with béarnaise sauce',
              translations: {
                en: 'Baked salmon with béarnaise sauce',
                fr: 'Saumon cuit avec sauce béarnaise',
                de: 'Gebackener Lachs mit Béarnaisesauce',
                es: 'Salmón horneado con salsa bearnesa'
              }
            }
          },
          dessert: {
            title: 'Dessert',
            option1: {
              name: 'Coffee/Tea',
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
          description: 'Perfect for group bookings and special occasions. This pre-fixed menu offers a selection of our finest dishes at an excellent value.',
          contactInfo: 'For group reservations, please contact us directly.',
          bookingSection: {
            title: 'Ready to Book Your Group?',
            heading: 'Let\'s Make Your Group Dining Special',
            detailsIntro: 'Please provide your details including:',
            detailsList: [
              'Number of people in your group',
              'Preferred date and time',
              'Dish preferences for each person (Option 1 or Option 2)',
              'Any special dietary requirements or allergies',
              'Contact information for confirmation'
            ],
            emailButton: '✉️ Email Your Group Booking Request',
            emailSubject: 'Group Booking Request',
            emailBody: 'Hello,\n\nI would like to make a group booking with the following details:\n\nTotal number of people:\nPreferred date:\nPreferred time:\n\nDish preferences (please specify how many people want each option):\n- Appetizer:\n  • Option 1 (Homemade cheese croquettes): ___ people\n  • Option 2 (Homemade shrimp croquettes): ___ people\n- Main Course:\n  • Option 1 (Natural steak): ___ people\n  • Option 2 (Baked salmon with béarnaise sauce): ___ people\n- Dessert:\n  • Option 1 (Coffee/Tea): ___ people\n  • Option 2 (Dame Blanche): ___ people\n\nSpecial requirements or allergies:\n\nThank you!'
          }
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
        nav: { home: 'Home', menu: 'Menu', reserve: 'Reserveren', language: 'Taal' },
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
            'Familierestaurant in het hart van Brugge. Geniet van stoofvlees, mosselen, steak en lokale bieren in een gezellige sfeer nabij Minnewaterpark.',
        },
        about: {
          heading: 'Over ons',
          copy:
            'In het hart van het Minnewaterpark in Brugge verwelkomt Délice Brugge u met warme, familiale gastvrijheid. Wij maken uw bezoek aan Brugge onvergetelijk met authentieke Belgische keuken in een knusse, gezellige sfeer.',
          extraSeo:
            'Signatuurgerechten: stoofvlees, verse mosselen, steak en seizoensgerechten. Ideal voor families, koppels en groepen, op wandelafstand van het Minnewaterpark.',
        },
        reviews: {
          heading: 'Wat gasten zeggen',
          items: [
            '“Perfecte plek voor traditionele Belgische keuken… Stoofvlees en mosselen waren heerlijk.”',
            '“Fish and chips waren perfect… Het stoofvlees smolt op de tong.”',
            '“Scampi in lookboter met frisse salade en frietjes… absolute aanrader.”',
            '“Kleine, gezellige bistro… visstoofpot met mosselen smaakte uitstekend. Steak was heerlijk.”',
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
          sections: { classics: 'Belgische klassiekers', seafood: 'Zeevruchten', pastaVeg: 'Pasta & Vegetarisch', desserts: 'Desserts' },
          items: {
            carbonade: { name: 'Stoofvlees', desc: 'Belgische runderstoof met bier, geserveerd met frietjes.' },
            mussels: { name: 'Mosselen', desc: 'Verse mosselen op klassieke Belgische wijze.' },
            rabbitPrunes: { name: 'Steak', desc: 'Traditionele Belgische steak specialiteit.' },
          },
        },
        reserve: { heading: 'Reserveer een tafel', intro: 'Boek direct via onze partnerwidget.' },
        groupMenu: {
          heading: 'MENU €36.50',
          perPerson: 'per persoon',
          chooseOne: 'kies er één',
          heroDescription: 'Perfect voor groepsboekingen en bijzondere gelegenheden. Elke gang biedt twee heerlijke opties - kies uw voorkeur.',
          appetizer: {
            title: 'Voorgerecht',
            option1: {
              name: 'Huisgemaakte Kaaskroketten',
              translations: {
                en: 'Homemade cheese croquettes',
                fr: 'Croquettes de fromage maison',
                de: 'Hausgemachte Käsekroketten',
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
              name: 'Gebakken Zalm met Béarnaisesaus',
              translations: {
                en: 'Baked salmon with béarnaise sauce',
                fr: 'Saumon cuit avec sauce béarnaise',
                de: 'Gebackener Lachs mit Béarnaisesauce',
                es: 'Salmón horneado con salsa bearnesa'
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
          description: 'Perfect voor groepsboekingen en bijzondere gelegenheden. Dit vooraf vastgesteld menu biedt een selectie van onze beste gerechten tegen een uitstekende waarde.',
          contactInfo: 'Voor groepsboekingen, neem dan contact met ons op.',
          bookingSection: {
            title: 'Klaar om uw groep te boeken?',
            heading: 'Laten we uw groepsdining speciaal maken',
            detailsIntro: 'Geef alstublieft uw gegevens op, inclusief:',
            detailsList: [
              'Aantal mensen in uw groep',
              'Gewenste datum en tijd',
              'Gerechtvoorkeuren voor elke persoon (Optie 1 of 2)',
              'Eventuele speciale dieetwensen of allergieën',
              'Contactgegevens voor bevestiging'
            ],
            emailButton: '✉️ E-mail uw groepsboekingsverzoek',
            emailSubject: 'Groepsboekingsverzoek',
            emailBody: 'Hallo,\n\nIk zou graag een groepsboeking willen maken met de volgende gegevens:\n\nTotaal aantal mensen:\nGewenste datum:\nGewenste tijd:\n\nGerechtvoorkeuren (geef alstublieft aan hoeveel mensen elke optie willen):\n- Voorgerecht:\n  • Optie 1 (Huisgemaakte kaaskroketten): ___ mensen\n  • Optie 2 (Huisgemaakte garnaalkroketten): ___ mensen\n- Hoofdgerecht:\n  • Optie 1 (Steak Natuur): ___ mensen\n  • Optie 2 (Gebakken zalm met béarnaisesaus): ___ mensen\n- Nagerecht:\n  • Optie 1 (Koffie/Thee): ___ mensen\n  • Optie 2 (Dame Blanche): ___ mensen\n\nSpeciale wensen of allergieën:\n\nBedankt!'
          }
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
        nav: { home: 'Accueil', menu: 'Menu', reserve: 'Réserver', language: 'Langue' },
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
            'Restaurant familial au cœur de Bruges. Dégustez carbonade flamande, moules, steak et bières locales dans une ambiance chaleureuse près du Minnewaterpark.',
        },
        about: {
          heading: 'À propos',
          copy:
            'Situé au cœur du Minnewaterpark à Bruges, Délice Brugge incarne la chaleureuse hospitalité familiale belge, avec une cuisine authentique dans une ambiance conviviale.',
          extraSeo:
            'Plats signature : carbonade flamande, moules fraîches, steak, suggestions de saison. Idéal pour familles, couples et groupes, à deux pas du Minnewaterpark.',
        },
        reviews: {
          heading: 'Avis des clients',
          items: [
            '« Endroit parfait pour goûter la cuisine belge traditionnelle… Carbonade et moules délicieuses. »',
            '« Fish and chips parfait… La carbonade fond dans la bouche. »',
            '« Scampi au beurre à l’ail avec salade fraîche et frites… fortement recommandé. »',
            '« Petit bistrot chaleureux… la soupe de poisson avec moules était excellente. Steak délicieux. »',
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

            rabbitPrunes: { name: 'Steak', desc: 'Spécialité belge traditionnelle.' },
            scampi: { name: 'Scampi au beurre à l’ail', desc: 'Crevettes au beurre d’ail, salade et frites.' },
            chickenCream: { name: 'Poulet à la crème', desc: 'Classique réconfortant à la sauce crémeuse.' },
            vegLasagne: { name: 'Lasagne végétarienne', desc: 'Légumes, tomate et fromage, gratinés.' },
            chocMousse: { name: 'Mousse au chocolat', desc: 'Mousse au chocolat belge riche et aérienne.' },
          },

        },
        reserve: { heading: 'Réserver une table', intro: 'Réservez instantanément via notre widget partenaire.' },
        groupMenu: {
          heading: 'MENU €36.50',
          perPerson: 'par personne',
          chooseOne: 'choisissez-en un',
          heroDescription: 'Parfait pour les réservations de groupe et les occasions spéciales. Chaque plat propose deux délicieuses options - choisissez votre préférence.',
          appetizer: {
            title: 'Entrée',
            option1: {
              name: 'Croquettes de fromage maison',
              translations: {
                en: 'Homemade cheese croquettes',
                fr: 'Croquettes de fromage maison',
                de: 'Hausgemachte Käsekroketten',
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
              name: 'Saumon cuit avec sauce béarnaise',
              translations: {
                en: 'Baked salmon with béarnaise sauce',
                fr: 'Saumon cuit avec sauce béarnaise',
                de: 'Gebackener Lachs mit Béarnaisesauce',
                es: 'Salmón horneado con salsa bearnesa'
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

          description: 'Parfait pour les réservations de groupe et les occasions spéciales. Ce menu préfixé offre une sélection de nos meilleurs plats à un excellent prix.',
          contactInfo: 'Pour les réservations de groupe, veuillez nous contacter directement.',
          bookingSection: {
            title: 'Prêt à réserver votre groupe ?',
            heading: 'Rendons votre dîner de groupe spécial',
            detailsIntro: 'Veuillez fournir vos détails, y compris :',
            detailsList: [
              'Nombre de personnes dans votre groupe',
              'Date et heure préférées',
              'Préférences de plats pour chaque personne (Option 1 ou 2)',
              'Exigences alimentaires spéciales ou allergies',
              'Informations de contact pour confirmation'
            ],
            emailButton: '✉️ Envoyer votre demande de réservation de groupe',
            emailSubject: 'Demande de réservation de groupe',
            emailBody: 'Bonjour,\n\nJe souhaiterais faire une réservation de groupe avec les détails suivants :\n\nNombre total de personnes :\nDate préférée :\nHeure préférée :\n\nPréférences de plats (veuillez spécifier combien de personnes veulent chaque option) :\n- Entrée :\n  • Option 1 (Croquettes de fromage maison) : ___ personnes\n  • Option 2 (Croquettes de crevettes maison) : ___ personnes\n- Plat principal :\n  • Option 1 (Steak nature) : ___ personnes\n  • Option 2 (Saumon cuit avec sauce béarnaise) : ___ personnes\n- Dessert :\n  • Option 1 (Café/Thé) : ___ personnes\n  • Option 2 (Dame Blanche) : ___ personnes\n\nExigences spéciales ou allergies :\n\nMerci !'
          }
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
        nav: { home: 'Start', menu: 'Speisekarte', reserve: 'Reservieren', language: 'Sprache' },
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
            'Familiengeführtes belgisches Restaurant in Brügge. Genießen Sie Carbonade Flamande, Muscheln, Steak und lokale Biere in gemütlicher Atmosphäre nahe dem Minnewaterpark.',
        },
        about: {
          heading: 'Über uns',
          copy:
            'Im Herzen des Minnewaterparks in Brügge bietet Délice Brugge herzliche, familiengeführte Gastfreundschaft und authentische belgische Küche in gemütlicher Atmosphäre.',
          extraSeo:
            'Signature-Gerichte: Carbonade Flamande, frische Muscheln, Steak, saisonale Spezialitäten. Ideal für Familien, Paare und Gruppen nahe dem Minnewaterpark.',
        },
        reviews: {
          heading: 'Gästestimmen',
          items: [
            '„Perfekter Ort für traditionelle belgische Küche… Carbonade und Muscheln waren köstlich.“',
            '„Fish and Chips perfekt… Das Schmorgericht zart wie Butter.“',
            '„Scampi in Knoblauchbutter mit frischem Salat und Pommes… sehr zu empfehlen.“',
            '„Kleines, gemütliches Bistro… Fischeintopf mit Muscheln hervorragend. Steak köstlich.“',
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
          sections: { classics: 'Belgische Klassiker', seafood: 'Meeresfrüchte', pastaVeg: 'Pasta & Vegetarisch', desserts: 'Desserts' },
          items: {
            carbonade: { name: 'Carbonade Flamande', desc: 'Belgischer Bierschmorbraten, mit Pommes.' },
            mussels: { name: 'Miesmuscheln', desc: 'Frische Muscheln nach belgischer Art.' },
            rabbitPrunes: { name: 'Steak', desc: 'Traditionelle belgische Steak-Spezialität.' },
          },
        },
        reserve: { heading: 'Tisch reservieren', intro: 'Buchen Sie direkt über das Partner-Widget.' },
        groupMenu: {
          heading: 'MENÜ €36.50',
          perPerson: 'pro Person',
          chooseOne: 'wählen Sie eine',
          heroDescription: 'Ideal für Gruppenbuchungen und besondere Anlässe. Jeder Gang bietet zwei köstliche Optionen - wählen Sie Ihre Präferenz.',
          appetizer: {
            title: 'Vorspeise',
            option1: {
              name: 'Hausgemachte Käsekroketten',
              translations: {
                en: 'Homemade cheese croquettes',
                fr: 'Croquettes de fromage maison',
                de: 'Hausgemachte Käsekroketten',
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
              name: 'Gebackener Lachs mit Béarnaisesauce',
              translations: {
                en: 'Baked salmon with béarnaise sauce',
                fr: 'Saumon cuit avec sauce béarnaise',
                de: 'Gebackener Lachs mit Béarnaisesauce',
                es: 'Salmón horneado con salsa bearnesa'
          }
            }
          },
          dessert: {
            title: 'Nachspeise',
            option1: {
              name: 'Kaffee/Tee',
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

          description: 'Ideal für Gruppenbuchungen und besondere Anlässe. Dieses vorgefertigte Menü bietet eine Auswahl unserer besten Gerichte zu einem hervorragenden Preis.',
          contactInfo: 'Für Gruppenbuchungen wenden Sie sich bitte direkt an uns.',
          bookingSection: {
            title: 'Bereit, Ihre Gruppe zu buchen?',
            heading: 'Lassen Sie uns Ihr Gruppenessen besonders machen',
            detailsIntro: 'Bitte geben Sie Ihre Details an, einschließlich:',
            detailsList: [
              'Anzahl der Personen in Ihrer Gruppe',
              'Bevorzugtes Datum und Uhrzeit',
              'Gerichtsvorlieben für jede Person (Option 1 oder 2)',
              'Besondere Ernährungsanforderungen oder Allergien',
              'Kontaktinformationen zur Bestätigung'
            ],
            emailButton: '✉️ E-Mail-Anfrage für Gruppenbuchung senden',
            emailSubject: 'Anfrage für Gruppenbuchung',
            emailBody: 'Hallo,\n\nIch möchte eine Gruppenbuchung mit den folgenden Details machen:\n\nGesamtanzahl der Personen:\nBevorzugtes Datum:\nBevorzugte Uhrzeit:\n\nGerichtsvorlieben (bitte geben Sie an, wie viele Personen jede Option möchten):\n- Vorspeise:\n  • Option 1 (Hausgemachte Käsekroketten): ___ Personen\n  • Option 2 (Hausgemachte Garnelenkroketten): ___ Personen\n- Hauptgericht:\n  • Option 1 (Steak Natur): ___ Personen\n  • Option 2 (Gebackener Lachs mit Béarnaisesauce): ___ Personen\n- Nachspeise:\n  • Option 1 (Kaffee/Tee): ___ Personen\n  • Option 2 (Dame Blanche): ___ Personen\n\nBesondere Anforderungen oder Allergien:\n\nVielen Dank!'
          }
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
        nav: { home: 'Inicio', menu: 'Menú', reserve: 'Reservas', language: 'Idioma' },
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
            'Restaurante familiar en el corazón de Brujas. Carbonade flamande, mejillones, bistec y cervezas locales en un ambiente acogedor cerca del Minnewaterpark.',
        },
        about: {
          heading: 'Quiénes somos',
          copy:
            'En el corazón del Minnewaterpark en Brujas, Délice Brugge ofrece hospitalidad familiar y cocina belga auténtica en un ambiente cálido y acogedor.',
          extraSeo:
            'Platos destacados: carbonade flamande, mejillones frescos, bistec y especialidades de temporada. Ideal para familias, parejas y grupos cerca del Minnewaterpark.',
        },
        reviews: {
          heading: 'Opiniones',
          items: [
            '“Lugar perfecto para probar la comida belga tradicional… Carbonade y mejillones deliciosos.”',
            '“Fish and chips perfecto… la carbonade se deshacía en la boca.”',
            '“Gambas al ajillo con ensalada fresca y patatas fritas… muy recomendable.”',
            '“Pequeño bistró acogedor… guiso de pescado con mejillones excelente. Bistec delicioso.”',
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
          sections: { classics: 'Clásicos belgas', seafood: 'Mariscos', pastaVeg: 'Pasta y vegetariano', desserts: 'Postres' },
          items: {
            carbonade: { name: 'Carbonade flamande', desc: 'Estofado de ternera a la cerveza belga con patatas fritas.' },
            mussels: { name: 'Mejillones', desc: 'Mejillones frescos al estilo belga.' },
            rabbitPrunes: { name: 'Bistec', desc: 'Especialidad belga tradicional.' },
          },
        },
        reserve: { heading: 'Reservar mesa', intro: 'Reserva al instante con nuestro widget.' },
        groupMenu: {
          heading: 'MENÚ €36.50',
          perPerson: 'por persona',
          chooseOne: 'elija uno',
          heroDescription: 'Ideal para reservas de grupos y ocasiones especiales. Cada plato ofrece dos deliciosas opciones - elija su preferencia.',
          appetizer: {
            title: 'Entrante',
            option1: {
              name: 'Croquetas de queso caseras',
              translations: {
                en: 'Homemade cheese croquettes',
                fr: 'Croquettes de fromage maison',
                de: 'Hausgemachte Käsekroketten',
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
              name: 'Salmón horneado con salsa bearnesa',
              translations: {
                en: 'Baked salmon with béarnaise sauce',
                fr: 'Saumon cuit avec sauce béarnaise',
                de: 'Gebackener Lachs mit Béarnaisesauce',
                es: 'Salmón horneado con salsa bearnesa'
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

          description: 'Ideal para reservas de grupos y ocasiones especiales. Este menú prefijado ofrece una selección de nuestros mejores platos a un excelente precio.',
          contactInfo: 'Para reservas de grupos, por favor, póngase en contacto con nosotros directamente.',
          bookingSection: {
            title: '¿Listo para reservar su grupo?',
            heading: 'Hagamos especial su cena de grupo',
            detailsIntro: 'Por favor, proporcione sus detalles, incluyendo:',
            detailsList: [
              'Número de personas en su grupo',
              'Fecha y hora preferidas',
              'Preferencias de platos para cada persona (Opción 1 o 2)',
              'Cualquier requisito dietético especial o alergias',
              'Información de contacto para confirmación'
            ],
            emailButton: '✉️ Enviar su solicitud de reserva de grupo',
            emailSubject: 'Solicitud de reserva de grupo',
            emailBody: 'Hola,\n\nMe gustaría hacer una reserva de grupo con los siguientes detalles:\n\nNúmero total de personas:\nFecha preferida:\nHora preferida:\n\nPreferencias de platos (por favor especifique cuántas personas quieren cada opción):\n- Entrante:\n  • Opción 1 (Croquetas de queso caseras): ___ personas\n  • Opción 2 (Croquetas de gambas caseras): ___ personas\n- Plato principal:\n  • Opción 1 (Bistec natural): ___ personas\n  • Opción 2 (Salmón horneado con salsa bearnesa): ___ personas\n- Postre:\n  • Opción 1 (Café/Té): ___ personas\n  • Opción 2 (Dame Blanche): ___ personas\n\nRequisitos especiales o alergias:\n\n¡Gracias!'
          }
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


