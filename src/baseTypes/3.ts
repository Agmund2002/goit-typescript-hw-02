let some: unknown; // з any теж би запрацювало, але втратило б безпечність
some = "Text";
let str: string;
if (typeof some === "string") {
  str = some;
}

export {};
