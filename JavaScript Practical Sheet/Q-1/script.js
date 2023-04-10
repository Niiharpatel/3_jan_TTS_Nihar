function check_bl() {
    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    let lname = document.getElementById("lname").value;
    let add = document.getElementById("add").value;
    let dob = document.getElementById("dob").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("male").checked;
    let other = document.getElementById("male").checked;
    let exp = document.getElementById("exp").value;
    let mn = document.getElementById("mn").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;




    if (fname == "" && mname == "" && lname == "" && add == "" && dob == "" && male == false && female == false && other == false && exp == "") {
        document.getElementById("msg1").innerHTML = "Enter First name";
        document.getElementById("msg2").innerHTML = "Enter Middle name";
        document.getElementById("msg3").innerHTML = "Enter Last name";
        document.getElementById("msg4").innerHTML = "Enter Address";
        document.getElementById("msg5").innerHTML = "Enter Date of birth";
        document.getElementById("msg6").innerHTML = "Select Gender";
        document.getElementById("msg7").innerHTML = "Select Experience";
        document.getElementById("msg8").innerHTML = "Enter Mobile No";
        document.getElementById("msg9").innerHTML = "Enter Mail Id";
        document.getElementById("msg10").innerHTML = "Enter Password";
        return false;
    }


}

function show_hide() {
    let pass = document.getElementById("pass");
    if (pass.type == "password") {
        pass.type = "text"
    } else {
        pass.type = "password"
    }
}
