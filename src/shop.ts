export type ShopData = {
  Weapon: Record<
    string,
    {
      key: string;
      name: string;
      description: string;
      cost: string;
      tier: string;
      slot: string;
      image: string;
      activation: string;
      components?: { name: string; image: string }[];
      disabled: boolean;
    }[]
  >;
  Armor: Record<
    string,
    {
      key: string;
      name: string;
      description: string;
      cost: string;
      tier: string;
      slot: string;
      image: string;
      activation: string;
      components?: { key: string; name: string; image: string }[];
      disabled: boolean;
    }[]
  >;
  Tech: Record<
    string,
    {
      key: string;
      name: string;
      description: string;
      cost: string;
      tier: string;
      slot: string;
      image: string;
      activation: string;
      components?: { key: string; name: string; image: string }[];
      disabled: boolean;
    }[]
  >;
};
