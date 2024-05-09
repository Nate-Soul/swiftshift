

const Stats = () => {

    const stats = [
        {
            id: 1,
            title: "Local Moves",
            number: "509",
        },
        {
            id: 2,
            title: "Interstate Moves",
            number: "179",
        },
        {
            id: 3,
            title: "Office Moves",
            number: "100+",
        },
        {
            id: 4,
            title: "Client Base",
            number: "10,000+",
        },
    ];

  return (
    <div className="py-8 bg-primary-500 text-white">
        <div className="container grid grid-cols-4">
        {stats && stats.map((stat, statIndex) => (
            <div className="flex flex-col gap-y-2 text-center" key={statIndex}>
                <h6 className="text-2xl font-black">{stat.number}</h6>
                <p className="text-lg">{stat.title}</p>
            </div>        
        ))}
        </div>
    </div>
  )
}

export default Stats
