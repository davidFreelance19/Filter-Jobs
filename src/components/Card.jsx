
const Card = ({ card, setNivel, setPuesto, setHerramientas, setLenguajes }) => {
  const {
    company,
    logo,
    nuevo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = card;

  
  return (
    <blockquote className="relative py-12 shadow-lg flex w-[90%] lg:w-[1110px] h-[280px] lg:h-[150px] flex-col lg:flex-row lg:justify-between mx-auto rounded-md bg-white mb-10 lg:mb-12 px-6 lg:px-12">
      <div className="border-b-[0.1px] border-gray-500 pb-3">
        <img src={logo} className="absolute -top-[8%] lg:-top-[12%] w-[60px]" />
        <div className="flex gap-4">
          <p className="text-cyan-700 font-bold">{company}</p>
          {nuevo && (
            <p className="bg-cyan-700 px-2 text-white uppercase font-bold rounded-2xl text-sm  flex items-center">
              new!
            </p>
          )}
          {featured && (
            <p className="bg-gray-800 px-2 text-white uppercase font-bold rounded-2xl text-sm  flex items-center">
              featured
            </p>
          )}
        </div>

        <p className="font-bold my-2">{position}</p>
        <div className="flex gap-4">
          <p className="text-gray-600 font-normal">{postedAt}</p>
          <p className="text-gray-600 font-normal">{contract}</p>
          <p className="text-gray-600 font-normal">{location}</p>
        </div>
      </div>
      <div className="w-[90%] grid grid-cols-3 lg:flex lg:items-center lg:justify-end gap-3 mt-4 lg:mt-0 lg:w-[50%]">
        <p
          id="role"
          className="text-sm hover:bg-cyan-800 hover:text-white bg-p cursor-pointer lg:font-bold rounded-lg px-2 lg:px-5 py-2 text-center"
          onClick={(e) => setPuesto(e.target.textContent)}
        >
          {role}
        </p>
        <p
          className="text-sm hover:bg-cyan-800 hover:text-white bg-p cursor-pointer lg:font-bold rounded-lg px-2 lg:px-5 py-2 text-center "
          onClick={(e) => setNivel(e.target.textContent)}
        >
          {level}
        </p>
        {languages.map((lenguaje) => (
          <p
            className=" text-sm hover:bg-cyan-800 hover:text-white bg-p cursor-pointer lg:font-bold rounded-lg px-2 lg:px-5 py-2 text-center"
            onClick={(e) => setLenguajes(e.target.textContent)}
          >
            {lenguaje}
          </p>
        ))}
        {tools.length > 0 && (
          <>
            {tools.map((herramientas) => (
              <p
                className="text-sm hover:bg-cyan-800 hover:text-white bg-p cursor-pointer lg:font-bold rounded-lg px-2 lg:px-5 py-2 text-center"
                onClick={(e) => setHerramientas(e.target.textContent)}
              >
                {herramientas}
              </p>
            ))}
          </>
        )}
      </div>
    </blockquote>
  );
};

export default Card;
