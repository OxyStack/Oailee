const localStorageService = () => {
	const get = (key: string) => {
		return localStorage.getItem(key)
	}

	const set = (key: string, value: string) => {
		localStorage.setItem(key, value)
	}

	const remove = (key: string) => {
		localStorage.removeItem(key)
	}

	return {
		get,
		set,
		remove,
	}
}

export default localStorageService
