import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.Bn4haIHF.js","_app/immutable/chunks/scheduler.CJ2bNwH9.js","_app/immutable/chunks/index.CE-h7kH5.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/index.BS11pwbH.js"];
export const stylesheets = ["_app/immutable/assets/0.D3p5VdWu.css"];
export const fonts = [];
