import React from 'react'
import './home.css'
import Navbar from '../components/navbar'
import image1 from '../images/11.jpg'
import image2 from '../images/3-3.jpg'
import image3 from '../images/9.jpg'
import image4 from '../images/1-3.jpg'
import image5 from '../images/1-7.jpg'
import image6 from '../images/about.jpg'
// import image7 from '../images/1-2.jpg'
// import image8 from '../images/2-1.jpg'
// import image9 from '../images/3-2.jpg'


const Home = (props) => {
  return (
    <>
      <div className='main_container'>
        <div className="slider_container">

          <Navbar handleCross={props.handleCross} sidebar={props.sidebar} handleOpen={props.handleOpen} />

          <div className="slider_main">
            <div className="slider">
              <div className="slide" style={{ backgroundImage: `url(https://wallpaperaccess.com/full/40045.jpg)` }}></div>
              <div className="slide" style={{ backgroundImage: `url(https://digitalsynopsis.com/wp-content/uploads/2012/02/super-sports-car-hd-desktop-wallpapers-feature-image.jpg)` }}></div>
              <div className="slide" style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrFiENb-YV75VVOQQzfu_tBtGoNTxJAVvalQ&usqp=CAU)` }}></div>
              <div className="slide" style={{ backgroundImage: `url(https://cdn.wallpapersafari.com/88/20/IQrvaC.jpg)` }}></div>
            </div>

            <div className="slider1">
              <div className="slide1">
                <div className="slide1_box">
                  <hr />
                  <h5>25 may 2018</h5>
                  <h1>design and <br /> development <br /> of <span style={{ color: "#f68338" }}>corporate website</span></h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore consequuntur laudantium <br /> veritatis magnam officiis nulla optio odit illo.</p>
                  <button type="button">view port</button>
                </div>
              </div>
              <div className="slide1">
                <div className="slide1_box">
                  <hr />
                  <h5>25 may 2018</h5>
                  <h1>design and <br /> development <br /> of <span style={{ color: "#f68338" }}>corporate website</span></h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore consequuntur laudantium <br /> veritatis magnam officiis nulla optio odit illo.</p>
                  <button type="button">view port</button>
                </div>
              </div>
              <div className="slide1">
                <div className="slide1_box">
                  <hr />
                  <h5>25 may 2018</h5>
                  <h1>design and <br /> development <br /> of <span style={{ color: "#f68338" }}>corporate website</span></h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore consequuntur laudantium <br /> veritatis magnam officiis nulla optio odit illo.</p>
                  <button type="button">view port</button>
                </div>
              </div>
              <div className="slide1">
                <div className="slide1_box">
                  <hr />
                  <h5>25 may 2018</h5>
                  <h1>design and <br /> development <br /> of <span style={{ color: "#f68338" }}>corporate website</span></h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore consequuntur laudantium <br /> veritatis magnam officiis nulla optio odit illo.</p>
                  <button type="button">view port</button>
                </div>
              </div>
            </div>

            <div className="slider_bar">
              <div className="slider_bar_box">
                <div className="slider_bar_box_line">
                  <div className="slider_bar_box_line1"></div>
                </div>
              </div>
              <div className="slider_counter">
                <div className="count">
                  <div className="count1">
                    <div>00</div>
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                  </div>
                </div>- 04
              </div>
            </div>
            <div className="slider_box"></div>



          </div>
          
          


          <div class="containerLower">
      <div class="containerlowerLeft">
         <img src={image5} alt="" />
      </div>
      <div class="containerlowerTop">
         <ul>
            <li class="stickyActive"><a href="">about</a></li>
            <li><a href="">services</a></li>
            <li><a href="">skills</a></li>
            <li><a href="">resume</a></li>
            <li><a href="">clients</a></li>
         </ul>
         <div class="containerlowerTopLeft">
            <i class="fas fa-chevron-down"></i>
         </div>
         </div>
         <div class="containerlowerRight">
            <div class="about">
               <div class="about_box">
                  <div class="about_box1">
                     <div></div>
                     <h1>about me</h1>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium labore sapiente alias nesciunt.</p>
                  </div>
               </div>
                  <div class="about_box2">
                     <div class="about_box2_Img">
                        <img src={image6} alt="" />
                     </div>
                     <div class="about_box2_box">
                        <h1>Innovative solutions <br />
                           to boost <span style={{color: "#f68338"}}>your creative</span> projects</h1>
                           <div></div>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
                           <ul>
                              <li>Leverage agile frameworks to provide a robust synopsis.</li>
                              <li>Iterative approaches to corporate strategy foster.</li>
                           </ul>
                           <button type="button">view port</button>
                     </div>
                  </div>
            </div>

            <div class="rightCounter">
               <div class="rightCounter_box">
                  <h1>45</h1>
                  <p>FINISHED PROJECTS</p>
               </div>
               <div class="rightCounter_box">
                  <h1>39</h1>
                  <p>HAPPY CUSTOMERS</p>
               </div>
               <div class="rightCounter_box">
                  <h1>66</h1>
                  <p>WORKING PROJECTS</p>
               </div>
               <div class="rightCounter_box">
                  <h1>130</h1>
                  <p>AWARDS WON</p>
               </div>
            </div>


            <div class="services">
               <div class="about_box1" style={{borderBottom: "1px solid rgb(206, 204, 204)"}}>
                  <div></div>
                  <h1>Services</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Accusantium labore sapiente alias nesciunt.</p>
               </div>

               <div class="service_container">
                  <div class="service_box">
                     <div class="service_box_main">
                        <div class="service_box_main_box">
                           <div class="service_main_front">
                              {/* <img src={image3} alt="" /> */}
                              <div class="service_main_front_div">
                                 <h1>Web Design</h1>
                                 <div></div>
                                 <p>concept design 3d modeling</p>
                              </div>
                           </div>
                           <div class="service_main_back">
                              <div class="service_main_back_div">
                                 <div class="service_main_back_div1">
                                    <i class="fas fa-desktop"></i>
                                 </div>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur ad minima.</p>
                                 <div class="service_main_back_div2">
                                    <p>Price</p>
                                    <div></div>
                                    <span>$125-$335</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="service_box">
                     <div class="service_box_main">
                        <div class="service_box_main_box">
                           <div class="service_main_front">
                              {/* <img src={image4} alt="" /> */}
                              <div class="service_main_front_div">
                                 <h1>Web Design</h1>
                                 <div></div>
                                 <p>concept design 3d modeling</p>
                              </div>
                           </div>
                           <div class="service_main_back">
                              <div class="service_main_back_div">
                                 <div class="service_main_back_div1">
                                    <i class="fab fa-pagelines"></i>
                                 </div>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur ad minima.</p>
                                 <div class="service_main_back_div2">
                                    <p>Price</p>
                                    <div></div>
                                    <span>$125-$335</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="service_box">
                     <div class="service_box_main">
                        <div class="service_box_main_box">
                           <div class="service_main_front">
                              {/* <img src={image5} alt="" /> */}
                              <div class="service_main_front_div">
                                 <h1>Web Design</h1>
                                 <div></div>
                                 <p>concept design 3d modeling</p>
                              </div>
                           </div>
                           <div class="service_main_back">
                              <div class="service_main_back_div">
                                 <div class="service_main_back_div1">
                                    <i class="fas fa-mobile-alt"></i>
                                 </div>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aspernatur ad minima.</p>
                                 <div class="service_main_back_div2">
                                    <p>Price</p>
                                    <div></div>
                                    <span>$125-$335</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="service_bottom">
                  <p>Ready to order your project ? Visit my contacts page:</p>
                  <button type="button">CONTACTS</button>
               </div>
            </div>


            <div class="skills">
               <div class="about_box1" style={{borderBottom: "1px solid rgb(206, 204, 204)"}}>
                  <div></div>
                  <h1>Skills Process</h1>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Accusantium labore sapiente alias nesciunt.</p>
               </div>

               <div class="skills_grab">
                  <div class="grabSlider">
                     <div class="grabSlider-inner">
                        <div class="grabSlide-img">
                           <div class="grabSlide_div1">
                              <i class="fab fa-pagelines"></i>
                              <h3>discuss the projects</h3>
                           </div>
                           <div class="grabSlide_div2">
                              <h4>Duis autem vel eum iriure dolor</h4>
                              <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor.</p>
                           </div>
                           <div class="grabSlide_div3"></div>
                        </div>



                        <div class="grabSlide-img">
                           <div class="grabSlide_div1">
                              <i class="fas fa-tv"></i>
                              <h3>DEVELOP & ELABORATE</h3>
                           </div>
                           <div class="grabSlide_div2">
                              <h4>Duis autem vel eum iriure dolor</h4>
                              <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor.</p>
                           </div>
                           <div class="grabSlide_div3"></div>
                        </div>



                        <div class="grabSlide-img">
                           <div class="grabSlide_div1">
                              <i class="fab fa-pagelines"></i>
                              <h3>FINAL APPROVEMENT</h3>
                           </div>
                           <div class="grabSlide_div2">
                              <h4>Duis autem vel eum iriure dolor</h4>
                              <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor.</p>
                           </div>
                           <div class="grabSlide_div3"></div>
                        </div>



                        <div class="grabSlide-img">
                           <div class="grabSlide_div1">
                              <i class="fab fa-pagelines"></i>
                              <h3>SKILL PROCESSING</h3>
                           </div>
                           <div class="grabSlide_div2">
                              <h4>Duis autem vel eum iriure dolor</h4>
                              <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor.</p>
                           </div>
                           <div class="grabSlide_div3"></div>
                        </div>



                        <div class="grabSlide-img"><div class="grabSlide_div1">
                              <i class="fab fa-pagelines"></i>
                              <h3>VIDEO REPRESANTATION</h3>
                           </div>
                           <div class="grabSlide_div2">
                              <h4>Duis autem vel eum iriure dolor</h4>
                              <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor.</p>
                           </div>
                           <div class="grabSlide_div3"></div>
                        </div>



                        <div class="grabSlide-img">
                           <div class="grabSlide_div1">
                              <i class="fab fa-pagelines"></i>
                              <h3>RESUME</h3>
                           </div>
                           <div class="grabSlide_div2">
                              <h4>Duis autem vel eum iriure dolor</h4>
                              <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor.</p>
                           </div>
                           <div class="grabSlide_div3"></div>
                        </div>



                        <div class="grabSlide-img"><div class="grabSlide_div1">
                              <i class="fab fa-pagelines"></i>
                              <h3>TESTIMONIALS</h3>
                           </div>
                           <div class="grabSlide_div2">
                              <h4>Duis autem vel eum iriure dolor</h4>
                              <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor.</p>
                           </div>
                           <div class="grabSlide_div3"></div></div>
                     </div>
                  </div>
               </div>
               <div class="skills_border_bottom"></div>
            </div>


         </div>
         </div>

   <div class="bottom">
      <div class="bottom_div">
         <div class="bottom_box1">
            2018&nbsp;-&nbsp;2022
         </div>
         <p>Want to be notified when we launch a new template or an udpate. Just sign up and we'll send you a notification by email.</p>
         <div class="bottom_box2">
            <input type="text" placeholder="Your Email" />
            <button class="">SUBSCRIBE</button>
         </div>
         <div class="bottom_box3">
            <div class="div1"></div>
            <div class="div1"></div>
            <div class="div1"></div>
         </div>
      </div>
   </div>





        </div>
      </div>
    </>
  )
}

export default Home
