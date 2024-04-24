import { $host } from ".";
import { IComment, IStory } from "../Interfaces";

// export const getItems = async (count?: number): Promise<IItem[]> => {
//   const items: IItem[] = [];
//   const ids: number[] = await fetch(
//     "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty"
//   )
//     .then((res) => res.json())
//     .then((ids) => ids.slice(0, count ?? 5))
//     .catch(console.log);

//   for (const id of ids) {
//     const item: IItem = await fetch(
//       `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
//     ).then((res) => res.json());
//     items.push(item);
//   }

//   return Promise.all(items);
// };

// export const getItemById = async (id: number | string) => {
//   const item: IItem = await fetch(
//     `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
//   ).then((res) => res.json());
//   return item;
// };

export const getStoryById = async (id: number): Promise<IStory> => {
  return $host.get(`stories/${id}`).then((data) => data.data);
  // .catch(console.log);
};

export const getComments = async (id: number): Promise<IComment[]> => {
  return $host.get(`stories/${id}/comments`).then((response) => response.data);
  // .catch(console.log);
};

export const getReplies = async (id: number): Promise<IComment[]> => {
  return $host.get(`comments/${id}/replies`).then((response) => response.data);
  // .catch(console.log);
};

export const getStories = async (): Promise<IStory[]> => {
  return $host.get("stories").then((response) => response.data);
  // .catch(console.log);
};

export const addComment = async (
  story_id: number,
  parent_comment_id: number | null,
  author: string,
  text: string
) => {
  const postData = { story_id, parent_comment_id, author, text };
  return $host.post(`comments/add`, postData);
};
