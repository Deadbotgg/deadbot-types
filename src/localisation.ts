/**
 * Localization-related type definitions
 */

/** Map of localization keys to their translated values */
export type LocalisationData = {
  /** Key-value pairs where key is the localization key and value is the translated text */
  [key: string]: string;
};

/** Map of languages to their localization data */
export type LocalisationsByLanguage = {
  /** Key is the language code, value is the localization data for that language */
  [key: string]: LocalisationData;
};
