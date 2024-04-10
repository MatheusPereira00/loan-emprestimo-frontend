export interface Emprestimo {
    age: number,
    cpf: string,
    name: string,
    income: number,
    location: string
}

export interface Response {
    customer: string;
    loans: LoanResponse[];
}

export interface LoanResponse {
    type: LoanType;
    interestRate: number;
}

export enum LoanType {
    PERSONAL,
    GUARANTEED,
    CONSIGNMENT
}