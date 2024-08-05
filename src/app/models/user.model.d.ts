
interface Hobbies {
    id: number;
    name: string;
}


interface Friends {
    id: number;
    name: string;
    age: number;
}

interface Address {
    street: string;
    city: string;
    state: string;
}

export interface User {
    id:number;
    name: string;
    age: number;
    address: Address;
    hobbies: Hobbies[];
    friends: Friends[];
}
