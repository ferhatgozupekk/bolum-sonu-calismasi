import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --green: #2ecc71;
  --blue: #3498db;
  --yellow: #f1c40f;
  --red: #e74c3c;
  --dark-blue: #34495e;
  --midnight-blue: #2c3e50;
  --light-white: #ecf0f1;
  --silver: #bdc3c7;
  
  --box-size: 900px;

  --bg-color: var(--light-white);
  --text-color: var(--midnight-blue);
  --body-color: white;
  --link-color: var(--blue);
  --link-color-hover: var(--dark-blue);
}

:root[data-theme="dark"] {
  --body-color: var(--midnight-blue);
  --bg-color: var(--dark-blue);
  --text-color: var(--light-white);
}

body {
    background-color: var()(--body-color);
    color: var(--text-color);
    margin: 0;
    padding: 0;

}

.clear-fix{
    clear: both;
}


`;
