import ChevronDown from "@/assets/svgIcons/ChevronDown";
import classes from "./GeneralSettingsItem.module.css";

type GeneralSettingsItemTypes = {
  icon: React.ReactNode;
  property: string;
  value: string;
  tip?: string;
};

const GeneralSettingsItem = ({
  icon,
  property,
  value,
  tip,
}: GeneralSettingsItemTypes) => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.icon}>{icon}</div>
        <div>
          <p>{property}</p>
          <p>{value}</p>
        </div>

        <ChevronDown isActive={false} />
      </div>

      <p>{tip}</p>
    </div>
  );
};

export default GeneralSettingsItem;
