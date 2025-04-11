const image = new Proxy({"src":"/_astro/image.Be-YI6XF.jpg","width":2200,"height":1650,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tedmartin/sites/boxprotect/src/assets/images/home/blocks/3/value/images/0/image.jpg";
							}
							
							return target[name];
						}
					});

export { image as default };
