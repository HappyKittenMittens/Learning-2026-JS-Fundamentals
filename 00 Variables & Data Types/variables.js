    // Variables

        // Testing out various stuff and lessons regarding variables.

        // Another update for testing git

        // How to update git via terminal, adding file, then committing with a message, and push to repo.
        // git add index.html
        // git commit -m "message"
        // git push

        // Create a variable, then assign a string value to it, and log it in the console.
        let message;
        message = 'Hi there!';
        console.log(message);

        let user = 'John Doe', age = 25, message2 = 'Hi, hey, hello!';

        // Multiline verison of the same code. Already declared, not using let in front of the variables.
        user = 'John Doe';
        age = 25;
        message = 'Hi, hey, hello!';
        console.log(message);

        // Third alternative
        user = 'John Doe',
            age = 25,
            message = 'Hi, hey, hello!';

        // Fourth alternative, comma in front
        user = 'John Doe'
            , age = 25
            , message = 'Hi, hey, hello!';  

        // Additional note on let/const vs var. 
        // var used to be variables in old js. Using let and const is better. Var has some quirks, like being able to redeclare the same variable, which can lead to bugs. Var is function scoped, while let and const are block scoped.
    
        // Copying hello to message variable.
        let hello = 'Hello, World!';
        message = hello;
        alert(message);
        alert(hello);

        // Valid
        let userName;
        let test123;

        let $ = 1;
        let _ = 2;
        alert($ + _); // == 3
 
        // Invalid
        //let 1a; // Cannot start with a number
        // let my-name; // Cannot contain hyphens, as they are interpreted as minus signs

        // Case matters. apple and APPLE are different variables.

        // Reserved names
        // let let = 5; // Cannot use reserved keywords as variable names. This will cause a syntax error.
        //let return = 5; // Cannot use reserved keywords as variable names. This will cause a syntax error.
        let lett;
        let returnn;

        // Use Strict saves mistake of undelcaring variables, which worked before.
        num = 5; // This will cause an error in strict mode, because num is not declared with let, const, or var.

        const myBirthday = '15.02.1945'; // Cannot reassign a const variable. This will cause an error.
        // myBirthday = '16.02.1945'; // This will cause an error, because myBirthday is a const variable and cannot be reassigned.

        let admin, name;
        name = 'Cake';
        admin  = name;
        alert(admin);

        let planet = 'Earth';
        let userName2 = 'Knights Who Say NII';
        alert("User " + userName2 + " lives on planet " + planet + ".");

        
        // Summary Task / Challenge            
        /* 
            1. Declare two variables: admin and name.
            2. Assign the value "John" to name.
            3. Copy the value from name to admin.
            4. Show the value of admin using alert (must output “John”). 
        */

        let admin2, name2;
        name2 = 'Zz';
        admin2 = name2;
        alert(admin2);

        // Testing out eventhandlers and getting elements by id. Dynamically changing the text values.
        document.getElementById('clickText').addEventListener('click', function() {
            document.getElementById('clickText').innerText = 'You clicked the text!';
        });

        // Add listener to button, change text of paragraph and number of second paragraph.
        document.getElementById('clickButton').addEventListener('click', function() {
            document.getElementById('clickText').innerText = 'You clicked the button!';

            document.getElementById('number1').innerText = 'Magic number suddenly appears: ' + 42;
        
            let admin, name;
            name = 'Jane';
            admin  = name;
            alert(admin);

            let planet = 'Earth';
            let userName = 'Joe';
            alert("User " + userName + " lives on planet " + planet + ".");
        });

    