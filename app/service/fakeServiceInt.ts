import { FakeService } from "./FakeService"
import { creationPost } from "./slice"


export interface FakeServiceInt {
    getUsers(): Promise<any>,
    getPosts(): Promise<any>,
    createPost(body: creationPost): Promise<any>
}

export function newFakeService(){
    return new FakeService()
}
