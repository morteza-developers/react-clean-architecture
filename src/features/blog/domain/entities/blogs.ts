export class BlogEntity {
  public id: number;
  public catsId: string[];
  public tags: string[];
  public service: string;
  public title: string;
  public context: string;
  public fileUrl: string;
  public image_url: string;
  public projectId: number;
  public userId: number;
  public createDate: Date;
  constructor(data: BlogEntity) {
    this.id = data.id;
    this.service = data.service;
    this.catsId = data.catsId;
    this.tags = data.tags;
    this.title = data.title;
    this.context = data.context;
    this.fileUrl = data.fileUrl;
    this.image_url = data.image_url;
    this.projectId = data.projectId;
    this.userId = data.userId;
    this.createDate = data.createDate;
  }
}
