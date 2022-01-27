//const a: string = "world";
/*const getFullName = (name : string,surname: string): string =>{
    return name + " " + surname;
}
console.log(getFullName("My","Name"));*/
/*
interface IUser{
    name: string;
    age?: number; //not mandatory
    getMessage(): string
}
const user1: IUser = {
    name : "Monster",
    age : 30,
    getMessage(){
        return "Hello User 1";
    },
};
const user2:IUser = {
    name : "Hello",
    //age : 24,
    getMessage(){
        return "Hello User 2";
    },
};
*/
//union operator
/*
interface UserInterface{
    name:string
    surname:string
}
let username: string = "alex";
let pageNumber: string|number = "1";
let errorMessage: string|null=null;
let user : UserInterface|null = null;
*/
//Type aliases
//type ID = string;
//void returntype
/*
const doSomething = ()=>{
    console.log("doSomething");
};*/
//any
//let foo:any = "foo";
//unknown
/*
let vAny: any = 10;
let vUnknown: unknown = 10;
let s1:string = vAny;
let s2:string = vUnknown;->error
*/
//Type Assertion
//let s2: string = vUnknown as string
//DOM
//const someElement = document.querySelector(".foo") as HTMLInputElement;
//console.log("someElement",someElement.value);
/*
const someElement = document.querySelector(".foo")
someElement.addEventListener("blur",(event)=>{
const target = event.target as HTMLInputElement
console.log("event",target.value);
});
*/
//class
/*
interface UserInterface{
    getFullname(): string;
}
class User implements UserInterface{
    private firstName: string;
    private lastName: string;
    readonly unchangableName: string;
    constructor(firstName: string,lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullname(): string{
        return this.firstName+' '+this.lastName
    }
}
const user = new User("Monster","lessons");
console.log(user.getFullname())

//Inheritance
class Admin extends User{
private editor: string
setEditor(editor: string): void{
    this.editor = editor
}
getEditor():string{
    return this.editor
}
}
const admin = new Admin("Foo","Bar")
console.log(admin.setEditor("Hello"))
*/
//generics
/*
const addId = <T extends object>(obj: T) =>{
    const id = Math.random().toString(16)
    return{
        ...obj,
        id,
    };
};
interface UserInterface<T>{
    name: string;
    data: T;
}
const user: UserInterface<{meta: string}> = {
    name: "Jack",
    data:{
        meta:"foo",
    },
};
*/
/*
enum Status{
    NotStarted,
    InProgress,
    Done,
}
let notStartedStatus: Status = Status.NotStarted;
notStartedStatus = Status.Done;
console.log(Status.InProgress);//1
*/
/*
enum Status{
    NotStarted= "NotStarted",
    InProgress="InProgress",
    Done="Done",
}
*/ 
