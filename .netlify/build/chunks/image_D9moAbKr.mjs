const image = new Proxy({"src":"/_astro/image.Dcjhcn2a.jpg","width":2200,"height":1650,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Work/candor/src/assets/images/home/blocks/2/value/image.jpg";
							}
							
							return target[name];
						}
					});

export { image as default };
