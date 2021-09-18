import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header() {
    return (
<div className= 'header'>

         <img className = "header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            
       

         <div className="header__search">
          <input className="header__searchInput" type="text"/>

          <SearchIcon className="header__SearchIcon"/>
          
          
          
         </div>
    

    <div className="header__nav">
     <div className="header__option">
        <span className="header__optionlineOne">
                 Hello
        </span>
        <span className="header__optionlineTwo">
                 SignIn
        </span>

     </div>

     <div className="header__option">
         <span className="header__optionlineOne">
                Return 
         </span>
        <span className="header__optionlineTwo">
                 Order
        </span>

     </div>

     <div className="header__option">
         <span className="header__optionlineOne">
                   Your
         </span>
        <span className="header__optionlineTwo">
                   Prime
        </span>

     </div>

    </div>

    <div className="header__optionBasket">
    <ShoppingCartIcon/>
    <span className="header__optionlineTwo header__Basketcount">0</span>
    
    </div>
    
</div>
    )
}

export default Header
