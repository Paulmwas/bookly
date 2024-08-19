import './About.css'
import Lorry from '../../Images/lorry.svg';
import User from '../../Images/user.svg';
import Lamp from '../../Images/lamp.svg';
import Lock from '../../Images/lock.svg';


const About = () => {
  return (
    <section className='about'>
      <div className="features-container">
        <div className="features">
            <img src={Lorry} alt="" />
            <h1>Fast Delivery </h1>
            <p>Books at your doorstep in a flash!</p>
        </div>
        <div className="features">
            <img src={User} alt="" />
            <h1>24 x 7 Services </h1>
            <p>No worries,24 x 7 has services for that</p>
        </div>
        <div className="features">
            <img src={Lamp} alt="" />
            <h1>Best Deal </h1>
            <p>Specify your need</p>
        </div>
        <div className="features">
            <img src={Lock} alt="" />
            <h1>Secure Payment </h1>
            <p>Look for trusted payment gateways</p>
        </div>
      </div>
      <div className="about-container">
        <div className="about-image"></div>
        <div className="description"></div>
      </div>
    </section>
  )
}

export default About
