const image = new Proxy({"src":"/_astro/image.BaPOrJL5.jpg","width":2400,"height":1600,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tedmartin/sites/boxprotect/src/assets/images/storage-overview/blocks/1/value/image.jpg";
							}
							
							return target[name];
						}
					});

export { image as default };
