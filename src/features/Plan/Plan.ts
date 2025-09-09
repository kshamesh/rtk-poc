export interface Plan {
  id: string;
  name: string;
  createdAt: string;
  createdBy: string;
  isNew?: boolean; // helps in UI
  productId: string;
}
