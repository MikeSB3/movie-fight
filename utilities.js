const debounce = (callback, delay = 500) => {
	let timeoutId;
	return (...arguments) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			callback.apply(null, arguments);
		}, delay);
	};
};
