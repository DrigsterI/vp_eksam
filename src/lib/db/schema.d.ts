import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Varv = {
    id: Generated<number>;
    name: string;
    mehed: number;
    naised: number;
};
export type DB = {
    Varv: Varv;
};
