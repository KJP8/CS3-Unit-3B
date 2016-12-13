/* hw3b.js */

window.onload = function () {
    
    /* PROBLEM #1 - for credit! */
    
    // initialize variables    
    var pwd1 = document.getElementById("pwd1");
    var pwd2 = document.getElementById("pwd2");
    
    // when user enters input into pwd1 field, run handlePwd1 function
    pwd1.addEventListener("keyup", handlePwd1);
    
    function handlePwd1() {
        
        // if the password length is less than 8 characters...
        if (pwd1.value.length < 8) {
            
            // ...show appropriate feedback to the user
            document.getElementById("pwd1Hint").style.display = "inline";
        }
        else {
            document.getElementById("pwd1Hint").style.display = "none";
        }
    }

    // when user enters input into pwd2 field, run handlePwd2 function
    pwd2.addEventListener("keyup", handlePwd2);
    
    function handlePwd2() {
        
        // if the two password field values are not the same...
        if (pwd1.value !== pwd2.value) {
            
            // ...show appropriate feedback to the user
            document.getElementById("pwd2Hint").style.display = "inline";
        }
        else {
            document.getElementById("pwd2Hint").style.display = "none";
        }
    }

    /* PROBLEM #2 - for credit! */
    
    // initialize variables
    var charsLeft = document.getElementById("charsLeft");
    var charLimit = document.getElementById("charLimit");
    var bio = document.getElementById("bio");
    
    // when user enters input into bio, run handleBio function
    bio.addEventListener("input", handleBio);
    
    function handleBio(evt){
        
        // set max character limit
        var max = 140;
        // get length of user input
        var inputLength = evt.target.value.length;
        
        // if the input is less than or equal to 140, update the counter (starting at 0)
        // and set the text color of the counter text to black
        if (inputLength <= max) {
            charsLeft.innerHTML = max - inputLength;
            charLimit.style.color = "black";
        }
        
        // if the input is greater than 140, prevent the user from entering anymore input
        else {
            evt.target.value = evt.target.value.substring(0, max);
        }
        
        // once the user input length becomes 140 and beyond,
        // set the text color of the counter to red
        if (inputLength == 140) {
            charLimit.style.color = "red";
        }
    }
    
    /* PROBLEM #3 - for credit! */
    
    // initialize variables
    var firstSelect = document.getElementById("firstSelect");
    var secondSelect = document.getElementById("secondSelect");
    
    // when user changes selection choice, run handleSelect function
    firstSelect.addEventListener("change", handleSelect);
    
    function handleSelect() {
        
        // if the "Fruits" choice is selected... 
        if (firstSelect.value === "Fruits") {
            
            // clear existing options
            secondSelect.innerHTML = '';
            
            // initialize array of options assocaited with Fruits
            var fruits = ["-- Choose One --", "Apples", "Oranges", "Bananas", "Pears"];
            
            // for each item in the array, create a new option in the second dropdown list
            fruits.forEach(function(fruit) {
                var newOption = document.createElement("OPTION");
                newOption.appendChild(document.createTextNode(fruit));
                secondSelect.appendChild(newOption);              
            });
        }
        // if the "Vegetables" choice is selected... 
        else if (firstSelect.value === "Vegetables") {
            
            // clear existing options
            secondSelect.innerHTML = '';
            
            // initialize array of options assocaited with Vegetables
            var veggies = ["-- Choose One --", "Broccoli", "Carrots", "Green Beans", "Cucumbers"];
            
            // for each item in the array, create a new option in the second dropdown list
            veggies.forEach(function(veggie) {
                var newOption = document.createElement("OPTION");
                newOption.appendChild(document.createTextNode(veggie));
                secondSelect.appendChild(newOption);              
            });
        }
        else if (firstSelect.value === "Carbohydrates") {
            
            // clear existing options
            secondSelect.innerHTML = '';
            
            // initialize array of options assocaited with Carbohydrates
            var carbs = ["-- Choose One --", "Bread", "Cereal", "Pasta", "Rice"];
            
            // for each item in the array, create a new option in the second dropdown list
            carbs.forEach(function(carb) {
                var newOption = document.createElement("OPTION");
                newOption.appendChild(document.createTextNode(carb));
                secondSelect.appendChild(newOption);              
            });
        }
        else if (firstSelect.value === "Protein") {
            
            // clear existing options
            secondSelect.innerHTML = '';
            
            // initialize array of options assocaited with Proteins
            var proteins = ["-- Choose One --", "Chicken", "Beef", "Fish", "Tofu"];
            
            // for each item in the array, create a new option in the second dropdown list
            proteins.forEach(function(protein) {
                var newOption = document.createElement("OPTION");
                newOption.appendChild(document.createTextNode(protein));
                secondSelect.appendChild(newOption);              
            });
        }
        else if (firstSelect.value === "Dairy") {
            
            // clear existing options
            secondSelect.innerHTML = '';
            
            // initialize array of options assocaited with Dairy
            var dairyItems = ["-- Choose One --", "Milk", "Yogurt", "Cheese"];
            
            // for each item in the array, create a new option in the second dropdown list
            dairyItems.forEach(function(dairy) {
                var newOption = document.createElement("OPTION");
                newOption.appendChild(document.createTextNode(dairy));
                secondSelect.appendChild(newOption);              
            });
        }
        else if (firstSelect.value === "Sweets") {
            
            // clear existing options
            secondSelect.innerHTML = '';
   
            // initialize array of options assocaited with Dairy
            var sweets = ["-- Choose One --", "Cookies", "Cake", "Ice Cream", "Pie"];
            
            // for each item in the array, create a new option in the second dropdown list
            sweets.forEach(function(sweet) {
                var newOption = document.createElement("OPTION");
                newOption.appendChild(document.createTextNode(sweet));
                secondSelect.appendChild(newOption);              
            });
        }
        else {
            
            // clear existing options
            secondSelect.innerHTML = '';
            
            // set only option to the default value
            var newOption = document.createElement("OPTION");
            newOption.appendChild(document.createTextNode("- - - -"));
            secondSelect.appendChild(newOption); 
        }
    }
    
    /* PROBLEM #4 - for credit! */    
    
    // initialize variables
    var birthdayYes = document.getElementById("birthdayYes");
    var birthdayNo = document.getElementById("birthdayNo");
    var birthdayForm = document.getElementById("birthday");
   
    // when user changes selection choice, run handleBirthday function
    birthdayYes.addEventListener("change", handleBirthday);
    birthdayNo.addEventListener("change", handleBirthday);
   
    function handleBirthday(){
        
        // if Yes is selected, show the birthday form
        if (birthdayYes.checked) {
            birthdayForm.style.display = "block";
        }
        // if No is selected, hide the birthday form
        else if (birthdayNo.checked) {
            birthdayForm.style.display = "none";
        }
    }
    
    /* PROBLEM #5 - for EXTRA credit! */
    
    // initialize variables
    var phone = document.getElementById("phone");
    var phoneMsg = document.getElementById("phoneMsg");
    
    // when user enters exits the phone field, run handlePhone function
    phone.addEventListener("blur", handlePhone);
    
    function handlePhone(evt){
        
        // set max character limit
        var max = 10;
        // initialize user input value variable
        var input = evt.target.value;
        
        // remove all non-digit characters from user's input
        input = input.replace(/[^\d]/g, "");

        // if user enters fewer than 10 digits...
        if (input.length < max) {
            // show feedback message
            phoneMsg.style.display = "inline";
            // set the output to be the input
            evt.target.value = input;
        }
        else {
            // otherwise, hide feedback message
            phoneMsg.style.display = "none";
            // truncate input at 10 digits
            input = input.substring(0, max);
            // set output to xxx-xxx-xxxx format
            evt.target.value = input.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
        }
    }
    
    /* PROBLEM #6 - for EXTRA credit! */
    
    // initialize variables
    var submit = document.getElementById("submitBtn");
    var email = document.getElementById("email");
    var reqMsg = document.getElementById("reqMsg");
    
    // when submit button is clicked, run validateForm function
    submit.addEventListener("click", validateForm);
    
    function validateForm(evt) {
        
        var emailInput = email.value;
        var phoneInput = phone.value;
        
        // if both email and phone fields are blank, show message to user and stop submit form happening
        if ((emailInput === null || emailInput === "") && (phoneInput === null || phoneInput === "")) {
            reqMsg.style.display = "inline";
            evt.preventDefault();
        }
        // otherwise, hide message and continue with submit
        else {
             reqMsg.style.display = "none";
        }
    }    
};