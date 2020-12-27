import { FC, useEffect } from "react";
import StreamsDumb from "./Streams.dumb";
import { useAppBar } from "./contexts/app-bar";

type Props = {
  title: string;
};
const Streams: FC<Props> = ({ title }) => {
  const { setTitle } = useAppBar();
  useEffect(() => setTitle(title), [title]);
  return (<StreamsDumb />);
};

export default Streams;
