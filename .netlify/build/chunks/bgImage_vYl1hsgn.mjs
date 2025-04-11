const bgImage = new Proxy({"src":"/_astro/image.CXfue5hx.jpg","width":1080,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tedmartin/sites/boxprotect/src/assets/images/california-privacy-notice/blocks/0/value/bgImage.jpg";
							}
							
							return target[name];
						}
					});

export { bgImage as default };
