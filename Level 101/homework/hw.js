document.getElementById("addTask").addEventListener("click", function() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
    
    if (task === "") return;

    let li = document.createElement("li");
    li.textContent = task;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(removeBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = ""; // Clear input
});
