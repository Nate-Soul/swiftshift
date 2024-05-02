import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-[url(/media/images/gallery/home-movers-sharjah-cover.jpg)] bg-no-repeat bg-cover py-20">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>
      <div className="container max-w-6xl flex flex-col gap-y-20 items-center justify-center text-white relative">
        <div className="hero-text text-center">
          <h1 className="font-black font-inter text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4">Home Relocation Services</h1>
          <p className="text-sm sm:text-lg">
            Your one-stop shop for all your packing and moving needs. We'll keep things moving smoothly, so you can focus on the important things. Leave the logistics to us.
          </p>
        </div>
        <div className="flex flex-col gap-y-4 items-center justify-center w-full">
          <div className="rounded-full bg-white py-3 px-5 w-full shadow-custom flex items-center justify-between">
            <input type="text" placeholder="Moving from" className="border border-light-200 bg-transparent text-secondary-500 rounded-3xl px-3 py-2 sm:py-4 w-2/6 focus:outline-primary-500"/>
            <input type="text" placeholder="Moving to" className="border border-light-200 bg-transparent text-secondary-500 rounded-3xl px-3 py-2 sm:py-4 w-2/6 focus:outline-primary-500"/>
            <button className="btn btn-primary shadow-custom py-3 sm:py-4 lg:py-5 px-4 sm:px-8 lg:px-10 text-sm sm:text-lg">Get Quote</button>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-5 lg:gap-6">
            <div className="inline-flex justify-center items-center gap-x-3 text-sm md:text-lg border border-white py-1 sm:py-2 px-4 sm:px-8 rounded-3xl">
              <span className="bi-house text-sm sm:text-lg md:text-2xl"></span>
              Office
            </div>
            <div className="inline-flex justify-center items-center gap-x-3 text-sm md:text-lg border border-white py-1 sm:py-2 px-4 sm:px-8 rounded-3xl">
              <span className="bi-people text-sm sm:text-lg md:text-2xl"></span>
              Family
            </div>
            <div className="inline-flex justify-center items-center gap-x-3 text-sm md:text-lg border border-white py-1 sm:py-2 px-4 sm:px-8 rounded-3xl">
              <span className="bi-person text-sm sm:text-lg md:text-2xl"></span>
              Individual
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
