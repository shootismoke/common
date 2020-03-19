import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type CreateUserInput = {
  expoInstallationId: Scalars['ID'];
};

export type Frequency = 'never' | 'daily' | 'weekly' | 'monthly';

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createUser: User;
  updateUser: User;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationUpdateUserArgs = {
  expoInstallationId: Scalars['ID'];
  input: UpdateUserInput;
};

export type Notifications = {
  __typename?: 'Notifications';
  _id: Scalars['ID'];
  expoPushToken: Scalars['ID'];
  frequency: Frequency;
  timezone: Scalars['String'];
  universalId: Scalars['String'];
};

export type NotificationsInput = {
  expoPushToken: Scalars['ID'];
  frequency: Frequency;
  timezone: Scalars['String'];
  universalId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  hawkTimestampMessage: TimestampMessage;
  getUser?: Maybe<User>;
};

export type QueryGetUserArgs = {
  expoInstallationId: Scalars['ID'];
};

export type TimestampMessage = {
  __typename?: 'TimestampMessage';
  ts: Scalars['Int'];
  tsm: Scalars['String'];
};

export type UpdateUserInput = {
  notifications?: Maybe<NotificationsInput>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  expoInstallationId: Scalars['ID'];
  notifications?: Maybe<Notifications>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  TimestampMessage: ResolverTypeWrapper<TimestampMessage>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  User: ResolverTypeWrapper<User>;
  Notifications: ResolverTypeWrapper<Notifications>;
  Frequency: Frequency;
  Mutation: ResolverTypeWrapper<{}>;
  CreateUserInput: CreateUserInput;
  UpdateUserInput: UpdateUserInput;
  NotificationsInput: NotificationsInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Boolean: Scalars['Boolean'];
  TimestampMessage: TimestampMessage;
  Int: Scalars['Int'];
  String: Scalars['String'];
  ID: Scalars['ID'];
  User: User;
  Notifications: Notifications;
  Frequency: Frequency;
  Mutation: {};
  CreateUserInput: CreateUserInput;
  UpdateUserInput: UpdateUserInput;
  NotificationsInput: NotificationsInput;
  Date: Scalars['Date'];
}>;

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'input'>
  >;
  updateUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, 'expoInstallationId' | 'input'>
  >;
}>;

export type NotificationsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Notifications'] = ResolversParentTypes['Notifications']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  expoPushToken?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  frequency?: Resolver<ResolversTypes['Frequency'], ParentType, ContextType>;
  timezone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  universalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hawkTimestampMessage?: Resolver<
    ResolversTypes['TimestampMessage'],
    ParentType,
    ContextType
  >;
  getUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetUserArgs, 'expoInstallationId'>
  >;
}>;

export type TimestampMessageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TimestampMessage'] = ResolversParentTypes['TimestampMessage']
> = ResolversObject<{
  ts?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tsm?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  expoInstallationId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  notifications?: Resolver<
    Maybe<ResolversTypes['Notifications']>,
    ParentType,
    ContextType
  >;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Notifications?: NotificationsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  TimestampMessage?: TimestampMessageResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
