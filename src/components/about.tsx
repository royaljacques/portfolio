import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import React from "react";
import classes from "./style/style.module.css"
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
	ssr: false,
});
const Responsive = {
	0: {
		items: 2,
		margin: 5
	},
	768: {
		items: 3,
		margin: 10
	},
	1024: {
		items: 4,
		margin: 20,
	}
}
const About = () => {

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
					<Grid container={true} spacing={2} sx={{justifyContent: "center", alignItems: "center"}}>
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
			<Container maxWidth="md" sx={{marginTop: "5vh"}}>
				<OwlCarousel
					className="owl-theme"
					loop
					margin={10}
					items={5}
					autoplay={true}
					autoplayTimeout={3000}
					autoplayHoverPause={true}
					responsive={Responsive}
				>
					<div className="item">
						<Image src={require("../assets/images/reactLogo.svg")} alt="image1" width={200} height={200}
						/>
					</div>
					<div className="item">
						<Image src={require("../assets/images/Discord.js.svg")} alt="image1" width={200} height={200}
						/>
					</div>
					<div className="item">
						<Image src={require("../assets/images/node-js.svg")} alt="image1" width={200} height={200}
						/>
					</div>
					<div className="item">
						<Image src={require("../assets/images/fastify.svg")} alt="image1" width={200} height={200}/>
					</div>
					<div className="item">
						<Image src={require("../assets/images/next-js.svg")} alt="image1" width={200} height={200}/>
					</div>
					<div className="item">
						<Image src={require("../assets/images/pocketmine.png")} alt="image1" width={200} height={200}
						/>
					</div>
					<div className="item">
						<Image src={require("../assets/images/php.svg")} alt="image1" width={200} height={200}
						/>
					</div>
				</OwlCarousel>
			</Container>
		</div>
	);
}
export default About;
