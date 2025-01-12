import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryRendering } from "./Laboratory";
import "./styles.css";

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryRendering></ReactQueryRendering>;
    </QueryClientProvider>
  );
}
