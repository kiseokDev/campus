/** @jsxImportSource @emotion/react */
import { Global, css, keyframes, ClassNames } from "@emotion/react";
import styled from "@emotion/styled";
const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const color = "white";

const style = css`
  color: hotpink;
`;

// const SomeComponent = ({ children }) => (
//   <div css={style}>
//     Some hotpink text.
//     {children}
//   </div>
// );

const anotherStyle = css({
  textDecoration: "underline",
});

const AnotherComponent = () => (
  <div css={[anotherStyle, style]}>Some text with an underline.</div>
);

const P = props => (
  <p
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: "1.5",
      fontFamily: "Sans-Serif",
      color: "black",
    }}
    {...props} // <- props contains the `className` prop
  />
);

const ArticleText = props => (
  <P
    css={{
      fontSize: 14,
      fontFamily: "Georgia, serif",
      color: "darkgray",
    }}
    {...props} // <- props contains the `className` prop
  />
);

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

let SomeComponent = props => (
  <div className={props.wrapperClassName}>
    in the wrapper!
    <div className={props.className}>{props.children}</div>
  </div>
);

export default function EmotionExample() {
  return (
    <>
      <ClassNames>
        {({ css, cx }) => (
          <SomeComponent
            wrapperClassName={css({ color: "green" })}
            className={css`
              color: hotpink;
            `}
          >
            from children!!
          </SomeComponent>
        )}
      </ClassNames>
      <div
        css={css`
          animation: ${bounce} 1s ease infinite;
        `}
      >
        some bouncing text!
      </div>
      <Global
        styles={css`
          .some-class {
            color: hotpink !important;
          }
        `}
      />
      <Global
        styles={{
          ".some-class": {
            fontSize: 50,
            textAlign: "center",
          },
        }}
      />
      <div className="some-class">This is hotpink now!</div>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      <Button>Hello</Button>
      <SomeComponent />
      <AnotherComponent />
      <P>pppp</P>
      <ArticleText>article</ArticleText>
    </>
  );
}
