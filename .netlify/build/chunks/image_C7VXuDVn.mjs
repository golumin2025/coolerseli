const image = new Proxy({"src":"/_astro/image.KVSJeTGL.png","width":194,"height":194,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tedmartin/sites/boxprotect/src/assets/images/portable-container-sizes/blocks/5/value/cards/0/image.png";
							}
							
							return target[name];
						}
					});

export { image as default };
