const favicon = new Proxy({"src":"/_astro/favicon.4yAiqGXo.png","width":83,"height":91,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tedmartin/sites/boxprotect/src/assets/images/general/logo/favicon.png";
							}
							
							return target[name];
						}
					});

export { favicon as default };
