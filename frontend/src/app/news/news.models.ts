export interface News {
  _id: string;
  title: string;
  author: string;
  content: string;
  createdAt: number;
  lastModifiedAt: number;
  deletedAt: number;
  archives: Photo[];
  category: string;
}

export interface NewsRequest {
  title: string;
  content: string;
  category: string;
}

export interface Photo {
  url: string;
  uploadedBy: string;
  uploadedAt: number;
}
