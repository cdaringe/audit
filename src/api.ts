export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> =
  & Omit<T, K>
  & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> =
  & Omit<T, K>
  & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "node_types" */
  delete_node_types?: Maybe<Node_Types_Mutation_Response>;
  /** delete single row from the table: "node_types" */
  delete_node_types_by_pk?: Maybe<Node_Types>;
  /** delete data from the table: "nodes" */
  delete_nodes?: Maybe<Nodes_Mutation_Response>;
  /** delete single row from the table: "nodes" */
  delete_nodes_by_pk?: Maybe<Nodes>;
  /** insert data into the table: "node_types" */
  insert_node_types?: Maybe<Node_Types_Mutation_Response>;
  /** insert a single row into the table: "node_types" */
  insert_node_types_one?: Maybe<Node_Types>;
  /** insert data into the table: "nodes" */
  insert_nodes?: Maybe<Nodes_Mutation_Response>;
  /** insert a single row into the table: "nodes" */
  insert_nodes_one?: Maybe<Nodes>;
  /** update data of the table: "node_types" */
  update_node_types?: Maybe<Node_Types_Mutation_Response>;
  /** update single row of the table: "node_types" */
  update_node_types_by_pk?: Maybe<Node_Types>;
  /** update data of the table: "nodes" */
  update_nodes?: Maybe<Nodes_Mutation_Response>;
  /** update single row of the table: "nodes" */
  update_nodes_by_pk?: Maybe<Nodes>;
};

/** mutation root */
export type Mutation_RootDelete_Node_TypesArgs = {
  where: Node_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Node_Types_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_NodesArgs = {
  where: Nodes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Nodes_By_PkArgs = {
  id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootInsert_Node_TypesArgs = {
  objects: Array<Node_Types_Insert_Input>;
  on_conflict?: Maybe<Node_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Node_Types_OneArgs = {
  object: Node_Types_Insert_Input;
  on_conflict?: Maybe<Node_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_NodesArgs = {
  objects: Array<Nodes_Insert_Input>;
  on_conflict?: Maybe<Nodes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Nodes_OneArgs = {
  object: Nodes_Insert_Input;
  on_conflict?: Maybe<Nodes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Node_TypesArgs = {
  _inc?: Maybe<Node_Types_Inc_Input>;
  _set?: Maybe<Node_Types_Set_Input>;
  where: Node_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Node_Types_By_PkArgs = {
  _inc?: Maybe<Node_Types_Inc_Input>;
  _set?: Maybe<Node_Types_Set_Input>;
  pk_columns: Node_Types_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_NodesArgs = {
  _inc?: Maybe<Nodes_Inc_Input>;
  _set?: Maybe<Nodes_Set_Input>;
  where: Nodes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Nodes_By_PkArgs = {
  _inc?: Maybe<Nodes_Inc_Input>;
  _set?: Maybe<Nodes_Set_Input>;
  pk_columns: Nodes_Pk_Columns_Input;
};

/** columns and relationships of "node_types" */
export type Node_Types = {
  __typename?: "node_types";
  created_at: Scalars["timestamptz"];
  id: Scalars["Int"];
  name: Scalars["String"];
};

/** aggregated selection of "node_types" */
export type Node_Types_Aggregate = {
  __typename?: "node_types_aggregate";
  aggregate?: Maybe<Node_Types_Aggregate_Fields>;
  nodes: Array<Node_Types>;
};

/** aggregate fields of "node_types" */
export type Node_Types_Aggregate_Fields = {
  __typename?: "node_types_aggregate_fields";
  avg?: Maybe<Node_Types_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Node_Types_Max_Fields>;
  min?: Maybe<Node_Types_Min_Fields>;
  stddev?: Maybe<Node_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Node_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Node_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Node_Types_Sum_Fields>;
  var_pop?: Maybe<Node_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Node_Types_Var_Samp_Fields>;
  variance?: Maybe<Node_Types_Variance_Fields>;
};

/** aggregate fields of "node_types" */
export type Node_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Node_Types_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "node_types" */
export type Node_Types_Aggregate_Order_By = {
  avg?: Maybe<Node_Types_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Node_Types_Max_Order_By>;
  min?: Maybe<Node_Types_Min_Order_By>;
  stddev?: Maybe<Node_Types_Stddev_Order_By>;
  stddev_pop?: Maybe<Node_Types_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Node_Types_Stddev_Samp_Order_By>;
  sum?: Maybe<Node_Types_Sum_Order_By>;
  var_pop?: Maybe<Node_Types_Var_Pop_Order_By>;
  var_samp?: Maybe<Node_Types_Var_Samp_Order_By>;
  variance?: Maybe<Node_Types_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "node_types" */
export type Node_Types_Arr_Rel_Insert_Input = {
  data: Array<Node_Types_Insert_Input>;
  on_conflict?: Maybe<Node_Types_On_Conflict>;
};

/** aggregate avg on columns */
export type Node_Types_Avg_Fields = {
  __typename?: "node_types_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "node_types" */
export type Node_Types_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "node_types". All fields are combined with a logical 'AND'. */
export type Node_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Node_Types_Bool_Exp>>>;
  _not?: Maybe<Node_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Node_Types_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "node_types" */
export enum Node_Types_Constraint {
  /** unique or primary key constraint */
  NodeTypesNameKey = "node_types_name_key",
  /** unique or primary key constraint */
  NodeTypesPkey = "node_types_pkey",
}

/** input type for incrementing integer column in table "node_types" */
export type Node_Types_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "node_types" */
export type Node_Types_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Node_Types_Max_Fields = {
  __typename?: "node_types_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "node_types" */
export type Node_Types_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Node_Types_Min_Fields = {
  __typename?: "node_types_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "node_types" */
export type Node_Types_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "node_types" */
export type Node_Types_Mutation_Response = {
  __typename?: "node_types_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Node_Types>;
};

/** input type for inserting object relation for remote table "node_types" */
export type Node_Types_Obj_Rel_Insert_Input = {
  data: Node_Types_Insert_Input;
  on_conflict?: Maybe<Node_Types_On_Conflict>;
};

/** on conflict condition type for table "node_types" */
export type Node_Types_On_Conflict = {
  constraint: Node_Types_Constraint;
  update_columns: Array<Node_Types_Update_Column>;
  where?: Maybe<Node_Types_Bool_Exp>;
};

/** ordering options when selecting data from "node_types" */
export type Node_Types_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "node_types" */
export type Node_Types_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "node_types" */
export enum Node_Types_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "node_types" */
export type Node_Types_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Node_Types_Stddev_Fields = {
  __typename?: "node_types_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "node_types" */
export type Node_Types_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Node_Types_Stddev_Pop_Fields = {
  __typename?: "node_types_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "node_types" */
export type Node_Types_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Node_Types_Stddev_Samp_Fields = {
  __typename?: "node_types_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "node_types" */
export type Node_Types_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Node_Types_Sum_Fields = {
  __typename?: "node_types_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "node_types" */
export type Node_Types_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "node_types" */
export enum Node_Types_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** aggregate var_pop on columns */
export type Node_Types_Var_Pop_Fields = {
  __typename?: "node_types_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "node_types" */
export type Node_Types_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Node_Types_Var_Samp_Fields = {
  __typename?: "node_types_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "node_types" */
export type Node_Types_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Node_Types_Variance_Fields = {
  __typename?: "node_types_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "node_types" */
export type Node_Types_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "nodes" */
export type Nodes = {
  __typename?: "nodes";
  created_at: Scalars["timestamptz"];
  id: Scalars["Int"];
  node_type?: Maybe<Scalars["Int"]>;
};

/** aggregated selection of "nodes" */
export type Nodes_Aggregate = {
  __typename?: "nodes_aggregate";
  aggregate?: Maybe<Nodes_Aggregate_Fields>;
  nodes: Array<Nodes>;
};

/** aggregate fields of "nodes" */
export type Nodes_Aggregate_Fields = {
  __typename?: "nodes_aggregate_fields";
  avg?: Maybe<Nodes_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Nodes_Max_Fields>;
  min?: Maybe<Nodes_Min_Fields>;
  stddev?: Maybe<Nodes_Stddev_Fields>;
  stddev_pop?: Maybe<Nodes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Nodes_Stddev_Samp_Fields>;
  sum?: Maybe<Nodes_Sum_Fields>;
  var_pop?: Maybe<Nodes_Var_Pop_Fields>;
  var_samp?: Maybe<Nodes_Var_Samp_Fields>;
  variance?: Maybe<Nodes_Variance_Fields>;
};

/** aggregate fields of "nodes" */
export type Nodes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Nodes_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "nodes" */
export type Nodes_Aggregate_Order_By = {
  avg?: Maybe<Nodes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Nodes_Max_Order_By>;
  min?: Maybe<Nodes_Min_Order_By>;
  stddev?: Maybe<Nodes_Stddev_Order_By>;
  stddev_pop?: Maybe<Nodes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Nodes_Stddev_Samp_Order_By>;
  sum?: Maybe<Nodes_Sum_Order_By>;
  var_pop?: Maybe<Nodes_Var_Pop_Order_By>;
  var_samp?: Maybe<Nodes_Var_Samp_Order_By>;
  variance?: Maybe<Nodes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "nodes" */
export type Nodes_Arr_Rel_Insert_Input = {
  data: Array<Nodes_Insert_Input>;
  on_conflict?: Maybe<Nodes_On_Conflict>;
};

/** aggregate avg on columns */
export type Nodes_Avg_Fields = {
  __typename?: "nodes_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  node_type?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "nodes" */
export type Nodes_Avg_Order_By = {
  id?: Maybe<Order_By>;
  node_type?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "nodes". All fields are combined with a logical 'AND'. */
export type Nodes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Nodes_Bool_Exp>>>;
  _not?: Maybe<Nodes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Nodes_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  node_type?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "nodes" */
export enum Nodes_Constraint {
  /** unique or primary key constraint */
  NodesPkey = "nodes_pkey",
}

/** input type for incrementing integer column in table "nodes" */
export type Nodes_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
  node_type?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "nodes" */
export type Nodes_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  node_type?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Nodes_Max_Fields = {
  __typename?: "nodes_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  node_type?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "nodes" */
export type Nodes_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  node_type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Nodes_Min_Fields = {
  __typename?: "nodes_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  node_type?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "nodes" */
export type Nodes_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  node_type?: Maybe<Order_By>;
};

/** response of any mutation on the table "nodes" */
export type Nodes_Mutation_Response = {
  __typename?: "nodes_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Nodes>;
};

/** input type for inserting object relation for remote table "nodes" */
export type Nodes_Obj_Rel_Insert_Input = {
  data: Nodes_Insert_Input;
  on_conflict?: Maybe<Nodes_On_Conflict>;
};

/** on conflict condition type for table "nodes" */
export type Nodes_On_Conflict = {
  constraint: Nodes_Constraint;
  update_columns: Array<Nodes_Update_Column>;
  where?: Maybe<Nodes_Bool_Exp>;
};

/** ordering options when selecting data from "nodes" */
export type Nodes_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  node_type?: Maybe<Order_By>;
};

/** primary key columns input for table: "nodes" */
export type Nodes_Pk_Columns_Input = {
  id: Scalars["Int"];
};

/** select columns of table "nodes" */
export enum Nodes_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  NodeType = "node_type",
}

/** input type for updating data in table "nodes" */
export type Nodes_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  node_type?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Nodes_Stddev_Fields = {
  __typename?: "nodes_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  node_type?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "nodes" */
export type Nodes_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  node_type?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Nodes_Stddev_Pop_Fields = {
  __typename?: "nodes_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  node_type?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "nodes" */
export type Nodes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  node_type?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Nodes_Stddev_Samp_Fields = {
  __typename?: "nodes_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  node_type?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "nodes" */
export type Nodes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  node_type?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Nodes_Sum_Fields = {
  __typename?: "nodes_sum_fields";
  id?: Maybe<Scalars["Int"]>;
  node_type?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "nodes" */
export type Nodes_Sum_Order_By = {
  id?: Maybe<Order_By>;
  node_type?: Maybe<Order_By>;
};

/** update columns of table "nodes" */
export enum Nodes_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  NodeType = "node_type",
}

/** aggregate var_pop on columns */
export type Nodes_Var_Pop_Fields = {
  __typename?: "nodes_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  node_type?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "nodes" */
export type Nodes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  node_type?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Nodes_Var_Samp_Fields = {
  __typename?: "nodes_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  node_type?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "nodes" */
export type Nodes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  node_type?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Nodes_Variance_Fields = {
  __typename?: "nodes_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  node_type?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "nodes" */
export type Nodes_Variance_Order_By = {
  id?: Maybe<Order_By>;
  node_type?: Maybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** query root */
export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "node_types" */
  node_types: Array<Node_Types>;
  /** fetch aggregated fields from the table: "node_types" */
  node_types_aggregate: Node_Types_Aggregate;
  /** fetch data from the table: "node_types" using primary key columns */
  node_types_by_pk?: Maybe<Node_Types>;
  /** fetch data from the table: "nodes" */
  nodes: Array<Nodes>;
  /** fetch aggregated fields from the table: "nodes" */
  nodes_aggregate: Nodes_Aggregate;
  /** fetch data from the table: "nodes" using primary key columns */
  nodes_by_pk?: Maybe<Nodes>;
};

/** query root */
export type Query_RootNode_TypesArgs = {
  distinct_on?: Maybe<Array<Node_Types_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Node_Types_Order_By>>;
  where?: Maybe<Node_Types_Bool_Exp>;
};

/** query root */
export type Query_RootNode_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Node_Types_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Node_Types_Order_By>>;
  where?: Maybe<Node_Types_Bool_Exp>;
};

/** query root */
export type Query_RootNode_Types_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootNodesArgs = {
  distinct_on?: Maybe<Array<Nodes_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Nodes_Order_By>>;
  where?: Maybe<Nodes_Bool_Exp>;
};

/** query root */
export type Query_RootNodes_AggregateArgs = {
  distinct_on?: Maybe<Array<Nodes_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Nodes_Order_By>>;
  where?: Maybe<Nodes_Bool_Exp>;
};

/** query root */
export type Query_RootNodes_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "node_types" */
  node_types: Array<Node_Types>;
  /** fetch aggregated fields from the table: "node_types" */
  node_types_aggregate: Node_Types_Aggregate;
  /** fetch data from the table: "node_types" using primary key columns */
  node_types_by_pk?: Maybe<Node_Types>;
  /** fetch data from the table: "nodes" */
  nodes: Array<Nodes>;
  /** fetch aggregated fields from the table: "nodes" */
  nodes_aggregate: Nodes_Aggregate;
  /** fetch data from the table: "nodes" using primary key columns */
  nodes_by_pk?: Maybe<Nodes>;
};

/** subscription root */
export type Subscription_RootNode_TypesArgs = {
  distinct_on?: Maybe<Array<Node_Types_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Node_Types_Order_By>>;
  where?: Maybe<Node_Types_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootNode_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Node_Types_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Node_Types_Order_By>>;
  where?: Maybe<Node_Types_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootNode_Types_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootNodesArgs = {
  distinct_on?: Maybe<Array<Nodes_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Nodes_Order_By>>;
  where?: Maybe<Nodes_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootNodes_AggregateArgs = {
  distinct_on?: Maybe<Array<Nodes_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Nodes_Order_By>>;
  where?: Maybe<Nodes_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootNodes_By_PkArgs = {
  id: Scalars["Int"];
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};
