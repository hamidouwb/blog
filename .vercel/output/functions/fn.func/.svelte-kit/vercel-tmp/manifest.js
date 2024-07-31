export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["._.nojekyll","._favicon.png","._favicon.svg","._models","._post-images","._textures",".nojekyll","favicon.png","favicon.svg","models/._Models.glb","models/Models.glb","post-images/._01_develop_on_autopilot","post-images/01_develop_on_autopilot/._thumbnail.jpg","post-images/01_develop_on_autopilot/thumbnail.jpg","textures/._energy-beam-opacity.png","textures/._star.png","textures/energy-beam-opacity.png","textures/star.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".glb":"model/gltf-binary",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.vAwG1OqK.js","app":"_app/immutable/entry/app.Di_BtAqj.js","imports":["_app/immutable/entry/start.vAwG1OqK.js","_app/immutable/chunks/entry.B6k1gWXX.js","_app/immutable/chunks/scheduler.CJ2bNwH9.js","_app/immutable/chunks/index.BS11pwbH.js","_app/immutable/entry/app.Di_BtAqj.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.CJ2bNwH9.js","_app/immutable/chunks/index.CE-h7kH5.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
