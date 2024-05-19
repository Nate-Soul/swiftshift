import Image from "next/image";

interface SolutionProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
};

interface SolutionCardProps {
    solution: SolutionProps;
}

const WhyChooseUsCard: React.FC<SolutionCardProps> = ({ solution }) => {
  return (
    <figure className="flex flex-col">
        <Image src={solution.imageUrl} alt={solution.title} height={128} width={128} className="mx-auto w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32" />
        <figcaption className="px-3 pt-10 pb-12 flex flex-col flex-grow gap-y-5 text-center rounded-[1.25rem] relative z-10 -mt-4 md:-mt-6 shadow-custom bg-white h-auto">
            <h4 className="sm:text-xl font-medium capitalize">{solution.title}</h4>
            <p className="text-sm sm:text-[1rem]">{solution.description}</p>
        </figcaption>
    </figure>
  )
}

export default WhyChooseUsCard
