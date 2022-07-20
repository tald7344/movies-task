export interface LoginResponse {
    authorisation: { 
        token: string, 
        type: string 
    };
    status: string;
}