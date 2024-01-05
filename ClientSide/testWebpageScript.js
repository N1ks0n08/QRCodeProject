alert("This is a test alert from an integrated javascript file...")
// console.log('DOM should not be loaded...') (TRUE)

document.addEventListener('DOMContentLoaded', function() {
//    console.log('DOM is loaded...') (TRUE; LOADED AFTER ALERT TEXT)
    const testButton = document.getElementById('testButton');
    const userNameField = document.getElementById('username');
    const passwordField = document.getElementById('password');

    function handleClick() {
        alert(`${testButton.id} was clicked...!`);
        console.log(`${testButton.id} was clicked...`);
    }

    function handleEnterKey(event) {
        if (event.key === "Enter") {
          console.log(`Information entered.
            Username: ${userNameField.value}
            Password: ${passwordField.value}
          `);
        }
    }

    testButton.addEventListener('click', handleClick);

    
      
    userNameField.addEventListener('keydown', handleEnterKey);
    passwordField.addEventListener('keydown', handleEnterKey);
});
