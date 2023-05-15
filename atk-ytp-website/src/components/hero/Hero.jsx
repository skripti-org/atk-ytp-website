import Counter from './Counter'

const Hero = () => {
    
  return (
    <section
      id="home"
      className={`flex h-[75vh] lg:flex-row flex-col py-4 items-center`}
    >
      <div
        className={`flex justify-center items-start flex-col text-center px-5`}
      >
        <div className="hero-content">
            <h1 className='font-sans font-extrabold text-8xl'>ATK-YTP</h1>
            <h1 className='font-sans font-extrabold text-2xl'>JOENSUU</h1>
        </div>
      </div>

      <div
        className={`flex justify-center align-center items-center my-10 relative px-5`}
      >
        <div className="hero-content">

            <Counter targetDate={new Date("2023-11-10T12:00:00Z").getTime()}/>
            
        </div>

    
      </div>

      
    </section>
  );
};

export default Hero;