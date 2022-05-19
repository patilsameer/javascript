const task3Element = document.getElementById('task-3');
task3Element.addEventListener('click',plain_alert);

let name1="Sameer";

function plain_alert(){
    alert("How are you");
}

function paramter_alert(arg1){
    alert(`how are you ${arg1}`);
}

plain_alert();
paramter_alert(name1);