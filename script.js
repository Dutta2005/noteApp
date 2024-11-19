function update() {
    // Populate the table
    let notesbody = document.getElementById("notesbody");
    let str = "";
    if (localStorage.getItem('itemsJson') == null) {
        itemsJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    }
    else {
        itemsJsonStr = localStorage.getItem('itemsJson')
        itemsJsonArray = JSON.parse(itemsJsonStr);
    }
    itemsJsonArray.forEach((element, index) => {
        str += `
            <div class="p-3">
                <h3>${element[0]}</h3>
                <div>${element[1]}</div>
                <button class="delbtn" onclick="deleted(${index})">Delete</button>
            </div>`;
    });
    notesbody.innerHTML = str;
}

function getUpdate() {
    let head = document.getElementById('noteheading').value;
    let cont = document.getElementById('note').value;

    if (localStorage.getItem('itemsJson') == null) {
        itemsJsonArray = [];
        itemsJsonArray.push([head, cont]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    }
    else {
        itemsJsonStr = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsJsonStr);
        itemsJsonArray.push([head, cont]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    }

    update();
}

function deleted(itemindex) {
    console.log("Deleted", itemindex)
    itemsJsonStr = localStorage.getItem('itemsJson')
    itemsJsonArray = JSON.parse(itemsJsonStr);
    // Deleting item at index
    itemsJsonArray.splice(itemindex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));

    update();
}

function clearstorage() {
    if (confirm("Are you sure you want to delete?") == true) {
        console.log("Cleared")
        localStorage.clear('itemsJson');
        update();
    }
}

save = document.getElementById('submitnote');
save.addEventListener("click", getUpdate);
update();