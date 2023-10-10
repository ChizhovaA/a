fetch('./json/action.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});
function appendData(data) {
    const table = document.getElementById('tbl');
    for (let i = 0; i < data.length; i++){
        let row = document.createElement('tr');
        row.innerHTML = '<td>'+ data[i].Date + '</td>' + 
        '<td>' + data[i].Time + '</td>' + '<td>' + 
        data[i].Action + '</td>';
        table.appendChild(row);
    }
}



