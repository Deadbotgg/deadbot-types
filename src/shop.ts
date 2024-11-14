export interface ShopData {
  Weapon: Record<
    string,
    {
      name: string;
      image: string;
      activation: string;
      components?: { image: string }[];
    }[]
  >;
  Armor: Record<
    string,
    {
      name: string;
      image: string;
      activation: string;
      components?: { image: string }[];
    }[]
  >;
  Tech: Record<
    string,
    {
      name: string;
      image: string;
      activation: string;
      components?: { image: string }[];
    }[]
  >;
}
