import { BlockTitle } from "./BlockTitle";
import { AddSkillsCard } from "./AddSkillsCard";
import { AddCardButton } from "./AddCardButton";
import { SkillsCard } from "./SkillsCard";
import { SKILLS_DATA } from "../assets/SKILLS_DATA";
import { useState } from "react";


export const SkillsList = ({ onDeleteCard }) => {
	const [isAddSkillsCard, setIsAddSkillsCard] = useState(false);
	const [skillsCardArray, setSkillsCardArray] = useState(SKILLS_DATA);

	return(
		<>
		<BlockTitle title="Мои навыки" />
		<div className="skills">
			{skillsCardArray.map(({ id, title, description, rating }) => <SkillsCard
				key={id}
				id={id}
				title={title}
				description={description}
				rating={rating}
				onDelete={onDeleteCard(skillsCardArray, setSkillsCardArray)} />
			)}
			{isAddSkillsCard &&
				<AddSkillsCard
					skillsCardArray={skillsCardArray}
					setSkillsCardArray={setSkillsCardArray}
					setIsAddCard={setIsAddSkillsCard} />}
			{!isAddSkillsCard && <AddCardButton setIsAddCard={setIsAddSkillsCard} cardClassName={'skills-card'} />}
		</div>
		</>
	)
};