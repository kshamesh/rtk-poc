export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  selected?: boolean; // ✅ checkbox state
}
