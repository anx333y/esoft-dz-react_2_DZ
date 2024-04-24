import { useState } from "react";
import { DefaultControlButton } from "./DefaultControlButton";
import { DefaultButton } from "./DefaultButton";

export const AddSkillsCard = ({ skillsCardArray, setSkillsCardArray, setIsAddCard }) => {
	const defaultValues = {
		titleValue: '',
		descriptionValue: '',
		ratingValue: '',
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
		setSkillsCardArray((arr) => [
				...arr,
				{
					id: skillsCardArray.length,
					title: values.titleValue,
					description: values.descriptionValue,
					rating: values.ratingValue
				}
			]
		)
		onDeleteCard()
	};

	return (
		<form className="skills-card add-skills-card-form" onSubmit={ onSubmitHandler }>
			<div className="control-buttons">
				<DefaultControlButton icon="fa-close" onClick={ onDeleteCard }/>
			</div>
			<input
				className="add-skills-card-form__item add-skills-card-form__title"
				type="text"
				value={values.titleValue}
				onChange={onChange('titleValue')}
				placeholder="Название навыка"
			/>
			<textarea
				className="add-skills-card-form__item add-skills-card-form__description"
				value={values.descriptionValue} 
				onChange={onChange('descriptionValue')}
				placeholder="Описание навыка"
			/>
			<input
				className="add-skills-card-form__item add-skills-card-form__rating"
				type="number"
				value={values.ratingValue}
				onChange={onChange('ratingValue')}
				placeholder="Рейтинг от 0 до 5"
			/>
			<DefaultButton
				className="add-skills-card-form__item add-skills-card-form__submit"
				type="submit"
			>
				Добавить новый навык
			</DefaultButton>
		</form>
	)
}