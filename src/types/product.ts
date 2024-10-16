// Offer Type
export interface Offer {
  name: string; // Name of the offer
  offerId: string; // Unique identifier for the offer
  price: number; // Price of the offer
  qty: number; // Quantity available
  textQty: number; // Text representation of quantity
  availableQty: number; // Available quantity for purchase
  availableTextQty: number; // Text representation of available quantity
  merchantName: string; // Name of the merchant
  isPreorder: boolean; // Indicates if the offer is a preorder
  releaseDate: string; // Release date in ISO format
  _id: string; // MongoDB ObjectId
}

// Screenshot Type
export interface Screenshot {
  url: string; // URL of the screenshot
  thumbnail?: string; // Original URL of the screenshot
  url_original?: string; // URL of the image (optional)
  _id: string; // MongoDB ObjectId
}

// Video Type
export interface Video {
  name: string; // Name of the video
  video_id: string; // Unique ID for the video
  _id: string; // MongoDB ObjectId
}

// System Requirement Type
export interface SystemRequirement {
  system: string; // Name of the system (e.g., Windows, macOS)
  requirement: string[]; // Array of requirements
  _id: string; // MongoDB ObjectId
}

// Images Type
export interface Images {
  screenshots: Screenshot[]; // Array of screenshots
  cover: {
    url: string; // URL for the cover image
    thumbnail: string; // URL for the thumbnail image
    _id: string; // MongoDB ObjectId
  };
}

// Product Type
export type Product = {
  _id: string; // MongoDB ObjectId
  name: string; // Name of the product
  description?: string; // Description of the product
  coverImage?: string; // URL for the cover image
  coverImageOriginal?: string; // Original URL for the cover image
  developers: string[]; // Array of developer names
  publishers: string[]; // Array of publisher names
  genres: string[]; // Array of genres
  platform: string; // Platform name (e.g., Epic Games)
  releaseDate: string; // Release date in ISO format
  qty: number; // Quantity available
  textQty: number; // Text representation of quantity
  price: number; // Price of the product
  cheapestOfferId: string[]; // Array of IDs for the cheapest offers
  isPreorder: boolean; // Indicates if it’s a preorder
  regionalLimitations: string; // Regional limitations (e.g., Region Free)
  regionId: number; // Region ID
  metacriticScore?: number; // Metacritic score
  activationDetails: string; // Details for product activation
  kinguinId: number; // Kinguin product ID
  productId: string; // Product ID
  originalName?: string; // Original name of the product
  screenshots: Screenshot[]; // Array of screenshots
  videos: Video[]; // Array of videos
  languages: string[]; // Supported languages
  systemRequirements: SystemRequirement[]; // Array of system requirements
  tags: string[]; // Array of tags
  offers: Offer[]; // Array of offers
  offersCount: number; // Count of offers available
  totalQty: number; // Total quantity across all offers
  merchantName: string[]; // Array of merchant names
  ageRating?: string; // Age rating (e.g., PEGI 18)
  steam: string; // Steam App ID
  images: Images; // Images object containing cover and screenshots
  sellPrice: number; // Selling price
  updatedAt: string; // Last updated date in ISO format
  __v: number; // Version key for MongoDB
  usdPrice: string; // Price in USD
  plnPrice: string; // Price in PLN
  gbpPrice: string; // Price in GBP
};

// Response interface for an array of products
export type ProductsResponse = {
  products: Product[]; // Array of Product objects
  totalProducts?: number; // Total number of products
  totalPages?: number; // Total number of pages
  currentPage?: number; // Current page number
};
