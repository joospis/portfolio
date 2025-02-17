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
						<PictureFrame tilt={tilt() * -1} frameFile="frame8.webp" src="tikki"/>
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
							This used the version of Big Boy Animator I rewrote to use WPF instead. The primary difficulty with this animation (besides sculpting 3 realistic looking ducks) was to have three simultaneous things happening every frame. From 2020-2022, I attended high school in New York and lived with the family of a staff member there. Her family owned 3 ducks which were the inspiration of the puppets. The recording was of my girlfriend.
						</Project.Text>
					</Project>
				</HouseLevel>
				<HouseLevel className={styles.section2} header="CODE">
					<Project reversed title="This Site">
						<PictureFrame tilt={0} frameFile="frame_cyber1.webp" src="quack"/>
						<Project.Text>
							This site was built using Next.js and is hosted as a static site on Cloudflare Pages. You can view the source code <a target="_blank" rel="noopener noreferrer" href="https://github.com/joospis/portfolio">here</a>. This is the third (and hopefully final) rewrite of this site because I was unhappy with the performance of the previous versions. I got the idea for this site after watching the credits scene for Wallace and Gromit in which there are pictures of Wallace and Gromit on a wall as the names are displayed. 
						</Project.Text>
					</Project>
					<Project title="Big Boy Animator">
						<PictureFrame tilt={0} frameFile="frame_cyber1.webp" src="quack"/>
						<Project.Text>
							Based on the desire to avoid spending $300 to buy Dragonframe, in the Spring of 2020, I started to make my own frame-grabbing software to work with my sister's DSLR. I had a lot of free time on my hands as this was the beginning of the pandemic. Initially, the software was made using C# and WinForms, however when I bought a new laptop later that year with a higher resolution display, I rewrote the software using WPF because WinForms does not support resolution independence. 
							<br/>
							A while later, I started re-writing it with a GUI I made with Monogame. However, I didn't get far in the project.
						</Project.Text>
					</Project>
					<Project reversed title="Sticky's Resupply">
						<PictureFrame tilt={0} frameFile="frame_cyber1.webp" src="quack"/>
						<Project.Text>
							After finishing my thru-hike of the Appalachian Trail in 2023, I returned with a vision for an ecommerce store that would let hikers mail their resupplies to themselves as they were hiking. The store has information regarding calories, caloric density, weight on the product cards as well as the meal planner as the cart. When selecting the shipping location, you could pick post offices or hostels along the long trail you were hiking. I ultimately decided against launching the service for the foreseeable future as I was struggling with feeling isolated and finding food distributors.
						</Project.Text>
					</Project>
					<Project title="Walk to the Waterhole">
						<PictureFrame tilt={0} frameFile="frame_cyber1.webp" src="wttw"/>
						<Project.Text>
							Walk to the Waterhole started out as an attempt to make a tower defense game. Specifically, the game wasn’t even a game, it was a path creation tool for the enemies. As I was playing around with it, I realized that it could be a game in itself. Thus, it became a reverse tower defense game, where you played as the character trying to avoid the towers. You play as a creature trying to get from your house to a pond, but along the way grotesque men try to kill you. You succeed in a level by successfully getting to the pond without being murdered. This game is the closest one of my games ever came to being finished. It was created using C# and Monogame.
						</Project.Text>
					</Project>
					<Project reversed title="Cube Game">
						<PictureFrame tilt={0} frameFile="frame_cyber2.webp" src="cubegame"/>
						<Project.Text>
							Cube Game is a game about a cube from outer space crashing into earth and trying to take over the world. You play as the cube. I started making the game in WPF but soon realized that it was definitely not designed for making games. I began to learn how to make games in Monogame, a C# video game framework. 
						</Project.Text>
					</Project>
				</HouseLevel>
				<HouseLevel className={styles.section3} header="WOODWORKING">
					<Project title="Big Table">
						<PictureFrame tilt={tilt() * -1} frameFile="frame4.webp" src="bigtable"/>
						<Project.Text>
							At my high school, one of the graduation requirements is to complete an act of service. For my act of service, I decided to build a big table for the school. My philosophy regarding big tables is that they act as a bridge to welcome community interaction. By making a big table the centerpiece of a community space, people are encouraged to, even expected to, share the space and interact with one another. If an environment allows people to sit away from each other, it allows them to put up a wall between them and the rest of the people. Even though they may be physically close, they are completely isolated. 
							<br/>
							The table was built from materials primarily donated and was finished a few weeks prior to my graduation.
						</Project.Text>
					</Project>
					<Project reversed title="Picture Frames">
						<PictureFrame tilt={tilt()} frameFile="frame3.webp" src="pictureframes"/>
						<Project.Text>
							For the past few Christmases, I have gifted people picture frames. I believe that the sentimentality of choosing a picture and the dedication of hand crafting the frame makes the gift priceless. As I get older, the more I realize that a good gift is not based on material worth or quantity, but rather something that makes the receiver smile.
						</Project.Text>
					</Project>
				</HouseLevel>
				<HouseLevel className={styles.section4} header="HIKING">
					<Project title="Appalachian Trail">
						<PictureFrame tilt={tilt() * -1} frameFile="frame6.webp" src="quack"/>
						<Project.Text>
							In 2023, my girlfriend and I set out to hike the entire Appalachian Trail. Starting at Springer Mountain, Georgia, and ending at Mt. Katahdin, Maine, the Appalachian Trail spans 2,200 miles. It takes most people 5-7 months to complete. After graduating high school in spring of 2022, I worked for a year to save for my journey, research, and purchase the necessary gear. Over the course of my hike I met amazing people, did what felt impossible, and rediscovered myself and the world around me. I started on March 8<sup>th</sup> and finished September 10<sup>th</sup>.
						</Project.Text>
					</Project>
					<Project reversed title="Colorado Trail">
						<PictureFrame tilt={tilt()} frameFile="frame1.webp" src="quack"/>
						<Project.Text>
							In 2024, after ultimately deciding to put Sticky’s Resupply on an indefinite hold, I decided to hike the Colorado Trail to clear my head. Having never been to Colorado and never doing a long trail by myself, this time I was faced with being completely self-dependent. I successfully hiked an ultramarathon in one day, a goal I had not achieved on the Appalachian Trail. The Colorado trail spans 500 miles from Denver, CO, to Durango, CO. I started July 18<sup>th</sup> and finished August 17<sup>th</sup>.
						</Project.Text>
					</Project>
				</HouseLevel>
			</main>
			<Footer/>
		</div>
	);
}



