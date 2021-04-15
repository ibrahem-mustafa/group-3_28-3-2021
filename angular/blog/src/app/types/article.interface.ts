export interface ARTICLE_INTERFACE {
  _id: string;
  title: string;
  content: string;
  publisher: {
    id: string;
    name: string;
  };
  createdAt: string
}
