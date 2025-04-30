        // Function that accepts a callback
        const greetUser = (name, callback) => {
            console.log("Hi " + name);
            callback(); // calling the callback function
        };

        // A simple callback function
        const sayBye = () => {
            console.log("Goodbye!");
        };

        // Calling the function with a callback
        greetUser("John", sayBye);