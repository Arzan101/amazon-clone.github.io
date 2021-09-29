import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
    <div className="Home">
       <div className= "home__container">
           <img className="home__img" src="https://m.media-amazon.com/images/I/71ZBHazSvIL._SX3000_.jpg" alt="home img">
           </img>

           <div className="home__row">
           <Product />
           <Product />
           <Product />
           <Product />
           </div>

           <div className="home__row">
           <Product/>
           <Product/>
           <Product/>
           </div>

           <div className="home__row">
           <Product/>
           <Product/>
           <Product/>
           </div>



        </div>
    </div>
    
    )
}

export default Home
