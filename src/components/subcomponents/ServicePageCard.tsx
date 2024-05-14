import Image from "next/image";
import Link from "next/link";

interface ServiceProps {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
};

interface ServicePageCardProps {
    service: ServiceProps;
}

const ServicePageCard: React.FC<ServicePageCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-[2.5rem] border overflow-hidden even:translate-y-0 md:even:translate-y-8">
        <figure className="h-48 relative">
            <Image src={service.imageUrl} alt={service.title} width={650} height={650} className="w-full h-full object-cover" />
            <div className="absolute top-0 left-0 flex items-center justify-center text-center w-full h-full bg-black bg-opacity-40 text-white">
                <h4 className="text-xl md:text-2xl lg:text-3xl font-extrabold">{service.title}</h4>
            </div>
        </figure>
        <div className="flex flex-col gap-y-8 justify-between text-lg p-4 pb-6">
            <p>
                {service.description}
            </p>
            <Link href="/contact" className="text-primary-500 opacity-60 hover:opacity-100 font-extrabold text-right">Get Started <span className="bi-arrow-right"></span></Link>
        </div>
    </div>
  )
}

export default ServicePageCard
