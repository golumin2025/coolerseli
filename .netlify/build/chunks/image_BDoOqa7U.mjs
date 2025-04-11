const image = new Proxy({"src":"/_astro/image.C0WXYxWO.jpg","width":3981,"height":2595,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tedmartin/sites/boxprotect/src/assets/images/home/blocks/0/value/sliderImages/0/image.jpg";
							}
							
							return target[name];
						}
					});

export { image as default };
