    $(document).ready (()=> {

    $(".send").click(function (){
        
        validateName()
        validatMail()
        validatNumb()
        validatPassword()
      
    })

    let validateName = ()=>{
        
        if($("#name").val() == ''){
            $(".txt").text(" Space can't be empty")
            $(".txt").addClass("style")
            $("#name").css("border", "1px solid red")
            }else{
                $("#name").val("")
        }
    }


    let validatMail = ()=> {

       
        if($("#mail").val() == ''){
            $(".mail-txt").text(" Space can't be empty")
            $(".mail-txt").addClass("style")
            $("#mail").css("border", "1px solid red")
            }else{
                $("#mail").val("")
        }

    }

    let validatNumb = ()=> {

        if($("#phone").val() == ''){
            $(".pNumb").text(" Space can't be empty")
            $(".pNumb").addClass("style")
            $("#phone").css("border", "1px solid red")
            }else{
                $("#phone").val("")
        }
      
    }

    let validatPassword = ()=> {

        if($("#password").val() == ''){
            $(".txt1").text(" Space can't be empty")
            $(".txt1").addClass("style")
            $("#password").css("border", "1px solid red")
            }else{
                $("#password").val("")
        }
       
    }

    $("#name").keyup(()=>{
        nameChk()
    })
    let nameChk = ()=> {
    
        let name = $("#name").val()
    
        let regN = /[a-zA-Z\s]+$/
    
        if (!regN.test(name)){
           
            $("#name").css("border", "1px solid red")
            $(".txt").text("Only texts allowed")
            $(".txt").addClass("style")
            
        }else {
            $("#name").css("border", "1px solid green")
            $(".txt").remove("")
            $(".send").css("background","rgb(2, 2, 107)")

        }

    }


    $("#password").keyup(()=>{
        passwordChk()
    })


    let passwordChk = ()=> {

        let password = $("#password").val()

        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {

            $("#password").css("border", "1px solid red")
            $(".txt1").text("Password must contain at least 1 uppercas, lowercase number and special character. ")
            $(".txt1").addClass("style")

            return
           

        }else{
            $("#password").css("border", "1px solid green")
            $(".txt1").remove()
            return
        }
    }


    $("#phone").keyup(()=>{
        phoneChk()
        

    })

    let phoneChk = ()=> {
        let numb = $("#phone").val()
        let numbRegex = /^\d{11,13}$/

        if(!numbRegex.test(numb)) {
            $("#phone").css("border", "1px solid red")
            $(".pNumb").text("Number cant be less than 11 digits or greater than")
            $(".pNumb").addClass("style")
           

        }else{
            $("#phone").css("border", "1px solid green")
            $(".pNumb").remove()
        }

    }


    $("#mail").keyup(()=>{
        emailChk()
    })


    let emailChk = ()=> {

        let email = $("#mail").val()

        let mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!mailRegex.test(email)) {
            $("#mail").css("border", "1px solid red")
            $(".mail-txt").text("Email not valid")
            $(".mail-txt").addClass("style")
            return
        }else {
            $("#mail").css("border", "1px solid green")
            $(".mail-txt").remove()

        }
    }
 
})    







