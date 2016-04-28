/****
To do App

****/

$(document).ready(function () {
  get_notes();
});
var i = 0;
var todo = [];
var trash = [];

function check_todo() {
  var checkTodo = JSON.parse(localStorage.getItem("todo"));
  if (checkTodo) {
    i = checkTodo.length;
    todo = checkTodo;

  }

};

function add_notes() {
  check_todo();
  var noteid = i;
  var notetitle = document.getElementById("notes-title").value;
  var notedescription = document.getElementById("notes-description").value;
var date = new Date();
  todo.push({
    id: noteid,
    title: notetitle,
    time: date.toDateString(),
    description: notedescription
  });
  localStorage.setItem("todo", JSON.stringify(todo));
  todo = JSON.parse(localStorage.getItem("todo"));
  get_notes();
  document.getElementById("notes-title").value = "";
  document.getElementById("notes-description").value = "";


};

function get_notes() {
  document.getElementById("todo_list").innerHTML = "";
  var j = 0;
  var h = "hi";
  var todo = JSON.parse(localStorage.getItem("todo"));
  if (todo) {
    for (j = 0; j < todo.length; j++) {
      document.getElementById("todo_list").innerHTML += "<div class='col-sm-4'><div class='card mb20'><h3>" + todo[j].title + "</h3><em>Created ON        "+ todo[j].time +" </em><p>" + todo[j].description + "</p><span class='del_todo'><a href='javascript:void(0)' onclick='moveToTrash(" + j + ");'>X</a></span>      <div class='pull-right dropdown'><a href='#' data-target='#' class='dropdown-toggle' data-toggle='dropdown' aria-expanded='false'><i class='fa fa-ellipsis-v' aria-hidden='true'></i></a> <div class='dropdown-menu colors'><a href='javascript:void(0)' onclick='changecolor("+'hi'+");'></a></div></div></div>";

    }

  }

};

function moveToTrash(id) {
  j = 0;
  var todo = JSON.parse(localStorage.getItem("todo"));
  var trashItem = todo.splice(id,1);
  console.log(trashItem[0]);
  for(j=0;j < trashItem.length; j++){
    trash.push(trashItem[j]);
    
  }
   console.log(trash);
  
  localStorage.setItem("todo", JSON.stringify(todo));
  localStorage.setItem("trash", JSON.stringify(trash));
  
  get_notes();
  if (!todo.length) {
    localStorage.removeItem("todo");
  }
};