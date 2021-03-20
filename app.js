const toDoList = ['clean litter box','buy food','do homework'];
let input;

while (input !== 'quit' && input !== 'q') {

    input = prompt('What would you like to do?');

    if (input === 'new') {
        let newInput = prompt('Enter new to do item');

        if (newInput !== null) {
            toDoList.push(newInput);
            console.log(`${newInput} added to the to do list.`);

        } else input = 'new';
    }

    else if (input === "list") {
        console.log('***  TO DO LIST ***');

        for (let i = 0; i < toDoList.length; i++) {
            console.log(`${i}: ${toDoList[i]}\n`);
        }

        console.log('*******************');  
    }

    else if (input === 'delete') {
        let deleteInput = prompt('Enter the index number of to do item you want to delete.');
        toDoList.splice(deleteInput, 1); // removes element at index input by user
        console.log('Todo Item Removed');
        input = 'delete';

        // deleteInput = parseInt(deleteInput);

        // if (deleteInput === 'number') {
        //     toDoList.splice(deleteInput, 1); // removes element at index input by user
        //     console.log('Todo Item Removed');

        // } else input = 'delete';
    }

    else continue;
}

console.log('Okay goodbye!');