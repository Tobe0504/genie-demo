"use client";

import SectionsNav from "@/components/SectionsNav/SectionsNav";
import RequestTab from "@/containers/RequestTab/RequestTab";
import AppLayout from "@/layouts/AppLayout/AppLayout";
import { navItemTypes } from "@/utilities/types";
import { useState } from "react";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  // States
  const [navItems, setNavItems] = useState<navItemTypes[]>([
    {
      title: "A coin floating in the skies",
      route: "/1",
      isActive: true,
      id: "1",
    },
    {
      title: "A coin floating in the skies",
      route: "/1",
      isActive: false,
      id: "2",
    },
  ]);
  return (
    <AppLayout className={classes.container}>
      <div className={classes.sectionsNav}>
        <SectionsNav navItems={navItems} setNavItems={setNavItems} />
      </div>
      <RequestTab />
    </AppLayout>
  );
};

export default Dashboard;
