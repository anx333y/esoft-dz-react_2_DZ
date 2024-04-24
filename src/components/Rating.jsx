function getRating(rating) {
	let stars = []

	for (let i = 0; i < rating; i++){
		stars.push(
			<li 
				key={ rating + i + Math.random() }
				className="rating-stars__item">
				<img src="src/assets/star.png" alt="star"/>
			</li>
		)
	}

	return stars;
}

export const Rating = ({ rating, turnNumber}) => {
	return (
		<div className="rating">
			{turnNumber && <span className="rating-number">{ rating }/5</span>}
			<ul className="rating-stars">
				{getRating(rating)}
			</ul>
		</div>
	)
};