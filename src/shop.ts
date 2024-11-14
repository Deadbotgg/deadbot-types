export interface ShopData {
  Weapon: Record<
    string,
    {
      name: string;
      description: string;
      cost: string;
      tier: string;
      slot: string;
      image: string;
      activation: string;
      components?: { name: string; image: string }[];
    }[]
  >;
  Armor: Record<
    string,
    {
      name: string;
      description: string;
      cost: string;
      tier: string;
      slot: string;
      image: string;
      activation: string;
      components?: { name: string; image: string }[];
    }[]
  >;
  Tech: Record<
    string,
    {
      name: string;
      description: string;
      cost: string;
      tier: string;
      slot: string;
      image: string;
      activation: string;
      components?: { name: string; image: string }[];
    }[]
  >;
}
