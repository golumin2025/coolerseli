const icon = new Proxy({"src":"/_astro/icon.Kl1mfKn8.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tedmartin/sites/boxprotect/src/assets/icons/portable-container-sizes/blocks/2/value/cards/2/icon.svg";
							}
							
							return target[name];
						}
					});

export { icon as default };
