export const Avatar = ({src="src/sources/default-avatar.jpg", alt="Аватар пользователя"}) => {
	return (
		<div className="avatar">
			<img src={src} alt={alt} className="avatar-image" />
		</div>
	)
};