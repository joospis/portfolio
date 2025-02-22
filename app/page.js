import styles from "./page.module.css";
import PictureFrame from "./components/picture-frame";
import GlobalAudioControl from "./components/global-audio-control";
import HouseLevel from "./components/house-level";
import Project from "./components/project";
import Header from "./components/header";
import Footer from "./components/footer";

export default function House() {
	function tilt() {
		const rand = Math.random() * 2;
		// console.log(rand)
		return rand
	}
	return (
		<div className={styles.page}>
			<Header/>
			<main>
				<HouseLevel className={styles.section1} header="STOP MOTION">
					<Project title="Joey The Tikki">
						<PictureFrame clickMe tilt={tilt() * -1} frameFile="frame8.webp" src="tikki"/>
						<Project.Text>In the Summer of 2019, I borrowed my sister's DSLR and got a free trial version of Dragonframe. This would be the beginning of my stop motion animation phase. I used an audio clip of Joey from Friends and a wooden Tikki built by my late grandfather.</Project.Text>
					</Project>
					<Project reversed title="Leg Man">
						<PictureFrame tilt={tilt()} frameFile="frame2.webp" src="legman"/>
						<Project.Text>
							This was the first animation I made with Big Boy Animator, utilizing not only the playback controls, but also the lip sync tools. 
							<br/>
							This was more than merely a test of the software, however. I was also testing a post-production effect called masking, in which you overlay a frame or series of frames over a still background image and erase parts of the overlay to expose the background. In stop motion, this can be used to hide puppet supports allowing, for example, your characters to jump. 
							<br/>
							Although these were the technical motivations for making Leg Man, I don’t really know where the idea for the characters and story came from, only that I thought a creature with only a head and a leg would be funny.
						</Project.Text>
					</Project>
					<Project title="Quack">
						<PictureFrame tilt={tilt() * -1} frameFile="frame5.webp" src="quack"/>
						<Project.Text>
							This used the version of Big Boy Animator I rewrote to use WPF instead. The primary difficulty with this animation (besides sculpting 3 realistic looking ducks) was to have three simultaneous things happening every frame. From 2020-2022, I attended high school in New York and lived with the family of a staff member there. Her family owned 3 ducks which were the inspiration of the puppets. The voice recording is of my girlfriend.
						</Project.Text>
					</Project>
				</HouseLevel>
				<HouseLevel className={styles.section2} header="CODE">
					<Project reversed title="This Site">
						<PictureFrame tilt={0} frameFile="frame_cyber1.webp" src="thissite"/>
						<Project.Text>
							This site was built using Next.js and is hosted as a static site on Cloudflare Pages. You can view the source code <a target="_blank" rel="noopener noreferrer" href="https://github.com/joospis/portfolio">here</a>. This is the third (and hopefully final) rewrite of this site because I was unhappy with the performance of the previous versions. I got the idea for this site after watching the credits scene for Wallace and Gromit in which there are pictures of Wallace and Gromit on a wall as the names are displayed. 
						</Project.Text>
					</Project>
					<Project title="Big Boy Animator">
						<PictureFrame tilt={0} frameFile="frame_cyber2.webp" src="bigboy"/>
						<Project.Text>
							Based on the desire to avoid spending $300 to buy Dragonframe, in the Spring of 2020, I started to make my own frame-grabbing software to work with my sister's DSLR. I had a lot of free time on my hands as this was the beginning of the pandemic. Initially, the software was made using C# and WinForms, however when I bought a new laptop later that year with a higher resolution display, I rewrote the software using WPF because WinForms does not support resolution independence. 
						</Project.Text>
					</Project>
					<Project reversed title="Walk to the Waterhole">
						<PictureFrame tilt={0} frameFile="frame_cyber1.webp" src="wttw"/>
						<Project.Text>
							Walk to the Waterhole started out as an attempt to make a tower defense game. Specifically, the game wasn’t even a game, it was a path creation tool for the enemies. As I was playing around with it, I realized that it could be a game in itself. Thus, it became a reverse tower defense game, where you played as the character trying to avoid the towers. You play as a creature trying to get from your house to a pond, but along the way grotesque men try to kill you. You succeed in a level by successfully getting to the pond without being murdered. It was created using C# and Monogame.
						</Project.Text>
					</Project>
					<Project title="Cube Game">
						<PictureFrame tilt={0} frameFile="frame_cyber2.webp" src="cubegame"/>
						<Project.Text>
							Cube Game is a game about a cube from outer space crashing into earth and trying to take over the world. You play as the cube. I started making the game in WPF but soon realized that it was definitely not designed for making games. I began to learn how to make games in Monogame, a C# video game framework. 
						</Project.Text>
					</Project>
				</HouseLevel>
				<HouseLevel className={styles.section3} header="WOODWORKING">
					<Project reversed title="Big Table">
						<PictureFrame tilt={tilt()} frameFile="frame4.webp" src="bigtable"/>
						<Project.Text>
							At my high school, one of the graduation requirements is to complete an act of service. For my act of service, I decided to build a big table for the school. My philosophy regarding big tables is that they act as a bridge to welcome community interaction. By making a big table the centerpiece of a community space, people are encouraged to, even expected to, share the space and interact with one another. If an environment allows people to sit away from each other, it allows them to put up a wall between them and the rest of the people. Even though they may be physically close, they are completely isolated. 
							<br/>
							The table was built from materials primarily donated and was finished a few weeks prior to my graduation.
						</Project.Text>
					</Project>
					<Project title="Picture Frames">
						<PictureFrame tilt={tilt() * -1} frameFile="frame3.webp" src="pictureframes"/>
						<Project.Text>
							For the past few Christmases, I have gifted people picture frames. I believe that the sentimentality of choosing a picture and the dedication of hand crafting the frame makes the gift priceless. As I get older, the more I realize that a good gift is not based on material worth or quantity, but rather something that makes the receiver smile.
						</Project.Text>
					</Project>
				</HouseLevel>
				<HouseLevel className={styles.section4} header="HIKING">
					<Project reversed title="Appalachian Trail">
						<PictureFrame tilt={tilt()} frameFile="frame6.webp" src="at"/>
						<Project.Text>
							In 2023, my girlfriend and I embarked on a life-changing adventure to hike the entire Appalachian Trail. Beginning at Springer Mountain in Georgia and ending at Mt. Katahdin in Maine, the trail stretches 2,200 miles. Most hikers take 5-7 months to complete it, and we set out to do just that. After graduating high school in 2022, I spent a year saving, researching, and outfitting myself with the necessary gear. Along the way, I met incredible people, achieved what once seemed impossible, and rediscovered both myself and the beauty of the world around me. I started on March 8<sup>th</sup> and finished on September 10<sup>th</sup>.
						</Project.Text>
					</Project>
					<Project title="Colorado Trail">
						<PictureFrame tilt={tilt() * -1} frameFile="frame1.webp" src="ct"/>
						<Project.Text>
							In 2024, I set out on a new adventure—the Colorado Trail! Having never been to Colorado or tackled a long trail solo, I embraced the challenge of being fully self-reliant. Along the way, I accomplished something I hadn’t on the Appalachian Trail: hiking an ultramarathon in a single day. The Colorado Trail stretches 500 miles from Denver to Durango, filled with breathtaking scenery and unforgettable moments. I started on July 18<sup>th</sup> and crossed the finish line on August 17<sup>th</sup>, grateful for every step of the journey.
						</Project.Text>
					</Project>
				</HouseLevel>
			</main>
			<Footer/>
		</div>
	);
}



