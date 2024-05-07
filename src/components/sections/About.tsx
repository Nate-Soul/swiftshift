import Image from "next/image";
import Link from "next/link";

import SectionHeading from "../subcomponents/SectionHeading";

const AboutSection = () => {
  return (
    <section className="pt-10 relative">
      <div className="container">
        <SectionHeading title="About Us" subtext={null} headerStyles="text-center md:text-left mb-6 md:mb-8" fancySubtext={null} />
        <div className="flex flex-wrap md:flex-nowrap gap-10">
            <div className="about-text basis-full md:basis-2/5 flex flex-col gap-y-5 text-center md:text-left">
                <p>
                    At SwiftShift, we understand that moving can be overwhelming, and we're here to help. With 5 years of experience in the industry, we have perfected the art of efficient packing and seamless relocation. Our dedicated team is committed to ensuring that your belongings are handled with care, from the moment we start packing to the final delivery at your new destination.
                </p>
                <Link href="/about" className="btn btn-primary px-6 py-2 w-max mx-auto md:mx-0">Read More</Link>
            </div>
            <div className="about-img-gallery basis-full md:basis-3/5 grid grid-cols-2 grid-rows-3 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-4">
                <figure className="col-span-1 row-span-1 rounded-[1.25rem] rounded-tl-[72px] overflow-hidden">
                    <Image 
                        src="/media/images/gallery/professional-movers.jpg"
                        alt="" 
                        width={250} 
                        height={250} 
                        className="w-full h-full object-cover"
                    />
                </figure>
                <figure className="col-span-1 row-span-2 rounded-[1.25rem] overflow-hidden">
                    <Image 
                        src="/media/images/services/office-moving-in-plano-tx.jpg"
                        alt=""
                        width={500} 
                        height={500} 
                        className="w-full h-full object-cover"
                    />
                </figure>
                <figure className="col-span-1 row-start-2 row-span-1 rounded-s-[4.5rem] rounded-e-[1.25rem] overflow-hidden">
                    <Image 
                        src="/media/images/gallery/julia-avamotive.jpg"
                        alt=""
                        width={250} 
                        height={250} 
                        className="w-full h-full object-cover"
                    />
                </figure>
                <figure className="col-span-2 row-start-3 row-span-1 rounded-tl-[7rem] rounded-tr-[1.25rem] overflow-hidden">
                    <Image 
                        src="/media/images/gallery/moving-day.png"
                        alt=""
                        width={700} 
                        height={700} 
                        className="w-full h-full object-cover"
                    />
                </figure>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
