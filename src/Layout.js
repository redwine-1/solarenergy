import { Fragment } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import NavBar from "./NavBar";

const Footer = dynamic(() => import("./Footer"));
const Map = dynamic(() => import("./Map"), { ssr: false });
const Copyright = dynamic(() => import("./Copyright"), { ssr: false });
export default function layout({ children }) {
  const router = useRouter();
  const showHeader = router.pathname.includes("/admin");
  return (
    <Fragment>
      {!showHeader && <NavBar />}
      {children}
      {!showHeader && <Map />}
      {!showHeader && <Footer />}
      {!showHeader && <Copyright />}
    </Fragment>
  );
}
