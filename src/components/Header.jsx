import bgMobile from "/images/bg-header-mobile.svg"
import bgDesktop from "/images/bg-header-desktop.svg"

const Header = ({setNivel, setPuesto, setHerramientas, setLenguajes,  objKeys}) => {
  const {nivel, puesto, herramientas, lenguajes} = objKeys

  return (
    <>
      <header className="w-full relative justify-center">
        { true && (
          <div className="h-[45%] flex gap-5 px-10 items-center shadow-lg rounded-md absolute w-[90%] lg:w-[1110px] bottom-[-5%] lg:bottom-[-10%] left-[calc((100%-90%)/2)] lg:left-[calc((100%-1110px)/2)] bg-white">
            {nivel !== '' && (
              <div className="flex">
                <p className="bg-cyan-800 p-2  text-white font-bold">{nivel}</p>
                <div 
                  className="bg-red-500 w-[40px] h-auto bg-no-repeat bg-center bg-[url('/images/icon-remove.svg')]"
                  onClick={() => setNivel('')}></div>
              </div>
            )}
            {puesto !== '' && (
              <div className="flex">
                <p className="bg-cyan-800 p-2 text-white font-bold">{puesto}</p>
                <div 
                  className="bg-red-500 w-[40px] h-auto bg-no-repeat bg-center bg-[url('/images/icon-remove.svg')]"
                  onClick={() => setPuesto('')}></div>
              </div>
            )}
            {herramientas !== '' && (
              <div className="flex">
                <p className="bg-cyan-800 p-2 text-white font-bold">{herramientas}</p>
                <div className="bg-red-500 w-[40px] h-auto bg-no-repeat bg-center bg-[url('/images/icon-remove.svg')]"></div>
              </div>
            )}
            {lenguajes !== '' && (
              <div className="flex">
                <p className="bg-cyan-800 p-2 text-white font-bold">{lenguajes}</p>
                <div className="bg-red-500 w-[40px] h-auto bg-no-repeat bg-center bg-[url('/images/icon-remove.svg')]"></div>
              </div>
            )}
          </div>
        )}
        <picture>
          <source media="(min-width:1025px)" srcSet={bgDesktop} />
          <img src={bgMobile} className="w-full" />
        </picture>
      </header>
    </>
  );
};

export default Header;
