/**
 * Item-related type definitions
 */

/** Represents an item component */
export interface ItemComponent {
  /** Component key/identifier */
  key: string;
  /** Component name */
  name: string;
  /** Component image path */
  image: string | null;
}

/** Tooltip ability property for items */
export interface ItemTooltipAbilityProperty {
  /** Property value */
  value: number;
  /** CSS style class */
  style: string | null;
  /** Whether property is negative */
  is_negative: boolean;
}

/** Important ability property in item tooltip */
export interface ItemTooltipImportantProperty {
  /** Property value */
  value: number;
  /** CSS style class */
  style: string | null;
  /** Whether property is conditional */
  is_conditional: boolean;
}

/** Section in item tooltip */
export interface ItemTooltipSection {
  /** Regular ability properties */
  ability_properties: {
    [key: string]: {
      value: number;
      style: string | null;
      is_negative: boolean;
    };
  };
  /** Elevated (highlighted) ability properties */
  elevated_ability_properties: {
    [key: string]: {
      value: number;
      style: string | null;
      is_negative: boolean;
    };
  };
  /** Important ability properties */
  important_ability_properties: {
    [key: string]: {
      value: number;
      style: string | null;
      is_conditional: boolean;
    };
  };
  /** Section description */
  description: string;
}

/** Complete item data structure */
export interface ItemData {
  /** Item name */
  name: string | null;
  /** Item description */
  description: string | null;
  /** Item cost */
  cost: string;
  /** Item tier */
  tier: string | null;
  /** Activation type */
  activation: string;
  /** Item slot type */
  slot: string | null;
  /** Item image path */
  image: string | null;
  /** Required components */
  components: ItemComponent[] | null;
  /** Items this is a component of */
  componentsOf: ItemComponent[] | null;
  /** Valid target types */
  target_types: string[] | null;
  /** Shop filter categories */
  shop_filters: string[] | null;
  /** Tooltip sections */
  tooltip: { [key: string]: ItemTooltipSection[] };
  /** Whether item is disabled */
  disabled: boolean;
  /** Ability cooldown */
  ability_cooldown: number;
  /** Ability duration */
  ability_duration: number;
  /** Ability cast range */
  ability_cast_range: number;
  /** Maximum targets */
  ability_unit_target_limit: number;
  /** Cast delay */
  ability_cast_delay: number;
  /** Channel duration */
  ability_channel_time: number;
  /** Post-cast duration */
  ability_post_cast_duration: number;
  /** Number of charges */
  ability_charges: number;
  /** Time between charges */
  ability_cooldown_between_charge: number;
  /** Movement speed while channeling */
  channel_move_speed: number;
  /** Resource cost */
  ability_resource_cost: number;
  /** Tech power bonus */
  tech_power: number;
  /** Weapon power bonus */
  weapon_power: number;
  /** Additional properties */
  [key: string]: string | number | boolean | string[] | null | { [key: string]: ItemTooltipSection[] } | ItemComponent[];
}
