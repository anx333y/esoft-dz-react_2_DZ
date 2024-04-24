import { memo, useEffect, useState } from "react";
import { DefaultButton } from "./DefaultButton";

export const WTLearnFilter = ({setViewArray, array}) => {
	const [nowActive, setNowActive] = useState(-1)
	const filterArray = (isActive) => {
		setViewArray(array.filter((card) => (
			card.active === isActive
		)))
	}
	useEffect(() => {
		if (nowActive === -1) {
			setViewArray(array)
		} else if (nowActive === 1) {
			filterArray(true)
		} else if (nowActive === 0) {
			filterArray(false)
		}
	}, [array, nowActive])
	const onActiveClick = () => {
		setNowActive(1)
	}
	const onInactiveClick = () => {
		setNowActive(0)
	}
	const onAllClick = () => {
		setNowActive(-1)
	}
	return (
		<div className="wt-learn-filter">
			<DefaultButton classes={'wt-learn-filter__button'} onClick={onActiveClick}>Активные</DefaultButton>
			<DefaultButton classes={'wt-learn-filter__button'} onClick={onInactiveClick}>Неактивные</DefaultButton>
			<DefaultButton classes={'wt-learn-filter__button'} onClick={onAllClick}>Все</DefaultButton>
		</div>
	)
};