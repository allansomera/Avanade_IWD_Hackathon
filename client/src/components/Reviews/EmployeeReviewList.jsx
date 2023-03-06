import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./EmployeeReviewList.scss";

import star from "../../assets/icons/star.svg";
import icons1 from "../../assets/icons/Icons 1.png";
import icons2 from "../../assets/icons/Icons 2.png";
import icons3 from "../../assets/icons/Icons 3.png";
import icons4 from "../../assets/icons/Icons 4.png";
import icons5 from "../../assets/icons/Icons 5.png";
import icons6 from "../../assets/icons/Icons 6.png";

const EmployeeReviewList = () => {
	const Star = ({ rated }) => {
		return <img src={star} alt="star" className={rated ? "star__icon-filled" : "star__icon"} />;
	};
	const navigate = useNavigate();

	const category = [
		{ id: "1", name: "Equal Opportunities for Women and Men", image: icons1, score: "4.7" },
		{
			id: "2",
			name: "Maternity & Adoptive Leavequal Opportunities for Women and Men",
			image: icons2,
			score: "5.0"
		},
		{ id: "3", name: "Salary Satisfaction", image: icons3, score: "4.9" },
		{ id: "4", name: "Women in Leadership", image: icons4, score: "5.0" },
		{ id: "5", name: "Harassment and discrimination", image: icons5, score: "5.0" },
		{ id: "6", name: "Gender diversity", image: icons6, score: "5.0" }
	];
	return (
		<div className="reviews__employee">
			<div className="reviews__employee-container">
				<div className="reviews__employee-rating">
					<p className="reviews__employee-rating--text">5.0</p>
					<ul className="reviews__rating-iconlist">
						{[1, 2, 3, 4, 5].map((index) => {
							return (
								<li className="reviews__rating-iconlist-item" key={index}>
									<Star rated={true} />
								</li>
							);
						})}
					</ul>
				</div>
				<p className="reviews__employee-status">Current employee</p>
				<p className="reviews__employee-title">
					Senior Designer <span className="reviews__employee-title--thin">(she/her)</span>
				</p>
				<div className="reviews__employee-score">
					{category.map((item) => {
						return (
							<div className="reviews__employee-score--container" key={item.id}>
								<div className="reviews__employee-score--left">
									<img src={item.image} alt="icon" className="rating-icons" />
									<p className="reviews__employee-score--desc">{item.name}</p>
								</div>
								<div className="reviews__employee-score--right">
									<img src={star} alt="icon" className="star__icon-filled" />
									<p>5.0</p>
								</div>
							</div>
						);
					})}
				</div>
				<h3 className="reviews__employee-review--title">So happy I moved to Avanade!</h3>
				<p className="reviews__employee-review--text">
					I have been with Avanade for over a year now. It is truly an incredible company
					to work for. I started working here last year...
				</p>
				<div className="reviews__employee-cta">
					<button
						className="reviews__employee-cta--btn"
						onClick={() => {
							navigate("/company/review");
						}}
					>
						See All Reviews
					</button>
				</div>
			</div>
		</div>
	);
};

export default EmployeeReviewList;
