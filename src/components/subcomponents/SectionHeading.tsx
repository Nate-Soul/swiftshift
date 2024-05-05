

type sectionHeadingProps = {
    title: string;
    subtext: string | null;
    headerStyles: string | null
}

const SectionHeading = ({ title, subtext, headerStyles }: sectionHeadingProps ) => {
  return (
    <header className={`flex flex-col gap-y-4 ${headerStyles}`}>
      <h2 className="text-dark-500 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-5xl">{title}</h2>
      {subtext && <p>{subtext}</p>}
    </header>
  )
}

export default SectionHeading
