/* eslint-disable */
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Mutation = {
  __typename?: "Mutation"
  slideChange: Scalars["Boolean"]
}

export type MutationSlideChangeArgs = {
  presentationId: Scalars["ID"]
  slide: Scalars["Int"]
}

export type Presentation = {
  __typename?: "Presentation"
  current: Scalars["Int"]
  id: Scalars["ID"]
  slides: Scalars["Int"]
}

export type Query = {
  __typename?: "Query"
  hello: Scalars["String"]
}

export type QueryHelloArgs = {
  id: Scalars["ID"]
}

export type Silde = {
  __typename?: "Silde"
  slide: Scalars["Int"]
}

export type Subscription = {
  __typename?: "Subscription"
  slideChanged?: Maybe<Silde>
}

export type SubscriptionSlideChangedArgs = {
  presentationId: Scalars["ID"]
}
