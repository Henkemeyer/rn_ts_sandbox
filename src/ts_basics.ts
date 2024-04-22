let Name: string;

Name = "Tyler";

type User = {
    id: number,
    name: String,
    email: String,
    isAdmin: boolean
    age: string | number
};

let user: User;

user = {
    id:1, 
    name:Name, 
    email:"123@gmail.com", 
    isAdmin:true,
    age:31
};

let hobbies: String[];

hobbies = ['Sports', 'Cooking', 'Reading']

type AddFn = (a:number, b:number)=> number;

function add(a: number, b: number) {
    const result = a+b;
    return result
}

function calculate(a: number, b: number, calcFn: AddFn) {
    calcFn(a,b);
}

calculate(3,7,add);

interface Credentials {
    password: string,
    email: string
}

let creds: Credentials;

creds = {
    password: 'abc3',
    email: 'web@art.com'
}

class AuthCredentials implements Credentials {
    email = 'A'
    password = 'B'
    username = ''
}

function login(credentials: Credentials) {
    return credentials.email
}

login(new AuthCredentials());

type Admin = {
    permissions: string[]
}

type AppUser = {
    userName: string
}

type AppAdmin = Admin & AppUser;

let admin: AppAdmin;

admin = {
    permissions: ['login'],
    userName: 'Max'
}

interface PII {
    email: string
    phone: string
}

interface UserInfo {
    name: string
    id: number
}

interface PIIUserInfo extends PII, UserInfo {}

let userProfile: PIIUserInfo

userProfile = {
    name: 'Tyler',
    id: 1,
    email: '123@email.co',
    phone: "Phone #"
}

type Role = 'admin' | 'user' | 'editor';

let role: Role

//role = ''  Errors cause it's not in the list
//role = 'Admin'  Also errors cause it's case sensitive

function performAction(action: string | number, role: Role) {
    if (role === 'admin' && typeof action === 'string') {
        // Do Something
    } else {
        // Do Something Else
    }
}

function addMember(u: User | Admin) {
    if ('permissions' in u) {
      // do something
    }
}

let roster: Array<User>

roster = [{name:'Tyler',id:1,email:"sumEmail",age:31,isAdmin:true}]
roster = [user]

type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void;
}

const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data);
    }
}

const userStorage: DataStorage<User> = {
    storage: [],
    add(user) {
        this.storage.push(user);
    }
}

function merge<T, U> (a: T, b: U) {
    return {
        ...a,
        ...b
    }
}

const userC = merge<{ name: string }, { age: number }>(
    { name: "Max"},
    { age: 34}
)

userC.age = 32;
user.email
// userC.age = "abc"  Fails because TS preserves types