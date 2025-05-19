"use client";

import RequestTab from "@/containers/RequestTab/RequestTab";
import AppLayout from "@/layouts/AppLayout/AppLayout";
import { useState } from "react";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  // States
  const [navItems, setNavItems] = useState([
    {
      title: "A coin floating in the skies",
      route: "/1",
      isActive: true,
    },
    {
      title: "A coin floating in the skies",
      route: "/1",
      isActive: true,
    },
  ]);
  return (
    <AppLayout className={classes.container}>
      <div className={classes.sectionsNav}></div>
      <RequestTab />
    </AppLayout>
  );
};

export default Dashboard;
