/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/


// Тут доречніше використати Literal Type - type Gender = "male" | "female", але якщо це задача на уважність то ОК;
type Mele = "male";
type Female = "female"

type Gender = Mele | Female;

let myGender: Gender;

export {};
