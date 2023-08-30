import SocialMediaIcon from "./SocialMediaIcon";
import fbIcon from "../../assets/iconofacebook.svg";
import mailIcon from "../../assets/iconomail.svg";
import githubIcon from "../../assets/iconogithub.svg";
import wpIcon from "../../assets/iconowhatsapp.svg";
import linkedinIcon from "../../assets/linkedinIcon.svg";

const SocialMediaLinks = () => {
	return (
		<div className="d-flex">
			<SocialMediaIcon
				img={fbIcon}
				link={"https://www.facebook.com/alanav29"}
			/>
			<SocialMediaIcon
				img={mailIcon}
				link={"mailto:josephalannavarro@gmail.com"}
			/>
			<SocialMediaIcon img={githubIcon} link={"https://github.com/Alanav29"} />
			<SocialMediaIcon img={wpIcon} link={"https://github.com/Alanav29"} />
			<SocialMediaIcon
				img={linkedinIcon}
				link={"https://www.linkedin.com/in/joseph-alan-navarro-57b34a244/"}
			/>
		</div>
	);
};

export default SocialMediaLinks;
