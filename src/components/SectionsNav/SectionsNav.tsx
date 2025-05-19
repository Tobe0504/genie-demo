"use client";

import { activeToggler } from "@/helpers/activeHandlers";
import { Dispatch, SetStateAction, Suspense } from "react";
import classes from "./SectionsNav.module.css";
import { navItemTypes } from "@/utilities/types";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { capitalizeEachWord } from "@/helpers/capitalize";
import Close from "@/assets/svgIcons/Close";
import Plus from "@/assets/svgIcons/Plus";

type SectionsNavTypes = {
  navItems: navItemTypes[];
  setNavItems: Dispatch<SetStateAction<navItemTypes[]>>;
  type?: "secondary" | "tertiary";
  isRoute?: boolean;
  id?: string;
};

const SectionsNav = ({
  navItems,
  setNavItems,
  type,
  isRoute,
  id,
}: SectionsNavTypes) => {
  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  return (
    <section className={classes.container} id={id}>
      {navItems.map((navItem, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              if (isRoute) {
                updateSearchParams("section", navItem?.id, "set");
              }
              activeToggler(index, navItems, setNavItems);
            }}
            className={`${
              navItem.isActive ? classes.active : classes.inActive
            } ${
              type === "secondary"
                ? classes.button
                : type === "tertiary"
                ? classes.tertiary
                : classes.noButton
            } ${navItem?.isBordered ? classes.bordered : undefined}`}
          >
            <span>{capitalizeEachWord(navItem.title)}</span>

            <Close
              onClick={(e: any) => {
                e.stopPropagation();

                setNavItems((prevState) => {
                  let updatedState = [...prevState];

                  const filteredNavItems = updatedState.filter((_, i) => {
                    return i !== index;
                  });

                  updatedState = filteredNavItems;

                  return updatedState;
                });
              }}
            />
          </div>
        );
      })}

      <div
        className={classes.make}
        onClick={() => {
          setNavItems((prevstate: any) => {
            return [
              ...prevstate,
              {
                title: "New tab",
                id: navItems.length,
                route: "/",
                isActive: false,
              },
            ];
          });
        }}
      >
        <Plus />
        <span>Make a Wish</span>
      </div>
    </section>
  );
};

export default SectionsNav;
