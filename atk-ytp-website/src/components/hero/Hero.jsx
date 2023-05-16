import Counter from './Counter'

const Hero = () => {
    
  return (
    <section className="transparent py-16 h-[75vh]">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className='font-sans font-extrabold xl:text-9xl text-5xl mix-blend-difference'>ATK-YTP</h1>
            <h1 className='font-sans font-extrabold xl:text-3xl text-xs mix-blend-difference'>JOENSUU</h1>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <Counter targetDate={new Date("2023-11-10T12:00:00Z").getTime()}/>
        </div>
      </div>
  </section>
  
  )
  
};

export default Hero;