import Image from "next/image";
import SectionHeading from "../subcomponents/SectionHeading";

const ServiceFeature = () => {
  return (
    <section className="py-16">
        <div className="container flex items-center gap-8 lg:gap-10 flex-wrap-reverse lg:flex-nowrap">
            <div className="flex flex-col gap-y-6 basis:full lg:basis-1/2">
                <SectionHeading fancySubtext={null} title="Move with SwiftShift" subtext="Make your move stress-free and seamless with us! Our expert team ensures a hassle-free experience from start to finish, leaving you to focus on the excitement of your new journey." headerStyles="text-left" />
                <button className="btn btn-primary py-2 px-6 shadow-custom w-max">Get Quote</button>
            </div>
            <div className="relative basis-full lg:basis-1/2">
                <Image src="/media/images/gallery/residential-moves.jpg" alt="" className="w-full h-full object-cover" height={800} width={800} />
                <div className="absolute bg-white w-0 sm:w-5 top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
                <div className="absolute left-0 md:-left-10 top-0 md:top-10 p-2 bg-white text-dark-500 w-44 shadow-custom-sm rounded-[1.25rem]">
                    <p>
                        Over <strong>10,000+</strong> customer relations. <br /><br /> <strong>93%</strong> job success base on client feedbacks
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceFeature
