export type authenticationData = {
    id: string
}


export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
};

export type recipe = {
    id: string,
    photo: string,
    description: string,
    type: string,
    createAt: string,
    authorId: string
};

export const usersTableName = 'labook_users';
export const postsTableName = 'labook_posts';


export interface SignupInputDTO {
    name: string,
    email: string,
    password: string
}

export interface LoginInputDTO {
    email: string,
    password: string
}

export function toUserModel(obj: any): User {
    return obj && {
        id: obj.id,
        email: obj.email,
        name: obj.name,
        password: obj.password
    }
}