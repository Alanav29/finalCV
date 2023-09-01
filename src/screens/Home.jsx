/* eslint-disable no-unused-vars */
import InfoSection from "../components/infoSection/InfoSection.jsx";
import ProjectsSection from "../components/proyectsSection/ProjectsSection.jsx";
import Description from "../components/socialMediaSection/Description.jsx";
import { useState } from "react";

const Home = () => {
	const [CVInfo, setCVInfo] = useState([
		{ id: 1, description: "Graduado de Master en Coding en DEV.F" },
	]);

	const [CVExperience, setCVExperience] = useState([
		{
			id: 1,
			description:
				"Actualmente me encargo de la gestión y administración de mi propia tienda mercado shop",
		},
		{
			id: 2,
			description: "Creación de e-commerce con wix",
		},
		{
			id: 3,
			description: "Experiencia de 6 años en uso de plotter de corte",
		},
		{
			id: 4,
			description:
				"Experiencia de 6 años en diseño vectorial para corte por máquina",
		},
	]);

	const [CVSkills, setCVSkills] = useState([
		{
			id: 1,
			description:
				"Conocimientos básicos en uso de programas de diseño corelDRAW, adobe Ilustrator",
		},
		{
			id: 2,
			description: "Javascript",
		},
		{
			id: 3,
			description: "React JS",
		},
		{
			id: 4,
			description: "CSS",
		},
		{
			id: 5,
			description: "Mongo DB",
		},
		{
			id: 6,
			description: "Express",
		},
		{
			id: 7,
			description: "Git y GitHub",
		},
		{
			id: 8,
			description: "Node JS",
		},
	]);

	const [CVProjects, setCVProjects] = useState([
		{
			id: 1,
			src: "https://alanav29.github.io/pokedex/",
			description: "Pokedex / Javascript, HTML, CSS",
		},
		{
			id: 2,
			src: "https://gleaming-crumble-fb130a.netlify.app/",
			description:
				"Alerta peluda / React JS, Bootstrap, Express, MongoDB, Cloudinary",
		},
		{
			id: 3,
			src: "https://subtle-rolypoly-be48ba.netlify.app/",
			description: "Movie time / React JS, Bootstrap, Express, MongoDB",
		},
		{
			id: 4,
			src: "https://tuukulventas.wixsite.com/tuukultech",
			description: "Tuukul Tech tienda en línea / Wix ",
		},
	]);

	return (
		<div className="endSpace">
			<Description />
			<InfoSection infoArray={CVInfo} sectionName={"Educacion"} />
			<InfoSection infoArray={CVExperience} sectionName={"Experiencia"} />
			<InfoSection infoArray={CVSkills} sectionName={"Skills"} />
			<ProjectsSection infoArray={CVProjects} sectionName={"Proyectos"} />
		</div>
	);
};

export default Home;
