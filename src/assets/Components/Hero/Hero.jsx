import './Hero.css'
import Hero_Image from '../../Images/hero-image.png'

const Hero = () => {
  return (
    <section className='hero-section'>
        <div className="hero-container">
            <div className="hero-description">
                <h1>Welcome to <br /><span>Bookly</span><br />Book Store</h1>
                <p>ur gateway to a world of imagination, knowledge, and adventure! At Bookly, we believe that every book has the power to inspire, educate, and entertain. Whether you&apos;re seeking the latest bestsellers, timeless classics, or hidden gems, our carefully curated selection has something for every reader. Discover your next great read today and let your journey begin with Bookly!</p>
            </div>
            <div className="hero-image">
                <img src={Hero_Image} alt="" />
            </div>
        </div>
      
    </section>
  )
}

export default Hero
