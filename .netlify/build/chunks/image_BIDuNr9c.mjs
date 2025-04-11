const image = new Proxy({"src":"/_astro/image.rMAIDwMH.png","width":1860,"height":1593,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tedmartin/sites/boxprotect/src/assets/images/home/blocks/4/value/image.png";
							}
							
							return target[name];
						}
					});

export { image as default };
