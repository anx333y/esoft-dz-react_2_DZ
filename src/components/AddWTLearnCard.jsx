import { useState } from "react";
import { DefaultControlButton } from "./DefaultControlButton";
import { DefaultButton } from "./DefaultButton";

export const AddWTLearnCard = ({ wtLearnCardArray, setWTLearnCardArray, setIsAddCard }) => {
	const defaultValues = {
		title: '',
		comment: '',
		src: 'default-icon.png',
		rating: 0,
	};

	const [values, setValues] = useState(defaultValues);

	const onChange = (key) => (e) => {
		setValues({ ...values, [key]: e.target.value })
	};
	const onDeleteCard = () => {
		setIsAddCard((state) => !state)
	}
	const onSubmitHandler = (e) => {
		e.preventDefault()
		setWTLearnCardArray((arr) => [
				...arr,
				{
					id: wtLearnCardArray.length,
					title: values.title,
					comment: values.comment,
					src: values.src,
					rating: values.rating,
				}
			]
		)
		onDeleteCard()
	};

	return (
		<form className="wt-learn-card add-card-form" onSubmit={ onSubmitHandler }>
			<div className="control-buttons">
				<DefaultControlButton icon="fa-close" onClick={ onDeleteCard }/>
			</div>
			<input
				className="add-wt-learn-card-form__item add-wt-learn-card-form__title"
				type="text"
				value={values.title}
				onChange={onChange('title')}
				placeholder="Название технологии"
			/>
			<input
				className="add-wt-learn-card-form__item add-wt-learn-card-form__comment"
				value={values.comment} 
				onChange={onChange('comment')}
				placeholder="Комментарий"
			/>
			<input
				className="add-wt-learn-card-form__item add-wt-learn-card-form__rating"
				type="number"
				value={values.rating}
				onChange={onChange('rating')}
				placeholder="Рейтинг от 0 до 5"
			/>
			<DefaultButton
				className="add-wt-learn-card-form__item add-wt-learn-card-form__submit"
				type="submit"
			>
				Добавить новый навык
			</DefaultButton>
		</form>
	)
}