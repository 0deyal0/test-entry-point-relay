/**
 * @generated SignedSource<<6c2de171ac917ca475a12325faab5af0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PokemonsQuery$variables = {
  limit?: number | null;
};
export type PokemonsQuery$data = {
  readonly pokemon_v2_ability: ReadonlyArray<{
    readonly name: string;
  }>;
};
export type PokemonsQuery = {
  response: PokemonsQuery$data;
  variables: PokemonsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "limit"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "limit",
        "variableName": "limit"
      }
    ],
    "concreteType": "pokemon_v2_ability",
    "kind": "LinkedField",
    "name": "pokemon_v2_ability",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PokemonsQuery",
    "selections": (v1/*: any*/),
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PokemonsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ca699dd923d7f5d158e0c6667b210d9e",
    "id": null,
    "metadata": {},
    "name": "PokemonsQuery",
    "operationKind": "query",
    "text": "query PokemonsQuery(\n  $limit: Int\n) {\n  pokemon_v2_ability(limit: $limit) {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "8b6bc3dd96998c08e4b543a949818219";

export default node;
