export class GetAllBlogsParams {
  limit?: number;
  page?: number;

  constructor(data: GetAllBlogsParams) {
    this.limit = data.limit;
    this.page = data.page;
  }

  
}
