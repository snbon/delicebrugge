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
            title: 'Ready to book your group?',
            heading: 'Let\'s make your group dinner special',
            detailsIntro: 'Please provide your details, including:',
            detailsList: [
              'Number of people in your group',
              'Preferred date and time',
              'Dish preferences for each person (Option 1 or Option 2)',
              'Any special dietary requirements or allergies',
              'Contact information for confirmation'
            ],
            emailButton: '✉️ Send your group booking request',
            emailSubject: 'Group booking request',
            emailBody: 'Hello,\n\nI would like to make a group booking with the following details:\n\nTotal number of people:\nPreferred date:\nPreferred time:\n\nDish preferences (please specify how many people want each option):\n- Appetizer:\n  • Option 1 (Homemade cheese croquettes): ___ people\n  • Option 2 (Homemade shrimp croquettes): ___ people\n- Main Course:\n  • Option 1 (Natural steak): ___ people\n  • Option 2 (Baked salmon with béarnaise sauce): ___ people\n- Dessert:\n  • Option 1 (Coffee/Tea): ___ people\n  • Option 2 (Dame Blanche): ___ people\n\nSpecial requirements or allergies:\n\nThank you!'
          },
        },
        groupBooking: {
          heading: 'Group Booking',
          subtitle: 'For groups of 6 or more guests',
          welcome: {
            greeting: 'Dear Guest,',
            description: 'For group bookings, we have 2 formulas that you have to choose in advance with a deposit. We do this for efficiency and to guarantee quality.',
            option1: {
              title: 'Option 1: À la Carte',
              description: 'Choose 5 different main dishes and 5 starters if applicable, from our à la carte menu.'
            },
            option2: {
              title: 'Option 2: Menu',
              description: 'Choose our well-known and popular menu. Please provide your choices of the 3-course meal in advance.'
            },
            bookNow: 'Book Now'
          },
          steps: {
            step1: 'Guest Details',
            step2: 'Menu Selection',
            step3: 'Dish Selection',
            step4: 'Quantities & Requests',
            step5: 'Summary & Confirmation',
            step6: 'Thank You'
          },
          guestDetails: {
            title: 'Guest Details',
            name: 'Name',
            email: 'Email',
            phone: 'Phone',
            date: 'Date',
            time: 'Time',
            guests: 'Number of guests',
            minGuests: 'Minimum 6 guests required',
            depositAgreement: 'I agree to pay a deposit per group and accept the cancellation policy (non-refundable if cancelled within 6 hours before reservation).',
            next: 'Next'
          },
          menuSelection: {
            title: 'Menu Selection',
            option1: {
              title: 'À la Carte',
              description: 'Choose 5 starters and 5 mains from our full restaurant menu. This option allows you to personalize your group meal from our à la carte offerings.'
            },
            option2: {
              title: 'Menu',
              description: 'Enjoy our popular fixed 3-course menu. Perfect for a hassle-free experience with carefully curated dishes.',
              price: '€36.50 per person'
            },
            select: 'Select this option',
            next: 'Next'
          },
                                dishSelection: {
            title: 'Dish Selection',
            subtitle: 'You can specify quantities in the next step',
            starters: 'Starters',
            mains: 'Main Dishes',
            desserts: 'Desserts',
              selectExactly: 'Select exactly',
              selectUpTo: 'Select up to',
              items: 'items',
              groupMenu: {
                appetizer: 'Appetizer',
                mainCourse: 'Main Course',
                dessert: 'Dessert',
                chooseOne: 'Choose one option per course'
              },
              next: 'Next'
            },
          quantities: {
            title: 'Assign Quantities & Special Requests',
            quantity: 'Quantity',
            totalGuests: 'Total guests:',
            validationError: 'Total quantities must equal total guest count',
            specialRequests: 'Special requests (optional)',
            priceNote: 'Note: This price does not include drinks or extras. This is an indication of the menu price.',
            next: 'Next'
          },
          summary: {
            title: 'Summary & Confirmation',
            guestInfo: 'Guest Information',
            bookingDetails: 'Booking Details',
            menuOption: 'Menu Option',
            dishes: 'Dishes & Quantities',
            specialRequests: 'Special Requests',
            totalPrice: 'Total Price',
            confirmAgreement: 'I confirm the above details are correct and understand that a deposit will be required to secure the booking.',
            submit: 'Submit Booking',
            submitting: 'Submitting...'
          },
          thankYou: {
            title: 'Thank You!',
            message: 'Your group booking request has been received. We will review your details and confirm your reservation as soon as possible.',
            summary: 'Booking Summary'
          },
          navigation: {
            back: 'Back',
            next: 'Next'
          },
          validation: {
            required: 'This field is required',
            invalidEmail: 'Please enter a valid email address',
            invalidPhone: 'Please enter a valid phone number',
            minGuests: 'Minimum 6 guests required',
            invalidDate: 'Please select a future date',
            invalidTime: 'Please select a valid time',
            selectMenuOption: 'Please select a menu option',
            selectDishes: 'Please select the required number of dishes',
            quantitiesMismatch: 'Total quantities must equal total guest count',
            agreementRequired: 'You must agree to the terms to continue'
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
              name: 'Huisgemaakte kaaskroketten',
              translations: {
                en: 'Homemade cheese croquettes',
                fr: 'Croquettes de fromage maison',
                de: 'Hausgemachte Käsekroketten',
                es: 'Croquetas de queso caseras'
              }
            },
            option2: {
              name: 'Huisgemaakte garnalenkroketten',
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
              name: 'Natuurlijke biefstuk',
              translations: {
                en: 'Natural steak',
                fr: 'Steak nature',
                de: 'Steak Natur',
                es: 'Bistec natural'
              }
            },
            option2: {
              name: 'Gebakken zalm met bearnaisesaus',
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
          description: 'Perfect voor groepsboekingen en bijzondere gelegenheden. Dit vooraf vastgestelde menu biedt een selectie van onze beste gerechten tegen een uitstekende prijs.',
          contactInfo: 'Voor groepsreserveringen, neem rechtstreeks contact met ons op.',
          bookingSection: {
            title: 'Klaar om uw groep te boeken?',
            heading: 'Laten we uw groepsdiner speciaal maken',
            detailsIntro: 'Geef alstublieft uw gegevens op, inclusief:',
            detailsList: [
              'Aantal mensen in uw groep',
              'Gewenste datum en tijd',
              'Gerechtvoorkeuren voor elke persoon (Optie 1 of 2)',
              'Eventuele speciale dieetwensen of allergieën',
              'Contactgegevens voor bevestiging'
            ],
            emailButton: '✉️ Verstuur uw groepsboekingsverzoek',
            emailSubject: 'Groepsboekingsverzoek',
            emailBody: 'Hallo,\n\nIk zou graag een groepsboeking willen maken met de volgende gegevens:\n\nTotaal aantal mensen:\nGewenste datum:\nGewenste tijd:\n\nGerechtvoorkeuren (geef alstublieft aan hoeveel mensen elke optie willen):\n- Voorgerecht:\n  • Optie 1 (Huisgemaakte kaaskroketten): ___ mensen\n  • Optie 2 (Huisgemaakte garnalenkroketten): ___ mensen\n- Hoofdgerecht:\n  • Optie 1 (Natuurlijke biefstuk): ___ mensen\n  • Optie 2 (Gebakken zalm met bearnaisesaus): ___ mensen\n- Dessert:\n  • Optie 1 (Koffie/Thee): ___ mensen\n  • Optie 2 (Dame Blanche): ___ mensen\n\nBijzondere wensen of allergieën:\n\nBedankt!'
          },
        },
        groupBooking: {
          heading: 'Groepsboeking',
          subtitle: 'Voor groepen van 6 of meer gasten',
          welcome: {
            greeting: 'Beste Gast,',
            description: 'Voor groepsboekingen hebben we 2 formules die u van tevoren moet kiezen met een aanbetaling. We doen dit voor efficiëntie en om kwaliteit te garanderen.',
            option1: {
              title: 'Optie 1: À la Carte',
              description: 'Kies 5 verschillende hoofdgerechten en 5 voorgerechten indien van toepassing, uit ons à la carte menu.'
            },
            option2: {
              title: 'Optie 2: Menu',
              description: 'Kies ons bekende en populaire menu. Geef alstublieft van tevoren uw keuzes voor de 3-gangen maaltijd op.'
            },
            bookNow: 'Nu Boeken'
          },
          steps: {
            step1: 'Gastgegevens',
            step2: 'Menukeuze',
            step3: 'Gerechtselectie',
            step4: 'Aantallen & Verzoeken',
            step5: 'Samenvatting & Bevestiging',
            step6: 'Bedankt'
          },
          guestDetails: {
            title: 'Gastgegevens',
            name: 'Naam',
            email: 'E-mail',
            phone: 'Telefoon',
            date: 'Datum',
            time: 'Tijd',
            guests: 'Aantal gasten',
            minGuests: 'Minimum 6 gasten vereist',
            depositAgreement: 'Ik ga akkoord met het betalen van een aanbetaling per groep en accepteer het annuleringsbeleid (niet-restitueerbaar indien geannuleerd binnen 6 uur voor de reservering).',
            next: 'Volgende'
          },
          menuSelection: {
            title: 'Menukeuze',
            option1: {
              title: 'À la Carte',
              description: 'Kies 5 voorgerechten en 5 hoofdgerechten uit ons volledige restaurantmenu. Deze optie stelt u in staat om uw groepsmaaltijd te personaliseren uit onze à la carte aanbiedingen.'
            },
            option2: {
              title: 'Menu',
              description: 'Geniet van ons populaire vaste 3-gangen menu. Perfect voor een zorgeloze ervaring met zorgvuldig samengestelde gerechten.',
              price: '€36.50 per persoon'
            },
            select: 'Selecteer deze optie',
            next: 'Volgende'
          },
                                dishSelection: {
            title: 'Gerechtselectie',
            subtitle: 'U kunt de hoeveelheden specificeren in de volgende stap',
            starters: 'Voorgerechten',
            mains: 'Hoofdgerechten',
            desserts: 'Desserts',
              selectExactly: 'Selecteer precies',
              selectUpTo: 'Selecteer maximaal',
              items: 'items',
              groupMenu: {
                appetizer: 'Voorgerecht',
                mainCourse: 'Hoofdgerecht',
                dessert: 'Nagerecht',
                chooseOne: 'Kies één optie per gang'
              },
              next: 'Volgende'
            },
          quantities: {
            title: 'Aantallen toewijzen & Speciale verzoeken',
            quantity: 'Aantal',
            totalGuests: 'Totaal gasten:',
            validationError: 'Totaal aantallen moeten gelijk zijn aan totaal gastenaantal',
            specialRequests: 'Speciale verzoeken (optioneel)',
            priceNote: 'Opmerking: Deze prijs omvat geen dranken of extra\'s. Dit is een indicatie van de menuprijs.',
            next: 'Volgende'
          },
          summary: {
            title: 'Samenvatting & Bevestiging',
            guestInfo: 'Gastinformatie',
            bookingDetails: 'Boekingsgegevens',
            menuOption: 'Menuoptie',
            dishes: 'Gerechten & Aantallen',
            specialRequests: 'Speciale verzoeken',
            totalPrice: 'Totaalprijs',
            confirmAgreement: 'Ik bevestig dat de bovenstaande gegevens correct zijn en begrijp dat een aanbetaling vereist zal zijn om de boeking te bevestigen.',
            submit: 'Boeking indienen',
            submitting: 'Indienen...'
          },
          thankYou: {
            title: 'Bedankt!',
            message: 'Uw groepsboekingsverzoek is ontvangen. We zullen uw gegevens bekijken en uw reservering zo spoedig mogelijk bevestigen.',
            summary: 'Boekingssamenvatting'
          },
          navigation: {
            back: 'Terug',
            next: 'Volgende'
          },
          validation: {
            required: 'Dit veld is verplicht',
            invalidEmail: 'Voer een geldig e-mailadres in',
            invalidPhone: 'Voer een geldig telefoonnummer in',
            minGuests: 'Minimum 6 gasten vereist',
            invalidDate: 'Selecteer een toekomstige datum',
            invalidTime: 'Selecteer een geldige tijd',
            selectMenuOption: 'Selecteer een menuoptie',
            selectDishes: 'Selecteer het vereiste aantal gerechten',
            quantitiesMismatch: 'Totaal aantallen moeten gelijk zijn aan totaal gastenaantal',
            agreementRequired: 'U moet akkoord gaan met de voorwaarden om door te gaan'
          }
        },
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
            emailBody: 'Bonjour,\n\nJ\'aimerais faire une réservation de groupe avec les détails suivants :\n\nNombre total de personnes :\nDate préférée :\nHeure préférée :\n\nPréférences de plats (veuillez spécifier combien de personnes veulent chaque option) :\n- Entrée :\n  • Option 1 (Croquettes de fromage maison) : ___ personnes\n  • Option 2 (Croquettes de crevettes maison) : ___ personnes\n- Plat principal :\n  • Option 1 (Steak nature) : ___ personnes\n  • Option 2 (Saumon cuit avec sauce béarnaise) : ___ personnes\n- Dessert :\n  • Option 1 (Café/Thé) : ___ personnes\n  • Option 2 (Dame Blanche) : ___ personnes\n\nExigences spéciales ou allergies :\n\nMerci !'
          },
        },
        groupBooking: {
          heading: 'Réservation de Groupe',
          subtitle: 'Pour les groupes de 6 personnes ou plus',
          welcome: {
            greeting: 'Cher Invité,',
            description: 'Pour les réservations de groupe, nous avons 2 formules que vous devez choisir à l\'avance avec un acompte. Nous le faisons pour l\'efficacité et pour garantir la qualité.',
            option1: {
              title: 'Option 1: À la Carte',
              description: 'Choisissez 5 plats principaux différents et 5 entrées si applicable, dans notre menu à la carte.'
            },
            option2: {
              title: 'Option 2: Menu',
              description: 'Choisissez notre menu populaire et bien connu. Veuillez fournir vos choix pour le repas en 3 plats à l\'avance.'
            },
            bookNow: 'Réserver Maintenant'
          },
          steps: {
            step1: 'Détails des Invités',
            step2: 'Sélection du Menu',
            step3: 'Sélection des Plats',
            step4: 'Quantités & Demandes',
            step5: 'Résumé & Confirmation',
            step6: 'Merci'
          },
          guestDetails: {
            title: 'Détails des Invités',
            name: 'Nom',
            email: 'E-mail',
            phone: 'Téléphone',
            date: 'Date',
            time: 'Heure',
            guests: 'Nombre d\'invités',
            minGuests: 'Minimum 6 invités requis',
            depositAgreement: 'J\'accepte de payer un acompte par groupe et j\'accepte la politique d\'annulation (non remboursable si annulé dans les 6 heures précédant la réservation).',
            next: 'Suivant'
          },
          menuSelection: {
            title: 'Sélection du Menu',
            option1: {
              title: 'À la Carte',
              description: 'Choisissez 5 entrées et 5 plats principaux dans notre menu complet du restaurant. Cette option vous permet de personnaliser votre repas de groupe à partir de nos offres à la carte.'
            },
            option2: {
              title: 'Menu',
              description: 'Profitez de notre menu fixe en 3 plats populaire. Parfait pour une expérience sans souci avec des plats soigneusement sélectionnés.',
              price: '€36.50 par personne'
            },
            select: 'Sélectionner cette option',
            next: 'Suivant'
          },
                                dishSelection: {
            title: 'Sélection des Plats',
            subtitle: 'Vous pouvez spécifier les quantités à l\'étape suivante',
            starters: 'Entrées',
            mains: 'Plats Principaux',
            desserts: 'Desserts',
              selectExactly: 'Sélectionnez exactement',
              selectUpTo: 'Sélectionnez jusqu\'à',
              items: 'plats',
              groupMenu: {
                appetizer: 'Entrée',
                mainCourse: 'Plat Principal',
                dessert: 'Dessert',
                chooseOne: 'Choisissez une option par plat'
              },
              next: 'Suivant'
            },
          quantities: {
            title: 'Attribuer les Quantités & Demandes Spéciales',
            quantity: 'Quantité',
            totalGuests: 'Total des invités:',
            validationError: 'Les quantités totales doivent être égales au nombre total d\'invités',
            specialRequests: 'Demandes spéciales (optionnel)',
            priceNote: 'Note: Ce prix n\'inclut pas les boissons ou extras. Ceci est une indication du prix du menu.',
            next: 'Suivant'
          },
          summary: {
            title: 'Résumé & Confirmation',
            guestInfo: 'Informations des Invités',
            bookingDetails: 'Détails de la Réservation',
            menuOption: 'Option de Menu',
            dishes: 'Plats & Quantités',
            specialRequests: 'Demandes Spéciales',
            totalPrice: 'Prix Total',
            confirmAgreement: 'Je confirme que les détails ci-dessus sont corrects et je comprends qu\'un acompte sera requis pour confirmer la réservation.',
            submit: 'Soumettre la Réservation',
            submitting: 'Soumission...'
          },
          thankYou: {
            title: 'Merci!',
            message: 'Votre demande de réservation de groupe a été reçue. Nous examinerons vos détails et confirmerons votre réservation dès que possible.',
            summary: 'Résumé de la Réservation'
          },
          navigation: {
            back: 'Retour',
            next: 'Suivant'
          },
          validation: {
            required: 'Ce champ est requis',
            invalidEmail: 'Veuillez entrer une adresse e-mail valide',
            invalidPhone: 'Veuillez entrer un numéro de téléphone valide',
            minGuests: 'Minimum 6 invités requis',
            invalidDate: 'Veuillez sélectionner une date future',
            invalidTime: 'Veuillez sélectionner une heure valide',
            selectMenuOption: 'Veuillez sélectionner une option de menu',
            selectDishes: 'Veuillez sélectionner le nombre requis de plats',
            quantitiesMismatch: 'Les quantités totales doivent être égales au nombre total d\'invités',
            agreementRequired: 'Vous devez accepter les conditions pour continuer'
          }
        },
        groupMenu: {
          heading: 'MENU €36.50',
          perPerson: 'par personne',
          chooseOne: 'choisissez-en un',
          heroDescription: 'Parfait pour les réservations de groupe et les occasions spéciales. Chaque plat offre deux délicieuses options - choisissez votre préférence.',
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
            title: 'Dessert',
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
          description: 'Ideal für Gruppenbuchungen und besondere Anlässe. Dieses vorab festgelegte Menü bietet eine Auswahl unserer besten Gerichte zu einem ausgezeichneten Preis.',
          contactInfo: 'Für Gruppenreservierungen kontaktieren Sie uns bitte direkt.',
          bookingSection: {
            title: 'Bereit, Ihre Gruppe zu buchen?',
            heading: 'Lassen Sie uns Ihr Gruppendinner besonders machen',
            detailsIntro: 'Bitte geben Sie Ihre Details an, einschließlich:',
            detailsList: [
              'Anzahl der Personen in Ihrer Gruppe',
              'Bevorzugtes Datum und Uhrzeit',
              'Gerichtsvorlieben für jede Person (Option 1 oder 2)',
              'Besondere Ernährungsanforderungen oder Allergien',
              'Kontaktinformationen zur Bestätigung'
            ],
            emailButton: '✉️ Senden Sie Ihre Gruppenbuchungsanfrage',
            emailSubject: 'Gruppenbuchungsanfrage',
            emailBody: 'Hallo,\n\nIch möchte eine Gruppenbuchung mit den folgenden Details machen:\n\nGesamtanzahl der Personen:\nBevorzugtes Datum:\nBevorzugte Uhrzeit:\n\nGerichtsvorlieben (bitte geben Sie an, wie viele Personen jede Option möchten):\n- Vorspeise:\n  • Option 1 (Hausgemachte Käsekroketten): ___ Personen\n  • Option 2 (Hausgemachte Garnelenkroketten): ___ Personen\n- Hauptgericht:\n  • Option 1 (Steak Natur): ___ Personen\n  • Option 2 (Gebackener Lachs mit Béarnaisesauce): ___ Personen\n- Dessert:\n  • Option 1 (Kaffee/Tee): ___ Personen\n  • Option 2 (Dame Blanche): ___ Personen\n\nBesondere Anforderungen oder Allergien:\n\nVielen Dank!'
          },
        },
        groupBooking: {
          heading: 'Gruppenbuchung',
          subtitle: 'Für Gruppen von 6 oder mehr Gästen',
          welcome: {
            greeting: 'Lieber Gast,',
            description: 'Für Gruppenbuchungen haben wir 2 Formeln, die Sie im Voraus mit einer Anzahlung wählen müssen. Wir tun dies für Effizienz und um Qualität zu garantieren.',
            option1: {
              title: 'Option 1: À la Carte',
              description: 'Wählen Sie 5 verschiedene Hauptgerichte und 5 Vorspeisen, falls zutreffend, aus unserem À-la-Carte-Menü.'
            },
            option2: {
              title: 'Option 2: Menü',
              description: 'Wählen Sie unser bekanntes und beliebtes Menü. Bitte geben Sie im Voraus Ihre Wünsche für das 3-Gänge-Menü an.'
            },
            bookNow: 'Jetzt Buchen'
          },
          steps: {
            step1: 'Gastdetails',
            step2: 'Menüauswahl',
            step3: 'Gerichtsauswahl',
            step4: 'Mengen & Anfragen',
            step5: 'Zusammenfassung & Bestätigung',
            step6: 'Danke'
          },
          guestDetails: {
            title: 'Gastdetails',
            name: 'Name',
            email: 'E-Mail',
            phone: 'Telefon',
            date: 'Datum',
            time: 'Zeit',
            guests: 'Anzahl der Gäste',
            minGuests: 'Mindestens 6 Gäste erforderlich',
            depositAgreement: 'Ich stimme zu, eine Anzahlung pro Gruppe zu leisten und akzeptiere die Stornierungsbedingungen (nicht erstattungsfähig bei Stornierung innerhalb von 6 Stunden vor der Reservierung).',
            next: 'Weiter'
          },
          menuSelection: {
            title: 'Menüauswahl',
            option1: {
              title: 'À la Carte',
              description: 'Wählen Sie 5 Vorspeisen und 5 Hauptgerichte aus unserem vollständigen Restaurantmenü. Diese Option ermöglicht es Ihnen, Ihre Gruppenmahlzeit aus unseren À-la-Carte-Angeboten zu personalisieren.'
            },
            option2: {
              title: 'Menü',
              description: 'Genießen Sie unser beliebtes festes 3-Gänge-Menü. Perfekt für ein sorgenfreies Erlebnis mit sorgfältig kuratierten Gerichten.',
              price: '€36.50 pro Person'
            },
            select: 'Diese Option auswählen',
            next: 'Weiter'
          },
          dishSelection: {
            title: 'Gerichtsauswahl',
            subtitle: 'Sie können die Mengen im nächsten Schritt angeben',
            starters: 'Vorspeisen',
            mains: 'Hauptgerichte',
            desserts: 'Desserts',
            selectExactly: 'Wählen Sie genau',
            selectUpTo: 'Wählen Sie bis zu',
            items: 'Gerichte',
                          groupMenu: {
                appetizer: 'Vorspeise',
                mainCourse: 'Hauptgericht',
                dessert: 'Dessert',
                chooseOne: 'Wählen Sie eine Option pro Gang'
              },
            next: 'Weiter'
          },
          quantities: {
            title: 'Mengen zuweisen & Besondere Anfragen',
            quantity: 'Menge',
            totalGuests: 'Gesamtgäste:',
            validationError: 'Gesamtmengen müssen der Gesamtgästezahl entsprechen',
            specialRequests: 'Besondere Anfragen (optional)',
            priceNote: 'Hinweis: Dieser Preis umfasst keine Getränke oder Extras. Dies ist eine Angabe des Menüpreises.',
            next: 'Weiter'
          },
          summary: {
            title: 'Zusammenfassung & Bestätigung',
            guestInfo: 'Gastinformationen',
            bookingDetails: 'Buchungsdetails',
            menuOption: 'Menüoption',
            dishes: 'Gerichte & Mengen',
            specialRequests: 'Besondere Anfragen',
            totalPrice: 'Gesamtpreis',
            confirmAgreement: 'Ich bestätige, dass die obigen Details korrekt sind und verstehe, dass eine Anzahlung erforderlich sein wird, um die Buchung zu sichern.',
            submit: 'Buchung einreichen',
            submitting: 'Einreichen...'
          },
          thankYou: {
            title: 'Danke!',
            message: 'Ihre Gruppenbuchungsanfrage wurde erhalten. Wir werden Ihre Details überprüfen und Ihre Reservierung so schnell wie möglich bestätigen.',
            summary: 'Buchungszusammenfassung'
          },
          navigation: {
            back: 'Zurück',
            next: 'Weiter'
          },
          validation: {
            required: 'Dieses Feld ist erforderlich',
            invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
            invalidPhone: 'Bitte geben Sie eine gültige Telefonnummer ein',
            minGuests: 'Mindestens 6 Gäste erforderlich',
            invalidDate: 'Bitte wählen Sie ein zukünftiges Datum',
            invalidTime: 'Bitte wählen Sie eine gültige Zeit',
            selectMenuOption: 'Bitte wählen Sie eine Menüoption',
            selectDishes: 'Bitte wählen Sie die erforderliche Anzahl von Gerichten',
            quantitiesMismatch: 'Gesamtmengen müssen der Gesamtgästezahl entsprechen',
            agreementRequired: 'Sie müssen den Bedingungen zustimmen, um fortzufahren'
          }
        },
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
        groupBooking: {
          heading: 'Reserva de Grupo',
          subtitle: 'Para grupos de 6 o más invitados',
          welcome: {
            greeting: 'Estimado Invitado,',
            description: 'Para reservas de grupo, tenemos 2 fórmulas que debe elegir por adelantado con un depósito. Lo hacemos por eficiencia y para garantizar la calidad.',
            option1: {
              title: 'Opción 1: À la Carte',
              description: 'Elija 5 platos principales diferentes y 5 entrantes si corresponde, de nuestro menú à la carte.'
            },
            option2: {
              title: 'Opción 2: Menú',
              description: 'Elija nuestro conocido y popular menú. Por favor proporcione sus elecciones para la comida de 3 platos por adelantado.'
            },
            bookNow: 'Reservar Ahora'
          },
          steps: {
            step1: 'Detalles de Invitados',
            step2: 'Selección de Menú',
            step3: 'Selección de Platos',
            step4: 'Cantidades & Solicitudes',
            step5: 'Resumen & Confirmación',
            step6: 'Gracias'
          },
          guestDetails: {
            title: 'Detalles de Invitados',
            name: 'Nombre',
            email: 'Correo electrónico',
            phone: 'Teléfono',
            date: 'Fecha',
            time: 'Hora',
            guests: 'Número de invitados',
            minGuests: 'Mínimo 6 invitados requeridos',
            depositAgreement: 'Acepto pagar un depósito por grupo y acepto la política de cancelación (no reembolsable si se cancela dentro de las 6 horas antes de la reserva).',
            next: 'Siguiente'
          },
          menuSelection: {
            title: 'Selección de Menú',
            option1: {
              title: 'À la Carte',
              description: 'Elija 5 entrantes y 5 platos principales de nuestro menú completo del restaurante. Esta opción le permite personalizar su comida de grupo de nuestras ofertas à la carte.'
            },
            option2: {
              title: 'Menú',
              description: 'Disfrute de nuestro popular menú fijo de 3 platos. Perfecto para una experiencia sin complicaciones con platos cuidadosamente seleccionados.',
              price: '€36.50 por persona'
            },
            select: 'Seleccionar esta opción',
            next: 'Siguiente'
          },
          dishSelection: {
            title: 'Selección de Platos',
            subtitle: 'Puede especificar las cantidades en el siguiente paso',
            starters: 'Entrantes',
            mains: 'Platos Principales',
            desserts: 'Postres',
            selectExactly: 'Seleccione exactamente',
            selectUpTo: 'Seleccione hasta',
            items: 'platos',
                          groupMenu: {
                appetizer: 'Entrante',
                mainCourse: 'Plato Principal',
                dessert: 'Postre',
                chooseOne: 'Elija una opción por plato'
              },
            next: 'Siguiente'
          },
          quantities: {
            title: 'Asignar Cantidades & Solicitudes Especiales',
            quantity: 'Cantidad',
            totalGuests: 'Total de invitados:',
            validationError: 'Las cantidades totales deben ser iguales al número total de invitados',
            specialRequests: 'Solicitudes especiales (opcional)',
            priceNote: 'Nota: Este precio no incluye bebidas o extras. Esto es una indicación del precio del menú.',
            next: 'Siguiente'
          },
          summary: {
            title: 'Resumen & Confirmación',
            guestInfo: 'Información de Invitados',
            bookingDetails: 'Detalles de la Reserva',
            menuOption: 'Opción de Menú',
            dishes: 'Platos & Cantidades',
            specialRequests: 'Solicitudes Especiales',
            totalPrice: 'Precio Total',
            confirmAgreement: 'Confirmo que los detalles anteriores son correctos y entiendo que se requerirá un depósito para asegurar la reserva.',
            submit: 'Enviar Reserva',
            submitting: 'Enviando...'
          },
          thankYou: {
            title: '¡Gracias!',
            message: 'Su solicitud de reserva de grupo ha sido recibida. Revisaremos sus detalles y confirmaremos su reserva lo antes posible.',
            summary: 'Resumen de la Reserva'
          },
          navigation: {
            back: 'Atrás',
            next: 'Siguiente'
          },
          validation: {
            required: 'Este campo es requerido',
            invalidEmail: 'Por favor ingrese una dirección de correo electrónico válida',
            invalidPhone: 'Por favor ingrese un número de teléfono válido',
            minGuests: 'Mínimo 6 invitados requeridos',
            invalidDate: 'Por favor seleccione una fecha futura',
            invalidTime: 'Por favor seleccione una hora válida',
            selectMenuOption: 'Por favor seleccione una opción de menú',
            selectDishes: 'Por favor seleccione el número requerido de platos',
            quantitiesMismatch: 'Las cantidades totales deben ser iguales al número total de invitados',
            agreementRequired: 'Debe aceptar los términos para continuar'
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


