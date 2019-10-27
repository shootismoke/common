import { connect } from 'mongoose';

/**
 * A function for connecting to MongoDB, taking a single paramater of the
 * connection string
 *
 * @param uri - MongoDB connection string
 */
export async function connectToDatabase(uri: string): Promise<void> {
  await connect(
    uri,
    { useNewUrlParser: true }
  );
}
