export default defineEventHandler(async (event) => {
	const cookies = useCookies(event);
	setCookie(event, "foo", "bar");

	return {
		api: "qweqweqweqwe",
	};
});
