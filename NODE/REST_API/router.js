const users = [
	{
		id: 1,
		name: "Trương Văn A",
		email: "richard@piedpiper.com",
	},
	{
		id: 2,
		name: "Nguyễn A",
		email: "gilfoyle@piedpiper.com",
	},
];
const router = (app) => {
	app.get("/", (request, response) => {
		response.send({
			message: "Node.js and Express REST API",
		});
	});
	app.get("/users", (request, response) => {
		response.send(users);
	});
};
export default router;