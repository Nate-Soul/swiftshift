import AboutPage from "@/components/sections/AboutPage";
import GenericHero from "@/components/sections/GenericHero";
import AboutStatements from "@/components/sections/AboutStatements";


const page = () => {
  return (
    <>
    <GenericHero pageTitle="Tested. Trusted. Reliable" pageSubtitle={null} />
    <AboutPage/>
    <AboutStatements/>
    </>
  )
}

export default page
