import Dashboard from "@/containers/Dashboard/Dashboard";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback="Loader...">
      <Dashboard />
    </Suspense>
  );
};

export default page;
