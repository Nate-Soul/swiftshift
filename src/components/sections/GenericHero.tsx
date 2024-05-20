"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

interface genericHeroProps {
  pageTitle: string;
  pageSubtitle?: string;
  bgImageUrl?: string;
}

const GenericHero: React.FC<genericHeroProps> = ({ pageTitle, pageSubtitle, bgImageUrl }) => {

  const currentUrl = usePathname();
  const isAboutPage = currentUrl === "/about";

  return (
    <section 
      className={`text-white relative overflow-hidden py-8`}
    >
      <Image src={bgImageUrl ?? '/media/images/gallery/paying-for-off-campus-housing-with-a-plan.jpg'} alt="" fill className="absolute top-0 bottom-0 left-0 right-0 object-cover"/>
      {isAboutPage && <Image 
        src="/media/images/icons/divider.svg" 
        alt="" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
        height={547}
        width={1294}
      />}
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40"></div>
      <div className="container flex items-center relative min-h-96">
        <hgroup className="text-center sm:text-left">
            {pageSubtitle && (
              <p className="flex items-center gap-x-3 uppercase text-2xl font-medium before:w-1 before:h-10 before:bg-primary-500">{pageSubtitle}</p>
            )}
            <h1 className="font-black text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[4.8rem] uppercase">{pageTitle}</h1>
        </hgroup>
      </div>
    </section>
  )
}

export default GenericHero
