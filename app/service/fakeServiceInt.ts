import { FakeService } from "./FakeService"


export interface FakeServiceInt {
    getUsers(): Promise<any>,
    getPosts(): Promise<any>
}

export function newFakeService(){
    return new FakeService()
}
