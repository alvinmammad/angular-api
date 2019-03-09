import { Post } from './post.interface';

export interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
  post: Post;
}
