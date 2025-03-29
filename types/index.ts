export type EmailBlock = {
    id: string;
    type: 'text' | 'image' | 'button';
    content: string;
    position: number;
  };
  
  export type Campaign = {
    id: string;
    title: string;
    content: string;
    status: 'draft' | 'scheduled' | 'sent';
    sentCount: number;
    createdAt: Date;
  };
  
  export type StripePlan = {
    id: string;
    name: string;
    price: number;
    interval: 'month' | 'year';
    features: string[];
  };