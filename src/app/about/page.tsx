import AboutPage from "@/components/sections/AboutPage";
import GenericHero from "@/components/sections/GenericHero";
import AboutStatements from "@/components/sections/AboutStatements";
import AboutOutro from "@/components/sections/AboutOutro";


const page = () => {
  return (
    <>
    <GenericHero pageTitle="Tested. Trusted. Reliable" pageSubtitle={null} />
    <AboutPage/>
    <AboutStatements/>
    <AboutOutro/>
    </>
  )
}

export default page
