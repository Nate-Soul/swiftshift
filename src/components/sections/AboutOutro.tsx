import Image from "next/image";
import SectionHeading from "../subcomponents/SectionHeading";


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
    </div>
    </>
  )
}

export default AboutOutro
