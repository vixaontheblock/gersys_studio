export const business = {
  name: 'Gersys Hair Studio',
  phone: '+50767631224',
  displayPhone: '+507 6763-1224',
  address: 'Plaza Villas del Golf, local #4',
  locality: 'Brisas del Golf, Panamá',
  booking: 'https://gersyshairstudio.site.agendapro.com/pa/sucursal/351688',
  maps: 'https://www.google.com/maps/search/?api=1&query=Gersys%20Hair%20Studio%20Brisas%20del%20Golf%20Panama',
};
export const whatsapp = (subject = 'reservar una cita') =>
  `https://wa.me/50767631224?text=${encodeURIComponent(`Hola Gersys, quisiera ${subject}. ¿Me ayudan con disponibilidad y precio?`)}`;
export const services = [
  { name: 'Balayage', slug: 'balayage', text: 'Luz y dimensión para tu cabello. Conversemos sobre el tono que buscas y el color que llevas hoy.', image: 'gersys-balayage-1', alt: 'Balayage con ondas realizado en Gersys Hair Studio',
    title: 'Balayage en Brisas del Golf | Gersys Hair Studio',
    description: 'Balayage en Brisas del Golf, Panamá. Mira nuestro trabajo y consulta por WhatsApp el tono, precio y disponibilidad de tu cita en Gersys Hair Studio.',
    intro: 'Un cambio de color empieza mucho antes de elegir un rubio. El tono de base, los tintes anteriores y el resultado que tienes en mente son parte de la conversación.',
    sections: [
      { title: 'Una referencia ayuda a empezar', text: '¿Buscas una iluminación discreta o un contraste más marcado? Envíanos una foto de tu cabello con luz natural y una referencia de lo que te gusta. Cuéntanos si llevas tinte, decoloración o algún tratamiento reciente para orientar tu consulta.' },
      { title: 'El resultado depende de tu punto de partida', text: 'No todos los cabellos llegan al mismo tono en una sola visita. Antes de reservar, consulta qué cambio es viable en tu caso, cuánto tiempo conviene apartar y qué mantenimiento necesitaría el color que deseas.' },
      { title: 'Precio y cuidado del color', text: 'Consulta una cotización para tu cabello y confirma qué incluye el servicio. Pregunta también cuándo convendría retocar el tono y qué cuidados seguir en casa. Así puedes elegir pensando en el resultado y en cómo mantenerlo.' }
    ] },
  { name: 'Color y mechas', slug: 'color-y-mechas', text: 'Tintes, babylights e iluminación. Para renovar tu color o darle un matiz distinto.', image: 'gersys-balayage-2', alt: 'Trabajo de color e iluminación en cabello de Gersys Hair Studio',
    title: 'Color y mechas en Brisas del Golf | Gersys Hair Studio',
    description: 'Coloración, tintes, babylights y mechas en Brisas del Golf. Consulta tu cambio de color y agenda una cita en Gersys Hair Studio, Panamá.',
    intro: 'Retocar una raíz, cambiar el tono completo o añadir mechas son trabajos diferentes. Cuéntanos qué quieres cambiar para consultar el servicio que corresponde a tu cabello.',
    sections: [
      { title: 'Tinte, babylights o mechas', text: 'El tinte permite trabajar el tono; las babylights y las mechas añaden iluminación en secciones del cabello. Una fotografía de referencia ayuda a explicar cuánto contraste quieres y dónde te gustaría ver la luz.' },
      { title: 'Tu historial de color importa', text: 'Al escribirnos, indica cuándo fue tu última coloración y si has usado tintes en casa. Si quieres pasar de un tono oscuro a uno más claro, consulta primero la viabilidad del cambio. Una referencia es un punto de partida, no una garantía de un resultado idéntico.' },
      { title: 'Prepara tu cita', text: 'Pregunta por disponibilidad, duración aproximada y precio antes de agendar. Si también deseas un corte o secado, menciónalo en tu consulta para confirmar los servicios de la visita. Podemos conversar por WhatsApp o puedes revisar la agenda online.' }
    ] },
  { name: 'Corte y secado', text: 'Un corte nuevo, un retoque o un peinado para una ocasión. Cuéntanos qué tienes en mente.' },
  { name: 'Manicure y pedicure', text: 'Un espacio para cuidar tus manos y pies. Consulta los servicios de uñas al reservar.' },
  { name: 'Keratina y tratamientos', slug: 'keratina-y-tratamientos', text: 'Cada cabello necesita algo distinto. Consulta las opciones según su estado y tus tratamientos anteriores.', image: 'gersys-treatment-room', alt: 'Área de tratamientos de Gersys Hair Studio',
    title: 'Keratina en Brisas del Golf | Gersys Hair Studio',
    description: 'Consulta keratina y tratamientos capilares en Brisas del Golf, Panamá. Habla con Gersys Hair Studio sobre las opciones para tu cabello y reserva tu cita.',
    intro: 'Antes de elegir un tratamiento, cuéntanos qué notas en tu cabello y qué te gustaría mejorar. La keratina y los demás tratamientos capilares no cumplen todos la misma función.',
    sections: [
      { title: 'Empieza por lo que necesita tu cabello', text: '¿Te preocupa el frizz, la textura o cómo se siente después de una coloración? Describe tu caso al consultar. Indica si tu cabello está decolorado, teñido o si llevas un alisado previo: esa información ayuda a valorar las opciones.' },
      { title: 'Pregunta por el tratamiento concreto', text: 'Antes de reservar, confirma qué producto se utilizaría, qué resultado se espera y si es adecuado para tu historial capilar. Consulta también la duración de la cita y los cuidados posteriores. No asumas que todos los tratamientos de keratina son iguales.' },
      { title: 'Reserva con la información completa', text: 'Escríbenos para consultar precio y disponibilidad. Si tienes previsto hacerte color o mechas, coméntalo antes de agendar ambos servicios para preguntar por su compatibilidad y el orden de las citas.' }
    ] },
  { name: 'Maquillaje, cejas y pestañas', text: 'Para una celebración o una cita contigo. Consulta disponibilidad y opciones para la ocasión.' },
];
export const detailedServices = services.filter(s => s.slug);
