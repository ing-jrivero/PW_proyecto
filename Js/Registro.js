function validar()
{
    let re=/[A-Z]{1,}([\w\d!@#\$%\^&]){9,}/;
    var password = document.getElementById("pass").value
    
    if(password!="")
    {
        if(re.test(password))
         {
            // alert("")

        }
    else
        {
            alert("ERROR \nSu contraseña debe tener al menos 10 caracteres y al menos un número y una letra.")
        }

    }
}