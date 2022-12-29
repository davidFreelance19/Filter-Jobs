
import Card from './Card'
function Cards({info, setNivel, setPuesto, setHerramientas, setLenguajes}) {

  return (
    <>
        {info.map(card => (
            <Card 
                card={card}
                key={card.id}
                setNivel={setNivel}
                setPuesto={setPuesto}
                setHerramientas={setHerramientas}
                setLenguajes={setLenguajes}
            />
        ))
        }
    </>
  )
}

export default Cards