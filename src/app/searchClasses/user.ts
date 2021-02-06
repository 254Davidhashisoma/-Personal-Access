export class User {
    constructor(
        public login: string,
        public avatar_url: string,
        public followers: number,
        public following: number,
        public bio: string,
        public location: string,
        public email: string,
        public public_repos: string,
    ) {

    }
}
