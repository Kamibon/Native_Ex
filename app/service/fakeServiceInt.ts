import { FakeService } from "./FakeService";
import { CreationPost } from "./slice";

export interface FakeServiceInt {
  getUsers(): Promise<any>;
  getPosts(): Promise<any>;
  createPost(body: CreationPost): Promise<any>;
}

export function newFakeService() {
  return new FakeService();
}
