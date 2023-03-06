import "./Overview.scss";

const Overview = () => {
	return (
		<>
			<div className="overview">
				<div className="overview__top">
					<h3 className="overview__top-title">Overview</h3>
					<div className="overview__details">
						<div className="overview__details__location">
							<p className="overview__details__location-title">Location</p>
							<p className="overview__details__location-text">Vancouver</p>
						</div>
						<div className="overview__details__industry">
							<p className="overview__details__industry-title">Industry</p>
							<p className="overview__details__industry-text">IT Support Services</p>
						</div>
						<div className="overview__details__di">
							<p className="overview__details__di-title">D&I</p>

							<p className="overview__details__di-text">D&I</p>
						</div>
					</div>
				</div>
				<div className="overview__btm">
					<h3 className="overview__btm-title">Company Description</h3>
					<p className="overview__btm-text">
						Avanade is the leading provider of innovative digital, cloud and advisory
						services, industry solutions and design-led experiences across the Microsoft
						ecosystems. Every day, our 56,000 professionals in 26 countries make a
						genuine human impact for our clients, their employees and their customers.
					</p>
				</div>
			</div>
		</>
	);
};

export default Overview;
