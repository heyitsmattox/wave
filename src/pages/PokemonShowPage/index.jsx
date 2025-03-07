import { useParams } from "react-router-dom";


const PokemonShowPage = () => {
  const { pokemonId } = useParams()
  const [ pokemon, setPokemon ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true);


  //gameplan for how we want to approach this. We need to make our response a get request and fetch the specific pokemon by id.
  //then we want to set the pokemon to the state and then we want to set the isLoading to false.  
useEffect(() => {
  ( async () => {
    const response = // get request to get pokemon by id
    setPlant()
    setIsLoading(false)
  })()
}, [pokemonId]);

  console.log("product from pokemon show page", product);
  return (
    <>
      <div className=" flex justify-center items-center h-screen border-2 border-red-500">
        <h1>Pokemon Show Page</h1>
        <div>{product}</div>
      </div>
    </>
  );
};

export default PokemonShowPage;

