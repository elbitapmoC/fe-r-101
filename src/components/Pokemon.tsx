import { useState } from "react";
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
  const [filter, setFilter] = useState("");
  return (
    <>
      <h1>Pokemon Search</h1>
      <input
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        type="text"
        placeholder="Find your Pikachu!"
        className="my-10"
      />
      <table width="100%">
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
