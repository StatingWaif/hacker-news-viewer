export interface IStory {
  id: number;
  title: string;
  rating: number;
  author: string;
  comment_count: number;
  date: Date;
  url: string;
}

export interface IComment {
  id: number;
  story_id: number;
  parent_comment_id: number | null;
  author: string;
  text: string;
  date: Date;
}
