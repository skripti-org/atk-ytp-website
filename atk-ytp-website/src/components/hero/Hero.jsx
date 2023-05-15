import Counter from './Counter'


const Hero = () => {
    
  return (
    <section
      id="home"
      className={`flex lg:flex-row flex-col py-16`}
    >
      <div
        className={`flex justify-center items-start flex-col px-16`}
      >
        <div className="hero-content">
            <h1 className='font-sans font-extrabold text-8xl'>ATK-YTP</h1>
            <h1 className='font-sans font-extrabold text-2xl'>JOENSUU</h1>
        </div>
      </div>

      <div
        className={`flex justify-center items-center my-10 relative`}
      >
        <div className="hero-content">

            <Counter targetDate={new Date("2023-11-10T12:00:00Z").getTime()}/>
            
        </div>

    
      </div>

      
    </section>
  );
};

export default Hero;