var age = document.getElementById("age");

age.onkeyup = function() {
    var age_value = document.getElementById("age").value;
    const after_age = document.querySelector("#after-age");
    if(age_value >= 18)
    {
        
        after_age.style.display="block";
    }
    else{
        after_age.style.display="none";
    }
}

function myFunction()
{
    const License_value = document.querySelector("#Type-Of-Vehicle-div");
    var x = document.Volunteer.License.value;
    console.log(x)
    if(x == "Yes"){
        License_value.style.display="block";
        console.log("yes");
    }
    else{
        License_value.style.display="none";
        console.log("no");
    }
}