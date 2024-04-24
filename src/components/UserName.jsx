export const UserName = ({name, surname}) => {
	return (
		<div className="username">
			<span className="username-name">{ name }</span>
			<span className="username-surname">{ surname }</span>
		</div>
	)
}