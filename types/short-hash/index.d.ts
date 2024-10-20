/**
 * Get a short hash from a string. Uses Bernstein's popular "times 33" hash algorithm but returns a hex string instead of a number.
 * @param str The string to hash.
 */
declare function shortHash(str: string): string;

export = shortHash;
