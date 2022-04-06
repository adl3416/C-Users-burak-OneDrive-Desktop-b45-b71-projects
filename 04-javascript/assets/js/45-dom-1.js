const rows = document.querySelectorAll("#tblPoint tbody tr");
for(let row of rows){
    const puan = row.querySelector("td:nth-child(2)").innerText;
    if(puan<50){
        row.classList.add("table-warning");
    }
}
