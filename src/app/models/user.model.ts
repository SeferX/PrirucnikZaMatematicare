import { Roles } from './role.model';

// export class User {
//     constructor(
//         public uid?: string,
//         public displayName?: string,
//         public photoURL?: string,
//         public email?: string,
//         public roles?: Role) { }
// }

  
export interface User {
    uid?: string
    email?: string
    photoURL?: string
    displayName?: string
    roles?: Roles
}
