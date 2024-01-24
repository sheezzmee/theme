export let components = [];
export const onComponentMount = [];
export const onComponentUnmount = [];

let interval = setInterval(() => {
	const RComponent = Object.entries(window.root)?.[0]?.[1]?.child?.stateNode
		?.__proto__?.__proto__?.__proto__;

	if (!RComponent) return;

	clearInterval(interval);

	const getNode = element => {
		if (!element) return;

		if (element.stateNode instanceof HTMLElement) return element.stateNode;

		return getNode(element.child || element.return);
	};

	const componentWillMount = Object.entries(RComponent)[1][0];
	RComponent[componentWillMount] = function () {
		requestAnimationFrame(() => {
			const name = this?.constructor?.$metadata$?.simpleName;

			try {
				this.element = getNode(this._reactInternals);
			} catch (e) {
				console.log(`${name}: не удалось найти HTMLElement`);
			}

			onComponentMount.forEach(callBack => callBack(name, this));
			components.push([name, this]);

			const original = this.componentWillUnmount;
			this.componentWillUnmount = (...args) => {
				onComponentUnmount.forEach(callBack => callBack(name, this));
				components = components.filter(component => component[1] !== this);

				original?.apply(this, args);
			};
		});
	};
}, 100);
