import styled from "styled-components";

import { colors } from "~/theme";

export const Date = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${colors.neutralColor.textGray};
`;
export const Name = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    margin-right: 8px;
  }
`;
