import React from "react";
import "./CompanyReview.scss";
import Overview from "../../components/Overview/Overview";
import Reviews from "../../components/Reviews/Reviews";
import EmployeeReviewItem from "../../components/Reviews/EmployeeReviewItem";

const CompanyReview = () => {
	return (
		<>
			<div className="company__overview">
				<div className="company__overview__content">
					<Overview />
					<Reviews />
					<EmployeeReviewItem />
					<EmployeeReviewItem />
					<EmployeeReviewItem />
				</div>
			</div>
		</>
	);
};

export default CompanyReview;
