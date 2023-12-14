export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

// Enums
export enum Status {
  PENDING = "PENDING",
}

// Plan Model
export interface Plan {
  id: string;
  name: string;
  price: number;
  reward: number;
  totalPurchased: number;
  createdAt: string;
  updatedAt: string;
  User: User[];
}

// Scanner Model
export interface Scanner {
  id: string;
  storeId: string;
  label: string;
  imageUrl: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

// Redeem Model
export interface Redeem {
  id: string;
  userId: string;
  user: User;
  amount: number;
  bank: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
}

// RequestBalance Model
export interface RequestBalance {
  id: string;
  userId: string;
  user: User;
  amount: number;
  imageUrl: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  balance: number;
  redeems: Redeem[];
  requests: RequestBalance[];
  myRefferalCode: number;
  referredBy: User | null;
  referredById: string | null;
  referrals: User[];
  createdAt: string;
  updatedAt: string;
  plan: Plan | null;
  planId: string | null;
}
