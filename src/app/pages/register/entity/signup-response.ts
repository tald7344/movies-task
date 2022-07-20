export interface SignupResponse {
    status: string;
    message: string | Array<string>;
    user?: {
        id: number,
        name: string,
        email: string,
        updated_at: string,
        created_at: string
    },
    authorisation?: { 
        token: string, 
        type: string 
    };
}