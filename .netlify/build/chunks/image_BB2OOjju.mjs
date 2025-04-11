const image = new Proxy({"src":"/_astro/image.BLjDns88.avif","width":792,"height":125,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tedmartin/sites/boxprotect/src/assets/images/home/blocks/5/value/logos/3/image.avif";
							}
							
							return target[name];
						}
					});

export { image as default };
