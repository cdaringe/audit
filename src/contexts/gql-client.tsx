import { createContext, FC, useContext } from "react";
import { GraphQLClient } from "graphql-request";

const defaultClient = new GraphQLClient("/v1/graphql");

type GqlClient = GraphQLClient;
const createGqlClientCtx = () => {
  const ctx = createContext<GqlClient>(defaultClient);
  ctx.displayName = "GraphQLClient";
  return ctx;
};

export const ctx = createGqlClientCtx();
const InnerProvider = ctx.Provider;
export const Provider: FC = ({ children }) =>
  <InnerProvider value={defaultClient} children={children} />;
export const useClient = () => useContext(ctx);
