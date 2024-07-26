export const CapacitorSQLite = {
    checkConnectionsConsistency: jest.fn().mockResolvedValue({ result: true }),
    isConnection: jest.fn().mockResolvedValue({ result: false }),
    createConnection: jest.fn().mockResolvedValue({
      open: jest.fn().mockResolvedValue(undefined),
      execute: jest.fn().mockResolvedValue(undefined),
      close: jest.fn().mockResolvedValue(undefined),
      executeSet: jest.fn().mockResolvedValue(undefined),
      run: jest.fn().mockResolvedValue(undefined),
      query: jest.fn().mockResolvedValue(undefined),
      delete: jest.fn().mockResolvedValue(undefined),
    }),
    retrieveConnection: jest.fn().mockResolvedValue({
      open: jest.fn().mockResolvedValue(undefined),
      execute: jest.fn().mockResolvedValue(undefined),
      close: jest.fn().mockResolvedValue(undefined),
      executeSet: jest.fn().mockResolvedValue(undefined),
      run: jest.fn().mockResolvedValue(undefined),
      query: jest.fn().mockResolvedValue(undefined),
      delete: jest.fn().mockResolvedValue(undefined),
    }),
  };
  
  export const SQLiteConnection = jest.fn(() => CapacitorSQLite);
  export const SQLiteDBConnection = jest.fn(() => CapacitorSQLite);