import AspectRatio from "@/assets/svgIcons/AspectRatio";
import ChevronDown from "@/assets/svgIcons/ChevronDown";
import Style from "@/assets/svgIcons/Style";
import Card from "@/components/Card/Card";
import GeneralSettingsItem from "@/components/GeneralSettingsItem/GeneralSettingsItem";
import { useState } from "react";
import classes from "./GeneralSettings.module.css";

const GeneralSettings = () => {
  // States
  const [setting] = useState([
    {
      icon: <Style />,
      property: "Style",
      value: "Astral Genie 2o",
      tip: "Astral Genie is powered by ChatGPT 4o",
    },
    {
      icon: <AspectRatio />,
      property: "Aspect ratio",
      value: "Square (1 : 1)",
    },
  ]);
  const [isOpen, setisOpen] = useState(true);

  return (
    <Card className={classes.container}>
      <div
        className={classes.header}
        onClick={() => setisOpen((prevState) => !prevState)}
      >
        <h4>General Settings</h4>
        <ChevronDown isActive={isOpen} />
      </div>

      <div
        className={classes.settings}
        style={
          isOpen
            ? { maxHeight: "500px", marginTop: "40px" }
            : { maxHeight: "0px", marginTop: "0px" }
        }
      >
        {setting.map((data) => {
          return <GeneralSettingsItem {...data} />;
        })}
      </div>
    </Card>
  );
};

export default GeneralSettings;
