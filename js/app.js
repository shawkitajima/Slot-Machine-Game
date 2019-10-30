/*----- constants -----*/
/*----- app's state (variables) -----*/

    // We need an array to hold the slot values
    // We need an array to hold the "winning" allocation combinations
    // we need a number to hold the number of coins



/*----- cached element references -----*/

    // Each of the "Stop" buttons. Let's go ahead and put it on the parent wrapper for the "Stop" buttons
    // The "Start" Button
    // The "PayPal" button


/*----- event listeners -----*/

    // Clicking on the "Stop" buttons stops the random animation of slots, and assigns the values to "myArray". It also disables that "Stop" button.
    // Clicking the "Start" button runs the init function
    // Clicking the "PayPal" button sends money to Shaw Kitajima

/*----- functions -----*/

    // init => empties the "myArray" array, enables the "Stop" button event listener 
    // render => This bad boy starts the random animation of slots, and runs the check-for-winner function
    // check-for-winner => It loops through the "winning" array and checks if the indeces it has matches "myArray"
    // update-coins => Passed if someone wins, then we are going to increase coins based on which combination won
    // IF coin count === 0, disable the start button
    // Play "What's new pussycat by Tom Jones"