import CreateFolder from "@/assets/svgIcons/CreateFolder";
import Crop from "@/assets/svgIcons/Crop";
import CropMany from "@/assets/svgIcons/CropMany";
import { Download2 } from "@/assets/svgIcons/Download";
import Pencil from "@/assets/svgIcons/Pencil";
import classes from "./ResultCard.module.css";

type ResultCardTypes = {
  image: string;
};

const ResultCard = ({ image }: ResultCardTypes) => {
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <div>
          <Pencil />
        </div>

        <div>
          <Crop />
        </div>

        <div>
          <CropMany />
        </div>
      </div>

      <div>
        <div>
          <Download2 />
        </div>

        <div>
          <CreateFolder />
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
