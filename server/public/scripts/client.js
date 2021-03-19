$( document ).ready( onReady );

function onReady(){
    console.log( 'in JQ' );
    // put click handlers here
    $( '#addTaskButton' ).on( 'click', addTask );

}// end onready

function addTask(){
    console.log( 'in addTask' );
    // get input and package into an object
    let objectToSend = {
        task: $( '#taskIn' ).val(),
        completed: $( '#completedIn').val()
    }
    // send to server using ajax POST
    $.ajax({
        method: 'POST',
        url: '/todo',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from post with:', response );
    }).catch( function( err ){
        alert( 'error adding item to db' );
        console.log( err );
    })// end ajax POST
}// end addTask
