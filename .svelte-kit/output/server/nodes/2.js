

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DX5rqvlQ.js","_app/immutable/chunks/B0qNPHJb.js","_app/immutable/chunks/GIWjD8-0.js","_app/immutable/chunks/BIYXkOfT.js"];
export const stylesheets = ["_app/immutable/assets/2.q_GVANWZ.css"];
export const fonts = [];
