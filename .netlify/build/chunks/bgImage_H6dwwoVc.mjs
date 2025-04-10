const bgImage = new Proxy({"src":"/_astro/bgImage.5Wtx5Tn_.png","width":4032,"height":3024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Work/candor/src/assets/images/commercial-business/blocks/0/value/bgImage.png";
							}
							
							return target[name];
						}
					});

export { bgImage as default };
