import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { useContext } from "react";
import styled from "styled-components";

export function LeftArrow() {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <LeftBtn props="left" onClick={() => scrollPrev()}>
      Left
    </LeftBtn>
  );
}

export function RightArrow() {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <RightBtn props="right" onClick={() => scrollNext()}>
      Right
    </RightBtn>
  );
}

const LeftBtn = styled.button``;
const RightBtn = styled.button``;
