

   function getdata(){
    const x=new XMLHttpRequest();
    x.open("GET","tasks.json");
    x.onload=function (){
    const obj=JSON.parse(this.responseText);
    
        
        let t =document.getElementById("table")
        for (let i=0 ; i<obj.length ; i++){
        let tr =document.createElement("tr")
        t.appendChild(tr)

        let td1 =document.createElement("td")
        tr.appendChild(td1)
        td1 .textContent = obj[i].name

        let td2 =document.createElement("td")
        tr.appendChild(td2)
        td2 .textContent = obj[i].Age

        let td3 =document.createElement("td")
        tr.appendChild(td3)
        td3 .textContent = obj[i].Mjor

        let td4 =document.createElement("td")
        tr.appendChild(td4)
        td4 .textContent = obj[i].University

        let td5 =document.createElement("td")
        tr.appendChild(td5)

        let im =document.createElement("img")
        im.src = obj[i].image

        td5.appendChild(im)
        im.style= "width:100px"

    }
}
x.send();
}


