function validation(){
    let Firstname=document.getElementById("Fname").value;
    let Lirstname=document.getElementById("Lname").value;
    let Bdate = document.getElementById("Bdate").value;
    let Email = document.getElementById("Email").value;
    let confirmEmail = document.getElementById("confirm Email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirm password").value;


    let Fncheck=/^[a-zA-Z]{3,10}$/;
    let Lncheck=/^[A-Z]{1}[a-zA-Z]{3,10}$/;
    let Bdatecheck = /^[0-9]{1,2}[-]{1}[0-9]{1,2}[-]{1}[0-9]{4}$/;
    let Emailcheck = /^[a-zA-Z0-9]{4,}@[gmail]{5,}[.][cC][oO][mM]$/;
    let passcheck = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#])[a-zA-Z0-9!@#&]{6,20}$/;


    if(Fncheck.test(Firstname)){
        document.getElementById("Fnamesms").innerHTML="is valied";}
        else{
        document.getElementById("Fnamesms").innerHTML="the First name is not vailed should start with(A-Z) and continue _ . end with #";
        return false;
        };

            if(Lncheck.test(Lirstname)){
            document.getElementById("Lnamesms").innerHTML=" Lname is valied";}
            else{
            document.getElementById("Lnamesms").innerHTML=" The Last name is not vailed should start with(A-Z) and continue _ . end with #";
            return false;
            };
        
        
        
            if (Bdatecheck.test(Bdate)) {
                document.getElementById("Bdatesms").innerHTML = "Date is valid.";
            } else {
                document.getElementById("Bdatesms").innerHTML = "The date is not valid. Please use the format dd-mm-yyyy.";
                return false;
            }
        
        
            if (Emailcheck.test(Email)) {
                document.getElementById("Emailsms").innerHTML = "Email is valid.";
            } else {
                document.getElementById("Emailsms").innerHTML = "example@gmail.com";

                return false;
            }
        
        
        
        
            if (confirmEmail.match(Email) ){
                document.getElementById("confirmEmailsms").innerHTML = "Email is confirmed.";
            } else {
                document.getElementById("confirmEmailsms").innerHTML = "Email is not confirmed. Please re-enter.";
                document.getElementById("confirm Email").value = " ";
                document.getElementById("confirm Email").style.border = "1px solid red";
                return false;
            }
        
            if (passcheck.test(password)) {
                document.getElementById("passwordsms").innerHTML = "Date is valid.";
            } else {
                document.getElementById("passwordsms").innerHTML = "The date is not valid. Please use the format dd-mm-yyyy.";
                return false;
            }


            if (confirmpassword.match(password) ){
                document.getElementById("confirmpasswordsms").innerHTML = "Email is confirmed.";
            } else {
                document.getElementById("confirmpasswordsms").innerHTML = "Email is not confirmed. Please re-enter.";
                document.getElementById("confirm password").value = " ";
                document.getElementById("confirm password").style.border = "1px solid red";
                return false;
            }
            
            
            
        



}