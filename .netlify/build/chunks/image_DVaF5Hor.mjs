const image = new Proxy({"src":"/_astro/image.CFBFM1-O.avif","width":1000,"height":660,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tedmartin/sites/boxprotect/src/assets/images/home/blocks/6/value/cards/0/image.avif";
							}
							
							return target[name];
						}
					});

export { image as default };
