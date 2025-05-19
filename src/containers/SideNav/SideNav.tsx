"use client";

import Collapse from "@/assets/svgIcons/Collapse";
import Help from "@/assets/svgIcons/Help";
import Notofications from "@/assets/svgIcons/Notofications";
import Input from "@/components/Input/Input";
import Logo from "@/components/Logo/Logo";
import StartCreatingCard from "@/components/StartCreatingCard/StartCreatingCard";
import Toggle from "@/components/Toggle/Toggle";
import { sideNavRoutes } from "@/utilities/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./SideNav.module.css";

const SideNav = () => {
  // Router
  const pathname = usePathname();

  return (
    <nav className={classes.container}>
      <div>
        <div className={classes.header}>
          <Logo />
          <div>
            <Collapse />
          </div>
        </div>

        <Input placeholder="Make a Wish" />

        <ul className={classes.routes}>
          {sideNavRoutes.map((data) => {
            return (
              <li
                key={data?.title}
                className={
                  pathname === data?.route ? classes.active : classes.inActive
                }
              >
                <Link href={data?.route}>
                  {data?.icon}
                  <span>{data?.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={classes.lowerSection}>
        <StartCreatingCard />

        <div>
          <Toggle />
          <Help />
          <Notofications />
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
