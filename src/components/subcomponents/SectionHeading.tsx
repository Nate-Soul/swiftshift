

type sectionHeadingProps = {
    title: string;
    subtext: string | null;
    headerStyles: string | null;
    fancySubtext: string | null;
}

const SectionHeading = ({ title, subtext, headerStyles, fancySubtext }: sectionHeadingProps ) => {
  return (
    <header className={`flex flex-col gap-y-4 ${headerStyles}`}>
      {fancySubtext && <p className="text-lg sm:text-xl md:text-2xl font-medium text-primary-500 capitalize">{fancySubtext}</p>}
      <h2 className="text-dark-500 font-extrabold capitalize text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{title}</h2>
      {subtext && <p className="md:text-lg text-dark-500">{subtext}</p>}
    </header>
  )
}

export default SectionHeading
