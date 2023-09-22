import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({ name = "", ring }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h2>Special</h2>
      <p>{name}</p>
      {ring && <p>{ring} ring gifted from grandpa</p>}
      {name === "Aisha" && <p>has: {gift}</p>}
    </div>
  );
};

export default Special;
