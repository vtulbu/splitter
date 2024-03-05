import { writable } from 'svelte/store';

export const tip = writable<number | undefined>(undefined);
export const bill = writable<number | undefined>(undefined);
export const people = writable<number | undefined>(undefined);
