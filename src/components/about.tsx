import makeStyles from "@mui/material/styles/makeStyles";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import React from "react";
import classes from "./style/style.module.css"
export default function About(){

	return (
		<div className={classes.heroContent}>
			<Container maxWidth="sm">
				<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
					Jacques Koenig
				</Typography>
				<Typography variant="h5" align="center" color="textSecondary" paragraph>
					full-stack Developer<br/>
					likes to discover new ways of developing
				</Typography>
				<div className={classes.heroButtons}>
					<Grid container={true} spacing={2} sx={{justifyContent:"center", alignItems:"center"}}>
						<Grid item>
							<Button href="./cv" target="_blank" variant="contained"
							        color="primary">
								Resume
							</Button>
						</Grid>
						<Grid item>
							<Button href="https://github.com/royaljacques" target="_blank" variant="outlined"
							        color="primary">
								Github
							</Button>
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
	)
}
