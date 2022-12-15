import React, { FunctionComponent } from "react";
import { Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import { EntryPointContainer } from "./EntryPointContainer";
import { PokemonsProps } from "./Pokemons";
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from "react-relay/hooks";
import { graphql } from "react-relay";
import PokemonsQuery from "./__generated__/PokemonsQuery.graphql";
import { RelayEnvironment } from "./RelayEnvironment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Link to={"pokemons"}>pokemons</Link>,
  },
  {
    path: "pokemons",
    element: (
      <EntryPointContainer
        entrypoint={{
          component: React.lazy<FunctionComponent<PokemonsProps>>(() =>
            import("./Pokemons").then(({ Pokemons }) => ({ default: Pokemons }))
          ),
          fetch: (variables) =>
            Promise.resolve({
              pokemonsRef: loadQuery(
                RelayEnvironment,
                PokemonsQuery,
                variables
              ),
            }),
          variables: { limit: 10 },
        }}
      />
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
