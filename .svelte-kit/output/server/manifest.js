export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".nojekyll","Chenghan_Resume_0229_2024.pdf","hea_paper.jpg","meta_logo.jpg","profile-backup.jpg","profile.jpg","showcase-image.jpg","zeo_paper.jpg"]),
	mimeTypes: {".pdf":"application/pdf",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.D-t_Y8Hd.js","app":"_app/immutable/entry/app.CGogrniz.js","imports":["_app/immutable/entry/start.D-t_Y8Hd.js","_app/immutable/chunks/BSmVpfct.js","_app/immutable/chunks/GIWjD8-0.js","_app/immutable/chunks/BamRUcG8.js","_app/immutable/entry/app.CGogrniz.js","_app/immutable/chunks/GIWjD8-0.js","_app/immutable/chunks/C5hOpVsC.js","_app/immutable/chunks/B0qNPHJb.js","_app/immutable/chunks/CloaUUEr.js","_app/immutable/chunks/BamRUcG8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
