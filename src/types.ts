export interface IBooks {
    _id: string,
    title: string,
    author: string,
    genre: "FICTION"|"NON_FICTION"|"SCIENCE"| "HISTORY"| "BIOGRAPHY"| "FANTASY",
    isbn: string,
    description? : string,
    copies : number,
    available: boolean,
    deductCopies: (quantity: number) => void;
};

export interface IBorrow {
    book : string,
    quantity: number,
    dueDate: Date
};
