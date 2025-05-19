import Dashboard from "@/containers/Dashboard/Dashboard";
import { routes } from "@/utilities/routes";
import { redirect } from "next/navigation";

export default function Home() {
  return redirect(routes.CREATE);
}
