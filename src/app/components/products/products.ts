export const products:Products[] = [
    {id:"21EV5", name:"Monitor", price: 2000, available: true},
    {id:"778DS", name:"SSD", price: 1000, available: true},
    {id:"VF838", name:"Keyboard", price: 500, available: false},
    {id:"3RD56", name:"Headphone", price: 600, available: true},
    {id:"46N2N", name:"Smart Glass", price: 1500, available: false},
    {id:"43M2N", name:"Smart Pencil", price: 500, available: true},
];

export interface Products {
    id: string;
    name: string;
    price: number;
    available: boolean;
}