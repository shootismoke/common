import gql from 'graphql-tag';

export const hawkSchema = gql`
	type HawkTimestampMessage {
		ts: Int!
		tsm: String!
	}
`;
