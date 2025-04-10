const icon = new Proxy({"src":"/_astro/icon.D0N1ZfWp.png","width":1000,"height":1200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Work/candor/src/assets/images/social/socialLinks/1/icon.png";
							}
							
							return target[name];
						}
					});

export { icon as default };
