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
  Vitality: Record<
    string,
    {
      name: string;
      image: string;
      activation: string;
      components?: { image: string }[];
    }[]
  >;
  Spirit: Record<
    string,
    {
      name: string;
      image: string;
      activation: string;
      components?: { image: string }[];
    }[]
  >;
}
