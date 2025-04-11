const image = new Proxy({"src":"/_astro/image.CaCAgL1c.png","width":700,"height":540,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tedmartin/sites/boxprotect/src/assets/images/contact-us/blocks/1/value/image.png";
							}
							
							return target[name];
						}
					});

export { image as default };
