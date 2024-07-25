import { Injectable } from "@angular/core";
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from "@capacitor-community/sqlite";

const DB_NOTES = 'notesdb';

@Injectable({
    providedIn: 'root'
})
export class SqliteService {
    private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
    db!: SQLiteDBConnection;

    async init(): Promise<void> {
        if (this.db) return;

        const retCC = (await this.sqlite.checkConnectionsConsistency()).result;
        let isConn = (await this.sqlite.isConnection(DB_NOTES, false)).result;

        console.log({
            retCC, isConn
        });

        if (retCC && isConn) {
            this.db = await this.sqlite.retrieveConnection(DB_NOTES, false);
        } else {
            this.db = await this.sqlite.createConnection(
                DB_NOTES,
                false,
                "no-encryption",
                1,
                false
            );
        }

        await this.db.open();
      
        await this.createTables();
    }

    private async createTables(): Promise<void> {
        await this.db.execute(`
          CREATE TABLE IF NOT EXISTS notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
          );
        `);
      }
}