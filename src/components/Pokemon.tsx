import pokemons from "./../../pokemon.json";

type PokeProps = {
  id: number;
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  };
  type: string[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    "Sp. Attack": number;
    "Sp. Defense": number;
    Speed: number;
  };
};

const Pokemon = () => {
  return (
    <>
      <h1>Pokemon Search</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemons
            .slice(0, 10)
            .map(({ id, name: { english }, type }: PokeProps) => (
              <tr key={id}>
                <td>{english}</td>
                <td>{type.join(", ")}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Pokemon;
