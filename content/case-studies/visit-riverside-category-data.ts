const CAT = "/showcases/websites/visit-riverside";
const LIST = `${CAT}/listings`;

type ListingInput = {
  id: string;
  name: string;
  tag: string;
  index: number;
  mapPosition: { x: number; y: number };
};

function listings(category: string, items: ListingInput[]) {
  return items.map((item) => ({
    id: item.id,
    name: item.name,
    tag: item.tag,
    image: `${LIST}/${category}-${item.index}.jpg`,
    mapPosition: item.mapPosition,
  }));
}

export const visitRiversideCategoryExplorer = [
  {
    id: "restaurants",
    label: "Restaurants",
    interactive: true,
    sectionTitle: "ALL RESTAURANTS",
    filterLabel: "Restaurants",
    mapImage: `${CAT}/map-restaurants.png`,
    image: `${CAT}/category-restaurants.png`,
    alt: "Visit Riverside restaurants directory with listing grid and map",
    listings: listings("restaurants", [
      { id: "slice-house", name: "Slice House by Tony Gemignani", tag: "EAT & DRINK", index: 0, mapPosition: { x: 48, y: 42 } },
      { id: "low-key-poke", name: "Low Key Poke Joint", tag: "EAT & DRINK", index: 1, mapPosition: { x: 62, y: 55 } },
      { id: "dirtys", name: "Dirty's Sandwiches", tag: "EAT & DRINK", index: 2, mapPosition: { x: 38, y: 68 } },
      { id: "the-outpost", name: "The Outpost", tag: "EAT & DRINK", index: 3, mapPosition: { x: 55, y: 35 } },
      { id: "laws", name: "Law's Restaurant", tag: "EAT & DRINK", index: 4, mapPosition: { x: 44, y: 58 } },
      { id: "scratch-pizza", name: "Scratch Pizza", tag: "EAT & DRINK", index: 5, mapPosition: { x: 58, y: 48 } },
    ]),
  },
  {
    id: "events",
    label: "Events",
    interactive: false,
    image: `${CAT}/category-events.png`,
    alt: "Visit Riverside events calendar with outdoor and cultural listings",
  },
  {
    id: "things-to-do",
    label: "Things To Do",
    interactive: true,
    sectionTitle: "ALL ATTRACTIONS",
    filterLabel: "Attractions",
    mapImage: `${CAT}/map-things-to-do.png`,
    image: `${CAT}/category-things-to-do.png`,
    alt: "Visit Riverside attractions directory with map pins",
    listings: listings("things-to-do", [
      { id: "cheech", name: "The Cheech Marin Center for Chicano Art & Culture", tag: "PUBLIC GALLERIES", index: 0, mapPosition: { x: 46, y: 40 } },
      { id: "municipal-auditorium", name: "Riverside Municipal Auditorium", tag: "THINGS TO DO", index: 1, mapPosition: { x: 52, y: 52 } },
      { id: "weber-house", name: "The Peter J. Weber House", tag: "THINGS TO DO", index: 2, mapPosition: { x: 40, y: 62 } },
      { id: "amc-tyler", name: "AMC Tyler Galleria 16", tag: "THINGS TO DO", index: 3, mapPosition: { x: 58, y: 38 } },
      { id: "regal-plaza", name: "Regal Riverside Plaza", tag: "THINGS TO DO", index: 4, mapPosition: { x: 44, y: 50 } },
      { id: "color-me-mine", name: "Color Me Mine", tag: "ATTRACTIONS", index: 5, mapPosition: { x: 54, y: 65 } },
    ]),
  },
  {
    id: "hotels",
    label: "Hotels",
    interactive: false,
    image: `${CAT}/category-hotels.png`,
    alt: "Visit Riverside where to stay listings and featured hotels",
  },
  {
    id: "arts-culture",
    label: "Arts & Culture",
    interactive: false,
    image: `${CAT}/category-arts-culture.png`,
    alt: "Visit Riverside arts and culture experience categories",
  },
  {
    id: "shopping",
    label: "Shopping",
    interactive: true,
    sectionTitle: "ALL SHOPPING",
    filterLabel: "Shopping",
    mapImage: `${CAT}/map-shopping.png`,
    image: `${CAT}/category-shopping.png`,
    alt: "Visit Riverside shopping directory with local retailers and map",
    listings: listings("shopping", [
      { id: "pet-wants", name: "Pet Wants Riverside", tag: "SHOPPING", index: 0, mapPosition: { x: 50, y: 44 } },
      { id: "things-they-love", name: "Things They Love", tag: "SHOPPING", index: 1, mapPosition: { x: 42, y: 56 } },
      { id: "dragonmarsh", name: "Dragonmarsh Apothecary & Teas", tag: "SHOPPING", index: 2, mapPosition: { x: 58, y: 50 } },
      { id: "libertys", name: "Liberty's Buy, Sell, Trade", tag: "SHOPPING", index: 3, mapPosition: { x: 46, y: 66 } },
      { id: "la-bomba", name: "La Bomba Vintage Clothing", tag: "SHOPPING", index: 4, mapPosition: { x: 54, y: 38 } },
      { id: "riverside-coins", name: "Riverside Coins & Bullion", tag: "SHOPPING", index: 5, mapPosition: { x: 60, y: 58 } },
    ]),
  },
  {
    id: "nightlife",
    label: "Nightlife",
    interactive: true,
    sectionTitle: "ALL BARS, LOUNGES, & NIGHTCLUBS",
    filterLabel: "Bars, Lounges, & Nightclubs",
    mapImage: `${CAT}/map-nightlife.png`,
    image: `${CAT}/category-nightlife.png`,
    alt: "Visit Riverside bars, lounges, and nightclubs with map discovery",
    listings: listings("nightlife", [
      { id: "morgans-tavern", name: "Morgan's Tavern", tag: "EAT & DRINK", index: 0, mapPosition: { x: 47, y: 43 } },
      { id: "the-sire", name: "The Sire", tag: "EAT & DRINK", index: 1, mapPosition: { x: 56, y: 54 } },
      { id: "local-public-house", name: "Local Public House", tag: "EAT & DRINK", index: 2, mapPosition: { x: 41, y: 60 } },
      { id: "shindigs", name: "Shindigs Country Kitchen Bar & Stage", tag: "EAT & DRINK", index: 3, mapPosition: { x: 52, y: 36 } },
      { id: "brickwood", name: "The Brickwood", tag: "EAT & DRINK", index: 4, mapPosition: { x: 45, y: 52 } },
      { id: "dapper-dine", name: "Dapper Dine & Lounge", tag: "BARS, LOUNGES, & NIGHTCLUBS", index: 5, mapPosition: { x: 59, y: 47 } },
    ]),
  },
  {
    id: "outdoor-activities",
    label: "Outdoor Activities",
    interactive: true,
    sectionTitle: "ALL OUTDOOR ACTIVITIES",
    filterLabel: "Outdoor Activities",
    mapImage: `${CAT}/map-outdoor-activities.png`,
    image: `${CAT}/category-outdoor-activities.png`,
    alt: "Visit Riverside outdoor activities parks and recreation with map",
    listings: listings("outdoor-activities", [
      { id: "war-dog-park", name: "War Dog Memorial Park", tag: "OUTDOOR ACTIVITIES", index: 0, mapPosition: { x: 44, y: 45 } },
      { id: "ryan-bonaminio", name: "Ryan Bonaminio Park", tag: "THINGS TO DO", index: 1, mapPosition: { x: 52, y: 58 } },
      { id: "fairmount-park", name: "Fairmount Park", tag: "THINGS TO DO", index: 2, mapPosition: { x: 38, y: 52 } },
      { id: "rancho-jurupa", name: "Rancho Jurupa Regional Park", tag: "THINGS TO DO", index: 3, mapPosition: { x: 60, y: 40 } },
      { id: "aquamotion", name: "Aquamotion Ability Foundation", tag: "THINGS TO DO", index: 4, mapPosition: { x: 48, y: 64 } },
      { id: "fairmount-golf", name: "Fairmount Golf Course", tag: "THINGS TO DO", index: 5, mapPosition: { x: 55, y: 50 } },
    ]),
  },
] as const;

export type VisitRiversideCategoryId = (typeof visitRiversideCategoryExplorer)[number]["id"];
export type VisitRiversideListing = {
  id: string;
  name: string;
  tag: string;
  image: string;
  mapPosition: { x: number; y: number };
};
export type VisitRiversideInteractiveCategory = Extract<
  (typeof visitRiversideCategoryExplorer)[number],
  { interactive: true }
>;
export type VisitRiversideStaticCategory = Extract<
  (typeof visitRiversideCategoryExplorer)[number],
  { interactive: false }
>;
