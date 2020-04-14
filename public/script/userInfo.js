//Like Hansel and Gretel, I am following the few crumbs of understanding I have, crumbs are most likely leading me the wrong way
// All of this was written from looking at 14-Post Author Joins
$(document).ready(function() {

    getUsers();

    var userName = $("#Username");
    
    // var userPassword = $("#Password");

    // Adding event listeners to the form to create a new object, should line up with .container class in login.html... hopefully
    $(document).on("submit", ".container", handleLoginSubmit);

    // A function to handle what happens when the form is submitted to create a new 
    function handleLoginSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if(!userName.val().trim().trim()) {
            return;
        }
        upsertUser({
            Name: userName
                .val()
                .trim()
        });
    }
    // A function for creating an user. Calls getAuthors upon completion
    function upsertUser(userData) {
        $.post("/api/userInfo", userData)
        .then(getUser)
    }
})