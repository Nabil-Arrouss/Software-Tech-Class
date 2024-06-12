// Represents the structure of an image object within the application.

export interface Image {
  id: number;
  title: string;
  path: string;
  created_at?: string;
  updated_at?: string;
}
