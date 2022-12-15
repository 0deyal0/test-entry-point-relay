import { FunctionComponent } from "react";
import { graphql, PreloadedQuery, usePreloadedQuery } from "react-relay";
import { PokemonsQuery } from "./__generated__/PokemonsQuery.graphql";

export type PokemonsProps = {
  pokemonsRef:  PreloadedQuery<PokemonsQuery>
};

export const Pokemons: FunctionComponent<PokemonsProps> = ({ pokemonsRef }) => {
  const { pokemon_v2_ability: pokemons } = usePreloadedQuery<PokemonsQuery>(
    graphql`
      query PokemonsQuery ($limit: Int)  {
        pokemon_v2_ability(limit: $limit) {
          name
        }
      }
    `,
    pokemonsRef!,
  );

  return <div>{JSON.stringify(pokemons)}</div>;
};
