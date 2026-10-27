// One entry per business. Numbers: country code + number, digits only (e.g. 919876543210).
// Orders are blocked until a real number is set, so nothing is ever sent to the wrong chat.
window.SHOPS={
  boutique:{name:'Model Town Boutique',tagline:"Women's clothing · Model Town Extension, Ludhiana",emoji:'👗',whatsapp:'918284840646',
    intro:'Hello! I would like to order:',outro:'Please confirm availability and delivery details.',
    modes:['Delivery','Pickup'],delivery:{fee:60,freeAbove:2000}},   // set delivery:null to hide delivery charges
  cakes:{name:'Model Town Cakes',tagline:'Fresh & custom cakes · Model Town Extension, Ludhiana',emoji:'🎂',whatsapp:'918284840646',
    intro:'Hello! I would like to order a cake:',outro:'Please confirm the order and delivery availability.',
    modes:['Pickup','Delivery'],delivery:{fee:80,freeAbove:0}}
};
