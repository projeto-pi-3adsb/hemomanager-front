import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    :root {
  --background: #FCFCFE;
  --background-button: #B83B25;
  --red-blood: #ED1C24; 
  --background-border-bar: #CECECE;
  --background-option-bar: #F5F5F5;
  --cinza-claro: #ABABAB;
  --input-background: #e7e9ee;
  --input-border: #d5d5d5;
  --red: #e52e4d;
  --blue: #286db5;
  --blue-light: #328ae8;
  --purple: #5429cc;
  --purple-light: #6933ff;
  --text-title: #363f5f;
  --text-body: #969cb3;
  --shape: #ffffff;
  --green: #33cc95;
  --black: #111111;
  --gray-dark: #1c1c1c;
  --gray: #64676b;
  --text-white:#E5E5E5;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
html {
  @media (max-inline-size: 1080px) {
    font-size: 93.75%; // = 15px if scrren equal 750px;
  }
  @media (max-inline-size: 750px) {
    font-size: 87.5%; // = 14px if scrren equal 750px;
  }
}
html,body,div,span,
object,iframe,figure,h1,h2,h3,
h4,h5,h6,p,blockquote,pre,
a,code,em,img,small,strike,
strong,sub,sup,tt,b,u,i,ol,ul,li,
fieldset,form,label,table,caption,
tbody,tfoot,thead,tr,th,td,
main,canvas,embed,
footer,header,nav,section,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: none;
}
footer,
header,
nav,
section,
main {
  display: block;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
input {
  -webkit-appearance: none;
  border-radius: 0;
}
html,
body {
  block-size: 100%;
}
body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  font-family: 'Roboto', sans-serif;
  line-height: 1;
}
button{
  cursor: pointer;
}  
[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}
`;