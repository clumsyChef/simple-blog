import { useContext } from "react";
import wakanda from "../content/wakanda.jpg";
import { useCookies } from "react-cookie";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const Home = () => {
	const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
	const userContext = useContext(UserContext);
	const { access_token } = cookies;
	console.log(access_token);
	if (access_token) {
		axios
			.post("http://localhost:5000/users/logged", {
				access_token,
			})
			.then((result) => {
				console.log(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div>
			<div className="convo">
				<br /> <img src={wakanda} alt="Wakanda Nonsense" className="wakanda" />
			</div>
		</div>
	);
};

export default Home;
