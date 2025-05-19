"use client";

import Button from "@/components/Button/Button";
import AppLayout from "@/layouts/AppLayout/AppLayout";
import { routes } from "@/utilities/routes";
import { useRouter } from "next/navigation";
import React from "react";
import classes from "../containers/Dashboard/Dashboard.module.css";

const NotFound = () => {
  // Router
  const router = useRouter();

  return (
    <AppLayout className={classes.notfoundContainer}>
      <h3>This page is unavailable</h3>
      <Button
        onClick={() => {
          router.push(routes.CREATE);
        }}
      >
        Return to create 😡
      </Button>
    </AppLayout>
  );
};

export default NotFound;
