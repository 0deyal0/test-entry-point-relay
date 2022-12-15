import { PropsWithRef, Suspense, useEffect, useState } from "react";
import { EntryPoint } from "./types";

export const EntryPointContainer = <Variables, Props extends {}>({
  entrypoint: { component: Component, fetch, variables },
}: {
  entrypoint: EntryPoint<Variables, Props>;
}) => {
  const [props, setProps] = useState<any | null>(null);

  useEffect(() => {
    fetch(variables).then((props) => {
      setProps(props);
    });
  }, [fetch, variables]);

  // TODO: check
  return <Suspense fallback={'loading'}><Component {...(props as React.Attributes & PropsWithRef<Props>)} /></Suspense>;
};
