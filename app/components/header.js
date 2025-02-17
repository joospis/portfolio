'use client'

import styles from './header.module.css'
import React from 'react';

const ArrowSvg = () => (
    <svg 
      fill="#000000" 
      height="200px" 
      width="200px" 
      version="1.1" 
      id="Layer_1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 330 330" 
      xmlSpace="preserve"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <path 
          id="XMLID_225_" 
          d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" 
        />
      </g>
    </svg>
);

export default function Header() {
	const thisRef = React.useRef(null);
	function scroll() {
		// window.scrollBy({
		// 	left: 0,
		// 	top: window.innerHeight,
		// 	behavior: 'smooth'
		// })
		thisRef.current.nextElementSibling.scrollIntoView({behavior: 'smooth'})
	}
    return(
		<header className={styles.header} ref={thisRef}>
			<h1>
        Jasper Bushey
        <br/>
        <span className={styles.big}>Portfolio</span>
      </h1>
			<h2>If my mind was a house, these would be the pictures hanging on the walls</h2>
			<button className={styles.button} onClick={scroll}>
				<ArrowSvg/>
			</button>
		</header>
    )
}