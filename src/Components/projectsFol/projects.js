import React from "react";
import Project from "./project";
import FYSImage from "../../Images/FindYourScience.jpg";
import TheGouda from "../../Images/theGoudaFather.png";

import { Grid } from "@material-ui/core";

const Projects = () => {
	const FYSLink = "https://find-your-science.netlify.app/";
	const TheGoudaLink = "https://the-goudafather.netlify.app/";

	return (
		<Grid
			sm={12}
			container
			direction="row"
			justify="space-around"
			alignItems="center"
			id="projects"
			style={{ paddingTop: "3em", paddingBottom: "3em" }}
		>
			<Project
				ProjectImage={FYSImage}
				ProjectLink={FYSLink}
				text="ReactJS, Material-UI, React Spring, React Particles"
				textBack="Express, NodeJS, SQL, Heroku PostgreSQL"
			/>
			<Project
				ProjectImage={TheGouda}
				ProjectLink={TheGoudaLink}
				text="ReactJS, Bootstrap"
				textBack="Contenful CMS"
			/>
		</Grid>
	);
};

export default Projects;
