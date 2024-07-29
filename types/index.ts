export interface IPagination {
  elements: [];
  firstPage: boolean;
  lastPage: boolean;
  empty: boolean;
  elementCount: number;
  totalPages: number;
  targetPage: number;
}

export interface ISportRecord {
  id: string;
  sportName: string;
  sportTime: string;
  sportValue: number;
  recordDate: string;
}
