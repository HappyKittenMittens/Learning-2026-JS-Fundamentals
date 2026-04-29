/*///////////////////////////////////////////////////////////////////////
/
/                      Datatypes -- NaN, Infinity                
/
///////////////////////////////////////////////////////////////////////*/

let n = 25;
n = 25.2123; // Number

alert(n);

alert ( 1 / 0); // Infinity

alert ( "Not a number" / 2); // NaN, represents a non number value.

alert( NaN + 1);
alert( 3 * NaN);
alert( "not a number" / 2 - 1 );

// If there is a NaN anywhere, it spreads to the entire expression. NaN ** 0, only exception, is 1.



/*///////////////////////////////////////////////////////////////////////
/
/                      BigInt -- Numbers max size                     
/
///////////////////////////////////////////////////////////////////////*/
console.log(9007199254740991); // Larger numbers can't be stored in number.

// To resolve this

const bigInt = 900719925474090583490584390583490534991n; 
// n at the end means it's a BigInt. Which can store much larger numbers vs numbers variable.

// Rarely needed, but can be useful in certian cases.



/*///////////////////////////////////////////////////////////////////////
/
/                      String, Quotes, & Backticks             
/
///////////////////////////////////////////////////////////////////////*/

let greeting = "Hello";

// All three are valid ways to create a string. Backticks are more powerful, as they allow for interpolation and multiline strings.

let name = "John";
greeting = `Hello, ${name}!`; // Interpolation, allows us to embed expressions inside string literals.
console.log(greeting); // Output: Hello, John!

let multiline = `This is a
multiline string.`;
console.log(multiline); // Output: This is a
                        //         multiline string.

// Backticks are also useful for creating complex strings, like HTML templates.

let html = `
    <div>
        <h1>${name}</h1>
        <p>This is a paragraph.</p>
    </div>
`;
console.log(html);  

alert(`Hello, ${name}`);