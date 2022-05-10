export default defineEventHandler(async (event) => {
	setCookie(event, "foo", "bar");

	return {
		api: "test",
	};
});
