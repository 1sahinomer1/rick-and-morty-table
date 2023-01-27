import styled from "styled-components";

import { colors } from "~/theme";

const statusColors: {
  [key: string]: {
    bgColor: string;
    color: string;
  };
} = {
  Alive: {
    bgColor: colors.customColors.green100,
    color: colors.customColors.green600,
  },
  Dead: {
    bgColor: colors.customColors.red100,
    color: colors.customColors.red600,
  },
  unknown: {
    bgColor: colors.customColors.gray100,
    color: colors.customColors.gray600,
  },
};

const StatusBadge = (status: string) => {
  if (!status) return <>!Error...</>;
  const { bgColor, color } = statusColors[status] || statusColors.unknown;

  return (
    <StatusSpan bgColor={bgColor} color={color}>
      {status}
    </StatusSpan>
  );
};

export default StatusBadge;

const StatusSpan = styled.p<{ bgColor?: string; color?: string }>`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  padding: 12px;
  font-weight: 500;
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  border-radius: 18px;
  text-align: center;
`;
