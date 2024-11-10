/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';


/**
 * Used to create dynamic tailwind classes and resolve class merge conflicts.
 * Utilizes the `clsx` and `tailwind-merge` libraries.
 *
 * @param {...ClassValue[]} args
 * @returns {string}
 */
export const cn = (...args: ClassValue[]): string => twMerge(clsx(args));

/**
 * Checks if a value is empty (null, undefined, or empty string)
 */
export const isEmpty = (value: any): boolean => (value === null || value === undefined || value === '');

/**
 * Checks if an object is empty (has no own properties)
 */
export const isEmptyObject = (obj: Record<string, any>): boolean => Object.keys(obj).length === 0 && obj.constructor === Object;

/**
 * Checks if a value is an array and is empty
 */
export const isEmptyArray = (arr: any): boolean => Array.isArray(arr) && arr.length === 0;

/**
 * Checks if a value is not empty, not an empty object, and not an empty array
 */
export const hasValue = (value: any): boolean => !isEmpty(value) && !isEmptyObject(value) && !isEmptyArray(value);

/**
 * Converts a value to a plain object by serializing to and from JSON
 */
export const toPlainObject = (value: unknown): Record<string, any> => JSON.parse(JSON.stringify(value));