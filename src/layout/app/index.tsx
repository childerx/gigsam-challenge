/* eslint-disable @typescript-eslint/no-explicit-any */

import { Outlet } from "react-location";
import Navbar from "../components/nav";
import Footer from "../components/footer";

export default function AppLayout() {
  return (
    <>
      <div>
        <main className="font-Geist flex-1">
          <Navbar />

          <div className="relative pb-4 sm:pb-6 bg-[#000] text-white min-h-screen overflow-x-hidden">
            <Outlet />
          </div>

          <Footer />
        </main>
      </div>
    </>
  );
}
