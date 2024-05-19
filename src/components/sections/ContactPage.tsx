import Image from "next/image";
import SectionHeading from "../subcomponents/SectionHeading";
import ContactForm from "../subcomponents/ContactForm";


const ContactPage = () => {

    const steps = [
        {
            id: 1,
            title: "We'll ask key questions",
            subtext: "We excel in rapidly identifying and integrating your personalized needs.",
            imageUrl: "/media/images/icons/polygon-01.svg"
        },
        {
            id: 2,
            title: "We'll plan a visit",
            subtext: "Select a convenient date for a visit to check your properties.",
            imageUrl: "/media/images/icons/polygon-02.svg"
        },
        {
            id: 3,
            title: "We'll finalize your move",
            subtext: "Choose your moving date and take your mind off your relocation.",
            imageUrl: "/media/images/icons/polygon-03.svg"
        },
    ];

  return (
    <section className="py-10">
      <div className="container relative flex gap-6 md:gap-8 lg:gap-10 flex-wrap md:flex-nowrap">
        <div className="basis-full md:basis-2/5">
            <SectionHeading title="Next Steps" subtext={null} fancySubtext={null} headerStyles="mb-12" />
            <div className="flex flex-col gap-y-5">
            {steps && steps.map((step, stepIndex) => (
                <figure className="flex items-start gap-x-4" key={stepIndex}>
                    <Image src={step.imageUrl} alt={step.title} height={65} width={61} />
                    <figcaption className="flex flex-col gap-y-3">
                        <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-dark-500">{step.title}</h4>
                        <p className="text-dark-400 sm:text-lg">{step.subtext}</p>
                    </figcaption>
                </figure>
            ))}
            </div>
        </div>
        <div className="basis-full md:basis-3/5 mt-0 md:-mt-[28%] bg-white shadow-custom py-[4.375rem] px-5 sm:px-8 md:px-12 rounded-3xl">
            <ContactForm title="Let's talk about your move..." />
        </div>
      </div>
    </section>
  )
}

export default ContactPage
