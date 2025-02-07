import styles from "./page.module.css";
import PictureFrame from "./components/picture-frame";
import GlobalAudioControl from "./components/global-audio-control";
import HouseLevel from "./components/house-level";
import Project from "./components/project";
import Header from "./components/header";
import Footer from "./components/footer";

export default function House() {
	function tilt() {
		return (Math.random() - 0.5) * 2
	}
	return (
		<div className={styles.page}>
			<Header/>
			<main>
				<HouseLevel className={styles.section1} header="STOP MOTION">
					<Project title="Joey The Tikki">
						<PictureFrame tilt={-tilt()} frameFile="frame1.webp" src="quack"/>
						<Project.Text>test</Project.Text>
					</Project>
					<Project reversed title="Leg Man">
						<PictureFrame tilt={tilt()} frameFile="frame2.webp" src="legman"/>
						<Project.Text>test</Project.Text>
					</Project>
					<Project title="Quack">
						<PictureFrame tilt={-tilt()} frameFile="frame5.webp" src="quack"/>
						<Project.Text>
							This used the version of Big Boy Animator I rewrote to use WPF instead. The primary difficulty with this animation (besides sculpting 3 realistic looking ducks) was to have three simultaneous things happening every frame. From 2020-2022, I attended high school in New York and lived with the family of a staff member there. Her family owned 3 ducks which were the inspiration of the puppets. The recording was of my girlfriend.
						</Project.Text>
					</Project>
				</HouseLevel>
				<HouseLevel className={styles.section2} header="CODE">
					<Project reversed title="This Site">
						<PictureFrame tilt={tilt()} frameFile="frame_cyber1.webp" src="quack"/>
						<Project.Text>test</Project.Text>
					</Project>
				</HouseLevel>
				<HouseLevel className={styles.section3} header="WOODWORKING">
					<Project title="Big Table">
						<PictureFrame tilt={tilt()} frameFile="frame4.webp" src="quack"/>
						<Project.Text>test</Project.Text>
					</Project>
					<Project reversed title="Picture Frames">
						<PictureFrame tilt={-tilt()} frameFile="frame3.webp" src="quack"/>
						<Project.Text>test</Project.Text>
					</Project>
				</HouseLevel>
				<HouseLevel className={styles.section4} header="HIKING">
					<Project title="Big Table">
						<PictureFrame tilt="-0.9" frameFile="frame2.webp" src="quack"/>
						<Project.Text>test</Project.Text>
					</Project>
				</HouseLevel>
			</main>
			<Footer/>
		</div>
	);
}



