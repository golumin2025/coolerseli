const icon = new Proxy({"src":"/_astro/icon.CLw6VKoZ.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Work/candor/src/assets/images/social/socialLinks/0/icon.png";
							}
							
							return target[name];
						}
					});

export { icon as default };
