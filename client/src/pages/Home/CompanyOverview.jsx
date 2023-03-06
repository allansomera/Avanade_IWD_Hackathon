import "./CompanyOverview.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Overview from "../../components/Overview/Overview";
import Reviews from "../../components/Reviews/Reviews";
import EmployeeReviewList from "../../components/Reviews/EmployeeReviewList";

function CompanyOverview() {
	return (
		<>
			<div className="company__overview">
				<div className="company__overview__content">
					<Overview />
					<Reviews />
					<EmployeeReviewList />
				</div>
			</div>
		</>
	);
}

export default CompanyOverview;
