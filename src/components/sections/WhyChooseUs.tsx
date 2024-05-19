import Image from "next/image";
import SectionHeading from "../subcomponents/SectionHeading";
import WhyChooseUsCard from "../subcomponents/WhyChooseUsCard";

const WhyChooseUs = () => {


    const solutions = [
        {
            id: 1,
            title: "More Protection",
            description: "We offer a Goods-in-transit insurance policy that covers your belongings from the moment we take them into our hands.",
            imageUrl: "/media/images/icons/family.svg"
        },
        {
            id: 2,
            title: "More Locations",
            description: "Whether your move is local or long distance, we've got you covered. We can help you move to your new home, no matter how far away it is.",
            imageUrl: "/media/images/icons/location.svg"
        },
        {
            id: 3,
            title: "More Options",
            description: "No idea how much space you need? Or what services you'd like? We'll come to your house or office to help customize your solution and provide a free quote.",
            imageUrl: "/media/images/icons/answer.svg"
        },
        {
            id: 4,
            title: "More Benefits",
            description: "With SwiftShift you can pack now and pay later. We also offer coverage for household goods to ensure comprehensive protection.",
            imageUrl: "/media/images/icons/employee-benefit.svg"
        },
    ]


  return (
    <section className="py-16 relative">
        <div className="container">
            <SectionHeading title="Why Choose Us" subtext="One Seamless Packing Solution" headerStyles="mb-16 text-center" fancySubtext={null} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    solutions && solutions.map((solution, solutionIndex) => (
                        <WhyChooseUsCard key={solutionIndex} solution={solution} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs
