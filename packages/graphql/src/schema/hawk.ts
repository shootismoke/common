import gql from 'graphql-tag';

export const hawkSchema = gql`
  type TimestampMessage {
    ts: Int!
    tsm: String!
  }
`;
