/**
 * Ability-related type definitions
 */

/** Represents a scaling function for abilities */
export interface ScaleFunction {
  /** Scale value */
  value: number;
  /** Type of scaling */
  type: string;
}

/** Generic data property */
export interface DataProperty {
  /** Property name */
  name: string;
  [key: string]: any;
}

/** Property displayed in ability tooltip */
export interface AbilityTooltipProperty {
  /** Property name */
  name: string;
  /** Whether upgrade is required */
  requiresUpgrade?: boolean;
  /** Associated status effect */
  statusEffect?: DataProperty;
  /** Whether property is shown */
  isShown?: boolean;
  /** Additional data */
  data?: any;
}

/** Section in ability tooltip */
export interface AbilityTooltipSection {
  /** Section properties */
  properties: AbilityTooltipProperty[];
  /** Required upgrade */
  upgradeRequired?: DataProperty;
  /** Basic properties */
  basicProperties?: AbilityTooltipProperty[];
  /** Additional data */
  data?: any;
}

/** Spirit scaling values for abilities */
export interface AbilitySpiritScaling {
  /** Damage scaling with spirit */
  damage_scaling?: number;
  /** Duration scaling with spirit */
  duration_scaling?: number;
  /** Range scaling with spirit */
  range_scaling?: number;
  /** Cooldown scaling with spirit */
  cooldown_scaling?: number;
}

/** Base ability statistics */
export interface AbilityStats {
  /** Base damage */
  damage?: number;
  /** Effect duration */
  duration?: number;
  /** Cooldown time */
  cooldown?: number;
  /** Cast range */
  range?: number;
  /** Number of charges */
  charges?: number;
  /** Time to restore one charge */
  charge_restore_time?: number;
  /** Channel duration */
  channel_duration?: number;
  /** Resource cost */
  resource_cost?: number;
  /** Additional stats */
  [key: string]: any;
}

/** Converted ability data structure */
export interface ConvertedAbility {
  /** Ability name */
  name: string;
  /** Ability description */
  description: string;
  /** Tooltip information */
  tooltipDetails: AbilityTooltipSection;
  /** Base statistics */
  stats: AbilityStats;
  /** Spirit scaling values */
  spirit_scaling?: AbilitySpiritScaling;
}
