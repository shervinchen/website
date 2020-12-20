import React from "react";
import Container from "./container";

function Section({ children, extend }) {
  return (
    <section className={`mt-10 ${extend}`}>
      <Container>{children}</Container>
    </section>
  );
}

export default Section;