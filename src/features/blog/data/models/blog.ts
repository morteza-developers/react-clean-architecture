import { BlogEntity } from "features/blog/domain/entities/blogs";

export class BlogModel extends BlogEntity {
  static toEntity(json: any): BlogEntity {
    return {
      id: json._id,
      catsId: json.catsId,
      tags: json.tags,
      title: json.title,
      context: json.context,
      fileUrl: json.fileUrl,
      image_url: json.image_url,
      projectId: json.projectId,
      service: json.service,
      userId: json.userId,
      createDate: json.createDate,
    };
  }
}
