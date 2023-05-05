export interface ResponseLoginUser {
    client: {
        avatar: string;
        email: string;
        firstName: string;
        id: number;
        lastName: string;
    }
    token: string;
}