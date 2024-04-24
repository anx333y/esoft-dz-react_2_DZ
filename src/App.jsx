import './App.css'
import { useCallback } from 'react'
import { Profile } from './components/Profile.jsx'
import { SkillsList } from './components/SkillsList.jsx'
import { WTLearnList } from './components/WTLearnList.jsx'

function App() {

	const onDeleteCard = useCallback((array, setArray) => (id) => {
		// setWTLearnCardViewArray((viewArray) => array.filter((card) => (
		// 	card.id !== id
		// )))
		setArray(array.filter((card) => (
			card.id !== id
		)))
	}, [])

  return (
    <>
			<div className="header">
				<h1>Краткое резюме, что-ли...</h1>
				<Profile 
					src="src/assets/RZ.jpg"
					alt="Фотография Зуевич Романа"
					name="Роман"
					surname="Зуевич"
				/>
			</div>
			<SkillsList onDeleteCard={onDeleteCard}/>
			<WTLearnList onDeleteCard={onDeleteCard}/>
    </>
  )
}

export default App
