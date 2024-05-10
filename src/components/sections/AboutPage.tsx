import SectionHeading from "../subcomponents/SectionHeading"


const AboutPage = () => {
  return (
    <section className="py-16">
      <div className="container flex items-start gap-x-6">
        <SectionHeading title="About Us" subtext={null} headerStyles="basis-1/4" fancySubtext={null} />
        <div className="basis-3/4">
            <h3 className="text-3xl font-extrabold mb-4">The world's most innovative packing service</h3>
            <div className="text-2xl text-dark-400 flex flex-col gap-y-4">
            <p>
                We're are dedicated to making the packing and moving process as easy and stress-free as possible. Whether you're packing up your home or office, we'll work with you to create a custom packing plan that meets your specific needs.
            </p>
            <p>
                We use only the highest quality packing materials and take great care to ensure your belongings are safe and secure. We understand that packing can be a daunting task, but we're here to help make it as simple and seamless as possible
            </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
