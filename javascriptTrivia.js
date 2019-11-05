document.getElementById("date").value = "";

document.getElementById("search_date").addEventListener("click", function(x){
  if(document.getElementById("date").value == "") {
    alert("Please enter an exact date to search")
  } else {
    sessionStorage.setItem("date_input", document.getElementById("date").value)
    sessionStorage.setItem("what_clicked", 1)
    window.location.href = "result.html"
  }

})

document.getElementById("search_category").addEventListener("click", function(x){
  if(document.getElementById("category").value == "") {
    alert("Please enter a category to search")
  } else {
    sessionStorage.setItem("category_input", document.getElementById("category").value)
    sessionStorage.setItem("what_clicked", 2)
    window.location.href = "result.html"

  }


})

document.getElementById("search_difficulty").addEventListener("click", function(x){
  if(document.getElementById("difficulty").value == "") {
    alert("Please enter a difficulty level to search")
  } else {
    sessionStorage.setItem("difficulty_input", document.getElementById("difficulty").value)
    sessionStorage.setItem("what_clicked", 3)
    window.location.href = "result.html"
  }


})
