import { useEffect, useState } from "react";
import Planet from "./Planet";

type Props = {};

export type PlanetDTO = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

type SwapiResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export const Planets: React.FC<Props> = () => {
  const [planets, setPlanets] = useState<PlanetDTO[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://swapi.dev/api/planets/");
      const swapiResponse: SwapiResponse<PlanetDTO> = await res.json();
      setPlanets(swapiResponse.results);
    })();
  }, []);
  return (
    <div>
      <h1>Planets</h1>
      <ul>
        {planets.map((planet) => {
          return <Planet key={planet.name} planet={planet} />;
        })}
      </ul>
    </div>
  );
};
