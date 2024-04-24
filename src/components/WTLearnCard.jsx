import { Rating } from "./Rating";
import { DefaultControlButton } from "./DefaultControlButton";
import { ControlCheckbox } from "./ControlCheckbox";
import { useState, useEffect, memo } from "react";

export const WTLearnCard = memo(({ id, title, comment, src, rating, active, onDelete, setWTLearnCardArray }) => {

	const [activeValue, setActiveValue] = useState(active)
	const [activeStateClass, setActiveStateClass] = useState('')
	useEffect(() => {
		setWTLearnCardArray((array) => (
			array.map((arrayItem) => (
				arrayItem.id === id
					? {...arrayItem, 'active': activeValue}
					: {...arrayItem}
		))))
		activeValue ? setActiveStateClass('') : setActiveStateClass(' inactive-card')
	}, [activeValue])
	
	const onDeleteCard = () => {
		onDelete(id)
	}
	const onChangeCheckbox = (value) => {
		setActiveValue(value)
	}

	return(
		<div className={"wt-learn-card" + activeStateClass}>
			<div className="wt-learn-card__title">
				<img src={ src } alt={ title } className="wt-learn-card__title-icon" />
				<h3 className="wt-learn-card__title-text">{ title }</h3>
			</div>
			<span className="wt-learn-card__comment">{ comment }</span>
			<Rating rating={ rating } turnNumber={ false } />
			<div className="control-buttons">
				<ControlCheckbox onChange={ onChangeCheckbox } isChecked={ activeValue }/>
				<DefaultControlButton icon="fa-close" onClick={ onDeleteCard }/>
			</div>
		</div>
	)
});