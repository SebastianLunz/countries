import { FC, ReactElement } from "react";
import { CountryProps } from "../../shared/interfaces";

const Flag: FC<CountryProps> = ({ country }): ReactElement => {
  return (
    <img
      src={country.flag}
      alt={country.name}
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default Flag;
