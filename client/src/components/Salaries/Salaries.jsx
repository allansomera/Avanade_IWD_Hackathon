import "./Salaries.scss";

const Salaries = () => {
	const company = {
		company_name: "Company Name",
		rating: "Rating x",
		reviews: "See Reviews"
	};

	const position = {
		position_name: "UX Designer",
		avg_salary: "Average Salary $78,000 per year"
	};

	let arr = [1, 2, 3, 4, 5, 6];

	return (
		<>
			<div className="salaries">
				Salaries Content
				<div className="salaries__top">
					<div className="salaries__hero">
						<div className="salaries__hero--right">
							<h2 className="salaries__hero__title">Know Your Worth</h2>
							<p className="salaries__hero__text">
								Lorem ipsum dolor sit amet consectetur. Amet amet sed volutpat
								rhoncus egestas. Maecenas sit cras phasellus egestas. Fames arcu
								tristique adipiscing cursus. Phasellus libero quis in ac in odio
								orci vulputate urna Lorem ipsum dolor sit amet consectetur. Amet
								amet sed volutpat rhoncus egestas. Maecenas sit cras phasellus
								egestas. Fames arcu tristique adipiscing cursus. Phasellus libero
								quis in ac in odio orci vulputate.
							</p>
						</div>
						<div className="salaries__hero--left">
							<div className="user">
								<div className="user__image"></div>
								<p className="user__name">Username</p>
								<p className="user__bio">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
									ratione quis vel quos dicta laudantium minus numquam omnis autem
									sit!
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="salaries__mid">
					<h2 className="salaries__mid__title">Discover Salaries</h2>
					<div className="categories">
						<div className="categories__position">
							<h3 className="categories__position__title">Browse by companies</h3>
							<div className="categories__position__cards">
								{arr.map((i) => {
									return (
										<div className="card__position" key={i}>
											<p className="card__position-detail--name">
												{position["position_name"]}
											</p>
											<p className="card__position-detail--rating">
												{position["avg_salary"]}
											</p>
										</div>
									);
								})}
							</div>
							<div className="categories__position__more">
								<a href="#">See More</a>
							</div>
						</div>
						<div className="categories__company">
							<h3 className="categories__company__title">Browse by companies</h3>
							<div className="categories__company__cards">
								{arr.map((i) => {
									return (
										<div className="card__company" key={i}>
											<div className="card__company__image"></div>
											<div className="card__company-detail">
												<p className="card__company-detail--name">
													{company["company_name"]}
												</p>
												<p className="card__company-detail--rating">
													{company["rating"]}
												</p>
												<p className="card__company-detail--reviews">
													{company["reviews"]}
												</p>
											</div>
										</div>
									);
								})}
							</div>
							<div className="categories__company__more">
								<a href="#">See More</a>
							</div>
						</div>
					</div>
				</div>
				<div className="salaries__btm">
					<h2 className="salaries__btm__title">Calculate Salaries</h2>
				</div>
			</div>
		</>
	);
};

export default Salaries;
