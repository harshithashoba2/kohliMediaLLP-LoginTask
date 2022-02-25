function validate() 
{
    pass=document.myForm.psw.value;
    cpass=document.myForm.cpsw.value;   
if( document.myForm.usrnm.value == "" ) {
alert( "Please provide your name!" );
document.myForm.usrnm.focus() ;
return false;
}
if( document.myForm.dob.value == "" ) {
    alert( "Please provide your Date Of Birth!" );
    document.myForm.dob.focus() ;
    return false;
    }
    if( document.myForm.phone.value == "" ) {
        alert( "Please provide your Contact Number!" );
        document.myForm.phone.focus() ;
        return false;
        }
if( document.myForm.email.value == "" ) {
alert( "Please provide your Email!" );
document.myForm.email.focus() ;
return false;
}

if( document.myForm.psw.value == "" ) {
    alert( "Please provide your Password!" );
    document.myForm.psw.focus() ;
    return false;
    }
    if( document.myForm.cpsw.value == "" ) {
        alert( "Please Confirm Password!" );
        document.myForm.cpsw.focus() ;
        return false;
        }    
        if(pass != cpass)
        {
            alert( "Password mismatch" );  
            
            return false;
        }
alert("Registered successfully!");
window.location.href = "login.html";
}
