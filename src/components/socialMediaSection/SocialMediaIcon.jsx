/* eslint-disable react/prop-types */
import "../../styles/SocialMediaIcon.css";

const SocialMediaIcon = ({ img, link }) => {
	return (
		<a
			target="_blank"
			className="socialMediaIcon m-2"
			href={link}
			rel="noreferrer"
		>
			<img src={img} className="w70"></img>
		</a>
	);
};

export default SocialMediaIcon;
