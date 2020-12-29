import { FC, useEffect } from "react";
import StreamsDumb from "./Streams.dumb";
import { useAppBar } from "./contexts/app-bar";
import { useQuery } from "react-query";
import { getSdk } from "./queries/nodes/todo/queryMyStream.gen";
import { useClient } from "./contexts/gql-client";
import { CircularProgress } from "@material-ui/core";

type Props = {
  title: string;
};
const Streams: FC<Props> = ({ title }) => {
  const { setTitle } = useAppBar();
  useEffect(() => setTitle(title), [title]);
  const client = useClient();
  const { isError, isFetching, data } = useQuery({
    queryFn: () => getSdk(client).GetMyStreamNodes({}),
    queryKey: ["my-streams"],
  });
  if (isFetching) return <CircularProgress />;
  if (isError || !data) return <p>Blast! Failed to load your data :/</p>;
  return (<StreamsDumb streams={data} />);
};

export default Streams;
