import { useEffect, useState } from "react";
import CafeList from "../components/CafeList";
import CafeMap from "../components/CafeMap";

export default function Main() {
  return (
    // <div className="main-parent">
    //   <div className="main-child">
    //     <CafeList />
    //   </div>
    //   <div className="main-child">
    //     <CafeMap />
    //   </div>
    // </div>
    <div className="main-parent">
      <CafeList />

      <CafeMap />
    </div>
  );
}
