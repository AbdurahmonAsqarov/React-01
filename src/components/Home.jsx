import React from 'react'  
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { BsFire } from "react-icons/bs";
import { IoLeafOutline } from "react-icons/io5";
import { PiCards } from "react-icons/pi";
import { GiOakLeaf } from "react-icons/gi"; 
import { GiTomato } from "react-icons/gi";
import { GiStrawberry } from "react-icons/gi";
import { TbHorseshoe } from "react-icons/tb";
import { GiSpotedFlower } from "react-icons/gi";
import { IoIosTime } from "react-icons/io";
const Home = () => {
  
  return (
    <>
      <header className='home_header'>
          <nav className='nav'>
            <img src="Assests/Logo.png" alt="" />
            <div className="nav_group">
            <ul className='nav_ul'>
            <li className="nav_items">ALL PRODUCTS</li>
            <li className="nav_items">ABOUT SEEDRA</li>
            <li className="nav_items">OUR BLOG</li>
            <li className="nav_items">CONTACTS</li>
            </ul>
            </div>
            <div className="nav_input">
            <RiInstagramFill className='nav_item'/>
             <FaFacebook className='nav_item'/>
            <div className="input_context">
            <CiSearch className='input_search' />
            <input type="text" placeholder='Search' className='context_input' />
            </div>
            <FaRegHeart className='context_items' />
            <SlBasket className='context_items' />

            </div>
          </nav>

          <div className="header_main">
            <div className="huh">
            <div className='ghost'>
              <div><h1>SEEDRA Basil Seeds for Indoor and Outdoor Planting</h1></div>
              <div><h3>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee</h3></div>
              <div><h2><BsFire color='#E55C5C' />$12.56</h2></div>
              <div><button className='green_button'>Add to card</button> <button className='none_button'>Discover</button></div>
            </div>

            <div className="header_main_img">
              <img src="Assests/image 2.png" alt="" />
            </div>
            </div>
          </div>
      </header>

      <main>
        <div className="main_head">
        <h1 className='hi'>Our products.</h1>
        <button>View all (12)</button>
        </div>
        <div className="siqilish_time">
          <h3><IoLeafOutline  color='#359740' />ALL</h3>
          <h3><PiCards  color='#359740' />BUNDLES</h3>
          <h3><GiOakLeaf  color='#359740' />HERBS</h3>
          <h3><GiTomato  color='#359740' />VEGETABLES</h3>
          <h3><GiStrawberry  color='#359740' />FRUITS</h3>
          <h3><TbHorseshoe  color='#359740' />SUPPLIES</h3>
          <h3><GiSpotedFlower color='#359740' />FLOWERS</h3>

        </div>
        
        
        
        
        
        
        <div className="cards">
          <div>
            <img src="Assests/image 1.png" alt="" />
            <h2>Seedra Cilantro Seeds for Planting Indoor and Outdoor</h2>
            <div className="eh">
              <h1>$12.56</h1>
              <SlBasket className='Basket' />
            </div>
            </div>  
            <div>
                <img src="Assests/image 1 (1).png" alt="" />
                <h2>Seedra Cilantro Seeds for Planting Indoor and Outdoor</h2>
                <div className="eh">
              <h1>$12.56</h1>
              <SlBasket className='Basket' />
            </div>
              </div>
            <div>
              <img src="Assests/image 1 (2).png" alt="" />
              <h2>Seedra Cilantro Seeds for Planting Indoor and Outdoor</h2>
              <div className="eh">
              <h1>$12.56</h1>
              <SlBasket className='Basket' />
            </div>
            
              </div> 
              <div>
            <img src="Assests/image 1.png" alt="" />
            <h2>Seedra Cilantro Seeds for Planting Indoor and Outdoor</h2>
            <div className="eh">
              <h1>$12.56</h1>
              <SlBasket className='Basket' />
            </div>
            </div>  
            <div>
                <img src="Assests/image 1 (1).png" alt="" />
                <h2>Seedra Cilantro Seeds for Planting Indoor and Outdoor</h2>
                <div className="eh">
              <h1><BsFire color='#E55C5C' />$12.56</h1>
              <SlBasket className='Basket' />
            </div>
              </div>
            <div>
              <img src="Assests/image 1 (2).png" alt="" />
              <h2>Seedra Cilantro Seeds for Planting Indoor and Outdoor</h2>
              <div className="eh">
              <h1>$12.56</h1>
              <SlBasket className='Basket' />
            </div>
              </div> 
              
        </div>
        <div className="blog">
            <h1 className='hi'>Our blog.</h1>
            <button className='none_button'>Go to our blog</button>
          </div>
        <div className="cards2">
          <div className="n1">
            <div><h4><IoIosTime />12.09.2021</h4>
            <h2>How to plant spinach correctly in winter</h2>
            <h5>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</h5>
            <button className='none_button'>Read</button></div>
            <div>
              <img src="Assests/karam.png" alt="" />
            </div>
          </div>
          <div className="n2">
          <h4><IoIosTime />12.09.2021</h4>
          <h2>How to plant spinach correctly in winter</h2>
          <h5>In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</h5>
          <button className='none_button'>Read</button>
          <img src="Assests/female-gardener-holding-wicker-basket-with-strawberries 1.png" alt="" />
          </div>

          <div className="n3">
          <h4><IoIosTime />12.09.2021</h4>
          <h2>How to plant spinach correctly in winter</h2>
          <div className="n3_">
          <button className='none_button'>Read</button>
          <img src="Assests/Ellipse 1.png" alt="" />
          </div>
          </div>
          <div className="n3">
          <h4><IoIosTime />12.09.2021</h4>
          <h2>How to plant spinach correctly in winter</h2>
          <div className="n3_">
          <button className='none_button'>Read</button>
          <img src="Assests/Ellipse 1.png" alt="" />
          </div>
          </div>
        </div>

      </main>

      <footer>
        <h1>What out clients say</h1>
        <div className="hm">
          <img src="Assests/Frame 39.png" className='image' alt="" />
          <img src="Assests/Frame 38 (1).png" alt="" />
          <img src="Assests/Frame 40.png"  className='image' alt="" />
        </div>

        <div className="try">
          <div>
            <h1>Seedra helps to grow fast and efficiant</h1>
            <h2>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</h2>
            <h2>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </h2>
            <h2>Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</h2>
            <h2>  Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</h2>
            
          </div>
          <div>
              <img src="Assests/wooomen.png" alt="" />
            </div>
        </div>



        <div className="seedra">
          <div className='omg'>
          <div>
            <li className='lol'>ALL PRODUCTS</li>
          </div>
          <div>
            <li className='html'>ABOUT SEEDRA</li>  
          </div>
          <div>
            <li color='#70737C;'>OUR BLOG</li>  </div>          
          </div>
          <div><img src="Assests/Logo.png" alt="" /></div>
          <div className='omg'>
            <li className='oz'>Terms&Conditions</li>
            <li>Privacy Policy</li>
          </div>
        </div>


        <div className="vanihoyat">
          <div>
           <RiInstagramFill className='ere'/>
           <FaFacebook  className='ere'/>
          </div>
          <div>
            <h5>All rights reserved</h5>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Home
