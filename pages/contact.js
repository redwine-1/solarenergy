import Address from "../src/contact/Address";
import ContactForm from "../src/contact/ContactForm";
import { Fragment } from "react";

export default function Contact() {
  return (
    <Fragment>
      <Address />
      <ContactForm />
    </Fragment>
  );
}
