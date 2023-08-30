/* eslint-disable react/prop-types */
import "../../styles/ProjectsSection.css";
const ProjectsSection = ({ sectionName, infoArray }) => {
	return (
		<div className="container underline">
			<div className="row">
				<div className="col-6">
					<h2>{sectionName}</h2>
				</div>
				<div className="col-6">
					{infoArray.map((infoElement) => {
						return (
							<a
								target="_blank"
								href={infoElement.src}
								key={infoElement.id}
								rel="noreferrer"
								className="link"
							>
								{infoElement.description}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProjectsSection;
