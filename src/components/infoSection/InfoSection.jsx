/* eslint-disable react/prop-types */
const InfoSection = ({ sectionName, infoArray }) => {
	return (
		<div className="container underline">
			<div className="row">
				<div className="col-6">
					<h2>{sectionName}</h2>
				</div>
				<div className="col-6">
					{infoArray.map((infoElement) => {
						return <p key={infoElement.id}>{infoElement.description}</p>;
					})}
				</div>
			</div>
		</div>
	);
};

export default InfoSection;
