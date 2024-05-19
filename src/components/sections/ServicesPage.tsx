import SectionHeading from "../subcomponents/SectionHeading";
import ServicePageCard from "../subcomponents/ServicePageCard";

import services from "@/data/servicesList.json";

const ServicesPage = () => {

    return (
    <section className="py-20">
        <div className="container">
            <SectionHeading title="Our Services" subtext="We run a wide range of services. Let's handle your movement." fancySubtext={null} headerStyles="text-center mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-x-4 gap-y-8 md:gap-y-10 lg:gap-y-16">
                {services && services.map((service, serviceIndex) => (
                    <ServicePageCard service={service} key={serviceIndex} />
                ))}
            </div>
        </div>      
    </section>
  )
}

export default ServicesPage
