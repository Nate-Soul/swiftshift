import Image from "next/image";
import SectionHeading from "../subcomponents/SectionHeading";


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
      <div className="container relative flex gap-x-10">
        <div className="basis-2/5">
            <SectionHeading title="Next Steps" subtext={null} fancySubtext={null} headerStyles="mb-12" />
            <div className="flex flex-col gap-y-5">
            {steps && steps.map((step, stepIndex) => (
                <figure className="flex items-start gap-x-4" key={stepIndex}>
                    <Image src={step.imageUrl} alt={step.title} height={65} width={61} />
                    <figcaption className="flex flex-col gap-y-3">
                        <h4 className="text-3xl font-black text-dark-500">{step.title}</h4>
                        <p className="text-dark-400 text-lg">{step.subtext}</p>
                    </figcaption>
                </figure>
            ))}
            </div>
        </div>
        <div className="basis-3/5 -mt-[28%] bg-white shadow-custom py-[4.375rem] px-12 rounded-3xl">
            <h4 className="text-4xl text-dark-500 font-black mb-10">Let's talk about your move...</h4>
            <form action="#" className="flex flex-col gap-y-4">
                <div className="form-group flex flex-col gap-y-2">
                    <label htmlFor="fullName" className="text-dark-400 text-lg">Full name</label>
                    <input type="text" name="fullname" id="fullName" className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300" />
                </div>
                <div className="form-group flex flex-col gap-y-2">
                    <label htmlFor="emailAddress" className="text-dark-400 text-lg">Email</label>
                    <input type="email" name="email_address" id="emailAddress" className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300" />
                </div>
                <div className="form-group flex flex-col gap-y-2">
                    <label htmlFor="phoneNumber" className="text-dark-400 text-lg">Phone number</label>
                    <input type="tel" name="phone_number" id="phoneNumber" className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300" />
                </div>
                <div className="form-group flex flex-col gap-y-2">
                    <label htmlFor="movingFrom" className="text-dark-400 text-lg">Moving from</label>
                    <input type="text" name="moving_from" id="movingFrom" className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300" />
                </div>
                <div className="form-group flex flex-col gap-y-2">
                    <label htmlFor="movingTo" className="text-dark-400 text-lg">Moving to</label>
                    <input type="text" name="moving_to" id="movingTo" className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300" />
                </div>
                <div className="form-group flex flex-col gap-y-2">
                    <label htmlFor="AdditionalInfo" className="text-dark-400 text-lg">Additional Information</label>
                    <textarea name="additional_info" id="AdditionalInfo" className="border border-dark-400 w-full py-[0.625rem] px-4 rounded-lg hover:border-primary-500 focus:outline-primary-300" rows={5}></textarea>
                </div>
                <button type="submit" className="btn btn-primary shadow-custom-sm py-2 px-5 w-max">Send Message</button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
