/* global document */
import { storiesOf } from "@storybook/html";

storiesOf("Utilities/Color", module)
  .add(
    "Text",
    () => `
    <p class="nds-text--black">.nds-text--black</p>
    <p class="nds-text--black-blue">.nds-text--black-blue</p>
    <p class="nds-text--dark-blue">.nds-text--dark-blue</p>
    <p class="nds-text--blue">.nds-text--blue</p>
    <p class="nds-text--light-blue">.nds-text--light-blue</p>
    <p class="nds-text--dark-grey">.nds-text--dark-grey</p>
    <p class="nds-text--grey">.nds-text--grey</p>
    <p class="nds-text--light-grey">.nds-text--light-grey</p>
    <p class="nds-text--white-grey">.nds-text--white-grey</p>
    <p class="nds-text--white">.nds-text--white</p>
    <p class="nds-text--yellow">.nds-text--yellow</p>
    <p class="nds-text--green">.nds-text--green</p>
    <p class="nds-text--aqua">.nds-text--aqua</p>
    <p class="nds-text--purple">.nds-text--purple</p>
    <p class="nds-text--pink">.nds-text--pink</p>
    <p class="nds-text--turquoise">.nds-text--turquoise</p>
    <p class="nds-text--orange">.nds-text--orange</p>
    <p class="nds-text--avocado">.nds-text--avocado</p>
  `
  )
  .add(
    "Background",
    () => `
    <p class="nds-padding--x2 nds-text--white nds-background--black">.nds-background--black</p>
    <p class="nds-padding--x2 nds-text--white nds-background--black-blue">.nds-background--black-blue</p>
    <p class="nds-padding--x2 nds-text--white nds-background--dark-blue">.nds-background--dark-blue</p>
    <p class="nds-padding--x2 nds-background--blue">.nds-background--blue</p>
    <p class="nds-padding--x2 nds-background--light-blue">.nds-background--light-blue</p>
    <p class="nds-padding--x2 nds-text--white nds-background--dark-grey">.nds-background--dark-grey</p>
    <p class="nds-padding--x2 nds-background--grey">.nds-background--grey</p>
    <p class="nds-padding--x2 nds-background--light-grey">.nds-background--light-grey</p>
    <p class="nds-padding--x2 nds-background--white-grey">.nds-background--white-grey</p>
    <p class="nds-padding--x2 nds-background--white">.nds-background--white</p>
    <p class="nds-padding--x2 nds-background--yellow">.nds-background--yellow</p>
    <p class="nds-padding--x2 nds-text--white nds-background--green">.nds-background--green</p>
    <p class="nds-padding--x2 nds-text--white nds-background--red">.nds-background--red</p>
    <p class="nds-padding--x2 nds-text--white nds-background--aqua">.nds-background--aqua</p>
    <p class="nds-padding--x2 nds-text--white nds-background--purple">.nds-background--purple</p>
    <p class="nds-padding--x2 nds-text--white nds-background--pink">.nds-background--pink</p>
    <p class="nds-padding--x2 nds-text--white nds-background--turquoise">.nds-background--turquoise</p>
    <p class="nds-padding--x2 nds-text--white nds-background--orange">.nds-background--orange</p>
    <p class="nds-padding--x2 nds-text--white nds-background--avocado">.nds-background--avocado</p>
`
  );
