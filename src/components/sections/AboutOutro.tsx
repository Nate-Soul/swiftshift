import Image from "next/image";
import SectionHeading from "../subcomponents/SectionHeading";
import ContactForm from "../subcomponents/ContactForm";


const AboutOutro = () => {
  return (
    <>
    <section className="py-16 min-h-[500px]">
        <div className="container">
            <SectionHeading title="Think globally. work locally" subtext="Tailoring our solutions to your unique needs, we take pride in delivering efficient and stress-free experiences. With a commitment to top-notch protection, we prioritize the safety and security of your belongings throughout the entire journey. Choose SwiftShift for a packing experience that goes beyond the ordinary, making your move exceptional." fancySubtext={null} headerStyles="mb-10 text-center" />
        </div>
    </section>
    <div className="bg-light-300 bg-opacity-20 py-14">
        <div className="container relative flex gap-8 md:gap-12 lg:gap-14 flex-wrap md:flex-nowrap">
            <figure className="basis-full md:basis-2/5 border border-black h-[480px] -mt-[50%] md:-mt-[20%]">
                <Image src="/media/images/gallery/engineers-brainstorming-ideas.jpg" alt="" height={500} width={500} className="w-full h-full object-cover" />
            </figure>
            <div className="basis-full md:basis-3/5">
                <ContactForm title="Let's talk about your move..."/>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutOutro
