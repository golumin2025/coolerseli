const image = new Proxy({"src":"/_astro/image.BSoB9qzq.png","width":683,"height":630,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tedmartin/sites/boxprotect/src/assets/images/portable-container-sizes/blocks/3/value/image.png";
							}
							
							return target[name];
						}
					});

export { image as default };
