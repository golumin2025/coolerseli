const image = new Proxy({"src":"/_astro/image.CDMDXGtu.png","width":1850,"height":1180,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/My Work/candor/src/assets/images/los-angeles-service-area/blocks/1/value/image.png";
							}
							
							return target[name];
						}
					});

export { image as default };
