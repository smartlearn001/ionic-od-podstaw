import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { CapacitorSQLite } from "@capacitor-community/sqlite";

import { SqliteService } from './sqlite.service';

jest.mock('@capacitor-community/sqlite');

describe('SqliteService', () => {
  let spectator: SpectatorService<SqliteService>;
  const createService = createServiceFactory(SqliteService);

  beforeEach(() => {
    const jeepSqliteElement = document.createElement('jeep-sqlite');
    document.body.appendChild(jeepSqliteElement);

    spectator = createService();
  });

  afterEach(() => {
    const jeepSqliteElement = document.querySelector('jeep-sqlite');
    if (jeepSqliteElement) {
      document.body.removeChild(jeepSqliteElement);
    }
  });

  it('should be created', () => {
    const service = spectator.service;
    expect(service).toBeTruthy();
  });

  it('should initialize the database', async () => {
    const service = spectator.service;

    await service.init();

    expect(service['sqlite'].checkConnectionsConsistency).toHaveBeenCalled();
    expect(service['sqlite'].isConnection).toHaveBeenCalledWith('notesdb', false);
    expect(service['sqlite'].createConnection).toHaveBeenCalledWith(
      'notesdb',
      false,
      'no-encryption',
      1,
      false
    );
  });

  it('should create tables', async () => {
    const service = spectator.service;
    const dbMock: any = await CapacitorSQLite.createConnection({ });

    await service.init();

    expect(dbMock.execute).toHaveBeenCalledWith(expect.stringContaining('CREATE TABLE IF NOT EXISTS notes'));
  });
});