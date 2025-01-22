export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Chenghan_Resume_0229_2024.pdf","hea_paper.jpg","meta_logo.jpg","profile-backup.jpg","profile.jpg","showcase-image.jpg","zeo_paper.jpg"]),
	mimeTypes: {".pdf":"application/pdf",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.BkL4UK3V.js","app":"_app/immutable/entry/app.BdQkAj5u.js","imports":["_app/immutable/entry/start.BkL4UK3V.js","_app/immutable/chunks/VWO1YMfi.js","_app/immutable/chunks/CgUMMAVu.js","_app/immutable/chunks/BUhcTARo.js","_app/immutable/entry/app.BdQkAj5u.js","_app/immutable/chunks/CgUMMAVu.js","_app/immutable/chunks/CXC37luV.js","_app/immutable/chunks/DvqbIhBD.js","_app/immutable/chunks/C0DAMcJO.js","_app/immutable/chunks/BUhcTARo.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
