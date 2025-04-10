import { r as renderers } from './chunks/_@astro-renderers_dz-MobHP.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_A7dlUNpL.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page3 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const _page5 = () => import('./pages/_---id_.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.6.1_@netlify+blobs@_b0e9d35435df88a57c1243e6bc64b604/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/astro@5.6.1_@netlify+blobs@_b0e9d35435df88a57c1243e6bc64b604/node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["node_modules/.pnpm/@keystatic+astro@5.0.6_@key_7b3cf69a27bb27e78068eb970a8b9327/node_modules/@keystatic/astro/internal/keystatic-api.js", _page2],
    ["node_modules/.pnpm/@keystatic+astro@5.0.6_@key_7b3cf69a27bb27e78068eb970a8b9327/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page3],
    ["src/pages/index.astro", _page4],
    ["src/pages/[...id].astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_astro-internal_actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8f4257ec-351f-4f33-a108-b0accdfe23f3"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
