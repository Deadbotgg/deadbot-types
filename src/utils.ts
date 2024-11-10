/**
 * Utility-related type definitions
 */

/** Entry in the attribute map */
export interface AttrMapEntry {
  /** Label for the attribute */
  label?: string;
  /** Postfix for the attribute */
  postfix?: string;
}

/** Map of keybinds to their display values */
export interface KeybindMap {
  [key: string]: string;
}

/** Map of attribute names to their display values */
export interface AttributeMap {
  [key: string]: string;
}

/** Map of ability slots to their display values */
export interface AbilitySlotMap {
  [key: string]: string;
}

/** Map of level modifiers to their display values */
export interface LevelModMap {
  [key: string]: string;
}

/** Map of target types to their display values */
export interface TargetTypeMap {
  [key: string]: string;
}

/** Map of shop filters to their display values */
export interface ShopFilterMap {
  [key: string]: string;
}

/** Map of slot types to their display values */
export interface SlotTypeMap {
  [key: string]: string;
}

/** Map of shop attribute groups to their display values */
export interface ShopAttrGroupMap {
  [key: string]: string;
}

/** Map of scale types to their display values */
export interface ScaleTypeMap {
  [key: string]: string;
}
