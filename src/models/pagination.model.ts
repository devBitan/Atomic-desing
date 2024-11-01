export interface IPageable {
    pageNumber: number;
    pageSize:   number;
    sort:       ISort;
    offset:     number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface ISort {
    sorted:   boolean;
    unsorted: boolean;
    empty:    boolean;
}

export interface IPaginationRequest {
    page: number;
    size: number;
}