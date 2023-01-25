import './Hero.scss'
import TextScroller from './TextScroller'

const Hero = () => {
    return (
        
        <div className='hero-container'>
            <div className='text-scroller-container'>
                <TextScroller scrollDirection={"left"}/>
            </div>
            <iframe className="hero-image" src="https://cables.gl/view/63418132a1293e86e06c980a"></iframe>
                <div className="hero-content">
                    <h1 className='a'>ATK-YTP</h1>
                    <h1 className='b'>JOENSUU</h1>
            </div>
            <div className='bottom-text-scroller-container'>
                <TextScroller scrollDirection={"right"}/>
            </div>
        </div>
 
    )
}

export default Hero