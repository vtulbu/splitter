import { writable } from 'svelte/store';

export const tip = writable<number | undefined>(undefined);
