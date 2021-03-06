/**
 * The item's name, in U.S. English.
 */
export type Name = string;
/**
 * Where the item is found in the Critterpedia, starting at 1 and counting down then over.
 */
export type CritterpediaOrder = number;
/**
 * The price of the item when sold to Nook's Cranny directly. C.J. (fish only) or Flick (bugs only)
 * will buy at 1.5x this value. The dropbox will buy at 0.8x this value.
 */
export type ResalePrice = number;
/**
 * Where the item can be caught.
 */
export type Location = string;
/**
 * The size of the fish's shadow in the water, from 1 (tiny) to 6 (huge), or 'Narrow' for eels.
 */
export type ShadowSize = number | 'Narrow';
/**
 * Whether the fish's shadow has a visible fin.
 */
export type HasFin = boolean;
/**
 * Human-readable time the item can be caught in the appropriate months.
 */
export type Time = string;
/**
 * During which months the item can be caught, starting in January (Northern Hemisphere) or July
 * (Southern Hemisphere). 1 = can be caught, 0 = cannot be caught.
 */
export type Months = string;
/**
 * The group (larger fossil) to which the fossil belongs. If not provided, the fossil is standalone.
 */
export type FossilGroup = string;
/**
 * If true, the song can only be obtained by asking K.K. Slider for it directly.
 */
export type SecretSong = boolean;
export type Gender = 'male' | 'female';
/**
 * The villager's personality type, in U.S. English.
 */
export type Personality = string;
/**
 * The villager's species, in U.S. English.
 */
export type Species = string;

/**
 * The villager's birthday.
 */
export type Birthday = { month: number, day: number };
/**
 * The villager's default catchphrase, in U.S. English.
 */
export type Catchphrase = string;
/**
 * The villager's hobbies, in U.S. English.
 */
export type Hobbies = string;
/**
 * If the art piece is always authentic (i.e. Redd does not sell a forgery).
 */
export type AlwaysAuthentic = boolean;
/**
 * A human-readable guide to tell Redd's forgeries from real art.
 */
export type ForgeryDescription = string;
