export const ControlCheckbox = ({ onChange, isChecked }) => {
	return (
		<label>
			<input 
				type="checkbox"
				checked={ isChecked }
				onChange={ () => onChange((prev) => !prev) }
			/>
		</label>
	)
}