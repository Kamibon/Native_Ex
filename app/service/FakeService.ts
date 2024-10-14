import { FakeServiceInt } from "./fakeServiceInt"

 const url = 'https://api.escuelajs.co/api/v1/'
export class FakeService implements FakeServiceInt{
   
    public getUsers(){
       return  fetch(url+'users').then(res=>res.json())
    }
    public getPosts(){
        return  fetch(url+'products').then(res=>res.json())
     }
     

}