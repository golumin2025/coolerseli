const footerLogo = new Proxy({"src":"/_astro/logo.CrzTg6hk.webp","width":500,"height":229,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Work/candor/src/assets/images/general/logo/footerLogo.webp";
							}
							
							return target[name];
						}
					});

export { footerLogo as default };
