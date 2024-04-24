export const AddCardButton = ({ setIsAddCard, cardClassName }) => {
	const onAddFormClick = () => {
		setIsAddCard((state) => !state)
	};

	return (
		<div className={cardClassName + " add-card-button"} onClick={onAddFormClick}>
			<i className="fa fa-plus"></i>
		</div>
	)
}