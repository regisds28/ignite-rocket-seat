import { Counter } from "./components/Counter";
import { Repositorylist } from "./components/RepositoryList";
import "./style/global.scss";

export function App() {
  return (
    <>
      <Repositorylist />
      <Counter />
    </>
  );
}
