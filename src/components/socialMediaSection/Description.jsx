import "../../styles/Description.css";
import profileImg from "../../assets/profileIMG.jpg";
import SocialMediaLinks from "./SocialMediaLinks";

const Description = () => {
	return (
		<div className="d-flex flex-wrap p-1 p-sm-4 justify-content-center">
			<div className="mb-md-0 mb-4 me-0 me-md-4 avatarImg">
				<img src={profileImg} className="imageProfile w-100" />
			</div>
			<div className="description d-flex flex-column justify-content-center ms-4">
				<h3 className="fs-3">Un poco sobre mi...</h3>
				<p className="fs-4">
					Me considero una persona amable con ganas de aprender, aficionado de
					los deportes y de la cultura geek.
				</p>
				<SocialMediaLinks />
			</div>
		</div>
	);
};

export default Description;
