export type SignupForm = {
    name: string;
    email: string;
    password: string;
    confirmation: string;
    terms: boolean;
    subscribe: boolean;
}

export type LoginForm = {
    email: string,
    remember: boolean,
    password: string,
}
export type InvestmentsForm = {
    search: string,
    duration : number,
    partner: string,
    peers: string,
}

export type SelectOption = {
    // [Property in keyof Type]: Type[Property];
    [key : string] : string | boolean | number;
};

export type Duration = SelectOption & {
    days: number,
}

export type Partner = SelectOption &{
    name: string
}

export type Peer = SelectOption & {
    range: string
}

// export type SelectOption<Type> = {
//     // [Property in keyof Type]: Type[Property];
//     // [key : string] : string | boolean | number;
// };

// export type DurationOption = SelectOption<Duration>;


// export interface SelectOption{

// }

// export interface Duration extends SelectOption{
//     days: number
// }
