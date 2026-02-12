
export interface Round {
  title: string;
  date: string;
  type: 'Online' | 'Offline';
  location?: string;
  description: string;
}

export interface Perk {
  title: string;
  description: string;
  icon: string;
}

export interface Contact {
  name: string;
  phone: string;
}
