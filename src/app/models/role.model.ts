// export class Role{
//     constructor(
//         public admin?: boolean, 
//         public moderator?: boolean, 
//         public guest?: boolean
//         ) { }
// }

export interface Roles { 
    guest?: boolean;
    moderator?: boolean;
    admin?: boolean;
 }