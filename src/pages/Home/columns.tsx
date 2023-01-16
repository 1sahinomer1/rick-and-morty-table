export const columns = [
  {
    accessorKey: "created",
    header: "created",
    cell: (info: any) => <>{info.getValue()}</>,
  },
  {
    accessorKey: "gender",
    header: "gender",
    cell: (info: any) => <>{info.getValue()}</>,
  },
  {
    accessorKey: "name",
    header: "name",
    cell: (info: any) => <>{info.getValue()}</>,
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
    cell: (info: any) => <>{info.getValue()}</>,
  },
];
