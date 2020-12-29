import { Checkbox } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Link from "next/link";
import { FC } from "react";
import { GetMyStreamNodesQueryResult } from "./queries/nodes/todo/queryMyStream.gen";

type Props = {
  streams: GetMyStreamNodesQueryResult;
};
const StreamsDumb: FC<Props> = ({ streams }) => {
  return (
    <TableContainer component={Paper}>
      {/* className={classes.table} */}
      <Table aria-label="simple table">
        {/* <TableHead>
        <TableRow>
          <TableCell align="right"></TableCell>
          <TableCell align="right">Fat&nbsp;(g)</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead> */}
        <TableBody>
          {streams.node_todo.map((node, i) => (
            <Link href={`/stream/${node.id}`} key={node.id}>
              <TableRow key={node.id} style={{ cursor: "pointer" }}>
                <TableCell padding="checkbox">
                  <Checkbox checked={node.is_complete} disabled />
                </TableCell>
                <TableCell>{node.summary}</TableCell>
              </TableRow>
            </Link>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StreamsDumb;
