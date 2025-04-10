const image = new Proxy({"src":"/_astro/image.DdSR7kmn.avif","width":3840,"height":1206,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Work/candor/src/assets/images/home/blocks/5/value/logos/0/image.avif";
							}
							
							return target[name];
						}
					});

export { image as default };
