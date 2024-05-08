import type { Metadata } from "next"

import GenericHero from "@/components/sections/GenericHero"
import ServicesPage from "@/components/sections/ServicesPage"
import Stats from "@/components/sections/Stats"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Your one-stop shop for all your packing and moving needs. We'll keep things moving smoothly, so you can focus on the important things. Leave the logistics to us"
};

const page = () => {
  return (
    <>
      <GenericHero/>
      <Stats/>
      <ServicesPage/>
    </>
  )
}

export default page
