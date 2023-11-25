let some: string; // з any теж би запрацювало, але втратило б безпечність 
some = 'Text';
let str: string;
str = some;

export {};