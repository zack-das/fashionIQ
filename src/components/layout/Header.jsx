import React from 'react';
import "../../App.css"; 
import { FaRegHeart, FaRegUser, FaShoppingCart } from 'react-icons/fa';
function Header(){
	return( 
		<>
		<nav>
			<div className='logo'>
				<a href="#">STYLE.</a>
			</div>
			<ul className="Desktop-Nav">
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
			
			<div className="userAccess">
				<FaRegUser className="userinfo" size={18} />
				<FaRegHeart  className="user-wishlist" size={18} />
	      		<FaShoppingCart className="user-cart" size={18} />
      		</div>

		</nav>
	</>
		)
	
}

export default Header;
