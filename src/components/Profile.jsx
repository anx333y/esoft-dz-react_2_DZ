import { Avatar } from './Avatar'
import { UserName } from './UserName';

export const Profile = ({src, alt, name, surname}) => {
	return (
		<div className='profile'>
			<Avatar 
				src={ src }
				alt={ alt }
			/>
			<UserName 
				name={ name }
				surname={ surname }
			/>
		</div>
	)
};