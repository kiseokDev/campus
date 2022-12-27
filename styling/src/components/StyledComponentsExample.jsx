import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "black",
  },
};

// Define what props.theme will look like
const theme = {
  main: "mediumseagreen",
};

export default function StyledComponentsExample() {
  return (
    <>
      <div>
        <ThemeProvider theme={theme}>
          <Button>Normal</Button>

          <Button>Themed</Button>
        </ThemeProvider>
      </div>
      {/* <Thing>Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div> */}
      {/* <Wrapper>
        <Title>Hello World</Title>
      </Wrapper>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <TomatoButton>tomato</TomatoButton>
      <br></br>
      <Button as="a" href="#">
        Link with BUtton styles
      </Button>
      <TomatoButton as="a" href="#">
        tomato
      </TomatoButton>
      <br></br>
      <Button as={ReverseButton}>이렇게도 쓸수있구나</Button> */}
    </>
  );
}
