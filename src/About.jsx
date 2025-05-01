import myVisionImg from './assets/vision.jpg';
import whatWeDoImg from './assets/what.jpg';

function About(){



    return(
        <div className='aboutUs'>
            <h1 className="About">About Us</h1>
            <h2 className="Heading">MUT TECH CLUB</h2>
            <div>

            </div>

            <div className='first'>

                 <div className=''>
                <img className='Img' src={myVisionImg} alt="what we do" />
            </div>

            <div className='description'>
                 <p  className='p'>At Mut tech Club,we empower students with <br />
                hands-on experience, industry connections and real-world projects. <br />
                Our members have built innovative tech solutions, contributed to <br />
                open-source projects and won top coding competitions.
                 </p>
            </div>
                      
            </div>
            
           <div className='second'>

           <div>
                <p className='p'> <h2 className='smallTxt'>WHO WE ARE</h2>At Mut Tech Club we create cutting-edge solutions,<br /> collaborate on impactful projects <br /> and
                build tools that solve real-world problems.
                </p>
                </div>

                <div>
                <img className='Img' src={whatWeDoImg} alt="" />
                </div>
               
                
                
           </div>
            
            
             <div>
                <button>JOIN US</button>
                </div>
                     

            
           
        </div>
    )

}

export default About