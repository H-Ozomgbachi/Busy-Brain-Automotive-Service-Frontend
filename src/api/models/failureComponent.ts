export interface FailureComponentData {
  id: number;
  title: string;
  assemblyOrSystemName: string;
  createdAt: string;
}

export interface AllFailureComponent {
  pageNumber: number;
  documentCount: number;
  pageSize: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
  data: FailureComponentData[];
}
