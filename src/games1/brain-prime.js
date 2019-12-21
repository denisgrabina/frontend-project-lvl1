import prime from "../controllers/prime";
import getRandomInt from "../components/getRandomInt";
import controller from "..";

export default () => {
	const rules = "Answer 'yes' if number prime otherwise answer 'no'.\n";
	const data = [];
	for (let i = 0; i < 3; i += 1) {
		data.push(prime(getRandomInt(30)));
	}

	return controller(rules, data);
};
