export const Populardestinations = [
  { 
    id: 1 , 
    name: "Paris", 
    country: "France", 
    color: "from-blue-400 to-purple-500",
    image: "/assets/images/paris.jpg",
    description: "City of Lights & Romance",
    travelers: 2450,
    rating: 4.9
  },
  { 
    id:4,
    name: "Tokyo", 
    country: "Japan", 
    color: "from-red-400 to-pink-500",
    image: "/assets/images/tokyo.jpg",
    description: "Modern & Traditional Fusion",
    travelers: 1890,
    rating: 4.8
  },
  { 
    id:7,
    name: "New York", 
    country: "USA", 
    color: "from-amber-400 to-orange-500",
    image: "/assets/images/newyork.jpg",
    description: "The City That Never Sleeps",
    travelers: 3120,
    rating: 4.7
  },
  { 
    id:16,
    name: "Sydney", 
    country: "Australia", 
    color: "from-sky-400 to-blue-500",
    image: "/assets/images/sydney.jpg",
    description: "Harbor City & Beaches",
    travelers: 1670,
    rating: 4.8
  }
];

// destinations.js - Comprehensive Travel Database
export const continents = [
  { id: 1, name: "Europe", color: "from-blue-400 to-indigo-600", icon: "🏛️" , imageicon: "/assets/images/europeicon.png" , image:'/assets/images/Europe.png' },
  { id: 2, name: "Asia", color: "from-red-400 to-orange-600", icon: "🗼" , imageicon: "/assets/images/asiaicon.png" , image:'/assets/images/Asia.png'},
  { id: 3, name: "North America", color: "from-green-400 to-teal-600", icon: "🗽" ,  imageicon: "/assets/images/northamricaicon.png" , image:'/assets/images/NorthAmerica.png'},
  { id: 4, name: "South America", color: "from-yellow-400 to-amber-600", icon: "🌴" , imageicon: "/assets/images/sothamericaicon.png" , image:'/assets/images/SouthAmerica.png'},
  { id: 5, name: "Africa", color: "from-purple-400 to-pink-600", icon: "🦁" , imageicon: "/assets/images/africaicon.png" , image:'/assets/images/Africa.png'},
  { id: 6, name: "Oceania", color: "from-cyan-400 to-blue-500", icon: "🐨" , imageicon: "/assets/images/oceaniaicon.png" , image:'/assets/images/Oceania.png'},
  { id: 7, name: "Middle East", color: "from-emerald-400 to-green-600", icon: "🕌" , imageicon: "/assets/images/middleeasticon.png" , image:'/assets/images/MiddleEast.png'}
];

export const countries = [
  {
    id: 1,
    name: "France",
    continentId: 1,
    capital: "Paris",
    language: "French",
    currency: "EUR",
    timezone: "CET",
    bestTimeToVisit: ["April", "May", "June", "September", "October"],
    visaRequirements: "Schengen Visa",
    color: "from-blue-400 to-purple-600",
    flag: "/assets/images/france.png",
    description: "Known for its wine, cuisine, fashion, art, and rich history",
    airports: ["CDG", "ORY", "NCE", "MRS", "LYS"]
  },
  {
    id: 2,
    name: "Japan",
    continentId: 2,
    capital: "Tokyo",
    language: "Japanese",
    currency: "JPY",
    timezone: "JST",
    bestTimeToVisit: ["March", "April", "October", "November"],
    visaRequirements: "Visa on arrival for many countries",
    color: "from-red-400 to-pink-600",
    flag: "/assets/images/japan.png",
    description: "Land of the rising sun with ancient traditions and cutting-edge technology",
    airports: ["HND", "NRT", "KIX", "NGO"]
  },
  {
    id: 3,
    name: "United States",
    continentId: 3,
    capital: "Washington D.C.",
    language: "English",
    currency: "USD",
    timezone: "Multiple (EST, CST, MST, PST)",
    bestTimeToVisit: ["May", "June", "September", "October"],
    visaRequirements: "ESTA/Visa required",
    color: "from-indigo-400 to-blue-600",
    flag: "/assets/images/unitedstates.png",
    description: "Diverse landscapes, iconic cities, and cultural melting pot",
    airports: ["JFK", "LAX", "ORD", "DFW", "SFO"]
  },
  {
    id: 4,
    name: "Italy",
    continentId: 1,
    capital: "Rome",
    language: "Italian",
    currency: "EUR",
    timezone: "CET",
    bestTimeToVisit: ["April", "May", "June", "September", "October"],
    visaRequirements: "Schengen Visa",
    color: "from-green-400 to-red-600",
    flag: "/assets/images/italy.png",
    description: "Birthplace of Renaissance, famous for cuisine, art, and history",
    airports: ["FCO", "MXP", "VCE", "NAP"]
  },
  {
    id: 5,
    name: "Thailand",
    continentId: 2,
    capital: "Bangkok",
    language: "Thai",
    currency: "THB",
    timezone: "ICT",
    bestTimeToVisit: ["November", "December", "January", "February"],
    visaRequirements: "Visa exemption for many countries",
    color: "from-purple-400 to-blue-600",
    flag: "/assets/images/thailand.png",
    description: "Land of smiles with beautiful beaches, temples, and cuisine",
    airports: ["BKK", "DMK", "HKT", "CNX"]
  },
  {
    id: 6,
    name: "Australia",
    continentId: 6,
    capital: "Canberra",
    language: "English",
    currency: "AUD",
    timezone: "Multiple (AEST, ACST, AWST)",
    bestTimeToVisit: ["September", "October", "November", "March", "April"],
    visaRequirements: "ETA/Visa required",
    color: "from-amber-400 to-orange-600",
    flag: "/assets/images/australia.png",
    description: "Diverse ecosystems, unique wildlife, and stunning landscapes",
    airports: ["SYD", "MEL", "BNE", "PER"]
  },
  {
    id: 7,
    name: "United Arab Emirates",
    continentId: 7,
    capital: "Abu Dhabi",
    language: "Arabic",
    currency: "AED",
    timezone: "GST",
    bestTimeToVisit: ["November", "December", "January", "February"],
    visaRequirements: "Visa on arrival for many countries",
    color: "from-emerald-400 to-green-600",
    flag: "/assets/images/emirates.png",
    description: "Modern architecture, luxury shopping, and desert adventures",
    airports: ["DXB", "AUH", "DWC"]
  },
  {
    id: 8,
    name: "Spain",
    continentId: 1,
    capital: "Madrid",
    language: "Spanish",
    currency: "EUR",
    timezone: "CET",
    bestTimeToVisit: ["April", "May", "June", "September", "October"],
    visaRequirements: "Schengen Visa",
    color: "from-red-400 to-yellow-600",
    flag: "/assets/images/spain.png",
    description: "Famous for beaches, architecture, fiestas, and delicious cuisine",
    airports: ["MAD", "BCN", "AGP", "PMI"]
  },
  {
    id: 9,
    name: "Indonesia",
    continentId: 2,
    capital: "Jakarta",
    language: "Indonesian",
    currency: "IDR",
    timezone: "Multiple (WIB, WITA, WIT)",
    bestTimeToVisit: ["April", "May", "June", "September", "October"],
    visaRequirements: "Visa on arrival for many countries",
    color: "from-red-400 to-white",
    flag: "/assets/images/indonesia.png",
    description: "Thousands of islands with diverse cultures and landscapes",
    airports: ["CGK", "DPS", "SUB", "UPG"]
  },
  {
    id: 10,
    name: "Greece",
    continentId: 1,
    capital: "Athens",
    language: "Greek",
    currency: "EUR",
    timezone: "EET",
    bestTimeToVisit: ["May", "June", "September", "October"],
    visaRequirements: "Schengen Visa",
    color: "from-blue-400 to-white",
    flag: "/assets/images/greece.png",
    description: "Ancient history, beautiful islands, and Mediterranean cuisine",
    airports: ["ATH", "HER", "JMK", "RHO"]
  }
];

export const cities = [
  // France Cities
  {
    id: 1,
    name: "Paris",
    countryId: 1,
    population: 2161000,
    description: "City of Lights, famous for art, fashion, and cuisine",
    bestTimeToVisit: "April-June, October-November",
    avgTemp: {
      summer: "20-25°C",
      winter: "3-8°C"
    },
    coordinates: { lat: 48.8566, lng: 2.3522 },
    popularFor: ["Eiffel Tower", "Louvre Museum", "Notre-Dame", "French Cuisine"],
    image: "/assets/images/paris.jpg",
    color: "from-blue-300 to-purple-500"
  },
  {
    id: 2,
    name: "Nice",
    countryId: 1,
    population: 342522,
    description: "Beautiful Mediterranean city on the French Riviera",
    bestTimeToVisit: "May-September",
    avgTemp: {
      summer: "25-30°C",
      winter: "8-13°C"
    },
    coordinates: { lat: 43.7102, lng: 7.2620 },
    popularFor: ["Promenade des Anglais", "Beaches", "Old Town", "Carnival"],
    image: "/assets/images/nice.jpg",
    color: "from-cyan-300 to-blue-500"
  },
  {
    id: 3,
    name: "Lyon",
    countryId: 1,
    population: 515695,
    description: "Gastronomic capital of France with Roman history",
    bestTimeToVisit: "April-June, September-October",
    avgTemp: {
      summer: "20-27°C",
      winter: "1-7°C"
    },
    coordinates: { lat: 45.7640, lng: 4.8357 },
    popularFor: ["Gastronomy", "Roman Theaters", "Old Town", "Festival of Lights"],
    image: "/assets/images/lyon.jpg",
    color: "from-red-300 to-orange-500"
  },

  // Japan Cities
  {
    id: 4,
    name: "Tokyo",
    countryId: 2,
    population: 13960000,
    description: "Bustling metropolis blending tradition and innovation",
    bestTimeToVisit: "March-May, September-November",
    avgTemp: {
      summer: "25-30°C",
      winter: "2-10°C"
    },
    coordinates: { lat: 35.6762, lng: 139.6503 },
    popularFor: ["Shibuya Crossing", "Senso-ji Temple", "Tsukiji Market", "Anime Culture"],
    image: "/assets/images/tokyo.jpg",
    color: "from-red-400 to-pink-600"
  },
  {
    id: 5,
    name: "Kyoto",
    countryId: 2,
    population: 1475000,
    description: "Ancient capital with over 2000 temples and shrines",
    bestTimeToVisit: "March-May, September-November",
    avgTemp: {
      summer: "25-30°C",
      winter: "1-8°C"
    },
    coordinates: { lat: 35.0116, lng: 135.7681 },
    popularFor: ["Fushimi Inari Shrine", "Kinkaku-ji", "Gion District", "Cherry Blossoms"],
    image: "/assets/images/kyoto.jpg",
    color: "from-green-400 to-emerald-600"
  },
  {
    id: 6,
    name: "Osaka",
    countryId: 2,
    population: 2750000,
    description: "Vibrant city known for food, nightlife, and comedy",
    bestTimeToVisit: "March-May, September-November",
    avgTemp: {
      summer: "27-33°C",
      winter: "4-10°C"
    },
    coordinates: { lat: 34.6937, lng: 135.5023 },
    popularFor: ["Osaka Castle", "Dotonbori", "Universal Studios", "Street Food"],
    image: "/assets/images/osaka.jpg",
    color: "from-orange-400 to-yellow-600"
  },

  // USA Cities
  {
    id: 7,
    name: "New York",
    countryId: 3,
    population: 8419000,
    description: "The city that never sleeps, global financial capital",
    bestTimeToVisit: "April-June, September-November",
    avgTemp: {
      summer: "24-30°C",
      winter: "-2-4°C"
    },
    coordinates: { lat: 40.7128, lng: -74.0060 },
    popularFor: ["Statue of Liberty", "Times Square", "Central Park", "Broadway"],
    image: "/assets/images/newyork.jpg",
    color: "from-indigo-400 to-blue-600"
  },
  {
    id: 8,
    name: "Los Angeles",
    countryId: 3,
    population: 3980000,
    description: "Entertainment capital with beaches and Hollywood glamour",
    bestTimeToVisit: "March-May, September-November",
    avgTemp: {
      summer: "22-28°C",
      winter: "9-20°C"
    },
    coordinates: { lat: 34.0522, lng: -118.2437 },
    popularFor: ["Hollywood", "Santa Monica Beach", "Universal Studios", "Celebrity Culture"],
    image: "/assets/images/losangeles.jpg",
    color: "from-amber-400 to-orange-600"
  },
  {
    id: 9,
    name: "Las Vegas",
    countryId: 3,
    population: 641676,
    description: "Entertainment capital with world-class casinos and shows",
    bestTimeToVisit: "March-May, September-November",
    avgTemp: {
      summer: "32-40°C",
      winter: "4-15°C"
    },
    coordinates: { lat: 36.1699, lng: -115.1398 },
    popularFor: ["Casinos", "Entertainment Shows", "Nightlife", "Grand Canyon Trips"],
    image: "/assets/images/lasvegas.jpg",
    color: "from-purple-400 to-pink-600"
  },

  // Italy Cities
  {
    id: 10,
    name: "Rome",
    countryId: 4,
    population: 2873000,
    description: "Eternal city with ancient history and iconic landmarks",
    bestTimeToVisit: "April-June, September-October",
    avgTemp: {
      summer: "25-30°C",
      winter: "3-13°C"
    },
    coordinates: { lat: 41.9028, lng: 12.4964 },
    popularFor: ["Colosseum", "Vatican City", "Roman Forum", "Italian Cuisine"],
    image: "/assets/images/rome.jpg",
    color: "from-yellow-400 to-red-600"
  },
  {
    id: 11,
    name: "Venice",
    countryId: 4,
    population: 261905,
    description: "City of canals, romantic gondola rides, and architecture",
    bestTimeToVisit: "April-June, September-October",
    avgTemp: {
      summer: "23-28°C",
      winter: "0-8°C"
    },
    coordinates: { lat: 45.4408, lng: 12.3155 },
    popularFor: ["Grand Canal", "St. Mark's Square", "Gondola Rides", "Carnival"],
    image: "/assets/images/venice.jpg",
    color: "from-blue-300 to-teal-500"
  },
  {
    id: 12,
    name: "Florence",
    countryId: 4,
    population: 380948,
    description: "Birthplace of Renaissance with incredible art and architecture",
    bestTimeToVisit: "April-June, September-October",
    avgTemp: {
      summer: "25-31°C",
      winter: "3-10°C"
    },
    coordinates: { lat: 43.7696, lng: 11.2558 },
    popularFor: ["Duomo", "Uffizi Gallery", "David Statue", "Renaissance Art"],
    image: "/assets/images/florence.jpg",
    color: "from-orange-300 to-red-500"
  },

  // Thailand Cities
  {
    id: 13,
    name: "Bangkok",
    countryId: 5,
    population: 10539000,
    description: "Vibrant capital with temples, markets, and street food",
    bestTimeToVisit: "November-February",
    avgTemp: {
      summer: "30-35°C",
      winter: "25-30°C"
    },
    coordinates: { lat: 13.7563, lng: 100.5018 },
    popularFor: ["Grand Palace", "Wat Arun", "Floating Markets", "Street Food"],
    image: "/assets/images/bangkok.jpg",
    color: "from-purple-400 to-blue-600"
  },
  {
    id: 14,
    name: "Phuket",
    countryId: 5,
    population: 416582,
    description: "Tropical paradise with beautiful beaches and islands",
    bestTimeToVisit: "November-April",
    avgTemp: {
      summer: "28-33°C",
      winter: "25-30°C"
    },
    coordinates: { lat: 7.8804, lng: 98.3923 },
    popularFor: ["Patong Beach", "Phi Phi Islands", "James Bond Island", "Nightlife"],
    image: "/assets/images/phuket.jpg",
    color: "from-emerald-400 to-cyan-600"
  },
  {
    id: 15,
    name: "Chiang Mai",
    countryId: 5,
    population: 131091,
    description: "Cultural hub in northern mountains with temples and festivals",
    bestTimeToVisit: "November-February",
    avgTemp: {
      summer: "25-35°C",
      winter: "15-25°C"
    },
    coordinates: { lat: 18.7883, lng: 98.9853 },
    popularFor: ["Doi Suthep", "Night Bazaar", "Elephant Sanctuaries", "Yi Peng Festival"],
    image: "/assets/images/chiangmai.jpg",
    color: "from-amber-400 to-orange-600"
  },

  // Australia Cities
  {
    id: 16,
    name: "Sydney",
    countryId: 6,
    population: 5312000,
    description: "Harbor city with iconic opera house and beaches",
    bestTimeToVisit: "September-November, March-May",
    avgTemp: {
      summer: "22-26°C",
      winter: "8-17°C"
    },
    coordinates: { lat: -33.8688, lng: 151.2093 },
    popularFor: ["Sydney Opera House", "Harbour Bridge", "Bondi Beach", "Blue Mountains"],
    image: "/assets/images/sydney.jpg",
    color: "from-sky-400 to-blue-600"
  },
  {
    id: 17,
    name: "Melbourne",
    countryId: 6,
    population: 5078000,
    description: "Cultural capital known for coffee, art, and sports",
    bestTimeToVisit: "September-November, March-May",
    avgTemp: {
      summer: "20-26°C",
      winter: "6-14°C"
    },
    coordinates: { lat: -37.8136, lng: 144.9631 },
    popularFor: ["Federation Square", "Great Ocean Road", "Coffee Culture", "Australian Open"],
    image: "/assets/images/melbourne.jpg",
    color: "from-gray-400 to-indigo-600"
  },
  {
    id: 18,
    name: "Brisbane",
    countryId: 6,
    population: 2480000,
    description: "Sunshine city with riverfront parks and nearby islands",
    bestTimeToVisit: "March-May, September-November",
    avgTemp: {
      summer: "21-30°C",
      winter: "11-21°C"
    },
    coordinates: { lat: -27.4698, lng: 153.0251 },
    popularFor: ["South Bank", "Gold Coast", "Sunshine Coast", "Lone Pine Koala Sanctuary"],
    image: "/assets/images/brisbane.jpg",
    color: "from-yellow-400 to-orange-600"
  },

  // UAE Cities
  {
    id: 19,
    name: "Dubai",
    countryId: 7,
    population: 3331000,
    description: "Modern metropolis with futuristic architecture and luxury",
    bestTimeToVisit: "November-March",
    avgTemp: {
      summer: "35-45°C",
      winter: "14-24°C"
    },
    coordinates: { lat: 25.2048, lng: 55.2708 },
    popularFor: ["Burj Khalifa", "Palm Jumeirah", "Desert Safari", "Luxury Shopping"],
    image: "/assets/images/dubai.jpg",
    color: "from-cyan-400 to-blue-600"
  },
  {
    id: 20,
    name: "Abu Dhabi",
    countryId: 7,
    population: 1483000,
    description: "Capital city with cultural landmarks and modern architecture",
    bestTimeToVisit: "November-March",
    avgTemp: {
      summer: "35-45°C",
      winter: "13-24°C"
    },
    coordinates: { lat: 24.4539, lng: 54.3773 },
    popularFor: ["Sheikh Zayed Mosque", "Louvre Abu Dhabi", "Ferrari World", "Corniche"],
    image: "/assets/images/abudhabi.jpg",
    color: "from-emerald-400 to-green-600"
  },

  // Spain Cities
  {
    id: 21,
    name: "Barcelona",
    countryId: 8,
    population: 1620000,
    description: "Cosmopolitan city with Gaudí architecture and Mediterranean beaches",
    bestTimeToVisit: "April-June, September-October",
    avgTemp: {
      summer: "24-28°C",
      winter: "8-15°C"
    },
    coordinates: { lat: 41.3851, lng: 2.1734 },
    popularFor: ["Sagrada Familia", "Park Güell", "Gothic Quarter", "Tapas"],
    image: "/assets/images/barcelona.jpg",
    color: "from-red-400 to-yellow-600"
  },
  {
    id: 22,
    name: "Madrid",
    countryId: 8,
    population: 3223000,
    description: "Vibrant capital with art museums, parks, and nightlife",
    bestTimeToVisit: "April-June, September-October",
    avgTemp: {
      summer: "22-32°C",
      winter: "3-10°C"
    },
    coordinates: { lat: 40.4168, lng: -3.7038 },
    popularFor: ["Prado Museum", "Royal Palace", "Retiro Park", "Flamenco"],
    image: "/assets/images/madrid.jpg",
    color: "from-blue-400 to-red-600"
  },

  // Indonesia Cities
  {
    id: 23,
    name: "Bali",
    countryId: 9,
    population: 4317000,
    description: "Island paradise with temples, beaches, and spiritual retreats",
    bestTimeToVisit: "April-October",
    avgTemp: {
      summer: "27-32°C",
      winter: "26-31°C"
    },
    coordinates: { lat: -8.4095, lng: 115.1889 },
    popularFor: ["Uluwatu Temple", "Rice Terraces", "Beaches", "Yoga Retreats"],
    image: "/assets/images/bali.jpg",
    color: "from-green-400 to-blue-600"
  },

  // Greece Cities
  {
    id: 24,
    name: "Athens",
    countryId: 10,
    population: 664046,
    description: "Historic capital birthplace of democracy and Western civilization",
    bestTimeToVisit: "April-June, September-October",
    avgTemp: {
      summer: "26-32°C",
      winter: "8-15°C"
    },
    coordinates: { lat: 37.9838, lng: 23.7275 },
    popularFor: ["Acropolis", "Parthenon", "Ancient Agora", "Greek Cuisine"],
    image: "/assets/images/athens.jpg",
    color: "from-blue-400 to-white"
  },
  {
    id: 25,
    name: "Santorini",
    countryId: 10,
    population: 15550,
    description: "Stunning volcanic island with white-washed buildings and sunsets",
    bestTimeToVisit: "May-June, September-October",
    avgTemp: {
      summer: "24-28°C",
      winter: "11-15°C"
    },
    coordinates: { lat: 36.3932, lng: 25.4615 },
    popularFor: ["Oia Sunset", "Caldera Views", "Volcanic Beaches", "Wine Tasting"],
    image: "/assets/images/santorini.jpg",
    color: "from-cyan-400 to-white"
  }
];

export const attractions = [
  // Paris Attractions
  {
    id: 1,
    name: "Eiffel Tower",
    cityId: 1,
    type: "Landmark",
    category: "Iconic",
    priceRange: "$$",
    duration: "2-3 hours",
    bestTimeToVisit: "Morning or Evening",
    description: "Iconic iron tower offering panoramic views of Paris",
    highlights: ["Views from top", "Sparkling lights at night", "Champ de Mars"],
    tips: ["Book tickets online to skip queues", "Visit at night for light show"],
    coordinates: { lat: 48.8584, lng: 2.2945 },
    rating: 4.7,
    image: "/assets/attractions/eiffel.jpg",
    openingHours: "9:00 AM - 12:45 AM"
  },
  {
    id: 2,
    name: "Louvre Museum",
    cityId: 1,
    type: "Museum",
    category: "Art & Culture",
    priceRange: "$$",
    duration: "3-4 hours",
    bestTimeToVisit: "Weekday mornings",
    description: "World's largest art museum housing Mona Lisa and Venus de Milo",
    highlights: ["Mona Lisa", "Venus de Milo", "Glass Pyramid", "Egyptian Antiquities"],
    tips: ["Buy tickets online", "Use museum map to navigate"],
    coordinates: { lat: 48.8606, lng: 2.3376 },
    rating: 4.8,
    image: "/assets/attractions/louvre.jpg",
    openingHours: "9:00 AM - 6:00 PM"
  },
  {
    id: 3,
    name: "Notre-Dame Cathedral",
    cityId: 1,
    type: "Religious",
    category: "Historical",
    priceRange: "Free",
    duration: "1-2 hours",
    bestTimeToVisit: "Morning",
    description: "Medieval Catholic cathedral on Île de la Cité",
    highlights: ["Gothic Architecture", "Rose Windows", "Gargoyles"],
    tips: ["Check restoration status before visiting"],
    coordinates: { lat: 48.8530, lng: 2.3499 },
    rating: 4.6,
    image: "/assets/attractions/notredame.jpg",
    openingHours: "8:00 AM - 6:45 PM"
  },

  // Tokyo Attractions
  {
    id: 4,
    name: "Senso-ji Temple",
    cityId: 4,
    type: "Temple",
    category: "Cultural",
    priceRange: "Free",
    duration: "1-2 hours",
    bestTimeToVisit: "Early morning",
    description: "Tokyo's oldest temple in Asakusa with bustling Nakamise shopping street",
    highlights: ["Kaminarimon Gate", "Main Hall", "Nakamise Street", "Five-story Pagoda"],
    tips: ["Try street food on Nakamise Street", "Visit during festivals"],
    coordinates: { lat: 35.7148, lng: 139.7967 },
    rating: 4.5,
    image: "/assets/attractions/sensoji.jpg",
    openingHours: "6:00 AM - 5:00 PM"
  },
  {
    id: 5,
    name: "Shibuya Crossing",
    cityId: 4,
    type: "Landmark",
    category: "Modern",
    priceRange: "Free",
    duration: "30 minutes",
    bestTimeToVisit: "Evening",
    description: "World's busiest pedestrian crossing surrounded by neon lights",
    highlights: ["Scramble crossing", "Hachiko Statue", "Neon signs", "Shopping"],
    tips: ["View from Starbucks or nearby buildings", "Visit at night"],
    coordinates: { lat: 35.6595, lng: 139.7004 },
    rating: 4.4,
    image: "/assets/attractions/shibuya.jpg",
    openingHours: "24/7"
  },
  {
    id: 6,
    name: "Tokyo Skytree",
    cityId: 4,
    type: "Observation",
    category: "Modern",
    priceRange: "$$$",
    duration: "2-3 hours",
    bestTimeToVisit: "Sunset",
    description: "World's tallest tower with observation decks and shopping complex",
    highlights: ["Tembo Deck", "Tembo Galleria", "Solamachi shopping", "Views of Tokyo"],
    tips: ["Book tickets online", "Visit on clear days"],
    coordinates: { lat: 35.7101, lng: 139.8107 },
    rating: 4.6,
    image: "/assets/attractions/skytree.jpg",
    openingHours: "10:00 AM - 9:00 PM"
  },

  // New York Attractions
  {
    id: 7,
    name: "Statue of Liberty",
    cityId: 7,
    type: "Monument",
    category: "Historical",
    priceRange: "$$",
    duration: "3-4 hours",
    bestTimeToVisit: "Morning",
    description: "Iconic symbol of freedom on Liberty Island",
    highlights: ["Crown access", "Museum", "Views of NYC", "Ellis Island"],
    tips: ["Book crown access months in advance", "Take early ferry"],
    coordinates: { lat: 40.6892, lng: -74.0445 },
    rating: 4.7,
    image: "/assets/attractions/statue.jpg",
    openingHours: "8:30 AM - 4:00 PM"
  },
  {
    id: 8,
    name: "Central Park",
    cityId: 7,
    type: "Park",
    category: "Nature",
    priceRange: "Free",
    duration: "2-4 hours",
    bestTimeToVisit: "Morning or afternoon",
    description: "Urban oasis in the heart of Manhattan",
    highlights: ["Bethesda Terrace", "Strawberry Fields", "Bow Bridge", "Zoo"],
    tips: ["Rent bikes or take carriage ride", "Visit different sections"],
    coordinates: { lat: 40.7829, lng: -73.9654 },
    rating: 4.8,
    image: "/assets/attractions/centralpark.jpg",
    openingHours: "6:00 AM - 1:00 AM"
  },
  {
    id: 9,
    name: "Times Square",
    cityId: 7,
    type: "Landmark",
    category: "Modern",
    priceRange: "Free",
    duration: "1-2 hours",
    bestTimeToVisit: "Night",
    description: "Vibrant commercial intersection known for Broadway and billboards",
    highlights: ["Neon lights", "Broadway theaters", "TKTS booth", "New Year's Eve ball drop"],
    tips: ["Visit at night for lights", "Watch for street performers"],
    coordinates: { lat: 40.7580, lng: -73.9855 },
    rating: 4.3,
    image: "/assets/attractions/timessquare.jpg",
    openingHours: "24/7"
  },

  // Rome Attractions
  {
    id: 10,
    name: "Colosseum",
    cityId: 10,
    type: "Archaeological",
    category: "Historical",
    priceRange: "$$",
    duration: "2-3 hours",
    bestTimeToVisit: "Early morning",
    description: "Ancient amphitheater where gladiators fought",
    highlights: ["Arena floor", "Underground tunnels", "Arch of Constantine views"],
    tips: ["Buy combined ticket with Roman Forum", "Take guided tour"],
    coordinates: { lat: 41.8902, lng: 12.4922 },
    rating: 4.8,
    image: "/assets/attractions/colosseum.jpg",
    openingHours: "8:30 AM - 7:00 PM"
  },
  {
    id: 11,
    name: "Vatican Museums",
    cityId: 10,
    type: "Museum",
    category: "Art & Culture",
    priceRange: "$$$",
    duration: "3-4 hours",
    bestTimeToVisit: "Early morning",
    description: "Extensive museum complex including Sistine Chapel",
    highlights: ["Sistine Chapel", "Raphael Rooms", "Gallery of Maps", "Ancient sculptures"],
    tips: ["Book skip-the-line tickets", "Dress modestly"],
    coordinates: { lat: 41.9065, lng: 12.4545 },
    rating: 4.9,
    image: "/assets/attractions/vatican.jpg",
    openingHours: "9:00 AM - 6:00 PM"
  },

  // Bangkok Attractions
  {
    id: 12,
    name: "Grand Palace",
    cityId: 13,
    type: "Palace",
    category: "Cultural",
    priceRange: "$$",
    duration: "2-3 hours",
    bestTimeToVisit: "Morning",
    description: "Former royal residence with stunning architecture",
    highlights: ["Emerald Buddha", "Phra Maha Monthien", "Wat Phra Kaew", "Royal Pantheon"],
    tips: ["Dress modestly (covered shoulders/knees)", "Arrive early to avoid crowds"],
    coordinates: { lat: 13.7500, lng: 100.4916 },
    rating: 4.6,
    image: "/assets/attractions/grandpalace.jpg",
    openingHours: "8:30 AM - 3:30 PM"
  },
  {
    id: 13,
    name: "Wat Arun",
    cityId: 13,
    type: "Temple",
    category: "Cultural",
    priceRange: "$",
    duration: "1-2 hours",
    bestTimeToVisit: "Sunset",
    description: "Temple of Dawn with beautiful porcelain decoration",
    highlights: ["Central prang", "River views", "Porcelain details", "Sunset views"],
    tips: ["Visit at sunset for best photos", "Combine with river cruise"],
    coordinates: { lat: 13.7437, lng: 100.4888 },
    rating: 4.5,
    image: "/assets/attractions/watarun.jpg",
    openingHours: "8:00 AM - 6:00 PM"
  },

  // Sydney Attractions
  {
    id: 14,
    name: "Sydney Opera House",
    cityId: 16,
    type: "Landmark",
    category: "Modern",
    priceRange: "$$$",
    duration: "1-2 hours",
    bestTimeToVisit: "Morning",
    description: "Iconic performing arts center with distinctive sail design",
    highlights: ["Architecture tour", "Performance venues", "Harbour views", "Bennelong Restaurant"],
    tips: ["Take guided tour", "See a performance if possible"],
    coordinates: { lat: -33.8568, lng: 151.2153 },
    rating: 4.8,
    image: "/assets/attractions/opera.jpg",
    openingHours: "9:00 AM - 5:00 PM"
  },
  {
    id: 15,
    name: "Bondi Beach",
    cityId: 16,
    type: "Beach",
    category: "Nature",
    priceRange: "Free",
    duration: "2-4 hours",
    bestTimeToVisit: "Summer",
    description: "Famous surf beach with coastal walk to Coogee",
    highlights: ["Surfing", "Bondi Icebergs pool", "Coastal walk", "Beach culture"],
    tips: ["Do Bondi to Coogee walk", "Swim between flags"],
    coordinates: { lat: -33.8915, lng: 151.2767 },
    rating: 4.7,
    image: "/assets/attractions/bondi.jpg",
    openingHours: "24/7"
  },

  // Dubai Attractions
  {
    id: 16,
    name: "Burj Khalifa",
    cityId: 19,
    type: "Observation",
    category: "Modern",
    priceRange: "$$$",
    duration: "2-3 hours",
    bestTimeToVisit: "Sunset",
    description: "World's tallest building with observation decks",
    highlights: ["At the Top observation", "Fountain show view", "Dubai Mall access"],
    tips: ["Book tickets in advance", "Visit at sunset for day/night views"],
    coordinates: { lat: 25.1972, lng: 55.2744 },
    rating: 4.7,
    image: "/assets/attractions/burjkhalifa.jpg",
    openingHours: "8:30 AM - 11:00 PM"
  },
  {
    id: 17,
    name: "Dubai Mall",
    cityId: 19,
    type: "Shopping",
    category: "Modern",
    priceRange: "$$$",
    duration: "3-4 hours",
    bestTimeToVisit: "Afternoon",
    description: "World's largest shopping mall with entertainment attractions",
    highlights: ["Dubai Aquarium", "Fountain show", "Ice rink", "VR Park"],
    tips: ["Watch fountain show every 30 mins", "Wear comfortable shoes"],
    coordinates: { lat: 25.1970, lng: 55.2790 },
    rating: 4.6,
    image: "/assets/attractions/dubaimall.jpg",
    openingHours: "10:00 AM - 12:00 AM"
  },

  // Barcelona Attractions
  {
    id: 18,
    name: "Sagrada Familia",
    cityId: 21,
    type: "Church",
    category: "Architectural",
    priceRange: "$$",
    duration: "2-3 hours",
    bestTimeToVisit: "Morning",
    description: "Gaudí's unfinished masterpiece with unique architecture",
    highlights: ["Natividad façade", "Gloria façade", "Interior columns", "Towers"],
    tips: ["Book tickets months in advance", "Take audio guide"],
    coordinates: { lat: 41.4036, lng: 2.1744 },
    rating: 4.9,
    image: "/assets/attractions/sagrada.jpg",
    openingHours: "9:00 AM - 6:00 PM"
  },
  {
    id: 19,
    name: "Park Güell",
    cityId: 21,
    type: "Park",
    category: "Architectural",
    priceRange: "$",
    duration: "2 hours",
    bestTimeToVisit: "Morning",
    description: "Whimsical park designed by Antoni Gaudí",
    highlights: ["Dragon staircase", "Salamander", "Greek Theatre", "Colonnaded footpath"],
    tips: ["Book timed tickets in advance", "Wear comfortable shoes"],
    coordinates: { lat: 41.4145, lng: 2.1527 },
    rating: 4.6,
    image: "/assets/attractions/parkguell.jpg",
    openingHours: "9:30 AM - 7:30 PM"
  },

  // Bali Attractions
  {
    id: 20,
    name: "Uluwatu Temple",
    cityId: 23,
    type: "Temple",
    category: "Cultural",
    priceRange: "$",
    duration: "2-3 hours",
    bestTimeToVisit: "Sunset",
    description: "Sea temple on cliff edge with Kecak fire dance",
    highlights: ["Cliff views", "Kecak dance", "Sunset", "Monkeys"],
    tips: ["Watch for monkeys stealing items", "Stay for Kecak dance at sunset"],
    coordinates: { lat: -8.8292, lng: 115.0850 },
    rating: 4.5,
    image: "/assets/attractions/uluwatu.jpg",
    openingHours: "9:00 AM - 7:00 PM"
  },

  // Athens Attractions
  {
    id: 21,
    name: "Acropolis",
    cityId: 24,
    type: "Archaeological",
    category: "Historical",
    priceRange: "$$",
    duration: "3-4 hours",
    bestTimeToVisit: "Early morning or late afternoon",
    description: "Ancient citadel containing Parthenon and other temples",
    highlights: ["Parthenon", "Erechtheion", "Propylaea", "Temple of Athena Nike"],
    tips: ["Visit early to avoid crowds", "Wear comfortable shoes"],
    coordinates: { lat: 37.9715, lng: 23.7257 },
    rating: 4.8,
    image: "/assets/attractions/acropolis.jpg",
    openingHours: "8:00 AM - 8:00 PM"
  }
];

export const hotels = [
  // Paris Hotels
  {
    id: 1,
    name: "Hotel Ritz Paris",
    cityId: 1,
    type: "Luxury",
    priceRange: "$$$$",
    rating: 4.9,
    amenities: ["Spa", "Pool", "Fine Dining", "Concierge"],
    location: "Place Vendôme",
    description: "Iconic luxury hotel with legendary service",
    image: "/assets/hotels/ritz.jpg",
    coordinates: { lat: 48.8674, lng: 2.3295 }
  },
  {
    id: 2,
    name: "Le Bristol Paris",
    cityId: 1,
    type: "Luxury",
    priceRange: "$$$$",
    rating: 4.8,
    amenities: ["Pool", "Spa", "Michelin Star Restaurant", "Garden"],
    location: "Faubourg Saint-Honoré",
    description: "Palace hotel with elegant French style",
    image: "/assets/hotels/bristol.jpg",
    coordinates: { lat: 48.8700, lng: 2.3186 }
  },
  {
    id: 3,
    name: "Hotel Fabric",
    cityId: 1,
    type: "Boutique",
    priceRange: "$$",
    rating: 4.3,
    amenities: ["Gym", "Bar", "Free WiFi", "Breakfast"],
    location: "11th Arrondissement",
    description: "Trendy boutique hotel in former textile factory",
    image: "/assets/hotels/fabric.jpg",
    coordinates: { lat: 48.8636, lng: 2.3762 }
  },

  // Tokyo Hotels
  {
    id: 4,
    name: "Park Hyatt Tokyo",
    cityId: 4,
    type: "Luxury",
    priceRange: "$$$$",
    rating: 4.8,
    amenities: ["Pool", "Spa", "Multiple Restaurants", "City Views"],
    location: "Shinjuku",
    description: "Famous luxury hotel featured in Lost in Translation",
    image: "/assets/hotels/parkhyatt.jpg",
    coordinates: { lat: 35.6852, lng: 139.6907 }
  },
  {
    id: 5,
    name: "Hotel Gracery Shinjuku",
    cityId: 4,
    type: "Business",
    priceRange: "$$",
    rating: 4.2,
    amenities: ["Restaurant", "Convenience Store", "Free WiFi", "Godzilla Theme"],
    location: "Shinjuku",
    description: "Popular hotel with Godzilla head on rooftop",
    image: "/assets/hotels/gracery.jpg",
    coordinates: { lat: 35.6931, lng: 139.7034 }
  },

  // New York Hotels
  {
    id: 6,
    name: "The Plaza Hotel",
    cityId: 7,
    type: "Luxury",
    priceRange: "$$$$",
    rating: 4.7,
    amenities: ["Spa", "Fine Dining", "Concierge", "Historic"],
    location: "Fifth Avenue",
    description: "Historic luxury hotel facing Central Park",
    image: "/assets/hotels/plaza.jpg",
    coordinates: { lat: 40.7644, lng: -73.9746 }
  },
  {
    id: 7,
    name: "Arlo Nomad",
    cityId: 7,
    type: "Boutique",
    priceRange: "$$$",
    rating: 4.4,
    amenities: ["Rooftop Bar", "Co-working Space", "Free WiFi", "City Views"],
    location: "NoMad",
    description: "Trendy hotel with stunning skyline views",
    image: "/assets/hotels/arlo.jpg",
    coordinates: { lat: 40.7465, lng: -73.9858 }
  },

  // Rome Hotels
  {
    id: 8,
    name: "Hotel de la Ville",
    cityId: 10,
    type: "Luxury",
    priceRange: "$$$$",
    rating: 4.8,
    amenities: ["Rooftop Restaurant", "Spa", "Concierge", "Historic"],
    location: "Spanish Steps",
    description: "Luxury hotel with rooftop views of Rome",
    image: "/assets/hotels/delaville.jpg",
    coordinates: { lat: 41.9057, lng: 12.4828 }
  }
];

export const restaurants = [
  // Paris Restaurants
  {
    id: 1,
    name: "Le Jules Verne",
    cityId: 1,
    cuisine: "French",
    priceRange: "$$$$",
    rating: 4.7,
    description: "Michelin-starred restaurant in the Eiffel Tower",
    highlights: ["Eiffel Tower views", "Fine dining", "Romantic"],
    image: "/assets/restaurants/julesverne.jpg",
    location: "Eiffel Tower, 2nd floor"
  },
  {
    id: 2,
    name: "Septime",
    cityId: 1,
    cuisine: "French Contemporary",
    priceRange: "$$$",
    rating: 4.6,
    description: "World's 50 Best restaurant with casual fine dining",
    highlights: ["Seasonal menu", "Natural wines", "Trendy"],
    image: "/assets/restaurants/septime.jpg",
    location: "11th Arrondissement"
  },

  // Tokyo Restaurants
  {
    id: 3,
    name: "Sukiyabashi Jiro",
    cityId: 4,
    cuisine: "Sushi",
    priceRange: "$$$$",
    rating: 4.9,
    description: "Legendary sushi restaurant featured in Jiro Dreams of Sushi",
    highlights: ["Omakase", "Michelin 3-star", "Traditional"],
    image: "/assets/restaurants/jiro.jpg",
    location: "Ginza"
  },
  {
    id: 4,
    name: "Ichiran Ramen",
    cityId: 4,
    cuisine: "Japanese",
    priceRange: "$",
    rating: 4.5,
    description: "Famous tonkotsu ramen chain with individual booths",
    highlights: ["Customizable ramen", "24 hours", "Individual booths"],
    image: "/assets/restaurants/ichiran.jpg",
    location: "Multiple locations"
  },

  // New York Restaurants
  {
    id: 5,
    name: "Le Bernardin",
    cityId: 7,
    cuisine: "Seafood",
    priceRange: "$$$$",
    rating: 4.8,
    description: "Michelin 3-star seafood restaurant",
    highlights: ["Fresh seafood", "Elegant dining", "Wine pairing"],
    image: "/assets/restaurants/lebernardin.jpg",
    location: "Midtown"
  },
  {
    id: 6,
    name: "Katz's Delicatessen",
    cityId: 7,
    cuisine: "Jewish Deli",
    priceRange: "$$",
    rating: 4.4,
    description: "Historic deli famous for pastrami sandwiches",
    highlights: ["Pastrami", "Historic", "Casual"],
    image: "/assets/restaurants/katz.jpg",
    location: "Lower East Side"
  }
];

export const activities = [
  // Paris Activities
  {
    id: 1,
    name: "Seine River Cruise",
    cityId: 1,
    type: "Sightseeing",
    duration: "1 hour",
    priceRange: "$$",
    description: "Scenic boat tour along the Seine River",
    highlights: ["Eiffel Tower views", "Notre-Dame", "Parisian bridges"],
    bestTime: "Evening for dinner cruise",
    image: "/assets/activities/seine.jpg"
  },
  {
    id: 2,
    name: "Montmartre Walking Tour",
    cityId: 1,
    type: "Cultural",
    duration: "2-3 hours",
    priceRange: "$",
    description: "Explore the artistic neighborhood of Montmartre",
    highlights: ["Sacré-Cœur", "Artist Square", "Moulin Rouge"],
    bestTime: "Morning",
    image: "/assets/activities/montmartre.jpg"
  },

  // Tokyo Activities
  {
    id: 3,
    name: "Tsukiji Outer Market Food Tour",
    cityId: 4,
    type: "Food",
    duration: "2 hours",
    priceRange: "$$",
    description: "Sample fresh seafood and Japanese street food",
    highlights: ["Sushi", "Sea urchin", "Japanese snacks"],
    bestTime: "Morning",
    image: "/assets/activities/tsukiji.jpg"
  },
  {
    id: 4,
    name: "Robot Restaurant Show",
    cityId: 4,
    type: "Entertainment",
    duration: "1.5 hours",
    priceRange: "$$$",
    description: "Over-the-top robot and laser show",
    highlights: ["Robots", "Lasers", "Dancers", "Neon lights"],
    bestTime: "Evening",
    image: "/assets/activities/robot.jpg"
  },

  // New York Activities
  {
    id: 5,
    name: "Broadway Show",
    cityId: 7,
    type: "Entertainment",
    duration: "2.5 hours",
    priceRange: "$$$",
    description: "World-class theater production",
    highlights: ["Live theater", "Musicals", "Acting"],
    bestTime: "Evening",
    image: "/assets/activities/broadway.jpg"
  },
  {
    id: 6,
    name: "Statue of Liberty & Ellis Island Tour",
    cityId: 7,
    type: "Historical",
    duration: "4 hours",
    priceRange: "$$",
    description: "Ferry tour to Liberty Island and Ellis Island",
    highlights: ["Statue of Liberty", "Immigration Museum", "Harbor views"],
    bestTime: "Morning",
    image: "/assets/activities/statue-tour.jpg"
  }
];

export const travelPackages = [
  {
    id: 1,
    name: "Paris Romantic Getaway",
    cities: [1],
    duration: "5 days / 4 nights",
    priceRange: "$$$$",
    included: [
      "4 nights luxury hotel",
      "Airport transfers",
      "Eiffel Tower tickets",
      "Seine River cruise",
      "Breakfast daily",
      "City tour"
    ],
    description: "Perfect romantic escape to the City of Lights",
    bestFor: ["Couples", "Honeymoon", "Anniversary"],
    image: "/assets/packages/paris-romantic.jpg"
  },
  {
    id: 2,
    name: "Japan Golden Route",
    cities: [4, 5, 6],
    duration: "10 days / 9 nights",
    priceRange: "$$$$",
    included: [
      "3 nights Tokyo",
      "3 nights Kyoto",
      "3 nights Osaka",
      "Bullet train tickets",
      "All transfers",
      "Guided tours"
    ],
    description: "Classic Japan tour covering major highlights",
    bestFor: ["First-time visitors", "Culture lovers", "Foodies"],
    image: "/assets/packages/japan-golden.jpg"
  },
  {
    id: 3,
    name: "Italian Trilogy",
    cities: [10, 11, 12],
    duration: "12 days / 11 nights",
    priceRange: "$$$$",
    included: [
      "4 nights Rome",
      "3 nights Florence",
      "4 nights Venice",
      "Train tickets",
      "Vatican tour",
      "Gondola ride"
    ],
    description: "Experience Rome, Florence, and Venice in one trip",
    bestFor: ["History buffs", "Art lovers", "Romantic travel"],
    image: "/assets/packages/italian-trilogy.jpg"
  },
  {
    id: 4,
    name: "Southeast Asia Adventure",
    cities: [13, 14, 15],
    duration: "14 days / 13 nights",
    priceRange: "$$$",
    included: [
      "4 nights Bangkok",
      "5 nights Phuket",
      "5 nights Chiang Mai",
      "Domestic flights",
      "Island hopping",
      "Elephant sanctuary"
    ],
    description: "Explore Thailand's cities, beaches, and mountains",
    bestFor: ["Adventure", "Beach lovers", "Culture seekers"],
    image: "/assets/packages/thailand-adventure.jpg"
  }
];

// Helper functions to get data
export const getCountryById = (id) => countries.find(country => country.id === id);
export const getCityById = (id) => cities.find(city => city.id === id);
export const getCitiesByCountryId = (countryId) => cities.filter(city => city.countryId === countryId);
export const getAttractionsByCityId = (cityId) => attractions.filter(attraction => attraction.cityId === cityId);
export const getHotelsByCityId = (cityId) => hotels.filter(hotel => hotel.cityId === cityId);
export const getRestaurantsByCityId = (cityId) => restaurants.filter(restaurant => restaurant.cityId === cityId);
export const getActivitiesByCityId = (cityId) => activities.filter(activity => activity.cityId === cityId);
export const getContinentById = (id) => continents.find(continent => continent.id === id);
export const getCountriesByContinentId = (continentId) => countries.filter(country => country.continentId === continentId);

// Get popular destinations (top cities)
export const popularDestinations = [
  cities[0],
  cities[3],
  cities[6],
  cities[9],
  cities[15],
  cities[18],
  cities[22],
  cities[24]
].map(dest => ({
  ...dest,
  country: getCountryById(dest.countryId)?.name,
  travelers: Math.floor(Math.random() * 3000) + 1500,
  rating: 4.5 + Math.random() * 0.5
}));