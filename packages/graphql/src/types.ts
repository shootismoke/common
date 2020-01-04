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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Attribution = {
  __typename?: 'Attribution';
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type AttributionInput = {
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type AveragingPeriod = {
  __typename?: 'AveragingPeriod';
  value: Scalars['Float'];
  unit: Scalars['String'];
};

export type AveragingPeriodInput = {
  value: Scalars['Float'];
  unit: Scalars['String'];
};

export type CacheControlScope = 'PUBLIC' | 'PRIVATE';

export type CreateHistoryItemInput = {
  measurement: CreateMeasurementInput;
  userId: Scalars['ID'];
};

export type CreateMeasurementInput = {
  attribution?: Maybe<Array<AttributionInput>>;
  averagingPeriod?: Maybe<AveragingPeriodInput>;
  city: Scalars['String'];
  coordinates: LatLngInput;
  country: Scalars['String'];
  date: LocalDateInput;
  location: Scalars['String'];
  mobile: Scalars['Boolean'];
  parameter: Parameter;
  sourceName: Scalars['String'];
  sourceNames?: Maybe<Array<Scalars['String']>>;
  sourceType: SourceType;
  unit: Scalars['String'];
  value: Scalars['Float'];
};

export type CreateUserInput = {
  expoInstallationId: Scalars['String'];
  expoPushToken?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationsInput>;
};

export type Frequency = 'never' | 'daily' | 'weekly' | 'monthly';

export type HistoryItem = {
  __typename?: 'HistoryItem';
  _id: Scalars['ID'];
  measurement: Measurement;
  userId: Scalars['ID'];
};

export type LatLng = {
  __typename?: 'LatLng';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type LatLngInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type LocalDate = {
  __typename?: 'LocalDate';
  local: Scalars['Date'];
  utc: Scalars['Date'];
};

export type LocalDateInput = {
  local: Scalars['Date'];
  utc: Scalars['Date'];
};

export type Measurement = {
  __typename?: 'Measurement';
  _id: Scalars['ID'];
  attribution?: Maybe<Array<Attribution>>;
  averagingPeriod?: Maybe<AveragingPeriod>;
  city: Scalars['String'];
  coordinates: LatLng;
  country: Scalars['String'];
  date: LocalDate;
  location: Scalars['String'];
  mobile: Scalars['Boolean'];
  parameter: Parameter;
  sourceName: Scalars['String'];
  sourceNames: Array<Scalars['String']>;
  sourceType: SourceType;
  unit: Scalars['String'];
  value: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createHistoryItem: Scalars['Boolean'];
  createUser: User;
  updateUser: User;
};

export type MutationCreateHistoryItemArgs = {
  input: CreateHistoryItemInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationUpdateUserArgs = {
  userId: Scalars['ID'];
  input: UpdateUserInput;
};

export type Notifications = {
  __typename?: 'Notifications';
  frequency: Frequency;
};

export type NotificationsInput = {
  frequency: Frequency;
};

export type Parameter =
  | 'co'
  | 'c6h6'
  | 'ox'
  | 'o3'
  | 'nh3'
  | 'nmhc'
  | 'no'
  | 'nox'
  | 'no2'
  | 'pm25'
  | 'pm10'
  | 'so2'
  | 'trs';

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
};

export type SourceType = 'government' | 'research' | 'other';

export type UpdateUserInput = {
  expoInstallationId?: Maybe<Scalars['String']>;
  expoPushToken?: Maybe<Scalars['String']>;
  notifications?: Maybe<NotificationsInput>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  expoInstallationId: Scalars['String'];
  expoPushToken?: Maybe<Scalars['String']>;
  history: Array<Maybe<HistoryItem>>;
  notifications: Notifications;
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
  Mutation: ResolverTypeWrapper<{}>;
  CreateHistoryItemInput: CreateHistoryItemInput;
  CreateMeasurementInput: CreateMeasurementInput;
  AttributionInput: AttributionInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  AveragingPeriodInput: AveragingPeriodInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  LatLngInput: LatLngInput;
  LocalDateInput: LocalDateInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Parameter: Parameter;
  SourceType: SourceType;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  CreateUserInput: CreateUserInput;
  NotificationsInput: NotificationsInput;
  Frequency: Frequency;
  User: ResolverTypeWrapper<User>;
  HistoryItem: ResolverTypeWrapper<HistoryItem>;
  Measurement: ResolverTypeWrapper<Measurement>;
  Attribution: ResolverTypeWrapper<Attribution>;
  AveragingPeriod: ResolverTypeWrapper<AveragingPeriod>;
  LatLng: ResolverTypeWrapper<LatLng>;
  LocalDate: ResolverTypeWrapper<LocalDate>;
  Notifications: ResolverTypeWrapper<Notifications>;
  UpdateUserInput: UpdateUserInput;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Boolean: Scalars['Boolean'];
  Mutation: {};
  CreateHistoryItemInput: CreateHistoryItemInput;
  CreateMeasurementInput: CreateMeasurementInput;
  AttributionInput: AttributionInput;
  String: Scalars['String'];
  AveragingPeriodInput: AveragingPeriodInput;
  Float: Scalars['Float'];
  LatLngInput: LatLngInput;
  LocalDateInput: LocalDateInput;
  Date: Scalars['Date'];
  Parameter: Parameter;
  SourceType: SourceType;
  ID: Scalars['ID'];
  CreateUserInput: CreateUserInput;
  NotificationsInput: NotificationsInput;
  Frequency: Frequency;
  User: User;
  HistoryItem: HistoryItem;
  Measurement: Measurement;
  Attribution: Attribution;
  AveragingPeriod: AveragingPeriod;
  LatLng: LatLng;
  LocalDate: LocalDate;
  Notifications: Notifications;
  UpdateUserInput: UpdateUserInput;
  CacheControlScope: CacheControlScope;
  Upload: Scalars['Upload'];
  Int: Scalars['Int'];
}>;

export type CacheControlDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = {
    maxAge?: Maybe<Maybe<Scalars['Int']>>;
    scope?: Maybe<Maybe<CacheControlScope>>;
  }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AttributionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Attribution'] = ResolversParentTypes['Attribution']
> = ResolversObject<{
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type AveragingPeriodResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AveragingPeriod'] = ResolversParentTypes['AveragingPeriod']
> = ResolversObject<{
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type HistoryItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HistoryItem'] = ResolversParentTypes['HistoryItem']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  measurement?: Resolver<
    ResolversTypes['Measurement'],
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type LatLngResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LatLng'] = ResolversParentTypes['LatLng']
> = ResolversObject<{
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
}>;

export type LocalDateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LocalDate'] = ResolversParentTypes['LocalDate']
> = ResolversObject<{
  local?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  utc?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
}>;

export type MeasurementResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Measurement'] = ResolversParentTypes['Measurement']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  attribution?: Resolver<
    Maybe<Array<ResolversTypes['Attribution']>>,
    ParentType,
    ContextType
  >;
  averagingPeriod?: Resolver<
    Maybe<ResolversTypes['AveragingPeriod']>,
    ParentType,
    ContextType
  >;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  coordinates?: Resolver<ResolversTypes['LatLng'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['LocalDate'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mobile?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  parameter?: Resolver<ResolversTypes['Parameter'], ParentType, ContextType>;
  sourceName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceNames?: Resolver<
    Array<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  sourceType?: Resolver<ResolversTypes['SourceType'], ParentType, ContextType>;
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createHistoryItem?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateHistoryItemArgs, 'input'>
  >;
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
    RequireFields<MutationUpdateUserArgs, 'userId' | 'input'>
  >;
}>;

export type NotificationsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Notifications'] = ResolversParentTypes['Notifications']
> = ResolversObject<{
  frequency?: Resolver<ResolversTypes['Frequency'], ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
}>;

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  expoInstallationId?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  expoPushToken?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  history?: Resolver<
    Array<Maybe<ResolversTypes['HistoryItem']>>,
    ParentType,
    ContextType
  >;
  notifications?: Resolver<
    ResolversTypes['Notifications'],
    ParentType,
    ContextType
  >;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Attribution?: AttributionResolvers<ContextType>;
  AveragingPeriod?: AveragingPeriodResolvers<ContextType>;
  Date?: GraphQLScalarType;
  HistoryItem?: HistoryItemResolvers<ContextType>;
  LatLng?: LatLngResolvers<ContextType>;
  LocalDate?: LocalDateResolvers<ContextType>;
  Measurement?: MeasurementResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Notifications?: NotificationsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
}>;

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<
  ContextType
>;
