
let business_law = document.getElementById("business_law")
let criminal_law = document.getElementById("criminal_law")
let child_support = document.getElementById("child_support")
let education_law = document.getElementById("education_law")
let divorce_law = document.getElementById("divorce_law")
let tax_law = document.getElementById("tax_law")

// let search_result = search.value

function getValue(){
    let search = document.getElementById("search").value
    // console.log(search)
    if (search <= 18) {
        business_law.style.display = "none";
        criminal_law.style.display = "none";
        divorce_law.style.display = "none";
        tax_law.style.display = "none";
        // child_support.style.display = "none";
        // education_law.style.display = "none";
    }
    else if (search >= 18){
        // console.log("hello")
        business_law.style.display = "visible";
        criminal_law.style.display = "visible";
        divorce_law.style.display = "visible";
        tax_law.style.display = "visible";

        child_support.style.display = "none";
        education_law.style.display = "none";
    }
}

