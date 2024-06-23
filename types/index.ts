export interface IPagination {
  elements: [];
  firstPage: boolean;
  lastPage: boolean;
  empty: boolean;
  elementCount: number;
  totalPages: number;
  targetPage: number;
}
