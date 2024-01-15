export class GetAllBlogsParams {
  limit?: number;
  page?: number;
  static toJson(d: GetAllBlogsParams): object {
    return {
      limit: d.limit,
      page: d.page,
    };
  }
}
