import {
  historyItemSchema,
  linkSchema,
  stationSchema,
  userSchema
} from '@shootismoke/graphql';

import { historyItemTypeDefs } from './historyItem';
import { userTypeDefs } from './user';

export const typeDefs = [
  linkSchema,
  historyItemSchema,
  historyItemTypeDefs,
  stationSchema,
  userSchema,
  userTypeDefs
];
