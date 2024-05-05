import Image from "next/image"
import Link from "next/link"

const ServicesSection = () => {

    const services = [
        {
            id: 1,
            title: "Comprehensive Packing Solutions",
            description: "Our expert team meticulously packs your belongings with utmost care and attention to detail, ensuring everything arrives at your new destination safely and securely. Whether it's fragile items, bulky furniture, or sensitive equipment....",
            imageUrl: "/media/images/services/moving-in-the-rain-to-reduce-damage.jpg",
        },
        {
            id: 2,
            title: "Tailored Relocation Planning",
            description: "We understand that every move is unique, which is why we offer personalized relocation planning services tailored to your specific needs. From coordinating logistics to scheduling timelines....",
            imageUrl: "/media/images/services/office-moving-in-plano-tx.jpg",
        },
        {
            id: 3,
            title: "Clear Labeling and Item Tracking Service",
            description: "Our Clear Labeling and Item Tracking service is designed to provide maximum transparency and accountability throughout the packing and relocation process. We understand the importance of keeping track of your belongings.....",
            imageUrl: "/media/images/services/havoc-on-your-move.jpg",
        },
        {
            id: 4,
            title: "Post-Move Support and Setup Assistance",
            description: "Our services don't end once your belongings reach their destination. We offer comprehensive post-move support and setup assistance to help you settle into your new space seamlessly.....",
            imageUrl: "/media/images/services/the-future-of-moving.jpg",
        },
    ]

  return (
    <section className="py-16 bg-dark-300 bg-opacity-60 text-white">
        <div className="container">
            <header className="flex flex-col gap-y-6 md:gap-y-8 mb-12">
                <span className="section-heading-badge uppercase bg-light-300 text-light-50 text-sm w-max rounded-lg p-1">
                    What You Gain
                </span>
                <h2 className="font-black text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white">Services We Offer</h2>
                <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 items-center justify-between">
                    <p className="text-sm sm:text-[1rem] lg:text-lg">
                        Discover more than just moving service. Explore our range of services to discover the one that best suits your needs.
                    </p>
                    <div className="btn-group w-full sm:w-auto flex items-center justify-end sm:justify-normal gap-x-4">
                        <button className="btn w-12 h-8 bg-light-100 text-black hover:bg-light-300"><span className="bi-chevron-left"></span></button>
                        <button className="btn w-12 h-8 bg-light-100 text-black hover:bg-light-300"><span className="bi-chevron-right"></span></button>
                    </div>
                </div>
            </header>
            <div className="horizontal-scroll hide-scrollbar gap-x-6 md:gap-x-8 lg:gap-x-10">
                {services && services.map((service, serviceIndex) => (
                <div className="flex-none bg-white rounded-xl p-5 pb-8 basis-1/4 shadow-custom flex flex-col gap-y-5 justify-between" key={serviceIndex}>
                    <div className="flex items-center gap-4">
                        <div className="h-[64px] sm:h-[76px] w-[68px] sm:w-[103px] rounded-2xl rounded-tr-[100px] overflow-hidden">
                            <Image src={service.imageUrl} alt="" width={103} height={103} className="w-full h-full object-cover"/>
                        </div>
                        <h4 className="font-inter font-medium md:text-lg leading-5 text-dark-500">{service.title}</h4>
                    </div>
                    <p className="text-dark-400 text-sm">
                        {service.description}
                    </p>
                    <Link href="/services" className="text-right text-primary-500 opacity-85 hover:opacity-100">Read More <span className="bi-arrow-right"></span></Link>
                </div>
                ))
                }
            </div>
        </div>
    </section>
  )
}

export default ServicesSection
