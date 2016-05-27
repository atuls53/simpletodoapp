/****
To do App

****/

var i = 0;
var todo = [];
var trash = [];
var todolists = [];
var listId = 1;
var date = new Date();
$(document).ready(function () {
  get_notes();
  get_trash();
  get_todo_list();

  $(".todolink").click(function () {
    $("#trash_list").fadeOut();
    $("#todo_list").fadeIn();

  });

  $(".trashlink").click(function () {
    $("#trash_list").fadeIn();
    $("#todo_list").fadeOut();

  });
});



// form validator Validator 
function formValidator(divId) {
  var validaterFlag, formData = document.getElementById('divId').querySelectorAll("input");
  alert(formData);
  for (i = 0; i < formData; i++) {
    if (formData[i] = "") {
      validaterFlag = true;
    }
    return validaterFlag;
  }

}



// Get notes/todo from local on page load

function check_todo() {
  var checkTodo = JSON.parse(localStorage.getItem("todo"));
  if (checkTodo) {
    i = checkTodo.length;
    todo = checkTodo;

  }

};

// add notes / todo

function add_notes() {
  var notes = document.getElementById("notes");
  formValidator(notes);
  check_todo();
  var noteid = i;
  var notetitle = document.getElementById("notes-title").value;
  var notedescription = document.getElementById("notes-description").value;

  todo.push({
    id: noteid,
    title: notetitle,
    time: date.toDateString(),
    description: notedescription
  });
  localStorage.setItem("todo", JSON.stringify(todo));
  todo = JSON.parse(localStorage.getItem("todo"));

  // Showupdateed TODO
  get_notes();

  document.getElementById("notes-title").value = "";
  document.getElementById("notes-description").value = "";


}

// show  notes / todo
function get_notes() {
  document.getElementById("todo_list").innerHTML = "";
  var j = 0;
  var red = "red";
  var green = "green";
  var todo = JSON.parse(localStorage.getItem("todo"));
  if (todo) {
    for (j = 0; j < todo.length; j++) {
      document.getElementById("todo_list").innerHTML += "<div class='col-sm-4'><div class='card mb20'><h3>" + todo[j].title + "</h3><em>Created ON        " + todo[j].time + " </em><p>" + todo[j].description + "</p><span class='del_todo'><a href='javascript:void(0)' onclick='move_to_trash(" + j + ");'>X</a></span>      <div class='pull-right dropdown'><a href='#' data-target='#' class='dropdown-toggle' data-toggle='dropdown' aria-expanded='false'><i class='fa fa-ellipsis-v' aria-hidden='true'></i></a> <div class='dropdown-menu colors'><a href='javascript:void(0)' onclick='change_color(" + j + " , " + "red" + ");'></a><a href='javascript:void(0)' onclick='change_color(" + j, green + ");'></a></div></div></div>";

    }

  }

}

function move_to_trash(id) {
  j = 0;
  var todo = JSON.parse(localStorage.getItem("todo"));
  var trashItem = todo.splice(id, 1);
  for (j = 0; j < trashItem.length; j++) {
    trash.push(trashItem[j]);
  }
  localStorage.setItem("todo", JSON.stringify(todo));
  localStorage.setItem("trash", JSON.stringify(trash));

  // Showupdateed TODO
  get_notes();

  if (!todo.length) {
    localStorage.removeItem("todo");
  }
}


// show  notes / todo
function get_trash() {
  document.getElementById("trash_list").innerHTML = "";
  var j = 0;
  var trash = JSON.parse(localStorage.getItem("trash"));
  if (trash) {
    for (j = 0; j < trash.length; j++) {
      document.getElementById("trash_list").innerHTML += "<div class='col-sm-4'><div class='card mb20'><h3>" + trash[j].title + "</h3><em>Created ON        " + trash[j].time + " </em><p>" + trash[j].description + "</p><span class='del_todo'><a href='javascript:void(0)' onclick='restore_trash(" + j + ");'>O</a></span>      <div class='pull-right dropdown'><a href='#' data-target='#' class='dropdown-toggle' data-toggle='dropdown' aria-expanded='false'><i class='fa fa-ellipsis-v' aria-hidden='true'></i></a> <div class='dropdown-menu colors'><a href='javascript:void(0)' onclick='change_color();'>O</a></div></div></div>";

    }

  }

}

function restore_trash(id) {
  var todo = JSON.parse(localStorage.getItem("todo"));
  var trash = JSON.parse(localStorage.getItem("trash"));
  var trashItem = trash.splice(id, 1);
  for (j = 0; j < trashItem.length; j++) {
    todo.push(trashItem[j]);
  }
  localStorage.setItem("todo", JSON.stringify(todo));
  localStorage.setItem("trash", JSON.stringify(trash));
  get_trash();
  get_notes();
}




/*Add Dynamic div for tasks / lists*/
var parentDiv = document.getElementById("list_data");

function add_more_feild() {
  parentDiv.innerHTML += '<div class="form-group label-floating is-empty" id="listItem_' + listId + '"><label class="control-label" for="listfeild_' + listId + '">List Item</label><input class="form-control" id="listfeild_' + listId + '" type="text"></div>';
  listId++;

}


function add_todo_list() {
  var listData = document.getElementById("list_data").querySelectorAll("[id^='listfeild_']");
  //console.log(listData);
  var listTitle = document.getElementById("listTitle").value;
  get_todo_list();
  var listItemArray = [];
  var k = 0;
  for (j = 0; j < listData.length; j++) {
    listItemArray.push(listData[j].value);
  }
  todolists.push({
    id: k,
    listtitle: listTitle,
    listitems: [],
    time: date.toDateString(),
  })
  i++;
  localStorage.setItem("todolists", JSON.stringify(todolists));
}

function get_todo_list() {
  todolists = JSON.parse(localStorage.getItem("todolists"));


}



/*function change_color(id, color){
  var checkTodo = JSON.parse(localStorage.getItem("todo"));
  for(i=0;i < checkTodo.length;i++){
    console.log(checkTodo);    
  } 
  
}*/