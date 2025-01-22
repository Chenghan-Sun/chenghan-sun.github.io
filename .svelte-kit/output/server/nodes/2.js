

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CHu-4q6b.js","_app/immutable/chunks/DvqbIhBD.js","_app/immutable/chunks/CgUMMAVu.js","_app/immutable/chunks/CSXqS-fi.js"];
export const stylesheets = ["_app/immutable/assets/2.DftSJiWx.css"];
export const fonts = [];
