import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../style/repositories.scss";

export function Repositorylist() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/regisds28/repos")
      .then((res) => res.json())
      .then((data) => setRepositories(data));
  }, []);

  console.log(repositories);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.name} repository={repository} />;
        })}
      </ul>
    </section>
  );
}
