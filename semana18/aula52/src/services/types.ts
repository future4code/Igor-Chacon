export type AuthenticationData = {
    id: string,
    role: string
}

export enum userRole {
    ADMIN = 'admin',
    NORMAL = 'normal'
}

export type user = { 
    id: string, 
    name: string, 
    email: string, 
    cypherText: string, 
    role: string 
}

export type addressInfo = {
    street: string,
    neighbourhood: string,
    city: string,
    state: string
}