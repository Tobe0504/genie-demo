import classes from "./Toggle.module.css";
import toggle from "../../assets/images/toggle.svg";
import Image from "next/image";
import ChevronUpAndDown from "@/assets/svgIcons/ChevronUpAndDown";

const Toggle = () => {
  return (
    <div className={classes.container}>
      <Image src={toggle} alt="Toggle" />
      <ChevronUpAndDown />
    </div>
  );
};

export default Toggle;
