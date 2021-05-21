import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
:root{
  --primary-color: #007bff;
  --background-color: #333;
  --secondary-color: #6c757d;
  --background-dark-color: #10121A;
  --border-color: #3e344e;
  --background-light-color: #F1F1F1;
  --white-color: #FFF;
  --font-light-color: #a4acc4;
  --font-dark-color: #313131;
  --font-dark-color-2: #151515;
  --sidebar-dark-color: #191D2B;
  --background-light-color-2: rgba(3,127,255,.3);
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Nunito', sans-serif;
  font-size: 1.1rem;
}

body {
  background-color: var(--background-dark-color);
  color: var(--font-light-color);
  transition: all .4s ease-in-out;
}

a {
  font-family: inherit;
  color: inherit;
  font-size: inherit;
}

h1{
    font-size: 4rem;
    color: var(--white-color);
    span{
        font-size: 4rem;
        @media screen and (max-width: 502px){
            font-size: 3rem
        }
    }
    @media screen and (max-width: 502px){
        font-size: 3rem
    }
}

span{
    color: var(--primary-color);
}
`
export default GlobalStyle;