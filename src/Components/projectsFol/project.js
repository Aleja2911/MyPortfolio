import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	title: {
		fontSize: 14,
        margin: 5,
       
	},
	par: {
		fontSize: 11,
        margin: 5,
	},
    card: {
        maxWidth: '20rem',
        height: '17.8rem',
        textAlign: 'left',
    }
});

const Project = ({ ProjectImage, ProjectLink, text, textBack }) => {
	const history = useHistory();
	const classes = useStyles();

	const handleProjectClick = (pl) => {
		let path = window.open(pl);
		history.push(path);
	};
	return (
		<Fragment>
			<Grid item sm={4}>
				<Button
					onClick={() => {
						handleProjectClick(ProjectLink);
					}}
				>
					<Card className={classes.card}>
						<CardMedia
							component="img"
							alt="Icon"
							image={ProjectImage}
							title="Icon"
						/>
						<Typography paragraph className={classes.title}>
							{" "}
							<b> Tech Stack: </b>{" "}
						</Typography>
						<Typography className={classes.par}>
							{" "}
							<b>Frontend:</b> {text}{" "}
						</Typography>
						<Typography className={classes.par}>
							{" "}
							<b>Backend:</b> {textBack}{" "}
						</Typography>
					</Card>
				</Button>
			</Grid>
		</Fragment>
	);
};

export default Project;
