const image = new Proxy({"src":"/_astro/image.DJmStEzE.jpg","width":1200,"height":675,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Work/candor/src/assets/images/who-we-are/blocks/1/value/image.jpg";
							}
							
							return target[name];
						}
					});

export { image as default };
