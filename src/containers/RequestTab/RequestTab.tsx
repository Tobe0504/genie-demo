import GeneralSettings from "@/containers/GeneralSettings/GeneralSettings";
import PromptSection from "@/containers/PromptSection/PromptSection";
import PromptResults from "../PromptResults/PromptResults";
import classes from "./RequestTab.module.css";

const RequestTab = () => {
  return (
    <section className={classes.container}>
      <div className={classes.leftSection}>
        <PromptSection />
        <GeneralSettings />
      </div>
      <div className={classes.rightSection}>
        <PromptResults />
      </div>
    </section>
  );
};

export default RequestTab;
