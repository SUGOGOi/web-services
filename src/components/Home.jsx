import React from 'react'
import vg from '../assets/2.webp'
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className="home1" id="home" >
                <main>
                    <h1>Web Service</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>
            <div className="home2" >
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam perferendis reprehenderit nisi, corporis ex unde atque. Expedita, mollitia nesciunt. Aut sunt quos nemo. Amet repudiandae fuga, quo repellendus non ullam, quae perferendis illum provident tempore vero facere harum quibusdam dicta.
                    </p>
                </div>
            </div>
            <div className="home3" id="about">
                <div>
                    <h1>who we are?</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque qui odio maiores harum nostrum reiciendis. Ipsa voluptatum nostrum ut inventore obcaecati autem vel ea. Eveniet, sint adipisci. Totam libero dolores vel possimus asperiores nemo eum, esse sapiente unde corporis aliquam sunt? Reiciendis laudantium voluptatem autem, explicabo perspiciatis suscipit animi sequi!</p>
                </div>
            </div>
            <div className="home4" id="brands">
                <div class="ico">
                    <h1>Brands</h1>
                    <article>
                        <div style={{ animationDelay: "0.3s" }} class="in">
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{ animationDelay: "0.5s" }} class="in">
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{ animationDelay: "0.7s" }} class="in">
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{ animationDelay: "0.9s" }} class="in">
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home