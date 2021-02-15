import { Fragment } from "react";
import Cover from "../src/home/Cover";
import Advantage from "../src/home/Advantage";
// import About from "../src/home/About";
// import Trust from "../src/home/Trust";
// import Testimonial from "../src/home/Testimonial";
import dynamic from "next/dynamic";

const About = dynamic(() => import("../src/home/About"), { ssr: false });
const Trust = dynamic(() => import("../src/home/Trust"), { ssr: false });
const Testimonial = dynamic(() => import("../src/home/Testimonial"), {
  ssr: false,
});

export default function Index() {
  return (
    <Fragment>
      <Cover />
      <Advantage />
      <Trust />
      <About />
      <Testimonial />
    </Fragment>
  );
}
