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
							<p className="overview__details__location-place">Location</p>
						</div>
						<div className="overview__details__industry">
							<p className="overview__details__industry-title">Industry</p>

							<p className="overview__details__industry-place">Industry</p>
						</div>
						<div className="overview__details__di">
							<p className="overview__details__di-title">D&I</p>

							<p className="overview__details__di-place">D&I</p>
						</div>
					</div>
				</div>
				<div className="overview__btm">
					<h3 className="overview__btm-title">Company Description</h3>
					<p className="overview__btm-text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nobis nesciunt
						sint natus quasi. Ad, delectus similique distinctio, tempore sapiente sit
						debitis facere atque soluta nam, hic numquam suscipit eos.
					</p>
				</div>
			</div>
		</>
	);
};

export default Overview;
