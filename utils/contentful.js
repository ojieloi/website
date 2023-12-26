import { createClient } from "contentful";

const client = createClient({
	space: "5sll9dpvrnby",
	environment: "master", // defaults to 'master' if not set
	accessToken: "CrPO6_zyHt765WtHzAMsnAuOtsx7Htw2pibhzJyXLeo",
});

export { client };
