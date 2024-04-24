import { BlockTitle } from "./BlockTitle"
import { WTLearnFilter } from "./WTLearnFilter"
import { AddCardButton } from "./AddCardButton"
import { WT_LEARN_DATA } from "../assets/WT_LEARN_DATA"
import { WTLearnCard } from "./WTLearnCard"
import { AddWTLearnCard } from "./AddWTLearnCard"
import { useState } from "react"

export const WTLearnList = ({ onDeleteCard }) => {
	const [isAddWTLearnCard, setIsAddWTLearnCard] = useState(false);
	const [wtLearnCardArray, setWTLearnCardArray] = useState(WT_LEARN_DATA);
	const [wtLearnCardViewArray, setWTLearnCardViewArray] = useState(wtLearnCardArray);

	return (
		<>
		<BlockTitle title="Что я хочу изучить?" />
		<WTLearnFilter setViewArray={setWTLearnCardViewArray} array={wtLearnCardArray} />
		<div className='wt-learn'>
			{wtLearnCardViewArray.map(({ id, title, comment, src, rating, active }) => 
			<WTLearnCard
				key={id}
				id={id}
				title={title}
				comment={comment}
				src={'src/assets/icons/' + src}
				rating={rating}
				active={active}
				onDelete={onDeleteCard(wtLearnCardArray, setWTLearnCardArray)}
				setWTLearnCardArray={setWTLearnCardArray} />
			)}
			{isAddWTLearnCard &&
				<AddWTLearnCard
					wtLearnCardArray={wtLearnCardArray}
					setWTLearnCardArray={setWTLearnCardArray}
					setIsAddCard={setIsAddWTLearnCard} />}
			{!isAddWTLearnCard && <AddCardButton setIsAddCard={setIsAddWTLearnCard} cardClassName={'wt-learn-card'} />}
		</div>
		</>
	)
}