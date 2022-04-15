import { FC } from "react";
import { PlanetDTO } from "components/Planets";

type Props = {
  planet: PlanetDTO;
};

const Planet: FC<Props> = ({ planet }) => {
  return <li>{planet.name}</li>;
};

export default Planet;
