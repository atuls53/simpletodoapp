/****
To do App

****/

var i = 0;
var todo = [];

function check_todo(){
	var checkTodo = JSON.parse(localStorage.getItem("todo"));
	if(checkTodo){
		i = checkTodo.length;
		todo = checkTodo;
		
	}
		
};
function add_notes(){
	check_todo();
	var noteid = i;
	var notetitle = document.getElementById("notes-title").value;
	var notedescription = document.getElementById("notes-description").value;
	
	todo.push({
		id: noteid,
		title:notetitle,
		style:'',
		description: notedescription	
	});
	localStorage.setItem("todo", JSON.stringify(todo)); 
		todo = JSON.parse(localStorage.getItem("todo"));
			
	document.getElementById("todo_list").innerHTML += "<div class='col-sm-4'><div class='card mb20'><h3>"+todo.slice(-1)[0].title+"</h3><p>" +todo.slice(-1)[0].description+ "</p><span><a href='javascript:void(0)' onclick='moveToTrash("+todo.slice(-1)[0]+");'>Delete</a></span></div></div>";
	
	document.getElementById("notes-title").value = "";
	document.getElementById("notes-description").value = "";
	
	
};

function get_notes(){	
	var j=0;
	var getData = JSON.parse(localStorage.getItem("todo"));
	if(getData){
		todo = JSON.parse(localStorage.getItem("todo"));
	for(j=0; j < todo.length ; j++){
		document.getElementById("todo_list").innerHTML += "<div class='col-sm-4'><div class='card mb20'><h3>"+todo[j].title+"</h3><p>" +todo[j].description+ "</p><span><a href='javascript:void(0)' onclick='moveToTrash("+j+");'>Delete</a></span> <div class='pull-right dropdown'><a href='#' data-target='#' class='dropdown-toggle' data-toggle='dropdown' aria-expanded='false'><i class='fa fa-ellipsis-v' aria-hidden='true'></i></a> <div class='dropdown-menu colors'><a href='javascript:void(0)' onclick='changecolor('red')'></a></div></div></div></div>";
		
	}
	}
};
function moveToTrash(id){
	console.log(todo);
	console.log(id);
	
	var trashedData = todo.splice(todo.indexOf(id), 1);
	todo.splice(todo.indexOf(id), 1);
  
	localStorage.setItem("todo", JSON.stringify(todo)); 
	localStorage.setItem("trashs", JSON.stringify(trashedData)); 
		
	console.log(todo);
	if(!todo.length) {
			localStorage.removeItem("todo");
		}
};
function changeColor(color){
	console.log("hi");
};

$( document ).ready(function() {
get_notes();
});