export interface MovieDetails {
  id?: number;
  name: string;
  image: string;
  description: string;
  category_id : number;
  created_at?: string;
  updated_at?: string;
  category: {
    id: number,
    name: string
  }
}
