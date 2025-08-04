import { BookImage, Palette, Wine } from "lucide-react";
import { Eye, Share2, Pencil, Trash, XCircle } from "lucide-react";

export const navLinks = [
  { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
   { name: 'Discover', href: '/discover' },
    { name: 'ArtWorks', href: '/artworks' },
     { name: 'Help', href: '/help' },
  
];
export const helpLinks = [
  { name: 'Help and support', href: '/' },
    { name: 'FAQs', href: '/events' },
   { name: 'Contact Us', href: '/discover' },
    
  
];

export const otherLinks = [
  { name: 'Terms and Conditions', href: '/' },
    { name: 'Privacy policy', href: '/events' },
   { name: 'Cookie policy', href: '/discover' },
    
  
];

export const socialLinks = [
  { name: 'Instagram', href: '/' },
    { name: 'Linkedin', href: '/events' },
   { name: 'X(Twitter)', href: '/discover' },
    
  
];

export const popoverActions = [
  {
    label: "View",
    icon: Eye,
    className: "text-gray-600 hover:text-gray-800",
  },
  {
    label: "Share",
    icon: Share2,
    className: "text-gray-600 hover:text-gray-800",
  },
  {
    label: "Edit",
    icon: Pencil,
    className: "text-gray-600 hover:text-gray-800",
  },
  {
    label: "Unpublish",
    icon: Trash,
    className: "text-gray-600 hover:text-gray-800",
  },
  {
    label: "Cancel Event",
    icon: XCircle,
    className: "text-red-600 hover:text-red-800",
  },
];
export const expectCards =[
  {
    title:"Initimate shows",
    description:'Engage with nearby artists in an intimate setting at each performance.',
    image:'/expect1.png',
  },
  {
    title:"Unexpected venues",
    description:'From famous urban sites to secluded gardens, savor live art experiences in unforgettable locations.',
    image:'/expect2.png',
  },
  {
    title:"Limtless vibes",
    description:'Select from relaxed vibes to uplifting, vibrant energy to side-splitting humor — and all the creative expressions that lie in between.',
    image:'/expect3.png',
  },
  
]

 export const artPieces = [
    {
    id: 1,
    title: "Art piece title",
    artist: "James Choi",
    price: "$150",
    status: "UPCOMING",
    image: "/footer1.png",
    drawTime: "Tuesday, 08 Jul – 13:00 GMT",
    shipping: "22 Jul, 24",
    avatar: "/artist1.png",
    about:
      "Bask in the warmth of a Summer in San Sebastian by Yoon Hyup. In 2016, Brooklyn-based artist Yoon Hyup was living in a modest apartment with very little light. Caught in the grasp of fast-paced city life, he found himself yearning for sunlight and nature. So when he was invited to the Spanish city of San Sebastián for the summer, his art practice soon began to reflect his new environment.",

    details: [
      {
        title: "Dimensions",
        items: [
          "Unframed: 46.90cm (H) × 70.00cm (W)",
          "Framed: 53.70cm (H) × 77.00cm (W) × 3.00cm (D)",
        ],
      },
      
      {
        title: "Authentication",
        items: ["Signed by the artist. Individually numbered."],
      },
      {
        title: "Certificate of Authenticity",
        items: [
          "Arrives with a certificate of authenticity.",
          "Release date: July 08, 2025",
        ],
      },
      {
        title: "Packaging",
        items: [
          "Custom packaging designed to protect your artwork during transit.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Art piece title",
    artist: "James Choi",
    price: "$150",
    status: "AVAILABLE",
    image: "/footer2.png",
  },
  {
    id: 3,
    title: "Art piece title",
    artist: "James Choi",
    price: "$150",
    status: "AVAILABLE",
    image: "/footer4.png",
  },
  {
    id: 4,
    title: "Art piece title",
    artist: "James Choi",
    price: "$150",
    status: "AVAILABLE",
    image: "/footer4.png",
  },
  {
    id: 5,
    title: "Art piece title",
    artist: "James Choi",
    price: "$150",
    status: "UPCOMING",
    image: "/footer1.png",
  },
  {
    id: 6,
    title: "Art piece title",
    artist: "James Choi",
    price: "$150",
    status: "AVAILABLE",
    image: "/footer2.png",
  },
  {
    id: 7,
    title: "Art piece title",
    artist: "James Choi",
    price: "$150",
    status: "UPCOMING",
    image: "/footer1.png",
  },
  {
    id: 8,
    title: "Art piece title",
    artist: "James Choi",
    price: "$150",
    status: "AVAILABLE",
    image: "/footer2.png",
  },
];



export const artists = [
  {
    id: 1,
    name: 'Belin',
    location: 'Linares, Spain',
    avatar: '/artist1.png', 
    artwork: '/art1.png', 
    tags: ['Live-painting', 'Collectable'],
  },
  {
    id: 2,
    name: 'Ines Jimm',
    location: 'Madrid, Spain',
    avatar: '/artist1.png', 
    artwork: '/art2.png',
    tags: ['Pop-Up Gallery', 'Print '],
  },
  {
    id: 3,
    name: 'Tania Marmolejo',
    location: 'Paris, France',
    avatar: '/artist1.png', 
    artwork: '/art1.png', 
    tags: ['Secret Studio', 'Art Basel Paris'],
  },
  {
    id: 4,
    name: 'Albion',
    location: 'New York City, USA',
    avatar: '/artist1.png', 
    artwork: '/art2.png',
    tags: ['Luxury Hotel', 'Panel '],
  },
];


export const heroArtists = [
  {
    id: 1,
    name: 'Belin',
    location: 'Linares, Spain',
    avatar: '/artist1.png', 
    artwork: '/art1.png', 
    tag: 'Live-painting',
  },
  {
    id: 2,
    name: 'Ines Jimm',
    location: 'Madrid, Spain',
    avatar: '/artist1.png', 
    artwork: '/art2.png',
    tag: 'Dinner Experience',
  },
  {
    id: 3,
    name: 'Tania Marmolejo',
    location: 'Paris, France',
    avatar: '/artist1.png', 
    artwork: '/art1.png', 
    tag: 'Panel Discussion',
  },
  {
    id: 4,
    name: 'Albion',
    location: 'New York City, USA',
    avatar: '/artist1.png', 
    artwork: '/art2.png',
    tag: 'Dinner Experience',
  },
];


export const curatorEvents=[
  {
    id: 1,
    title: "The Collector’s Preview",
    artist: "James Choi",
    location: "Los Angeles, USA",
    image: "/event1.png",
    date: "Wed, Jul 24",
    badge: "Gallery opening",
    icon: BookImage,
    tags: ["ContemporaryArt", "Neo-expressionism"],
    
  },
  {
    id: 2,
    title: "The Collector’s Preview",
    artist: "John Doe",
    location: "Atlanta",
    image: "/event2.png",
    date: "Tue, Aug 24",
    badge: "Painting",
    icon:Palette,
    tags: ["ContemporaryArt", "Neo-expressionism"],
    
  },
  {
    id: 3,
    title: "The Collector’s Preview",
    artist: "Jane Smith",
    location: "New York",
    image: "/event1.png",
    date: "Mon, Sep 24",
    badge: "Dinner Experience",
    icon: Wine,
    tags: ["ContemporaryArt", "Neo-expressionism"],
    
  },
]


export const personalInfoFields = [
  { id: 'firstName', label: 'First Name', type: 'text', defaultValue: 'Michael' },
  { id: 'lastName', label: 'Last Name', type: 'text', defaultValue: 'Mensah' },
  { id: 'email', label: 'Email', type: 'email', defaultValue: 'mensahmichael@gmail.com' },
  { id: 'phoneNumber', label: 'Phone number', type: 'text', defaultValue: '233' },
];

export const locationFields = [
  {
    id: 'country',
    label: 'Country',
    type: 'select',
    defaultValue: 'Ghana',
    options: ['Ghana', 'USA', 'Canada'],
  },
  {
    id: 'city',
    label: 'City',
    type: 'select',
    defaultValue: 'Accra',
    options: ['Accra', 'Kumasi', 'Takoradi'],
  },
  {
    id: 'streetAddress',
    label: 'Street address',
    type: 'text',
    defaultValue: 'Kasoa akweley roundabout',
  },
  {
    id: 'apartment',
    label: 'Apartment (optional)',
    type: 'text',
    placeholder: 'Add apartment',
  },
  {
    id: 'postalCode',
    label: 'Postal Code',
    type: 'text',
    defaultValue: '233',
  },
];

export const passwordFields = [
  {
    id: 'currentPassword',
    label: 'Current Password',
    type: 'password',
    placeholder: 'Enter current password',
  },
  {
    id: 'newPassword',
    label: 'New Password',
    type: 'password',
    placeholder: 'Enter new password',
  },
  {
    id: 'confirmNewPassword',
    label: 'Confirm New Password',
    type: 'password',
    placeholder: 'Confirm new password',
  },
];




export const eventList = [
  {
    id: 1,
    name: "Belin",
    title: "The Collector’s Preview",
    location: "Linares, Spain",
    art1: "/art1.png",
    art2:'/art2.png',
    artwork: "/art1.png",
    icon: BookImage,
    iconName: "Gallery opening",
    date: "Thu, Jun 19",
    tag: "Live-painting",
    price: 50,
    time: "7:30 PM",
    limit: "3",
    address: "Roof top at Junction building",
    startTime: "8:00 PM",
    dressCode: "Must be formal or themed",
    briefings: "Starts 15 minutes before the event",
    description:
      "In the vibrant heart of Boston, art shows are where creativity meets community. Whether you're drawn to the soothing sounds of classical music or the electrifying beats of contemporary performances, there's an event for every taste. ",
  },
  {
    id: 2,
    name: "Ines Jimm",
    location: "Madrid, Spain",
    title: "The Collector’s Preview",
    art1: "/art1.png",
    art2:'/art2.png',
    artwork: "/art2.png",
    icon: Wine,
    iconName: "Dinner Experience",
    date: "Fri, Jun 20",
    tag: "Dinner Experience",
    price: 70,
    time: "8:00 PM",
    limit: "Limit 2",
    address: "La Terraza, City Centre",
    startTime: "8:15 PM",
    dressCode: "Smart casual",
    briefings: "Please arrive 10 minutes early",
    description:
      "A refined dinner event featuring fine dining, live acoustic sets and exclusive artist Q&A with Ines Jimm.",
  },
  {
    id: 3,
    name: "Tania Marmolejo",
    location: "Paris, France",
    title: "The Collector’s Preview",
    art1: "/art1.png",
    art2:'/art2.png',
    artwork: "/art1.png",
    icon: Palette,
    iconName: "Painting",
    date: "Sat, Jun 21",
    tag: "Contemporary Art",
    price: 60,
    time: "6:00 PM",
    limit: " 1",
    address: "Louvre Rooftop Deck",
    startTime: "6:30 PM",
    dressCode: "Art-themed attire encouraged",
    briefings: "No entry after 6:45 PM",
    description:
      "Explore Tania's unique abstract forms and immerse in a live painting session under the Paris sky.",
  },
  {
    id: 4,
    name: "Albion",
    location: "New York City, USA",
    title: "The Collector’s Preview",
    art1: "/art1.png",
    art2:'/art2.png',
    artwork: "/art2.png",
    icon: Palette,
    iconName: "Painting",
    date: "Sun, Jun 22",
    tag: "Street Art",
    price: 55,
    time: "5:00 PM",
    limit: "2",
    address: "Urban Roof NYC",
    startTime: "5:30 PM",
    dressCode: "Urban casual",
    briefings: "Come 20 minutes early to pick materials",
    description:
      "An expressive painting evening exploring graffiti and urban-themed visual art by Albion.",
  },
  {
    id: 5,
    name: "Luna Noir",
    location: "Berlin, Germany",
    title: "The Collector’s Preview",
    art1: "/art1.png",
    art2:'/art2.png',
    artwork: "/art1.png",
    icon: BookImage,
    iconName: "Gallery opening",
    date: "Mon, Jun 23",
    tag: "Neo-expressionism",
    price: 65,
    time: "7:00 PM",
    limit: "4",
    address: "Gallery 27, Museum Island",
    startTime: "7:30 PM",
    dressCode: "Cocktail attire",
    briefings: "Doors close 10 minutes after start",
    description:
      "Join Luna for an unveiling of her Neo-expressionist collection with interactive Q&A.",
  },
  {
    id: 6,
    name: "Javier Cortés",
    location: "Barcelona, Spain",
    title: "The Collector’s Preview",
    art1: "/art1.png",
    art2:'/art2.png',
    artwork: "/art2.png",
    icon: Wine,
    iconName: "Dinner Experience",
    date: "Tue, Jun 24",
    tag: "Culinary Art",
    price: 80,
    time: "8:00 PM",
    limit: " 2",
    address: "Rooftop Terra Lounge",
    startTime: "8:20 PM",
    dressCode: "Floral theme",
    briefings: "Arrive by 8:00 PM sharp",
    description:
      "A delicious mix of food and fine art curated by Javier in a sunset dinner setup.",
  },
  {
    id: 7,
    name: "Mira Laveau",
    location: "Cape Town, South Africa",
    title: "The Collector’s Preview",
    art1: "/art1.png",
    art2:'/art2.png',
    artwork: "/art1.png",
    icon: Palette,
    iconName: "Painting",
    date: "Wed, Jun 25",
    tag: "Abstract Expressionism",
    price: 60,
    time: "6:30 PM",
    limit: " 3",
    address: "Tabletop Arts Rooftop",
    startTime: "6:45 PM",
    dressCode: "Bold colors",
    briefings: "Paint materials provided",
    description:
      "A colorful evening of expressive techniques and live mentorship from Mira herself.",
  },
  {
    id: 8,
    name: "Riko Yamato",
    location: "Tokyo, Japan",
    title: "The Collector’s Preview",
    art1: "/art1.png",
    art2:'/art2.png',
    artwork: "/art2.png",
    icon: BookImage,
    iconName: "Gallery opening",
    date: "Thu, Jun 26",
    tag: "Modern Minimalism",
    price: 50,
    time: "7:00 PM",
    limit: "1",
    address: "SkyView Hall, Ginza",
    startTime: "7:15 PM",
    dressCode: "Monochrome theme",
    briefings: "Minimalist-themed giveaways available",
    description:
      "Experience the serene and clean works of Riko in this Zen-infused gallery launch.",
  },
  {
    id: 9,
    name: "Amahle Ndlovu",
    location: "Johannesburg, South Africa",
    title: "The Collector’s Preview",
    art1: "/art1.png",
    art2:'/art2.png',
    artwork: "/art1.png",
    icon: Wine,
    iconName: "Dinner Experience",
    date: "Fri, Jun 27",
    tag: "Afro-Fusion",
    price: 75,
    time: "7:30 PM",
    limit: " 2",
    address: "Skyline Deck, Rosebank",
    startTime: "7:45 PM",
    dressCode: "Traditional chic",
    briefings: "Dance session after dinner",
    description:
      "A rich blend of African food, culture, and dance in a rooftop dinner hosted by Amahle.",
  },
];


export const eventGallery =[
  {
    title:"Los Angeles",
    image:'/los angeles.png',
  },
  {
    title:"Tokyo",
    image:'/tokyo.png',
    
  },
  {
    title:"Toronto ",
    image:'/toronto.png',
  },
  
]

export const guestList = [
  { name: "James Appiah Koranteng", status: "Attending" },
  { name: "Judith Ago Mensah", status: "Attending" },
  { name: "Chris Waddle Wande Coal", status: "Attending" },
  { name: "Michael Mensah Kwame", status: "Attending" },
  { name: "James Babone", status: "Cancelled" },
  { name: "James Babone", status: "Cancelled" },
  { name: "James Babone", status: "Cancelled" },
  { name: "James Babone", status: "Cancelled" },
];



export const rsvpData = [
  { name: "Tue", value: 20 },
  { name: "Wed", value: 25 },
  { name: "Thu", value: 40 },
  { name: "Fri", value: 65 },
  { name: "Sat", value: 90 },
];

export const pageViewsData = [
  { name: "Tue", value: 10 },
  { name: "Wed", value: 15 },
  { name: "Thu", value: 30 },
  { name: "Fri", value: 55 },
  { name: "Sat", value: 80 },
];

export const cityData = [
  { name: "Greater Accra", value: 18 },
  { name: "Central", value: 41 },
  { name: "Volta", value: 60 },
  { name: "Ashanti", value: 73 },
  { name: "Eastern", value: 22 },
];


