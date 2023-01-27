import dayjs from "dayjs";
import { StatusBadge } from "./Row";

import * as S from "./styles";

export const columns = [
  {
    accessorKey: "created",
    header: "created",
    cell: (info: any) => (
      <S.Date>
        {dayjs(info.getValue()).format("MMMM")}{" "}
        {dayjs(info.getValue()).format("D")}
        {", "}
        {dayjs(info.getValue()).format("YYYY")}
      </S.Date>
    ),
  },
  {
    accessorKey: "gender",
    header: "gender",
    cell: (info: any) => <>{info.getValue()}</>,
  },
  {
    accessorKey: "name",
    header: "name",
    cell: (info: any) => {
      return (
        <S.Name>
          <img
            src={info.row.original.image}
            width="30px"
            height="30px"
            style={{ borderRadius: "50%" }}
          />
          {info.getValue()}
        </S.Name>
      );
    },
  },
  {
    accessorKey: "id",
    header: "id",
    cell: (info: any) => <>{info.getValue()}</>,
  },
  {
    accessorKey: "species",
    header: "species",
    cell: (info: any) => <>{info.getValue()}</>,
  },
  {
    accessorKey: "status",
    header: "status",
    cell: (info: any) => <>{StatusBadge(info.getValue())}</>,
  },
];
