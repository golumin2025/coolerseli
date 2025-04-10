import { c as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_CHAIO-ej.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_dz-MobHP.mjs';

const prerender = false;
const $$KeystaticAstroPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Keystatic", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/My Work/candor/node_modules/.pnpm/@keystatic+astro@5.0.6_@key_7b3cf69a27bb27e78068eb970a8b9327/node_modules/@keystatic/astro/internal/keystatic-page.js", "client:component-export": "Keystatic" })}`;
}, "D:/My Work/candor/node_modules/.pnpm/@keystatic+astro@5.0.6_@key_7b3cf69a27bb27e78068eb970a8b9327/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", void 0);

const $$file = "D:/My Work/candor/node_modules/.pnpm/@keystatic+astro@5.0.6_@key_7b3cf69a27bb27e78068eb970a8b9327/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$KeystaticAstroPage,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
