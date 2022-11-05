var taskList = []
var sNo = 0
var tableData = document.getElementById("tableData")
function add(){
    var task = document.getElementById("task").value
    taskList = task
    document.getElementById("task").value = ""
    document.getElementById("table").style.visibility = "visible";
    for(var i = 0; i<taskList.length; i++){
          tableData.innerHTML = `<tr><td>${sNo+1}</td><td>${taskList}</td></tr>`
          console.log(taskList)
        }
}

function del(){
    tableData.innerHTML = ''
}