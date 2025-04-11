const bgImage = new Proxy({"src":"/_astro/bgImage.dLziqrC2.jpg","width":7360,"height":4912,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tedmartin/sites/boxprotect/src/assets/images/los-angeles-service-area/blocks/0/value/bgImage.jpg";
							}
							
							return target[name];
						}
					});

export { bgImage as default };
