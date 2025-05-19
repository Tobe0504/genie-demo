import Card from "@/components/Card/Card";
import classes from "./PromptSection.module.css";
import aiLogo from "../../assets/images/aiLogo.svg";
import Image from "next/image";
import IconsNav from "@/components/IconsNav/IconsNav";
import Ai from "@/assets/svgIcons/Ai";
import Button from "@/components/Button/Button";
import AiWhite from "@/assets/svgIcons/AiWhite";
import TextArea from "@/components/Textarea/TextArea";
import { useState } from "react";
import Menu from "@/assets/svgIcons/Menu";
import Carouselmenu from "@/assets/svgIcons/Carouselmenu";
import { iconDataType } from "@/utilities/types";
import { inputChangeHandler } from "@/helpers/inputChangeHandler";

const PromptSection = () => {
  // States
  const [iconsMenu, setIconsMenu] = useState<iconDataType[]>([
    {
      icon: <Menu />,
      isActive: false,
    },
    {
      icon: <Carouselmenu />,
      isActive: true,
    },
  ]);

  const [prompt, setPrompt] = useState(
    "A coin floating around money, and other financial assets"
  );

  return (
    <Card className={classes.container}>
      <div className={classes.header}>
        <Image src={aiLogo} alt="AI" />
        <IconsNav data={iconsMenu} setData={setIconsMenu} />
      </div>
      <div>
        <TextArea
          value={prompt}
          onChange={(e) => inputChangeHandler(e, setPrompt, true)}
        />
      </div>

      <div className={classes.submitSection}>
        <div>
          <Ai />
        </div>

        <Button>
          <AiWhite />
          <span>Create</span>
        </Button>
      </div>
    </Card>
  );
};

export default PromptSection;
