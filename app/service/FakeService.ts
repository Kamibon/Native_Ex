import { FakeServiceInt } from "./fakeServiceInt"
import { creationPost } from "./slice"

 const url = 'https://api.escuelajs.co/api/v1/'
export class FakeService implements FakeServiceInt{
   
    public getUsers(){
       return  fetch(url+'users').then(res=>res.json())
    }
    public getPosts(){
        return  fetch(url+'products').then(res=>res.json())
     }
     public createPost( body: creationPost): Promise<any> {
         return fetch('https://jsonplaceholder.typicode.com/posts/', {method:'POST', body:JSON.stringify(body)}).then(res=>res.json())
     }
     

}