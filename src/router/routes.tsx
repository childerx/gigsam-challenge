/* eslint-disable @typescript-eslint/no-explicit-any */
//  eslint-disable @typescript-eslint/no-explicit-any
import { Route, SearchPredicate } from "react-location";
import { LocationGenerics } from "./location";

import { HOME } from "@/constants/page-path";
import HomePage from "@/pages/home";

export type RouteProps = Omit<Route, "children"> & {
  navigation?: boolean;
  sidebar?: { label: string; icon: any };
  children?: RouteProps[];
  search?: SearchPredicate<LocationGenerics>;
};

const routes: RouteProps[] = [
  {
    path: HOME,
    element: <HomePage />,
    meta: {
      layout: "App",
    },
  },
];

export default routes;
