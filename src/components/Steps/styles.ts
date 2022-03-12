import styled from "styled-components";
import v from "../variables";

export const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    & > svg {
      display: none;
    }

    @media (min-width: ${v.desktopWidth}) {
      display: flex;
      align-items: center;
      gap: 1em;

      & > svg {
        display: block;
        color: rgba(0, 0, 0, 0.3);
      }

      &:nth-child(odd) {
        margin-top: -3em;
        & > svg {
          transform: scaleY(-1);
        }
      }
    }
  }

  li:not(:last-child)::after {
    content: "";
    height: 3em;
    width: 3px;
    background: rgba(0, 0, 0, 0.17);
    margin: 0.5em auto;
    display: block;
    border-radius: 5px;
  }

  @media (min-width: ${v.desktopWidth}) {
    flex-direction: row;
    li:not(:last-child)::after {
      content: none;
    }
  }
`;
