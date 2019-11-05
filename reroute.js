let date = sessionStorage.getItem("date_input")
console.log(date)
let search_val = sessionStorage.getItem("category_input")
let difficulty = sessionStorage.getItem("difficulty_input")
let clicked = sessionStorage.getItem("what_clicked")

let og_url = "https://cors-anywhere.herokuapp.com/http://jservice.io/api/"


function isEmpty(obj) {
  for(var key in obj) {
    if(obj.hasOwnProperty(key))
      return false;
    }

    return true;
}


function getAPI(id) {
  fetch(og_url+"category?id="+id)
    .then(response => response.json())
    .then(function(json) {
      for (let i = 0; i < json.clues.length; i++) {
        document.getElementById("qa").innerHTML += "QUESTION:" + json.clues[i].question
        document.getElementById("qa").innerHTML += "<br>"
        document.getElementById("qa").innerHTML += "ANSWER:" + json.clues[i].answer
        document.getElementById("qa").innerHTML += "<br>"
        document.getElementById("qa").innerHTML += "<br>"
      }
    })
}


if (clicked == 1) {
  let count = 0;

  for (let i = 0; i < 200000; i+= 100) {
    if(count == 1) {
      break;
    }

    fetch(og_url+"clues?offset="+i)
    .then(response => response.json())
    .then(function(json) {
      if (isEmpty(json) == true) {
        count = 1
      } else {
        for(let x of json) {
          x.airdate = x.airdate.substring(0, 10).replace(/\s/g,'')
          if(x.airdate == date) {
            document.getElementById("qa").innerHTML += "QUESTION:" + x.question
            document.getElementById("qa").innerHTML += "<br>"
            document.getElementById("qa").innerHTML += "ANSWER:" + x.answer
            document.getElementById("qa").innerHTML += "<br>"
            document.getElementById("qa").innerHTML += "<br>"
          }
        }
      }

    })

  }

}



if (clicked == 2) {

  let count = 0;

  for (let i = 0; i < 20000; i+= 100) {
    if(count == 1) {
      break;
    }

    fetch(og_url+"categories?count=100&offset="+i)
      .then(response => response.json())
      .then(function(json) {
        if (isEmpty(json) == true) {
          count = 1
        } else {
          for(let x of json) {
            if (x.title != null) {
              x.title = x.title.replace(/\s/g,'')
              search_val = search_val.replace(/\s/g,'')
              if(x.title.localeCompare(search_val) == 0) {
                document.getElementById("match").innerHTML = "You have a match";
                getAPI(x.id);
              }
            }
          }

          if (document.getElementById("match").innerHTML == "") {
            document.getElementById("match").innerHTML = "No Results Found";
          }

          }
      })
    }

}


if (clicked == 3) {
  document.getElementById("qa").innerHTML = "Level " +difficulty+ " Questions"
  document.getElementById("qa").innerHTML += "<br>"
  document.getElementById("qa").innerHTML += "<br>"


  fetch(og_url+"clues?value=" + difficulty)
    .then(response => response.json())
    .then(function(json) {
        for (let i = 0; i < json.length; i++) {
            document.getElementById("qa").innerHTML += "QUESTION:" + json[i].question
            document.getElementById("qa").innerHTML += "<br>"
            document.getElementById("qa").innerHTML += "ANSWER:" + json[i].answer
            document.getElementById("qa").innerHTML += "<br>"
            document.getElementById("qa").innerHTML += "<br>"
          }
    })

  }
