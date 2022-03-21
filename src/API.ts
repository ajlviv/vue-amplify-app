/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateEntityInput = {
  id?: string | null,
  title: string,
  type: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelEntityConditionInput = {
  title?: ModelStringInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEntityConditionInput | null > | null,
  or?: Array< ModelEntityConditionInput | null > | null,
  not?: ModelEntityConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Entity = {
  __typename: "Entity",
  id: string,
  title: string,
  type: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEntityInput = {
  id: string,
  title?: string | null,
  type?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteEntityInput = {
  id: string,
};

export type ModelEntityFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  type?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEntityFilterInput | null > | null,
  or?: Array< ModelEntityFilterInput | null > | null,
  not?: ModelEntityFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelEntityConnection = {
  __typename: "ModelEntityConnection",
  items:  Array<Entity | null >,
  nextToken?: string | null,
};

export type CreateEntityMutationVariables = {
  input: CreateEntityInput,
  condition?: ModelEntityConditionInput | null,
};

export type CreateEntityMutation = {
  createEntity?:  {
    __typename: "Entity",
    id: string,
    title: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEntityMutationVariables = {
  input: UpdateEntityInput,
  condition?: ModelEntityConditionInput | null,
};

export type UpdateEntityMutation = {
  updateEntity?:  {
    __typename: "Entity",
    id: string,
    title: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEntityMutationVariables = {
  input: DeleteEntityInput,
  condition?: ModelEntityConditionInput | null,
};

export type DeleteEntityMutation = {
  deleteEntity?:  {
    __typename: "Entity",
    id: string,
    title: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetEntityQueryVariables = {
  id: string,
};

export type GetEntityQuery = {
  getEntity?:  {
    __typename: "Entity",
    id: string,
    title: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEntitiesQueryVariables = {
  filter?: ModelEntityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEntitiesQuery = {
  listEntities?:  {
    __typename: "ModelEntityConnection",
    items:  Array< {
      __typename: "Entity",
      id: string,
      title: string,
      type: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateEntitySubscription = {
  onCreateEntity?:  {
    __typename: "Entity",
    id: string,
    title: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEntitySubscription = {
  onUpdateEntity?:  {
    __typename: "Entity",
    id: string,
    title: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEntitySubscription = {
  onDeleteEntity?:  {
    __typename: "Entity",
    id: string,
    title: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
