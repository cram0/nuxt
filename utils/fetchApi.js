export const fetchWithCookie = async (url, options) => {
	const response = await $fetch.raw(url, options);
	if (process.server) {
		const cookies = Object.fromEntries(
			response.headers
				.get("set-cookie")
				?.split(",")
				.map((a) => a.split("="))
		);
		if (cookies["foo"]) {
			useCookie("foo").value = cookies["foo"];
		}
	}
	return response._data;
};
