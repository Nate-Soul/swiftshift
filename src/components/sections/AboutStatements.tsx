import Image from "next/image";
import SectionHeading from "../subcomponents/SectionHeading";


const AboutStatements = () => {

    const statements = [
        {
            title: "Our Mission",
            subtext: "To be your partners in crafting a stress-free packing experience. Turning the daunting task of packing into a positive journey"
        },
        {
            title: "Our Vision",
            subtext: "To transform packing into an effortless and personalized experience. We aim to be the go-to solution"
        },
        {
            title: "Our Drive",
            subtext: "Our drive is fueled by the belief that packing should be more than a task; it should be an experience marked by precision, care, and efficiency"
        },
    ];

  return (
    <>
    <div className="py-16 bg-[url(/media/images/gallery/engineers-brainstorming-ideas.jpg)] bg-no-repeat relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60"></div>
      <div className="container relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {statements && statements.map((statement, statementIndex) => (
            <div className="p-4 min-h-max sm:min-h-[379px] flex flex-col gap-y-4 text-center bg-dark-600 text-white" key={statementIndex}>
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">{statement.title}</h4>
                <p className="sm:text-lg">{statement.subtext}</p>
            </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default AboutStatements
