import Image from "next/image";
import SectionHeading from "../subcomponents/SectionHeading"


const HowItWorks = () => {

  const proceses = [
    {
      step: "01",
      title: "Select your address",
      subtext: "Select pick up and drop off location",
      color: "#8C7424",
    },
    {
      step: "02",
      title: "Schedule a visit",
      subtext: "Select a convenient date for a visit to check your properties",
      color: "#FFAD26"
    },
    {
      step: "03",
      title: "Finalize your move",
      subtext: "Choose your moving date",
      color: "#ECD8B5"
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <Image src="/media/images/gallery/liza-summer.png" alt="" height={1018} width={623} className="h-full absolute top-0 left-0 w-2/5 hidden xl:block"/>
      <div className="h-[854px] w-[278px] bg-primary-500 -z-10 absolute left-0 top-[170px] rounded-2xl rounded-tr-full hidden xl:block"></div>
      <div className="h-[858.3px] w-[278px] bg-dark-300 -z-10 absolute left-[5%] top-[216px] rotate-[19.76deg] rounded-b-2xl rounded-t-full hidden xl:block"></div>
      <div className="h-[776.1px] w-[278px] bg-light-300 -z-10 absolute left-[10%] top-[385.39px] rotate-[32.79deg] rounded-full rounded-tl-none hidden xl:block"></div>
      <div className="container relative">
        <SectionHeading title="How it Works" subtext="Book a move in three simple steps" headerStyles="text-center mb-16" fancySubtext={null} />
        <div className="ml-auto w-full md:w-4/5 lg:w-3/5 flex flex-col gap-y-10 z-20">
            <div className="border border-light-300 rounded-xl py-8 pr-2 sm:pr-4 grid grid-cols-12 gap-x-5 sm:gap-x-8">
              <div className="bg-dark-300 text-white rounded-tr-[5rem] inline-flex justify-center items-center h-16 sm:h-24 w-full col-span-3">
                <span className="font-georgia text-3xl md:text-4xl lg:text-6xl font-bold">01</span>
              </div>
              <div className="before:bg-primary-500 before:w-1 before:h-16 flex items-center gap-x-5 sm:gap-x-8 col-span-9">
                <div className="flex flex-col gap-y-4">
                  <h4 className="sm:text-lg md:text-2xl font-extrabold">Select your address</h4>
                  <p className="text-sm sm:text-[1rem] md:text-xl">Select pick up and drop off location</p>
                </div>
              </div>
            </div>
            <div className="border border-light-300 rounded-xl py-8 pr-2 sm:pr-4 grid grid-cols-12 gap-x-5 sm:gap-x-8">
              <div className="bg-light-300 text-white rounded-tr-[5rem] inline-flex justify-center items-center h-16 sm:h-24 w-full col-span-3">
                <span className="font-georgia text-3xl md:text-4xl lg:text-6xl font-bold">02</span>
              </div>
              <div className="before:bg-primary-500 before:w-1 before:h-16 flex items-center gap-x-5 sm:gap-x-8 col-span-9">
                <div className="flex flex-col gap-y-4">
                  <h4 className="sm:text-lg md:text-2xl font-extrabold">Schedule a visit</h4>
                  <p className="text-sm sm:text-[1rem] md:text-xl">Select a convenient date for a visit to check your properties</p>
                </div>
              </div>
            </div>
            <div className="border border-light-300 rounded-xl py-8 pr-2 sm:pr-4 grid grid-cols-12 gap-x-5 sm:gap-x-8">
              <div className="bg-primary-500 text-white rounded-tr-[5rem] inline-flex justify-center items-center h-16 sm:h-24 w-full col-span-3">
                <span className="font-georgia text-3xl md:text-4xl lg:text-6xl font-bold">03</span>
              </div>
              <div className="before:bg-primary-500 before:w-1 before:h-16 flex items-center gap-x-5 sm:gap-x-8 col-span-9">
                <div className="flex flex-col gap-y-4">
                  <h4 className="sm:text-lg md:text-2xl font-extrabold">Finalize your move</h4>
                  <p className="text-sm sm:text-[1rem] md:text-xl">Choose your moving date</p>
                </div>
              </div>
            </div>
            <button className="mx-auto btn btn-outline-primary py-2 md:py-3 px-3 sm:px-4 md:px-6 w-max">Get Started</button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
