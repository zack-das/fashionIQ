import React, { useState } from 'react';
import "../../App.css"; 
import { FaRegHeart, FaRegUser, FaShoppingCart } from 'react-icons/fa';
import { Squash as Hamburger } from 'hamburger-react';


function Header(){
	const [isMenuOpen, setMenuOpen] = useState(false);

	return( 
		<>
		<nav>
			<div className="hamburger-container">
		        <Hamburger 
		          toggled={isMenuOpen}      // Tells hamburger: "Are you open?" 
		          toggle={setMenuOpen}      // Tells hamburger: "When clicked, call setMenuOpen!"
		          size={24}
		          color="#333"
		        />
           </div>


			{/**/}
				<div className='logo'>
				<a href="#">STYLE.</a>
			</div>
			{/*Desktop nav*/}
			<div className="main-menu">
					<ul className="desktop-nav">
					<li>Women</li>
					<li>Men</li>
					<li>Babies & Kids</li>
					<li>Teenagers</li>
					<li>New Arrivals</li>
					<li id='sale'>Sale</li>
				</ul>
				<div className="search-container">
					<input id="searchBar" type='text' placeholder='Search...'/>
				</div>
		 </div>
			
			<div className="userAccess">
				<FaRegUser className="userinfo" size={18} />
				<FaRegHeart  className="user-wishlist" size={18} />
	      		<FaShoppingCart className="user-cart" size={18} />
      		</div>

			{/*</div>*/}

      		

		</nav>
	</>
		)
	
}

export default Header;
