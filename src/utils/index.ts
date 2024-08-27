/* eslint-disable no-misleading-character-class */

/**
 * Deep clone of object with 'structuredClone'
 */
export const clone = <T>(original: T) => {
  return structuredClone(original);
};

/**
 * 'Shortcut' to compare strings in a Array.sort callback
 */
export const compareStringArray = (a: string, b: string, asc?: boolean): number => {
  const valueA = deleteAccents(a.replace(/ñ/g, 'nZ').replace(/Ñ/g, 'NZ')).toLowerCase();
  const valueB = deleteAccents(b.replace(/ñ/g, 'nZ').replace(/Ñ/g, 'NZ')).toLowerCase();

  if (valueA > valueB) {
    return asc ? -1 : 1;
  }

  if (valueB > valueA) {
    return asc ? 1 : -1;
  }

  return 0;
};

/**
 * Delete accents in a text
 */
export const deleteAccents = (text: string): string =>
  text
    .slice()
    .normalize('NFD')
    .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi, '$1')
    .normalize();

/**
 * Returns a copy of the array passed as argument without the index specified
 */
export const deleteArrayElement = <T>(arr: Array<T>, i: number): Array<T> => {
  const array: Array<T> = arr.slice();
  array.splice(i, 1);
  return array;
};

/**
 * Returns a promise to resolve something programmatically
 */
export const getPromise = <T>(): Array<Promise<T> | (() => void)> => {
  let promiseResolve: () => void = () => {};
  let promiseReject: () => void = () => {};

  const prom = new Promise<T>((resolve, reject) => {
    promiseResolve = resolve as () => void;
    promiseReject = reject;
  });

  return [prom, promiseResolve, promiseReject];
};

/**
 * Returns a random number between min (included) and max (excluded)
 */
export const getRandomArbitrary = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Returns true if a particular state exists in a state definition passed by parameters.
 */
export const validateState = (definition: { [key: string]: unknown }, state: string) =>
  definition && state && Object.values(definition).includes(state);
