import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className ="home__image"
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                 alt ="banner Image"
            />
            <div className="home__row">
            <Product id ={1}
                     title="Apple MacBook Air"
                     image="https://media.wired.com/photos/5bd883dc5b66a763e54f0b22/master/w_2560%2Cc_limit/macbookair3.jpg"
                     price ={1199}
                     rating ={4}
                     />

            
            <Product id ={2}
                     title="Apple Watch Series 5"
                     image="https://images-na.ssl-images-amazon.com/images/I/71ZDwUZWvOL._SL1500_.jpg"
                     price ={250}
                     rating ={4}
                     />

            </div>

            <div className="home__row">
            <Product id ={3}
                     title="Apple iPad Pro (11-inch, Wi-Fi, 64GB) - Space Grey (1st Generation)"
                     image="https://images-na.ssl-images-amazon.com/images/I/519VjeMnLEL._SL1000_.jpg"
                     price ={990}
                     rating ={3}
                     />

            <Product id ={4}
                     title="Iphone 11 pro"
                     image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566953859132"
                     price ={749}
                     rating ={5}
                     />

            <Product id ={5}
                     title="Google Pixel 4 XL Phone - Clearly White - 64GB"
                     image="https://images-na.ssl-images-amazon.com/images/I/414-t2pq0vL.jpg"
                     price ={1034}
                     rating ={5}
                     />

            
            </div>
            <div className="home__row">
            <Product id ={6}
                     title="iMac - 3.7GHz 6-Core Processor with Turbo Boost up to 4.6GHz
                     2TB Storage
                     Retina 5K Display"
                     image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-27-cto-hero-201903?wid=627&hei=522&fmt=jpeg&qlt=95&.v=1553120926412"
                     price ={1799}
                     rating ={5}
                     />
            </div>

            
                     
        </div>
    )
}

export default Home
