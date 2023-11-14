export type useAuthProps = {
  children: React.ReactNode;
};
export type HamburgerMenuProps = {
  isDropDownActive: boolean;
  toggleMenu: () => void;
};
export type SignUpFormProps = {
  changeForm: () => void;
};
export type UserData = {
  id: number;
  name: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};
export type item = {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  userId: string;
  price: string;
  userName: string;
  createdAt: string;
  updatedAt: string;
  user: UserData;
};
export type UserState = {
  data: UserData | null;
};
export type ErrorProps = {
  message: string;
};
export type AllItemsListProps = {
  items: item[];
};
export type PersonalItemListProps = {
  items: item[];
  refetch: (newUrl: string) => void;
};
