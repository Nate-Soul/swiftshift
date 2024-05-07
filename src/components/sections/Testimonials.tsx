import SectionHeading from "../subcomponents/SectionHeading";
import Image from "next/image";

const TestimonialsSection = () => {

    const testimonials = [
        {
            id: 1,
            imageUrl: "/media/images/testimonees/joshua-mcknight.jpg",
            comment: "I'll choose (Company name) over and over again. They do make relocation seamless and stress-free",
            name: "Rebecca Essien"
        },
        {
            id: 2,
            imageUrl: "/media/images/testimonees/nappy.jpg",
            comment: "I'll choose (Company name) over and over again. They do make relocation seamless and stress-free",
            name: "Joseph Green"
        },
        {
            id: 1,
            imageUrl: "/media/images/testimonees/another-nappy.jpg",
            comment: "I'll choose (Company name) over and over again. They do make relocation seamless and stress-free",
            name: "Nyeteye Alfonsus"
        },
        {
            id: 1,
            imageUrl: "/media/images/testimonees/adora.jpg",
            comment: "I'll choose (Company name) over and over again. They do make relocation seamless and stress-free",
            name: "Adora Johnson"
        },
        {
            id: 1,
            imageUrl: "/media/images/testimonees/christina-morillo.jpg",
            comment: "I'll choose (Company name) over and over again. They do make relocation seamless and stress-free",
            name: "Christina Morillo"
        },
    ]

  return (
    <section className="py-16">
        <div className="container">
            <SectionHeading 
                title="What our clients say" 
                subtext={null} 
                headerStyles="text-center mb-10 lg:-mb-[10%] w-full lg:w-1/2" 
                fancySubtext="Customers Review"
            />
            <div className="flex items-center gap-8 lg:gap-10 flex-wrap-reverse lg:flex-nowrap">
                <div className="basis-full lg:basis-1/2">
                    <div className="flex flex-col gap-y-10 px-0 sm:px-4 md:px-8 lg:px-16">
                        <p className="sm:text-lg md:text-xl text-left sm:text-center">
                            <span className="quote-left"></span>I'll choose (Company name) over and over again. They do make relocation seamless and stress-free<span className="quote-right"></span>
                        </p>
                        <div className="text-lg sm:text-xl md:text-2xl text-dark-500 flex items-center justify-center gap-x-2 sm:gap-x-3 before:w-10 sm:before:w-16 before:h-[2px] before:bg-dark-300 after:w-10 sm:after:w-16 after:h-[2px] after:bg-dark-300">
                            <p>Rebecca Essien</p>
                        </div>
                        <div className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 items-center justify-center">
                            <button className="btn btn-primary w-12 h-8"><span className="bi-chevron-left"></span></button>
                            <div className="flex items-center gap-x-2 sm:gap-x-3 md:gap-x-4">
                            {Array.from({length: testimonials.length}, (_, index) => (
                                <span className="h-2 sm:h-1 w-2 sm:w-6 bg-light-200 rounded-full sm:rounded-none" key={index}></span>
                            ))}
                            </div>
                            <button className="btn btn-primary w-12 h-8"><span className="bi-chevron-right"></span></button>
                        </div>
                    </div>
                </div>
                <div className="basis-full lg:basis-1/2 grid grid-cols-2 gap-4">
                   {testimonials && testimonials.map((testimonial, testimonialIndex) => (
                   <figure className="col-span-1 rounded-[1.25rem] overflow-hidden h-36 sm:h-40 md:h-48 lg:h-56" key={testimonialIndex}>
                        <Image 
                            src={testimonial.imageUrl}
                            alt={testimonial.name} 
                            height={412} 
                            width={412} 
                            className="w-full h-full object-cover"
                        />
                    </figure>
                    ))}
                </div>
            </div>
        </div>      
    </section>
  )
}

export default TestimonialsSection
