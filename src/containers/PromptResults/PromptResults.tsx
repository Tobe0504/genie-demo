import ChevronDown from "@/assets/svgIcons/ChevronDown";
import Download from "@/assets/svgIcons/Download";
import Ellipsis from "@/assets/svgIcons/Ellipsis";
import Button from "@/components/Button/Button";
import ResultCard from "@/components/ResultCard/ResultCard";
import classes from "./PromptResults.module.css";
import cash from "../../assets/images/cash.svg";

const PromptResults = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h2>A coin floating around money..</h2>

        <Button type="null">
          <Download />
          <span>Download all</span>
        </Button>

        <Ellipsis />
        <ChevronDown />
      </div>

      <div className={classes.results}>
        <ResultCard image={cash} />
        <ResultCard image={cash} />
        <ResultCard image={cash} />
        <ResultCard image={cash} />
      </div>
    </section>
  );
};

export default PromptResults;
