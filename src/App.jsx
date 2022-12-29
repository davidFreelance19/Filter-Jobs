import { useEffect, useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";

function App() {
  const [data, setData] = useState([]);
  const [nivel, setNivel] = useState("");
  const [puesto, setPuesto] = useState("");
  const [herramientas, setHerramientas] = useState("");
  const [lenguajes, setLenguajes] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let objLista = await fetch("../data.json");
    let resultado = await objLista.json();
    setData(resultado);
  };

  const objKeys = {
    nivel,
    puesto,
    herramientas,
    lenguajes,
  };


  function filtrarNivel(card) {
    if (objKeys.nivel !== "") {
      return card.level === objKeys.nivel;
    }
    return card;
  }
  function filtrarPuesto(card) {
    if (objKeys.puesto !== "") {
      return card.role === objKeys.puesto;
    }
    return card;
  }
  
  const result = data.filter(filtrarNivel).filter(filtrarPuesto);


  return (
    <>
      <Header
        setNivel={setNivel}
        setPuesto={setPuesto}
        setHerramientas={setHerramientas}
        setLenguajes={setLenguajes}
        objKeys={objKeys}
      />
      <main className="mt-12">
        <Cards
          info={result}
          setNivel={setNivel}
          setPuesto={setPuesto}
          setHerramientas={setHerramientas}
          setLenguajes={setLenguajes}
        />
      </main>
    </>
  );
}

export default App;
