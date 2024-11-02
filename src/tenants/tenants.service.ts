import { Injectable } from '@nestjs/common';
import { Connection, createConnection } from 'mongoose';

@Injectable()
export class TenantsService {
  private connections: { [key: string]: Connection } = {}; // Cache connections by tenant

  async getTenantConnection(contactNumber: string): Promise<Connection> {
    if (this.connections[contactNumber]) {
      return this.connections[contactNumber]; // Return cached connection
    }

    const connection = await this.createConnection(
      process.env.MONGO_URI + contactNumber,
    );

    this.connections[contactNumber] = connection; // Cache connection
  }

  private async createConnection(uri: string): Promise<Connection> {
    try {
      // Mongoose's createConnection method establishes a separate connection instance
      const connection = createConnection(uri);
      console.log(`Connected to tenant database at URI: ${uri}`);
      return connection;
    } catch (error) {
      console.error(
        `Failed to connect to tenant database at URI: ${uri}`,
        error,
      );
      throw new Error('Could not establish a database connection');
    }
  }
}
