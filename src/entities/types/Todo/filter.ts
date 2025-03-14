export type Filter = {
  sorting?: Sorting
  completed?: boolean
  status?: string
  search?: string
}

export enum Sorting {
  ASC = 'asc',
  DESC = 'desc',
}
