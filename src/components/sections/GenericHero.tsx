
interface genericHeroProps {
  pageTitle: string;
  pageSubtitle: string | null;
}

const GenericHero: React.FC<genericHeroProps> = ({ pageTitle, pageSubtitle }) => {
  return (
    <section className="py-8 bg-[url(/media/images/gallery/paying-for-off-campus-housing-with-a-plan.jpg)] bg-no-repeat bg-cover bg-center text-white relative">
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40"></div>
      <div className="container min-h-96 flex items-center relative">
        <hgroup>
            {pageSubtitle && (
              <p className="flex items-center gap-x-3 uppercase text-2xl font-medium before:w-1 before:h-10 before:bg-primary-500">{pageSubtitle}</p>
            )}
            <h1 className="font-black text-[3.5rem] leading-[4.8rem] uppercase">{pageTitle}</h1>
        </hgroup>
      </div>
    </section>
  )
}

export default GenericHero
