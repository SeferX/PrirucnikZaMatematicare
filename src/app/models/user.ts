export interface User {
    id: string,
    displayName: string,
    photoUrl: string,
    email: string,
    roles:{
        admin: boolean,
        moderator: boolean,
        guest: boolean
    }
}
