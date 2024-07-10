/* =========================== Import Files ========================= */
import HeadBar from '../../assets/common/HeadBar/headBar'
import Footer from '../../assets/common/Footer/Footer'
import style from './home.module.css'

/* ======================== Import Animation ======================== */
import OnlineTutor from '../../assets/animation/Animation - bestLearning.json'
import TrafficJam from '../../assets/animation/Animation - trafficJam.json'
import tonsOfBooks from '../../assets/animation/Animation - loadsbooks.json'
import GetYourselfComfy from '../../assets/animation/Animation - onlineTutor.json'
import carryTonsOfBooks from '/carryBooksBackHome.jpg'

/* ========================= Import Library ========================= */
import { useState } from 'react'
import Lottie from 'lottie-react'
import Typewriter from 'typewriter-effect'
import { useSpring, animated } from 'react-spring'


export default function Home(){

    return(
        <div className={style.homeContainer}>

            <div className={style.headBarContainer}>
                <HeadBar />
            </div>
            

            <div className={style.homeContent}>

                <div className={style.titleSection}>
                    <div className={style.slogan}>
                        <h1> Welcome to Online Tutor</h1>
                        <h2>   
                            <Typewriter 
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 60,
                                    strings:["We are the future for study"]
                                }}
                            />
                        </h2>
                    </div>

                    <div className={style.sloganAnimationContainer}>
                        <Lottie animationData={OnlineTutor}/>
                    </div>
                </div>

                <div className={style.descriptionSection}>

                    <div className={style.descriptionTopic}>
                        <div className={style.animationContainer}>
                            <Lottie animationData={TrafficJam}/>
                        </div>

                        <div className={style.topic}>
                            <h3>Still stuck in traffic while traveling to places for study?</h3>
                            <p>
                                <em>
                                    From the research, 50.2% of the population in New Zealand use their personal 
                                    vehicle to get to place for education. Although the vehicle fleet growth has slowed down,
                                    but sometimes you still find that the time spent in traffic is more than the time spent 
                                    in the actual study.
                               </em>
                            </p>
                        </div>
                    </div>

                    <div className={style.descriptionTopic}>
                        <img src={carryTonsOfBooks} style={{width:"30vw", marginRight:"5vw"}} alt="carrying tons of books" />

                        <div className={style.topic}>
                            <h3 style={{width:'35vw'}}>Still carry tons of books/item back home?</h3>
                            <p>
                                <em>
                                    Every single day bring tons of books back home for study has been a problem for many 
                                    people in the past. Now days people bring their devices to school to study. We make you
                                    be able to study at home without having to carry anything.
                                </em>
                            </p>
                        </div>
                        
                        <div className={style.animationContainer}>
                            <Lottie animationData={tonsOfBooks}/>
                        </div>
                    </div>

                    <div className={style.topicSection} style={{paddingTop:'20vh'}}>
                        <h1 style={{fontSize:'4rem'}}>
                            <Typewriter 
                                options={{
                                    autoStart: true,
                                    loop: true,
                                    delay: 60,
                                    strings:["Now"]
                                }}
                            />
                        </h1>

                        <div className={style.descriptionTopic}>
                            <div className={style.topic}>
                                <h3>Get yourself a comfy spot and get ready to start the journey in OnlineTutor.</h3>
                            </div>

                            <div className={style.animationContainer}>
                                <Lottie animationData={GetYourselfComfy}/>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
                <div className={style.footerContainer}>
                    <Footer />
                </div>

            </div>

        </div>
    )
}