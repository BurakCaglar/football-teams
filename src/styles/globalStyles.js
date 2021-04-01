import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/*********  GLOBAL STYLES ********/
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*:focus {
    outline: none;
}

.container {
  padding: 2rem 5rem;
}
.container-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1280px;
}
@media screen and (min-width: 992px) {
  .container-center {
    width: 95vw;
  }
}

/* FONTS */
h1 {
  font-size: 3rem;
  letter-spacing: 1.4px;
  margin-bottom: 2rem;
  font-weight: 650;
  font-family: 'Roboto', sans-serif;
  @media screen and (max-width: 1000px) {
        text-align: center;
        font-size: 2rem;
        letter-spacing: 0;
      }
}
p {
  font-family: 'Roboto', sans-serif;
}

/* LOADING */

.loading {
  border: 16px solid #f3f3f3; 
  border-top: 16px solid #3498db; 
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`;

export default GlobalStyle;
