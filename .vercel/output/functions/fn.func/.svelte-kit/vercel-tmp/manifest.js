export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","favicon.svg","models/Models.glb","post-images/01_develop_on_autopilot/thumbnail.jpg","textures/energy-beam-opacity.png","textures/star.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".glb":"model/gltf-binary",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cxk0Aoh6.js","app":"_app/immutable/entry/app.0iShO_C5.js","imports":["_app/immutable/entry/start.Cxk0Aoh6.js","_app/immutable/chunks/entry.BdbB-zBC.js","_app/immutable/chunks/scheduler.CJ2bNwH9.js","_app/immutable/chunks/index.BS11pwbH.js","_app/immutable/entry/app.0iShO_C5.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.CJ2bNwH9.js","_app/immutable/chunks/index.DnZTg4F0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
