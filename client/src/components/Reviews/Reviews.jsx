import "./Reviews.scss";
import star from "../../assets/icons/star.svg";
import { useState } from "react";
const Reviews = () => {
	const Star = ({ rated }) => {
		return <img src={star} alt="star" className={rated ? "star__icon-filled" : "star__icon"} />;
	};

	const [hoverIndex, setHoverIndex] = useState(0);
	const [rating, setRating] = useState(0);

	function beHighlighted(index) {
		return index <= hoverIndex || index <= rating;
	}

	const category = [
		{ id: "1", name: "Equal Opportunities for Women and Men" },
		{ id: "2", name: "Maternity & Adoptive Leavequal Opportunities for Women and Men" },
		{ id: "3", name: "Salary Satisfaction" },
		{ id: "4", name: "Women in Leadership" },
		{ id: "5", name: "Harassment and discrimination" },
		{ id: "6", name: "Gender diversity" }
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
						<p className="reviews__rating-text">5.0(163)</p>
					</div>
				</div>
				<div className="reviews__cardList">
					{category.map((item) => {
						return (
							<div className="reviews__cardList-item" key={item.id}>
								<img src="" alt="icon" />
								<p className="reviews__cardList-item--desc">{item.name}</p>
								<div className="reviews__cardList-item--rating">
									<p>5.0</p>
									<ul className="reviews__rating-iconlist">
										{[6, 7, 8, 9, 10].map((index) => {
											return (
												<li
													onMouseEnter={() => setHoverIndex(index)}
													onMouseLeave={() => setHoverIndex(0)}
													onClick={() => setRating(index)}
													className="reviews__rating-iconlist-item"
													key={index}
												>
													<Star rated={beHighlighted(index)} />
												</li>
											);
										})}
									</ul>
								</div>
							</div>
						);
					})}
				</div>
				<div className="reviews__employee">
					<div className="reviews__employee-rating">
						<p>5.0</p>
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
						Senior Designer <span>(she/her)</span>
					</p>
					<h3 className="reviews__employee-review--title">Review Title</h3>
					<p className="reviews__employee-review--text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quis illo
						labore vero, aperiam placeat nostrum doloribus consequatur? Aut ut, sapiente
						vitae debitis cumque nam vel voluptate, enim, ex fugit eos hic. Iusto
						molestias ipsum qui accusantium? Fuga minima dignissimos aperiam doloremque
						ex at quaerat pariatur maiores harum reprehenderit voluptate commodi magnam
						perferendis reiciendis omnis distinctio excepturi ullam accusantium,
						officiis fugiat autem provident. Earum molestiae ipsa numquam alias
						dignissimos delectus?
					</p>
					<div className="reviews__employee-cta">
						<button className="reviews__employee-cta--btn">See All Reviews</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Reviews;
