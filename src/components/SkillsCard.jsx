import { Rating } from "./Rating";
import { DefaultControlButton } from "./DefaultControlButton";
import { ControlCheckbox } from "./ControlCheckbox";
import { memo } from "react";

export const SkillsCard = memo(({ id, title, description, rating, onDelete }) => {
	const onDeleteCard = () => {
		onDelete(id)
	}

	return (
		<div className="skills-card">
			<h3 className="skills-card__title">{ title }</h3>
			<div className="control-buttons">
				<DefaultControlButton icon="fa-close" onClick={ onDeleteCard }/>
			</div>
			<p className="skills-card__description">{ description }</p>
			<Rating rating={ rating } turnNumber={ true }/>
		</div>
	)
});