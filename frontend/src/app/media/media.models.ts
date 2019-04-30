export interface Photo {
  title: string;
  url: string;
  description: string;
  uploadedBy: string;
  uploadedAt: number;
}

export interface PhotoRequest {
  title: string;
  url: string;
  description: string;
}
