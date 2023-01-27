import { Table } from "~/components";
import { useGetAllCharacters } from "~/hooks";

import { columns } from "./columns";

const Home = () => {
  const { data } = useGetAllCharacters();

  return <div>{data && <Table data={data?.results} columns={columns} />}</div>;
};

export default Home;
