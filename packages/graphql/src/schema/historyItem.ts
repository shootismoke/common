import { gql } from 'apollo-server-micro';

export const historyItemSchema = gql`
  type HistoryItem {
    _id: ID!
    createdAt: Date!
    rawPm25: Float!
    stationId: ID!
  }

  input CreateHistoryItemInput {
    universalId: ID!
    rawPm25: Float!
    userId: ID!
  }
`;