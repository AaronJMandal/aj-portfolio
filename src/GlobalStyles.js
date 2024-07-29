import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --main-bg-color: #1f202e;
  --accent-bg-color: #1c1d26;
  --main-font-color: #FFFDE9;
  }
  
  :: -webkit-scrollbar {
   width: 1.2em;
    }
  :: -webkit-scrollbar-track {
    background: hsl(185, 13%, 31% );
    margin-block: 1em;
    border-radius: 5px;
  }

  :: -webkit-scrollbar-thumb {
    background: hsl(185, 13%, 16%);
    border-radius: 5px;
  }

    html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    height: 100%;
    text-align: center;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 100;
    font-style: normal;
    background: var(--main-bg-color);
    color: var(--main-font-color);
    scroll-behavior: smooth;
    }


  .container {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100vh;
  }

  .page-component {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
  }

@media (max-width: 328px) {
  .page-component {
    flex-direction: column; 
    margin: 10px;

  }
}

`;

export default GlobalStyles;
