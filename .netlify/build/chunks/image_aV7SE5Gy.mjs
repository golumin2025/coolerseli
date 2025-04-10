const image = new Proxy({"src":"/_astro/image.-JhdIXUk.png","width":640,"height":560,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Work/candor/src/assets/images/portable-container-sizes/blocks/4/value/image.png";
							}
							
							return target[name];
						}
					});

export { image as default };
