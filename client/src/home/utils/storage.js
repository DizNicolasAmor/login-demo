export const getFromStorage = key => {
	if (!key) return false;

	try {
		const valueStr = localStorage.getItem(key);
		if (valueStr) return JSON.parse(valueStr);
		return false;
	} catch (reason) {
		console.error(reason);
		return false;
	}
};
