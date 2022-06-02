import 'reflect-metadata'
import { Connection, getConnectionManager } from 'typeorm'
import { Product } from './entities/Product'

const options = {
  default: {
    type: 'mysql',
    host: process.env.DB_HOST || 'appstore-mysql.ci0wqj9rijgh.us-east-2.rds.amazonaws.com',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USERNAME || 'appstore',
    password: process.env.DB_PASSWORD || 'appstore#2022',
    database: process.env.DB_DATABASE_NAME || 'appstore',
    synchronize: true,
    entities: [Product]
  }
}

const entitiesChanged = (prevEntities: any[], newEntities: any[]): boolean => {
  if (prevEntities.length !== newEntities.length) return true

  for (let i = 0; i < prevEntities.length; i++) {
    if (prevEntities[i] !== newEntities[i]) return true
  }

  return false
}

const updateConnectionEntities = async (connection: Connection, entities: any[]) => {
  // @ts-ignore
  if (!entitiesChanged(connection.options.entities, entities)) return

  // @ts-ignore
  connection.options.entities = entities

  // @ts-ignore
  connection.buildMetadatas()

  if (connection.options.synchronize) {
    await connection.synchronize()
  }
}

export const ensureConnection = async (name: string = 'default'): Promise<Connection> => {
  const connectionManager = getConnectionManager()

  if (connectionManager.has(name)) {
    const connection = connectionManager.get(name)

    if (!connection.isConnected) {
      await connection.connect()
    }

    if (process.env.NODE_ENV !== 'production') {
      // @ts-ignore
      await updateConnectionEntities(connection, options[name].entities)
    }

    return connection
  }

  // @ts-ignore
  return await connectionManager.create({ name, ...options[name] }).connect()
}

export default ensureConnection
