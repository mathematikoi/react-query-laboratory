import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

/**
 * @description this laboratory investigates react-query re-rendering triggers and how does that affect the component ree
 * @fact react-query on a change it triggers a rerendering on the component tree starting at where useQuery is called, see ReactQueryRenderingTree
 * @problem how do we initialize a query at a the top of a component tree without causing it to trigger changes across the whole tree
 * @solution we instead pass a hook that gets called WHERE the query needs to be used
 */

const Container = function Container(properties: PropsWithChildren) {
  return (
    <div>
      {properties.children}
      <Independant />
    </div>
  );
};

function Independant() {
  return <h1>i am independant of any state change.</h1>;
}

function Query(
  properties: PropsWithChildren<{
    query: UseQueryResult;
  }>
) {
  console.log(properties.query.status);
  return <h1>{properties.query.status}</h1>;
}

export function ReactQueryRenderingTree() {
  const query = useQuery({
    queryKey: ["query"],
    queryFn: async () => [1, 2, 3],
  });

  return (
    <Container>
      <Query query={query} />
    </Container>
  );
}

export function ReactQueryRendering() {
  return <ReactQueryRenderingTree />;
}
