let myLeads =[];
let oldLeads=[];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"));
if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads) {
    let listItems = "";
    // log out the items into myLeads array.
    for(let i = 0 ; i<leads.length ;i++) {
        // rendering plain text in list.
        // listItems += "<li><a target='_blank' href=' "+ myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    
        listItems += `
        <li>
            <a target = '_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
        `
    } 
    ulEl.innerHTML=listItems;
    }


inputBtn.addEventListener("click" , function() {
    myLeads.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myLeads" , JSON.stringify(myLeads));
    render(myLeads)
});

deleteBtn.addEventListener("dblclick" , function () {

    console.log("double click ot delete")
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});


//6:37:30







