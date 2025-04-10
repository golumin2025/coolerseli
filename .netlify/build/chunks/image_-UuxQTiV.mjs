const image = new Proxy({"src":"/_astro/image.J-jrJ5ax.avif","width":1334,"height":292,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Work/candor/src/assets/images/home/blocks/5/value/logos/1/image.avif";
							}
							
							return target[name];
						}
					});

export { image as default };
