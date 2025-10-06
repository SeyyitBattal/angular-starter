export const products:Products[] = [
    {id:"21EV5", name:"Monitor", price: 2000},
    {id:"778DS", name:"SSD", price: 1000},
    {id:"VF838", name:"Keyboard", price: 500},
    {id:"3RD56", name:"Headphone", price: 600},
    {id:"46N2N", name:"Smart Glass", price: 1500}
];

export interface Products {
    id: string;
    name: string;
    price: number;
}