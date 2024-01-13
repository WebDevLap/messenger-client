import { homeAxios } from "@shared/api";

export default class PostService {
  static async create(post: FormData) {
    return await homeAxios.post("/api/posts/", post);
  }
}
