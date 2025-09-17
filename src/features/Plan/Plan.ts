export interface Plan {
  id: string;
  name: string;
  createdAt: string;
  createdBy: string;
  isNew?: boolean; // helps in UI
  productId: string;
  cardA: {
    title: string;
    value: number;
  };
  travelCard: string[]; // example of another card
  dinningCard: string[]; // example of another card
}

export type CardKey = "Travel" | "Dinning" | "Card D"; // can extend later
