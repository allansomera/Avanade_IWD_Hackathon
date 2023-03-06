import "./Reviews.scss";
import star from "../../assets/icons/star.svg";
import icons1 from "../../assets/icons/Icons 1.png";
import icons2 from "../../assets/icons/Icons 2.png";
import icons3 from "../../assets/icons/Icons 3.png";
import icons4 from "../../assets/icons/Icons 4.png";
import icons5 from "../../assets/icons/Icons 5.png";
import icons6 from "../../assets/icons/Icons 6.png";
import { useState } from "react";
import EmployeeReviewList from "./EmployeeReviewList";

const Reviews = () => {
	const Star = ({ rated }) => {
		return <img src={star} alt="star" className={rated ? "star__icon-filled" : "star__icon"} />;
	};

	// const [hoverIndex, setHoverIndex] = useState(0);
	// const [rating, setRating] = useState(0);

	// function beHighlighted(index) {
	// 	return index <= hoverIndex || index <= rating;
	// }

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
		<>
			<div className="reviews">
				<div className="reviews__top">
					<h3 className="reviews__top-title">Reviews</h3>
					<div className="reviews__top__content">
						<p className="reviews__rating-text">Overall Rating</p>
						<ul className="reviews__rating-iconlist">
							{[1, 2, 3, 4, 5].map((index) => {
								return (
									<li className="reviews__rating-iconlist-item" key={index}>
										<Star rated={true} />
									</li>
								);
							})}
						</ul>
						<p className="reviews__rating-text--thin">4.9(402)</p>
					</div>
				</div>
				<div className="reviews__cardList">
					{category.map((item) => {
						return (
							<div className="reviews__cardList-item" key={item.id}>
								<img src={item.image} alt="icon" className="rating-icons" />
								<p className="reviews__cardList-item--desc">{item.name}</p>
								<div className="reviews__cardList-item--rating">
									<p className="reviews__cardList-item--rating-text">
										{item.score}
									</p>
									<ul className="reviews__rating-iconlist">
										{[6, 7, 8, 9, 10].map((index) => {
											return (
												<li
													// onMouseEnter={() => setHoverIndex(index)}
													// onMouseLeave={() => setHoverIndex(0)}
													// onClick={() => setRating(index)}
													className="reviews__rating-iconlist-item"
													key={index}
												>
													{/* <Star rated={beHighlighted(index)} /> */}
													<Star rated={true} />
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Reviews;
