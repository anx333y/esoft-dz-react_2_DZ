export const DefaultButton = ({ classes = '', onClick, children, ...props}) => {
	return(
		<button {...props} className={ "default-button" + ' ' + classes } onClick={ onClick }>{ children }</button>
	)
}