

const GenericHero = () => {
  return (
    <section className="py-8 bg-[url(/media/images/gallery/paying-for-off-campus-housing-with-a-plan.jpg)] bg-no-repeat bg-cover bg-center text-white relative">
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40"></div>
      <div className="container min-h-96 flex items-center relative">
        <hgroup>
            <p className="flex items-center gap-x-3 uppercase text-2xl font-medium before:w-1 before:h-10 before:bg-primary-500 ">What We Offer</p>
            <h1 className="font-black text-[3.5rem] leading-[4.8rem] uppercase">Our Services</h1>
        </hgroup>
        <div className="absolute -bottom-1/4 left-0 right-0 bg-white text-dark-500 w-full rounded-[0.625rem] border p-4 grid grid-cols-2">
            <div className="col-span-1 px-8 border-r">
                <h6 className="text-xl font-black flex items-center gap-x-3 mb-4 before:w-1 before:h-10 before:bg-primary-500">
                  Take business services from our <br /> experienced staff 
                </h6>
                <p>
                  Your one-stop shop for all your packing and moving needs. We'll keep things moving smoothly, so you can focus on the important things. Leave the logistics to us
                </p>
            </div>
            <div className="col-span-1 px-8">
              <p className="text-lg">
                Choose SwiftShift for your packing and relocation needs and experience unparalleled expertise and dedication. With a focus on meticulous attention to detail, state-of-the-art technology for tracking and safety, and a commitment to personalized service, we ensure a stress-free and smooth transition to your new location, every time.
              </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default GenericHero
