const image = new Proxy({"src":"/_astro/image.CXfue5hx.jpg","width":1080,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tedmartin/sites/boxprotect/src/assets/images/portable-container-sizes/blocks/1/value/cards/1/image.jpg";
							}
							
							return target[name];
						}
					});

export { image as default };
