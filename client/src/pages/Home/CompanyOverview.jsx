import "./CompanyOverview.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Overview from "../../components/Overview/Overview";
import Reviews from "../../components/Reviews/Reviews";

function CompanyOverview() {
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
}

export default CompanyOverview;
