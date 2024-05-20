import type { Metadata } from "next";

import AboutPage from "@/components/sections/AboutPage";
import GenericHero from "@/components/sections/GenericHero";
import AboutStatements from "@/components/sections/AboutStatements";
import AboutOutro from "@/components/sections/AboutOutro";

export const metadata: Metadata = {
  title: "About Us",
  description: "Your one-stop shop for all your packing and moving needs. We'll keep things moving smoothly, so you can focus on the important things. Leave the logistics to us"
};

const page = () => {
  return (
    <>
    <GenericHero pageTitle="Tested. Trusted. Reliable" bgImageUrl="/media/images/gallery/people-discussing-parking-strategy.jpg" />
    <AboutPage/>
    <AboutStatements/>
    <AboutOutro/>
    </>
  )
}

export default page
