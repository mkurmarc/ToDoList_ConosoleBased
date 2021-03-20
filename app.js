let toDoList = [];
let input = prompt('What would you like to do?');

while (input !== 'quit') {

    if (input === 'new') {
        let newInput = prompt('Enter new to do item');

        if (newInput !== null) {
            toDoList.push(newInput);
            console.log('${newInput} added to the to do list.');

        } else input = 'new';
    }

    else if (input === "list") {
        console.log('***  TO DO LIST ***');

        for (let i = 0; i < toDoList.length(); i++) {
            console.log('${i}: ${toDoList[i]}\n');
        }

        console.log('*******************');  
    }
}