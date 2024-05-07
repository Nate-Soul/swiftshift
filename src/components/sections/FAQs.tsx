// import Image from "next/image";
import SectionHeading from "../subcomponents/SectionHeading";

const FAQSection = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col gap-y-16">
        <div className="flex items-end flex-wrap md:flex-nowrap gap-8">
            <div className="basis-full md:basis-2/5 hidden md:flex">
                <SectionHeading fancySubtext={null} title="Frequently Asked Questions" subtext="You have questions, We have answers" headerStyles="text-center md:text-left" />
            </div>
            <figure className="basis-full md:basis-3/5 h-40 sm:h-60 md:h-80 w-full rounded-none md:rounded-b-[0.75rem] overflow-hidden bg-[url(/media/images/gallery/happy-unpacking.jpg)] bg-no-repeat bg-cover bg-center flex items-center justify-center relative">
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40"></div>
              <hgroup className="text-center text-white z-10 md:hidden">
                <h2 className="text-xl font-black">Frequently Asked Questions</h2>
                <p className="text">You Have Questions, We Have Answers</p>
              </hgroup>
            </figure>
        </div>
        <div className="flex gap-10 flex-wrap lg:flex-nowrap">
          <div className="basis-full lg:basis-3/5">
            <div className="flex py-4 items-center gap-x-6 sm:gap-x-10 md:gap-x-12 lg:gap-x-16">
              <button className="uppercase text-sm md:text-lg lg:text-xl font-extrabold text-primary-500 after:block after:w-full after:h-[3px] after:mt-[2px] after:bg-primary-500 after:ml-3">Property</button>
              <button className="uppercase text-sm md:text-lg lg:text-xl font-extrabold text-primary-500 opacity-60 hover:opacity-100">Movement</button>
              <button className="uppercase text-sm md:text-lg lg:text-xl font-extrabold text-primary-500 opacity-60 hover:opacity-100">Payment</button>
            </div>
            <ul className="flex flex-col gap-0 sm:text-lg md:text-xl text-dark-400">
              <li className="py-4 border-b">How do you ensure the safety of my belongings during the relocation process?</li>
              <li className="py-4 border-b">Can I customize the labeling and tracking options for my specific needs?</li>
              <li className="py-4 border-b">What happens if there is damage or loss to my property during the relocation process?</li>
              <li className="py-4">How far in advance should I book your services for my upcoming relocation?</li>
            </ul>
          </div>
          <div className="basis-full lg:basis-2/5 border border-primary-300 shadow-custom shadow-primary-400 rounded-[0.75rem] p-5 pt-8 pb-10">
            <hgroup className="mb-10">
              <h4 className="text-xl text-dark-500">Have a new question?</h4>
              <p className="text-dark-400">Send us your questions, we've got answers</p>
            </hgroup>
            <div className="grid grid-cols-2 gap-x-3 gap-y-8">
              <div className="form-group col-span-1">
                <input type="text" name="name" id="name" placeholder="Name"  className="w-full border rounded-lg py-2 px-3 hover:outline-none hover:border-primary-300 focus:outline-primary-400 focus:border-transparent" />
              </div>
              <div className="form-group col-span-1">
                <input type="email" name="email" id="email" placeholder="Email Address" className="w-full border rounded-lg py-2 px-3 hover:outline-none hover:border-primary-300 focus:outline-primary-400 focus:border-transparent" />
              </div>
              <div className="form-group col-span-2">
                <textarea name="message" id="message" cols={30} rows={10} className="h-24 w-full border rounded-lg py-2 px-3 hover:outline-none hover:border-primary-300 focus:outline-primary-400 focus:border-transparent" placeholder="Hi, send us your message...."></textarea>
              </div>
              <div className="form-group text-right col-span-2">
                <button className="btn btn-primary py-2 px-6 font-medium">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
