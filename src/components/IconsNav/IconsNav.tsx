"use client";

import { activeToggler } from "@/helpers/activeHandlers";
import { iconDataType } from "@/utilities/types";
import { Dispatch, SetStateAction } from "react";
import classes from "./IconsNav.module.css";

type IconsNavType = {
  data: iconDataType[];
  setData: Dispatch<SetStateAction<iconDataType[]>>;
};

const IconsNav = ({ data, setData }: IconsNavType) => {
  return (
    <div className={classes.container}>
      {data?.map((icon, i) => {
        return (
          <div
            className={icon?.isActive ? classes.active : classes.inActive}
            onClick={() => {
              activeToggler(i, data, setData);
            }}
          >
            {icon?.icon}
          </div>
        );
      })}
    </div>
  );
};

export default IconsNav;
