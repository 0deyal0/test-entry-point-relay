import { LazyExoticComponent } from "react";
import { FunctionComponent } from "react";

export type EntryPoint<Variables, Props> = {
  component: LazyExoticComponent<FunctionComponent<Props>>,
  fetch: (variables: Variables) => Promise<unknown>,
  variables: Variables
};
