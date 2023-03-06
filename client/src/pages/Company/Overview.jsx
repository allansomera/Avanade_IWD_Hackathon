import "./Overview.scss";
import Overview from "../../components/Overview/Overview";
import Reviews from "../../components/Reviews/Reviews";
const Overview = () => {
	return (
		<>
			<div className="company__overview">
				<div className="company__overview__content">
					<Overview />
					<Reviews />
				</div>
			</div>
		</>
	);
};

export default Overview;
