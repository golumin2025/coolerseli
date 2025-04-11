const logo = new Proxy({"src":"/_astro/logo.boBuW_tQ.png","width":250,"height":100,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tedmartin/sites/boxprotect/src/assets/images/general/logo/logo.png";
							}
							
							return target[name];
						}
					});

export { logo as default };
