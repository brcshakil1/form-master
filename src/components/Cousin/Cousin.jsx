import { useContext } from "react";
import Special from "../Special/Special";
import { AssetContext } from "../Grandpa/Grandpa";

const Cousin = ({ name }) => {
  const tift = useContext(AssetContext);
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      {name === "Fariq" && <Special name="Alia" />}
      {name === "Rubaiya" && <p>Has also: {tift}</p>}
    </div>
  );
};

export default Cousin;
