/**
 * Hero-related type definitions
 */

import { ConvertedAbility } from './ability';

/** Represents weapon statistics for a hero */
export type WeaponStats = {
  /** Base damage per bullet */
  bullet_damage: number;
  /** Rounds fired per second */
  rounds_per_second: number;
  /** Number of bullets in a clip */
  clip_size: number;
  /** Time taken to reload */
  reload_time: number;
  /** Movement speed during reload */
  reload_movespeed: number;
  /** Delay before reload starts */
  reload_delay: number;
  /** Whether bullets are reloaded one at a time */
  reload_single: boolean;
  /** Speed of bullets */
  bullet_speed: number;
  /** Range where damage falloff starts */
  falloff_start_range: number;
  /** Range where damage falloff ends */
  falloff_end_range: number;
  /** Damage scale at falloff start */
  falloff_start_scale: number;
  /** Damage scale at falloff end */
  falloff_end_scale: number;
  /** Falloff curve bias */
  falloff_bias: number;
  /** Gravity effect on bullets */
  bullet_gravity_scale: number;
  /** Number of bullets per shot */
  bullets_per_shot: number;
  /** Number of bullets in a burst */
  bullets_per_burst: number;
  /** Time between shots in a burst */
  burst_inter_shot_interval: number;
  /** Raw damage per second */
  dps: number;
  /** DPS including reload time */
  sustained_dps: number;
  /** Name of the weapon */
  weapon_name: string;
  /** Description of the weapon */
  weapon_description: string;
  /** Types/categories of the weapon */
  weapon_types?: string[];
};

/** Spirit scaling values for hero abilities */
export type SpiritScaling = {
  [key: string]: number;
};

/** Physical collision properties */
export type CollisionData = {
  /** Collision radius */
  radius: number;
  /** Collision height */
  height: number;
  /** Maximum step height */
  step_height: number;
};

/** Movement-related properties */
export type MovementData = {
  /** Movement speed while stealthed */
  stealth_speed: number;
  /** Distance footstep sounds travel */
  footstep_sound_distance: number;
  /** Time between step sounds */
  step_sound_time: number;
};

/** Visual appearance settings */
export type VisualsData = {
  /** UI color in RGB format */
  ui_color: number[];
  /** Glow colors for different team states */
  glow_colors: {
    friendly: number[];
    enemy: number[];
    team1: number[];
    team2: number[];
  };
  /** Skin index for the model */
  model_skin: number;
};

/** Item slot configuration */
export type ItemSlotData = {
  /** Maximum purchases allowed per tier */
  max_purchases_per_tier: number[];
};

/** Bonus received from purchases */
export type PurchaseBonus = {
  /** Tier level */
  tier: number;
  /** Bonus value */
  value: number;
  /** Type of bonus */
  type: string;
};

/** Stats display configuration */
export type StatsDisplayData = {
  /** Header stats for health section */
  health_header_stats: string[];
  /** Stats for health section */
  health_stats: string[];
  /** Header stats for weapon section */
  weapon_header_stats: string[];
  /** Stats for weapon section */
  weapon_stats: string[];
  /** Header stats for magic section */
  magic_header_stats: string[];
  /** Stats for magic section */
  magic_stats: string[];
};

/** Complete hero data structure */
export type HeroData = {
  /** Unique identifier */
  id: number;
  /** Whether recommended for new players */
  new_player_friendly: boolean;
  /** Hero name */
  name: string;
  /** Hero backstory */
  lore?: string;
  /** Gameplay style description */
  playstyle?: string;
  /** Hero role/class */
  role?: string;
  /** Whether hero is in development */
  in_development: boolean;
  /** Whether hero is disabled */
  is_disabled: boolean;
  /** Is Available In Hero Labs */
  in_hero_labs: boolean;
  /** Complexity rating (1-3) */
  complexity: number;
  /** Visual readability rating */
  readability: number;
  /** Whether selectable by bots */
  bot_selectable: boolean;
  /** Whether lane testing is recommended */
  lane_testing_recommended: boolean;
  /** Base statistics */
  starting_stats: {
    max_move_speed: number;
    sprint_speed: number;
    crouch_speed: number;
    move_acceleration: number;
    light_melee_damage: number;
    heavy_melee_damage: number;
    max_health: number;
    weapon_power: number;
    reload_speed: number;
    weapon_power_scale: number;
    stamina: number;
    base_health_regen: number;
    stamina_regen_per_second: number;
    stamina_cooldown?: number;
    crit_damage_received_scale?: number;
    tech_range?: number;
    tech_duration?: number;
  };
  /** Hero abilities */
  abilities: string[] | ConvertedAbility[];
  /** Available upgrades per level */
  level_upgrades: { [key: string]: string | null };
  /** Spirit scaling values */
  spirit_scaling?: SpiritScaling;
  /** Weapon statistics */
  weapon_stats?: WeaponStats;
  /** Recommended items */
  recommended_items?: string[];
  /** Collision properties */
  collision: CollisionData;
  /** Movement properties */
  movement: MovementData;
  /** Visual properties */
  visuals: VisualsData;
  /** Item slot configuration */
  item_slots: {
    weapon_mod: ItemSlotData;
    armor: ItemSlotData;
    tech: ItemSlotData;
  };
  /** Purchase bonus configuration */
  purchase_bonuses: {
    weapon_mod: PurchaseBonus[];
    armor: PurchaseBonus[];
    tech: PurchaseBonus[];
  };
  /** Stats display configuration */
  stats_display: StatsDisplayData;
};
