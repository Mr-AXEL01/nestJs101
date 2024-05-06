import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        { 
            id: 1, 
            name: "John Doe", 
            email: "john@example.com", 
            role: "ADMIN" 
        },

        { 
            id: 2, 
            name: "Jane Smith", 
            email: "jane@example.com", 
            role: "MANAGER" 
        },

        { 
            id: 3, 
            name: "Alice Johnson", 
            email: "alice@example.com", 
            role: "DEVELOPER" 
        },

        { 
            id: 4, 
            name: "Bob Brown", 
            email: "bob@example.com", 
            role: "DEVELOPER" 
        },

        { 
            id: 5, 
            name: "Emily Davis", 
            email: "emily@example.com", 
            role: "DEVELOPER" 
        }
    ];


    findAll(role?: 'DEVELOPER' | 'MANAGER' | 'ADMIN') 
    {
        if(role) {
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    


}
