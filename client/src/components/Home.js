import wakanda from "../content/wakanda.jpg";

const Home = () => {
	return (
		<div>
			<div className="convo">
				<b>HR:</b> * Hope he has some cool project * <br />
				<b>ME:</b> * Shows a blog project that everyone makes *. <br />
				<b>HR:</b>
				<br /> <img src={wakanda} alt="Wakanda Nonsense" className="wakanda" />
			</div>
		</div>
	);
};

export default Home;
