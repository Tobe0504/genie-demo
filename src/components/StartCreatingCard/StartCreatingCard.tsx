import Navigateout from "@/assets/svgIcons/Navigateout";
import classes from "./StartCreatingCard.module.css";
import startCreating from "../../assets/images/startCreating.svg";
import Image from "next/image";
import Close from "@/assets/svgIcons/Close";

const StartCreatingCard = () => {
  return (
    <div className={classes.container}>
      <Image src={startCreating} alt="Start creating" />
      <div>
        <div>
          <h3>Start Creating</h3>
          <p>Upgrade to premium and start creating consistent assets.</p>
        </div>

        <Navigateout />
      </div>

      <div className={classes.close}>
        <Close fill="#FFFFFF" />
      </div>
    </div>
  );
};

export default StartCreatingCard;
