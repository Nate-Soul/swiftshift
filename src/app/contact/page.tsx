import type { Metadata } from "next";

import GenericHero from "@/components/sections/GenericHero";
import ContactPage from "@/components/sections/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Your one-stop shop for all your packing and moving needs. We'll keep things moving smoothly, so you can focus on the important things. Leave the logistics to us"
};


const page = () => {
  return (
    <>
    <GenericHero pageTitle="Talk to Us" />
    <ContactPage/>
    </>
  )
}

export default page
