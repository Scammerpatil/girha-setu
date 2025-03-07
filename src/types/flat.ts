import { StaticRenderResultMetadata } from "next/dist/server/render-result";
import { User } from "./user";

export type Flat = {
  _id?: string;
  title: string;
  price: number;
  description: string;
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    coordinates: [number, number];
  };
  type: "Apartment" | "House" | "Villa" | "Penthouse" | "Studio";
  mainImage: string;
  images: string[];
  amenities: [
    {
      type: string;
      enum: [
        "Parking",
        "Swimming Pool",
        "Gym",
        "Balcony",
        "Security",
        "Power Backup",
        "WiFi",
        "Garden"
      ];
    }
  ];
  bhks: number;
  area: number;
  owner: User;
  availability: boolean;
  availabilityCalendar: [{ date: Date; available: boolean }];
  bookings: [
    {
      startDate: Date;
      endDate: Date;
      user: User;
    }
  ];
  favoritesCount: number;
  createdAt?: Date;
};
