export const DefaultControlButton = ({icon, onClick}) => {
	return (
		<button className="def-control-button"> 
			<i className={'fa ' + icon} onClick={ onClick }></i>
		</button>
	)
}