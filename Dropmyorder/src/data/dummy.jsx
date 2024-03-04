const Locations = [
    {
      id: 1,
      name: "Shimla",
      loaded: true,
      restaurants: [
        { name: "GuptaJi's", available: true, timings: { opening: "10:00 AM", closing: "10:00 PM" } },
        { name: "XYZ Restaurant", available: false, timings: { opening: "9:00 AM", closing: "9:00 PM" } },
        // Add more restaurants as needed
      ]
    },
    {
      id: 2,
      name: "Manali",
      loaded: true,
      restaurants: [
        { name: "Mountain View Cafe", available: true, timings: { opening: "9:30 AM", closing: "11:00 PM" } },
        { name: "Snowdrop Restaurant", available: true, timings: { opening: "8:00 AM", closing: "10:30 PM" } },
        // Add more restaurants as needed
      ]
    },
    {
      id: 3,
      name: "Dharamshala",
      loaded: false,
      restaurants: [
        { name: "Tibetan Kitchen", available: false, timings: { opening: "11:00 AM", closing: "9:30 PM" } },
        { name: "Illiterati Books & Coffee", available: true, timings: { opening: "8:30 AM", closing: "11:00 PM" } },
        // Add more restaurants as needed
      ]
    },
    {
      id: 4,
      name: "Kasol",
      loaded: false,
      restaurants: [
        { name: "Evergreen Cafe", available: true, timings: { opening: "9:00 AM", closing: "11:00 PM" } },
        { name: "Moon Dance Cafe", available: false, timings: { opening: "10:00 AM", closing: "10:00 PM" } },
        // Add more restaurants as needed
      ]
    },
    {
      id: 5,
      name: "Dalhousie",
      loaded: false,
      restaurants: [
        { name: "Cafe Dalhousie", available: true, timings: { opening: "8:00 AM", closing: "10:30 PM" } },
        { name: "Bon Appetit Cafe", available: true, timings: { opening: "9:30 AM", closing: "11:00 PM" } },
        // Add more restaurants as needed
      ]
  },
  {
    id: 5,
    name: "Dalhousie",
    loaded: false,
    restaurants: [
      { name: "Cafe Dalhousie", available: true, timings: { opening: "8:00 AM", closing: "10:30 PM" } },
      { name: "Bon Appetit Cafe", available: true, timings: { opening: "9:30 AM", closing: "11:00 PM" } },
      // Add more restaurants as needed
    ]
  },
  {
    id: 5,
    name: "Dalhousie",
    loaded: false,
    restaurants: [
      { name: "Cafe Dalhousie", available: true, timings: { opening: "8:00 AM", closing: "10:30 PM" } },
      { name: "Bon Appetit Cafe", available: true, timings: { opening: "9:30 AM", closing: "11:00 PM" } },
      // Add more restaurants as needed
    ]
  },
  ];
  export const restaurantData = [
    {
      name: "Himachali Dham Restaurant",
      image: "https://imgur.com/5TTGRfh.png",
      rating: 4.5,
      location: "Shimla"
    },
    {
      name: "Rendezvous Manali",
      image: "https://imgur.com/ABPoygg.png",
      rating: 4.2,
      location: "Manali"
    },
    {
      name: "Dalhousie Delights",
      image: "https://imgur.com/PCcMEh2.png",
      rating: 4.7,
      location: "Dalhousie"
    },
    {
      name: "Kasol Kitchen",
      image: "https://imgur.com/luAV2B8.png",
      rating: 4.0,
      location: "Kasol"
    },
    {
      name: "Bir Bites",
      image: "https://imgur.com/U3zeqpw.png",
      rating: 4.3,
      location: "Bir"
    },
    {
      name: "Chamba Cuisine",
      image: "https://imgur.com/5TTGRfh.png", // Repeated from first restaurant
      rating: 4.8,
      location: "Chamba"
    },
    {
      name: "McLeodganj Meals",
      image: "https://imgur.com/ABPoygg.png", // Repeated from second restaurant
      rating: 4.6,
      location: "McLeodganj"
    },
    {
      name: "Solan Savor",
      image: "https://imgur.com/PCcMEh2.png", // Repeated from third restaurant
      rating: 4.4,
      location: "Solan"
    },
    {
      name: "Palampur Palate",
      image: "https://imgur.com/luAV2B8.png", // Repeated from fourth restaurant
      rating: 4.9,
      location: "Palampur"
    },
    {
      name: "Mandi Munchies",
      image: "https://imgur.com/U3zeqpw.png", // Repeated from fifth restaurant
      rating: 4.2,
      location: "Mandi"
    },
    {
      name: "Kullu Kitchen",
      image: "https://imgur.com/5TTGRfh.png", // Repeated from first restaurant
      rating: 4.5,
      location: "Kullu"
    }
];

export const restaurantsHimachal = [
  {
    name: "Himachali Dham Restaurant",
    starRating: 4.5,
    priceForTwo: "500",
    timeToDeliver: "30 minutes"
  },
  {
    name: "Rendezvous Manali",
    starRating: 4.2,
    priceForTwo: "800",
    timeToDeliver: "45 minutes"
  },
  {
    name: "Dalhousie Delights",
    starRating: 4.7,
    priceForTwo: "600",
    timeToDeliver: "35 minutes"
  },
  {
    name: "Kasol Kitchen",
    starRating: 4.0,
    priceForTwo: "400",
    timeToDeliver: "25 minutes"
  },
  {
    name: "Bir Bites",
    starRating: 4.3,
    priceForTwo: "450",
    timeToDeliver: "28 minutes"
  },
  {
    name: "Chamba Cuisine",
    starRating: 4.8,
    priceForTwo: "700",
    timeToDeliver: "40 minutes"
  },
  {
    name: "McLeodganj Meals",
    starRating: 4.6,
    priceForTwo: "550",
    timeToDeliver: "32 minutes"
  },
  {
    name: "Solan Savor",
    starRating: 4.4,
    priceForTwo: "480",
    timeToDeliver: "29 minutes"
  },
  {
    name: "Palampur Palate",
    starRating: 4.9,
    priceForTwo: "750",
    timeToDeliver: "42 minutes"
  },
  {
    name: "Mandi Munchies",
    starRating: 4.2,
    priceForTwo: "420",
    timeToDeliver: "27 minutes"
  },
  {
    name: "Kullu Kitchen",
    starRating: 4.5,
    priceForTwo: "520",
    timeToDeliver: "33 minutes"
  },
  {
    name: "Shimla Spice",
    starRating: 4.1,
    priceForTwo: "650",
    timeToDeliver: "38 minutes"
  },
  {
    name: "Manali Magic",
    starRating: 4.4,
    priceForTwo: "700",
    timeToDeliver: "40 minutes"
  },
  {
    name: "Dharamshala Delights",
    starRating: 4.3,
    priceForTwo: "600",
    timeToDeliver: "35 minutes"
  },
  {
    name: "Chandigarh Chaat",
    starRating: 4.0,
    priceForTwo: "450",
    timeToDeliver: "28 minutes"
  },
  {
    name: "Kangra Kitchen",
    starRating: 4.6,
    priceForTwo: "800",
    timeToDeliver: "45 minutes"
  },
  {
    name: "Bilaspur Bistro",
    starRating: 4.2,
    priceForTwo: "550",
    timeToDeliver: "32 minutes"
  },
  {
    name: "Una Utopia",
    starRating: 4.7,
    priceForTwo: "750",
    timeToDeliver: "42 minutes"
  },
  {
    name: "Nahan Noodles",
    starRating: 4.5,
    priceForTwo: "600",
    timeToDeliver: "35 minutes"
  },
  {
    name: "Kasauli Kitchens",
    starRating: 4.8,
    priceForTwo: "850",
    timeToDeliver: "50 minutes"
  },
  {
    name: "Chamba Chats",
    starRating: 4.3,
    priceForTwo: "480",
    timeToDeliver: "29 minutes"
  },
  {
    name: "Parwanoo Paratha House",
    starRating: 4.9,
    priceForTwo: "700",
    timeToDeliver: "40 minutes"
  },
  {
    name: "Mandi Mithaiwala",
    starRating: 4.2,
    priceForTwo: "400",
    timeToDeliver: "25 minutes"
  },
  {
    name: "Sundernagar Sweets",
    starRating: 4.6,
    priceForTwo: "550",
    timeToDeliver: "32 minutes"
  },
  {
    name: "Rampur Restaurants",
    starRating: 4.4,
    priceForTwo: "700",
    timeToDeliver: "40 minutes"
  },
  {
    name: "Hamirpur Hangout",
    starRating: 4.7,
    priceForTwo: "650",
    timeToDeliver: "38 minutes"
  },
  {
    name: "Chintpurni Cafeteria",
    starRating: 4.5,
    priceForTwo: "500",
    timeToDeliver: "30 minutes"
  },
  {
    name: "Una Upahaar",
    starRating: 4.8,
    priceForTwo: "800",
    timeToDeliver: "45 minutes"
  },
  {
    name: "Bilaspur Bakes",
    starRating: 4.3,
    priceForTwo: "600",
    timeToDeliver: "35 minutes"
  },
  {
    name: "Kangra Kulcha Corner",
    starRating: 4.6,
    priceForTwo: "550",
    timeToDeliver: "32 minutes"
  }
];



  

  
  export default Locations;
  