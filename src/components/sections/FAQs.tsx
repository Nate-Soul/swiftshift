import Image from "next/image";
import SectionHeading from "../subcomponents/SectionHeading";

const FAQSection = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col gap-y-16">
        <div className="flex items-end flex-wrap md:flex-nowrap gap-8">
            <div className="basis-full md:basis-2/5">
                <SectionHeading fancySubtext={null} title="Frequently Asked Questions" subtext="You have questions, We have answers" headerStyles="text-center md:text-left" />
            </div>
            <figure className="basis-full md:basis-3/5 h-80 w-full rounded-b-[1.25rem] overflow-hidden">
                <Image src="/media/images/gallery/happy-unpacking.jpg" alt="" height={500} width={1024} className="w-full h-full object-cover" />
            </figure>
        </div>
        <div className="flex items-center gap-10">
            <div className="basis-3/5">
                <div className="flex items-center gap-x-6 sm:gap-x-10 md:gap-x-12 lg:gap-x-16">
                    <button className="uppercase text-sm md:text-lg lg:text-xl font-extrabold text-primary-500">Property</button>
                    <button className="uppercase text-sm md:text-lg lg:text-xl font-extrabold text-primary-500 opacity-60">Movement</button>
                    <button className="uppercase text-sm md:text-lg lg:text-xl font-extrabold text-primary-500 opacity-60">Payment</button>
                </div>
            </div>
            <div className="basis-2/5"></div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
