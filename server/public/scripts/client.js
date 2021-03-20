$( document ).ready( onReady );

function onReady(){
    console.log( 'in JQ' );
    // put click handlers here
    $( '#addTaskButton' ).on( 'click', addTask );
    $( '#taskOut').on('click', '.completedTaskButton', completeTask );
    $( '#taskOut').on('click', '.deleteTaskButton', deleteTask );
}// end onready

// create function to send data to server
function addTask(){
    console.log( 'in addTask' );
    // get input and package into an object
    let isComplete = false;
    if ($( '#completedIn').val() === 'complete' ){
        isComplete = true;
    }
    let objectToSend = {
        task: $( '#taskIn' ).val(),
        completed: isComplete
    }
    // send to server using ajax POST
    $.ajax({
        method: 'POST',
        url: '/todo',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from post with:', response );
        getTask();
        emptyInput();
    }).catch( function( err ){
        alert( 'error adding item to db' );
        console.log( err );
    })// end ajax POST
}// end addTask

// creat function to get data from server
function getTask(){
    console.log( 'in getTask' );
    // make an ajax call
    $.ajax({
        method: 'GET',
        url: '/todo'
    }).then( function( response ){
        //display tasks on dom
        console.log( 'back from GET:', response );
        let el = $( '#taskOut' );
        el.empty();
        for (let i = 0; i < response.length; i++) {
            let completedHTML= `<button data-id="${response[i].id}" class="completedTaskButton">Completed</button>`;
            // change the display to just text if completed
            if( response[i].completed ){
                completedHTML = "COMPLETED";
            }
            el.append( `<tr><td>${response[i].task}</td><td>
            <button data-id="${response[i].id}" class="deleteTaskButton">Delete</button></td>
            <td>${ completedHTML }</td></tr>`);
        }   
    })
}

function completeTask(){
    const myId = $(this).data( 'id' );
    console.log( 'in completeTask:', myId );
    // ajax call for the PUT to db
    $.ajax({
        method: 'PUT',
        url: '/todo/' + myId
    }).then( function ( response){
        console.log( 'back from PUT:', response );
        getTask();
    }).catch( function ( err ){
        console.log( err );
        alert( 'PUT not working' );
    })// end ajax PUT
} // end completedTask

function deleteTask(){
    console.log( 'in deleteTask' );
}// end deleteTask

// create an clear for the input
function emptyInput(){
    console.log( 'in emptyInput' );
    $( '#taskIn' ).val('');
}// end emptyInputs