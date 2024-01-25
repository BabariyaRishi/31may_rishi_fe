let inputs = document.getElementById("inp");
        let taskList = document.querySelector(".task-list");

        function Add() {
            if (inputs.value.trim() === "") {
                alert("Please Enter Information");
            } else {
                let newEle = document.createElement("div");
                newEle.innerHTML = `${inputs.value}<i class="fas fa-trash"></i>`;
                taskList.appendChild(newEle);
                inputs.value = "";
                newEle.querySelector("i").addEventListener("click", remove);
            }
        }

        function remove() {
            this.parentNode.remove();
        }