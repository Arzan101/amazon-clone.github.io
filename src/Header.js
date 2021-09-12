import React from 'react'
import './Header.css'

function Header() {
    return (
    <div className= 'header'>

         <img className = "header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            
       

         <div className="header__search">
          <input className="header__searchInput" type="text"/>
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




    </div>
    )
}

export default Header
