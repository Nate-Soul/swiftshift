import Image from "next/image";
import Link from "next/link";

import SectionHeading from "../subcomponents/SectionHeading";

const ServicesPage = () => {

    const services = [
        {
            id: 1,
            title: "Individual, Family & Office Move",
            description: "This service involves assisting individuals, families, and businesses with their relocation needs. For individuals and families, it includes household items such as furniture, appliances, and personal belongings. For offices, it involves relocating office furniture, equipment, files, and other assets. The service is tailored to meet the specific needs of each client, ensuring a smooth and stress-free transition to their new premises.",
            imageUrl: "/media/images/services/the-future-of-moving.jpg"
        },
        {
            id: 2,
            title: "Local & Interstate Move",
            description: "Local moves involve relocating within the same city or nearby area, while interstate moves involve relocating across state lines. Both services include all aspects of the moving process, from packing and loading to transportation and unloading. Local moves typically have shorter distances and may be completed within a day, while interstate moves require more extensive planning and may involve longer travel times.",
            imageUrl: "/media/images/services/havoc-on-your-move.jpg"
        },
        {
            id: 3,
            title: "Comprehensive Packing solutions",
            description: "Our expert team meticulously packs your belongings with utmost care and attention to detail, ensuring everything arrives at your new destination safely and securely. Whether it's fragile items, bulky furniture, or sensitive equipment, we handle it all with precision and professionalism, giving you peace of mind during your relocation process.",
            imageUrl: "/media/images/services/havoc-on-your-move.jpg"
        },
        {
            id: 4,
            title: "Tailored Relocation Planning",
            description: "We understand that every move is unique, which is why we offer personalized relocation planning services tailored to your specific needs. From coordinating logistics to scheduling timelines, our dedicated specialists work closely with you to create a customized relocation plan that meets your requirements, budget, and timeline, ensuring a smooth transition to your new location.",
            imageUrl: "/media/images/services/havoc-on-your-move.jpg"
        },
        {
            id: 5,
            title: "Clear labeling and item Tracking Service",
            description: "Our Clear Labeling and Item Tracking service is designed to provide maximum transparency and accountability throughout the packing and relocation process. We understand the importance of keeping track of your belongings, and our comprehensive system ensures that each item is clearly labeled and tracked from start to finish.",
            imageUrl: "/media/images/services/havoc-on-your-move.jpg"
        },
        {
            id: 6,
            title: "Cleaning Services",
            description: "This service entails professional cleaning of residential and commercial properties. It includes a range of cleaning tasks such as dusting, vacuuming, mopping, sanitizing surfaces, cleaning bathrooms, kitchens, and common areas. For residential properties, cleaning services may be scheduled on a one-time basis or as part of a regular cleaning routine. For commercial properties, cleaning services may be tailored to suit the specific needs of the business.",
            imageUrl: "/media/images/services/havoc-on-your-move.jpg"
        },
        {
            id: 7,
            title: "Post-Move Support and Setup Assistance",
            description: "Our services don't end once your belongings reach their destination. We offer comprehensive post-move support and setup assistance to help you settle into your new space seamlessly. Whether it's unpacking boxes, assembling furniture, or arranging items according to your preferences, our team is here to assist you every step of the way, ensuring a hassle-free transition and allowing you to focus on getting comfortable in your new surroundings.",
            imageUrl: "/media/images/services/havoc-on-your-move.jpg"
        },
    ]

    return (
    <section className="py-20">
        <div className="container">
            <SectionHeading title="Our Services" subtext="We run a wide range of services. Let's handle your movement." fancySubtext={null} headerStyles="text-center mb-10" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                {services && services.map((service, serviceIndex) => (
                    <div className="bg-white rounded-[2.5rem] border overflow-hidden" key={serviceIndex}>
                        <figure className="h-48 relative">
                            <Image src={service.imageUrl} alt={service.title} width={650} height={650} className="w-full h-full object-cover" />
                            <div className="absolute top-0 left-0 flex items-center justify-center text-center w-full h-full bg-black bg-opacity-40 text-white">
                                <h4 className="text-3xl font-extrabold">{service.title}</h4>
                            </div>
                        </figure>
                        <div className="flex flex-col gap-y-8 justify-between text-lg p-4 pb-6">
                            <p>
                                {service.description}
                            </p>
                            <Link href="/contact" className="text-primary-500 opacity-60 hover:opacity-100 font-extrabold text-right">Get Started <span className="bi-arrow-right"></span></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>      
    </section>
  )
}

export default ServicesPage
