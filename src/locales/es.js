const es = {
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
        email: 'info@delicebrugge.be'
      },
      seo: {
        title: 'Délice Brugge | Restaurante belga auténtico en Brujas',
        description:
          'Restaurante familiar en el corazón de Brujas. Carbonade flamande, mejillones, bistec y cervezas locales en un ambiente acogedor cerca del Minnewaterpark.'
      },
      about: {
        heading: 'Quiénes somos',
        copy:
          'En el corazón del Minnewaterpark en Brujas, Délice Brugge ofrece hospitalidad familiar y cocina belga auténtica en un ambiente cálido y acogedor.',
        extraSeo:
          'Platos destacados: carbonade flamande, mejillones frescos, bistec y especialidades de temporada. Ideal para familias, parejas y grupos cerca del Minnewaterpark.'
      },
      reviews: {
        heading: 'Opiniones',
        items: [
          '"Lugar perfecto para probar la comida belga tradicional… Carbonade y mejillones deliciosos."',
          '"Fish and chips perfecto… la carbonade se deshacía en la boca."',
          '"Gambas al ajillo con ensalada fresca y patatas fritas… muy recomendable."',
          '"Pequeño bistró acogedor… guiso de pescado con mejillones excelente. Bistec delicioso."',
        ]
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
        ctaSub: 'Reserva tu mesa — estaremos encantados de recibirte.'
      },
      menu: {
        heading: 'Menú',
        sections: { classics: 'Clásicos belgas', seafood: 'Mariscos', pastaVeg: 'Pasta y vegetariano', desserts: 'Postres' },
        items: {
          carbonade: { name: 'Carbonade flamande', desc: 'Estofado de ternera a la cerveza belga con patatas fritas.' },
          mussels: { name: 'Mejillones', desc: 'Mejillones frescos al estilo belga.' },
          rabbitPrunes: { name: 'Bistec', desc: 'Especialidad belga tradicional.' }
        }
      },
      reserve: { heading: 'Reservar mesa', intro: 'Reserva al instante con nuestro widget.' },

      deliceMenu: {
        heading: 'Menu Délice €41.00',
        perPerson: 'por persona',
        chooseOne: 'elija uno',
        heroDescription: 'Ideal para reservas de grupos y ocasiones especiales. Cada plato ofrece deliciosas opciones - elija su preferencia.',
        appetizer: {
          title: 'Entrante',
          option1: { name: 'Sopa del día' },
          option2: { name: 'Croquetas de queso caseras' },
          option3: { name: 'Croquetas de gambas caseras' }
        },
        mainCourse: {
          title: 'Plato principal',
          option1: { name: 'Pollo en salsa de crema con verduras' },
          option2: { name: 'Conejo a la flamenca con ensalada y croquetas' },
          option3: { name: 'Salmón al horno con salsa bearnesa' }
        },
        dessert: {
          title: 'Postre',
          option1: { name: 'Mousse de chocolate' },
          option2: { name: 'Dame Blanche' }
        },
        drink: {
          title: 'Incluido',
          description: 'Café o Té\n1 bebida: Una copa de cerveza local o vino blanco/rosado/tinto incluida'
        },
        bookingSection: {
          title: '¿Listo para reservar su grupo?',
          heading: 'Hagamos que su cena de grupo sea especial',
          detailsIntro: 'Por favor, proporcione sus datos, incluyendo:',
          detailsList: [
            'Número de personas en su grupo',
            'Fecha y hora preferidas',
            'Preferencias de platos para cada persona',
            'Necesidades dietéticas especiales o alergias',
            'Información de contacto para confirmación'
          ],
          emailButton: '✉️ Enviar solicitud de reserva de grupo',
          emailSubject: 'Solicitud de reserva de grupo',
          emailBody: 'Hola,\n\nMe gustaría hacer una reserva de grupo para el MENU DELICE €41.00 con los siguientes detalles:\n\nNúmero total de personas:\nFecha preferida:\nHora preferida:\n\nPreferencias de platos (por favor indique cuántas personas desean cada opción):\n- Entrante:\n  • Opción 1 (Sopa del día): ___ personas\n  • Opción 2 (Croquetas de queso caseras): ___ personas\n  • Opción 3 (Croquetas de gambas caseras): ___ personas\n- Plato principal:\n  • Opción 1 (Pollo en salsa de crema con verduras): ___ personas\n  • Opción 2 (Conejo a la flamenca con ensalada y croquetas): ___ personas\n  • Opción 3 (Salmón al horno con salsa bearnesa): ___ personas\n- Postre:\n  • Opción 1 (Mousse de chocolate): ___ personas\n  • Opción 2 (Dame Blanche): ___ personas\n\nNecesidades especiales o alergias:\n\n¡Gracias!'
        }
      },
      groupMenu: {
        heading: 'MENÚ €38.00',
        perPerson: 'por persona',
        chooseOne: 'elija uno',
        heroDescription: 'Ideal para reservas de grupos y ocasiones especiales. Cada plato ofrece dos deliciosas opciones - elija su preferencia.',
        appetizer: {
          title: 'Entrante',
          option1: {
            name: 'Croquetas de queso caseras'
          },
          option2: {
            name: 'Croquetas de gambas caseras'
          }
        },
        mainCourse: {
          title: 'Plato principal',
          option1: {
            name: 'Bistec natural'
          },
          option2: {
            name: 'Salmón horneado con salsa bearnesa'
          }
        },
        dessert: {
          title: 'Postre',
          option1: {
            name: 'Café/Té'
          },
          option2: {
            name: 'Dame Blanche'
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
            price: '€38.00 por persona'
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
          sections: {
            vleesgerechten: 'Platos de Carne',
            visgerechtenMosselen: 'Platos de Pescado y Mejillones',
            pasta: 'Pasta',
            kidsMenu: 'Menú Infantil'
          },

          deliceMenu: {
            heading: 'MENÚ DELICE €41.00',
            perPerson: 'por persona',
            chooseOne: 'elija uno',
            heroDescription: 'Ideal para reservas de grupos y ocasiones especiales. Cada plato ofrece deliciosas opciones - elija su preferencia.',
            appetizer: {
              title: 'Entrante',
              option1: { name: 'Sopa del día' },
              option2: { name: 'Croquetas de queso caseras' },
              option3: { name: 'Croquetas de gambas caseras' }
            },
            mainCourse: {
              title: 'Plato principal',
              option1: { name: 'Pollo en salsa de crema con verduras' },
              option2: { name: 'Conejo a la flamenca con ensalada y croquetas' },
              option3: { name: 'Salmón al horno con salsa bearnesa' }
            },
            dessert: {
              title: 'Postre',
              option1: { name: 'Mousse de chocolate' },
              option2: { name: 'Dame Blanche' }
            },
            drink: {
              title: 'Incluido',
              description: 'Café o Té\n1 bebida: Una copa de cerveza local o vino blanco/rosado/tinto incluida'
            }
          },
          groupMenu: {
            appetizer: 'Entrante',
            mainCourse: 'Plato Principal',
            dessert: 'Postre',
            chooseOne: 'Elija una opción por plato',
            or: 'o'
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
          submitting: 'Enviando...',
          labels: {
            name: 'Nombre',
            email: 'Correo electrónico',
            phone: 'Teléfono',
            numberOfGuests: 'Número de invitados',
            date: 'Fecha',
            time: 'Hora',
            quantity: 'Cantidad',
            totalForGuests: 'Total para {guests} invitados'
          }
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
      footer: { rights: 'Todos los derechos reservados.', btw: 'IVA' }
    }
  }
};

export default es;
