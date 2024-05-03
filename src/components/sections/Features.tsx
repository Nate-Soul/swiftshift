import Image from "next/image"


const Features = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col gap-y-16">
        <div className="flex items-center gap-8 flex-wrap-reverse md:flex-nowrap">
            <div className="after:absolute after:-top-2 sm:after:-top-4 after:-right-2 sm:after:-right-4 after:-z-10 after:bg-primary-500 after:w-full after:h-[90%] after:rounded-xl relative">
                <Image src="/media/images/gallery/pexels-shvets-production.jpg" alt="SwiftShift's workers packing an office space" height={403} width={737} className="rounded-xl" priority/>
            </div>
            <div className="flex flex-col gap-y-6 justify-center sm:justify-start items-center sm:items-start text-center sm:text-left pl-0 sm:pl-3 md:pl-5 pr-0 sm:pr-4 md:pr-8 lg:pr-16">
                <h4 className="text-3xl lg:text-5xl font-extrabold leading-normal lg:leading-relaxed text-dark-500 capitalize">Need Help Moving?</h4>
                <p className="text-lg leading-6 text-dark-500">
                    We have the right solutions to make your relocation stress-free
                </p>
                <div className="flex items-center gap-x-5">
                    <span className="h-1 w-5 bg-primary-500"></span>
                    <span className="h-1 w-5 bg-dark-500"></span>
                    <span className="h-1 w-5 bg-primary-500"></span>
                    <span className="h-1 w-5 bg-dark-500"></span>
                </div>
            </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-8 flex-wrap-reverse md:flex-nowrap">
            <div className="after:absolute after:-top-2 sm:after:-top-4 after:-left-2 sm:after:-left-4 after:-z-10 after:bg-primary-500 after:w-full after:h-[90%] after:rounded-xl relative">
                <Image src="/media/images/gallery/packing-boxes.png" alt="SwiftShift's worker labbeling packed boxes in an office space" height={403} width={737} className="rounded-xl" priority/>
                {/* <div className="absolute -bottom-8 right-0 rounde-xl border-[10px] border-white h-[345px] w-[345px] overflow-hidden">
                    <Image src="/media/images/gallery/kitchen-carolina-grabowska.jpg" alt="labbeling packed boxes for kitchen" height={345} width={345} className="w-full h-full object-cover" priority/>
                </div> */}
            </div>
            <div className="flex flex-col gap-y-6 justify-center sm:justify-start items-center sm:items-start text-center sm:text-left pl-0 sm:pl-3 md:pl-5 pr-0 sm:pr-4 md:pr-8 lg:pr-16">
                <h4 className="text-3xl lg:text-5xl font-extrabold leading-normal lg:leading-relaxed text-secondary-500 capitalize">All your luggage in one place</h4>
                <p className="text-lg leading-6 text-dark-500">
                    All your belongings remain intact from pick up to drop off
                </p>
                <div className="flex items-center gap-x-5">
                    <span className="h-1 w-5 bg-primary-500"></span>
                    <span className="h-1 w-5 bg-dark-500"></span>
                    <span className="h-1 w-5 bg-primary-500"></span>
                    <span className="h-1 w-5 bg-dark-500"></span>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-8 flex-wrap-reverse md:flex-nowrap">
            <div className="after:absolute after:-top-2 sm:after:-top-4 after:-right-2 sm:after:-right-4 after:-z-10 after:bg-primary-500 after:w-full after:h-[90%] after:rounded-xl relative">
                <Image src="/media/images/gallery/packing-boxes.png" alt="SwiftShift's worker unpacking boxes in an office space" height={403} width={737} className="rounded-xl" priority/>
            </div>
            <div className="flex flex-col gap-y-6 justify-center sm:justify-start items-center sm:items-start text-center sm:text-left pl-0 sm:pl-3 md:pl-5 pr-0 sm:pr-4 md:pr-8 lg:pr-16">
                <h4 className="text-3xl lg:text-5xl font-extrabold leading-normal lg:leading-relaxed text-secondary-500 capitalize">Seamless Transitions</h4>
                <p className="text-lg leading-6 text-dark-500">
                    Enjoy a moving experience that prioritizes safety and convenience
                </p>
                <div className="flex items-center gap-x-5">
                    <span className="h-1 w-5 bg-primary-500"></span>
                    <span className="h-1 w-5 bg-dark-500"></span>
                    <span className="h-1 w-5 bg-primary-500"></span>
                    <span className="h-1 w-5 bg-dark-500"></span>
                </div>
                <button className="btn btn-outline-primary py-2 md:py-3 px-3 sm:px-4 md:px-6 w-max">Get Started</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Features
