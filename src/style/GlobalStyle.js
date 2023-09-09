import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body {
  margin: 0;
  font-family: 'Manrope-Regular', sans-serif;
  color: ${({ theme }) => theme.colors.colorText};
}

@font-face {
  font-family: 'Montserrat-Regular'; /* 400 */
  src: url(./fonts/Montserrat/Montserrat-Regular.ttf) format('ttf');
}
@font-face {
  font-family: 'Montserrat-SemiBold'; /* 600 */
  src: url(./fonts/Montserrat/Montserrat-SemiBold.ttf) format('ttf');
}

@font-face {
  font-family: 'Manrope-Regular'; /* 400 */
  src: url(./fonts/Manrope/Manrope-Regular.ttf) format('ttf');
}
@font-face {
  font-family: 'Manrope-Medium'; /* 500 */
  src: url(./fonts/Manrope/Manrope-Medium.ttf) format('ttf');
}
@font-face {
  font-family: 'Manrope-SemiBold'; /* 600 */
  src: url(./fonts/Manrope/Manrope-SemiBold.ttf) format('ttf');
}

/* !Reset */
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ul,
ol {
  padding-left: 0;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  line-height: 1;
}

ul,
ol {
  list-style: none;
}

a {
  color: currentColor;
}

a[class] {
  text-decoration: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

img,
picture {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
  border: 0;
  padding: 0;
  background-color: transparent;
}

address {
  font-style: normal;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

`;
