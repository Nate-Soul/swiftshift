"use client";

import { useState } from "react";
import SectionHeading from "../subcomponents/SectionHeading";
import Image from "next/image";

const TestimonialsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const testimonials = [
    {
      id: 1,
      imageUrl: "/media/images/testimonees/joshua-mcknight.jpg",
      comment:
        "I was skeptical about using an online platform for my move, but this one exceeded all my expectations. It provided all the information I needed and more, making my move stress-free and efficient. Highly recommend to anyone planning a move!",
      name: "Rebecca Essien",
    },
    {
      id: 2,
      imageUrl: "/media/images/testimonees/nappy.jpg",
      comment:
        "As someone who moves frequently for work, this platform is a lifesaver. It covers all aspects of relocation, from logistics to settling in. The user experience is fantastic, and it saved me so much time and effort",
      name: "Joseph Green",
    },
    {
      id: 3,
      imageUrl: "/media/images/testimonees/another-nappy.jpg",
      comment:
        "Moving has always been a daunting task for me, but this platform made it a breeze. From start to finish, everything was organized and easy to manage. I can't imagine moving without it now!",
      name: "Nyeteye Alfonsus",
    },
    {
      id: 4,
      imageUrl: "/media/images/testimonees/adora.jpg",
      comment:
        "I recently used this platform to relocate my office, and it was a game-changer. The intuitive interface and comprehensive resources made the transition incredibly smooth. Kudos to the team for creating such a helpful tool!",
      name: "Adora Johnson",
    },
    {
      id: 5,
      imageUrl: "/media/images/testimonees/christina-morillo.jpg",
      comment:
        "This platform transformed my moving experience! It was so easy to coordinate everything from packing to finding the perfect parking space. The process was seamless and stress-free. Highly recommend it!",
      name: "Christina Morillo",
    },
  ];

  const swipeNext = () => {
    setCurrentReview((currentReview + 1) % testimonials.length);
  };

  const swipePrev = () => {
    setCurrentReview(
      currentReview === 0 ? testimonials.length - 1 : currentReview - 1
    );
  };

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
                <span className="bi-quote"></span>
                {testimonials[currentReview].comment}
              </p>
              <div className="text-lg sm:text-xl md:text-2xl text-dark-500 flex items-center justify-center gap-x-2 sm:gap-x-3 before:w-10 sm:before:w-16 before:h-[2px] before:bg-dark-300 after:w-10 sm:after:w-16 after:h-[2px] after:bg-dark-300">
                <p>{testimonials[currentReview].name}</p>
              </div>
              <div className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 items-center justify-center">
                <button 
                    className="btn btn-primary w-12 h-8"
                    onClick={swipePrev}
                >
                  <span className="bi-chevron-left"></span>
                </button>
                <div className="flex items-center gap-x-2 sm:gap-x-3 md:gap-x-4">
                  {Array.from({ length: testimonials.length }, (_, index) => (
                    <span
                      className={`h-2 sm:h-1 w-2 sm:w-6 ${index === currentReview ? 'bg-primary-400' :'bg-light-200'} rounded-full sm:rounded-none`}
                      key={index}
                    ></span>
                  ))}
                </div>
                <button 
                    className="btn btn-primary w-12 h-8"
                    onClick={swipeNext}
                >
                  <span className="bi-chevron-right"></span>
                </button>
              </div>
            </div>
          </div>
          <div className="basis-full lg:basis-1/2 grid grid-cols-2 gap-4">
            {testimonials &&
              testimonials.map((testimonial, testimonialIndex) => (
                <figure
                  className={`col-span-1 rounded-[1.25rem] overflow-hidden ${currentReview === testimonialIndex && 'order-first row-span-2'}`}
                  key={testimonialIndex}
                  data-classname="h-56 sm:h-64 md:h-72 lg:h-[25rem] h-36 sm:h-40 md:h-48 lg:h-56"
                >
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
  );
};

export default TestimonialsSection;
