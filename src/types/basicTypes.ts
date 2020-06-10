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
 * The size of the fish's shadow in the water, from 1 (tiny) to 6 (huge).
 */
export type ShadowSize = number;
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
