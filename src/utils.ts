/**
 * Utility-related type definitions
 */

/** Entry in the attribute map */
export type AttrMapEntry = {
  /** Label for the attribute */
  label?: string;
  /** Postfix for the attribute */
  postfix?: string;
};

/** Map of keybinds to their display values */
export type KeybindMap = {
  [key: string]: string;
};

/** Map of attribute names to their display values */
export type AttributeMap = {
  [key: string]: string;
};

/** Map of ability slots to their display values */
export type AbilitySlotMap = {
  [key: string]: string;
};

/** Map of level modifiers to their display values */
export type LevelModMap = {
  [key: string]: string;
};

/** Map of target types to their display values */
export type TargetTypeMap = {
  [key: string]: string;
};

/** Map of shop filters to their display values */
export type ShopFilterMap = {
  [key: string]: string;
};

/** Map of slot types to their display values */
export type SlotTypeMap = {
  [key: string]: string;
};

/** Map of shop attribute groups to their display values */
export type ShopAttrGroupMap = {
  [key: string]: string;
};

/** Map of scale types to their display values */
export type ScaleTypeMap = {
  [key: string]: string;
};
