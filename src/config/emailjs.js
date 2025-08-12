// EmailJS Configuration
// Get your credentials from: https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_got27q2', // Your EmailJS service ID
  TEMPLATE_ID: 'template_hqqabe5', // Your EmailJS template ID
  PUBLIC_KEY: 'Bm0yaqoCoEHWzC2G7' // Your EmailJS public key
};

// EmailJS Template Variables
export const EMAILJS_TEMPLATE_VARS = {
  to_name: '{{to_name}}',
  from_name: '{{from_name}}',
  from_email: '{{from_email}}',
  from_phone: '{{from_phone}}',
  booking_date: '{{booking_date}}',
  booking_time: '{{booking_time}}',
  number_of_guests: '{{number_of_guests}}',
  menu_option: '{{menu_option}}',
  selected_dishes: '{{selected_dishes}}',
  quantities: '{{quantities}}',
  special_requests: '{{special_requests}}',
  total_price: '{{total_price}}'
};
