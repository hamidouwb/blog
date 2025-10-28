import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.Bcg70x1u.js","_app/immutable/chunks/scheduler.qK7VSXAp.js","_app/immutable/chunks/index.CYcFyMQE.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/GithubIcon.Dv8dv6IA.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/index.DDu_y74h.js"];
export const stylesheets = ["_app/immutable/assets/0.OOSyHjXA.css"];
export const fonts = [];
