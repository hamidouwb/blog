import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.Dyi1vrXg.js","_app/immutable/chunks/scheduler.CJ2bNwH9.js","_app/immutable/chunks/index.DnZTg4F0.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/index.BS11pwbH.js"];
export const stylesheets = ["_app/immutable/assets/0.BeDGaz2D.css"];
export const fonts = [];
