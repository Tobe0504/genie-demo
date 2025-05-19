import SideNav from "@/containers/SideNav/SideNav";
import classes from "./AppLayout.module.css";

type AppLayoutTypes = {
  children: React.ReactNode;
  className?: string;
};

const AppLayout = ({ children, className }: AppLayoutTypes) => {
  return (
    <main className={classes.container}>
      <SideNav />
      <section className={`${classes.body} ${className}`}>{children}</section>
    </main>
  );
};

export default AppLayout;
