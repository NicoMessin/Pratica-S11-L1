// 1)
// stringa, numero, booleano, null, undefined e any.

// 2)
const name : string = 'Niccolò'
const age : number = 19
const studyingTypescript : boolean = true

// 3)
const greet = (name: string): string => { 
    return "Ciao " + name }
    greet(giorgio)

// 4)
const sum = (a: number, b: number): number => { return a + b } 
sum()

// 5) 
const prezzoTotale = (price: number): number => {
    const iva:number = (price/100)*22
    return iva + price
}
console.log(prezzoTotale(20))
// 6)
const stringheConcatenate = (s1:string, s2:string): string=>{
    return s1 + s2

}
stringheConcatenate('Come',' Stai?')

// 7) Un Type Union in TypeScript è un tipo che permette a una variabile di contenere più tipi diversi.

type valoreFunzione = string | number;

const variabile: valoreFunzione = 3;

// 8)
const valore: number | null | undefined = undefined

// 9)
type GiornoDellaSettimana = "Lunedì"| "Martedì"| "Mercoledì"| "Giovedì"| "Venerdì"| "Sabato"| "Domenica";
const giorno: GiornoDellaSettimana = 'Lunedì'
// 10)
const numbers: number[] = [1, 2, 3];
// const numbers: Array<number> = [1, 2, 3];

// 11)
const tupla: [string, string, string, number, number] = ['ciao', 'arrivederci', 'buongiorno', 3, 4]
// 12) Interface definisce oggetti e può essere riaperta, type è più flessibile ma non può essere riaperto.
// 13) 
interface Persona {
    firstname: string;
    lastname: string;
    age: number;
}
// 14)
interface Utente {
    email: string;        
    telefono?: string;    
}
// 15)
interface Studente {
    nome: string;
    voto: number;
}

// 16)
interface Veicolo {
    marca: string;
    modello: string;
    anno: number;
}

// 17) Oggetto che implementa Auto
interface Auto extends Veicolo {
    numeroPorte: number;
}
const miaAuto: Auto = {
    marca: "Fiat",
    modello: "Panda",
    anno: 2020,
    numeroPorte: 5
};
// 18)
// I Generics permettono di creare tipi riutilizzabili e flessibili, in cui il tipo concreto viene specificato solo al momento dell’uso.
// 19) Si
// 20)
interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}