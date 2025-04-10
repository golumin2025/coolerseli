const image = new Proxy({"src":"/_astro/image.AnsUbeNK.avif","width":1275,"height":325,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Work/candor/src/assets/images/home/blocks/5/value/logos/2/image.avif";
							}
							
							return target[name];
						}
					});

export { image as default };
