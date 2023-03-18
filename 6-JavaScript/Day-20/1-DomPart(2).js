 //Removing Element
 document.body.removeChild((document.querySelector("p")));

 //Adding Element in existing Tag
 const  list=`
     <li>Prithvi</li>
     <li>Priyanka</li>
     <li>Priyanshu</li>
 `;
 const lis=document.querySelector("ul");
 lis.innerHTML=list;

 //Create new Tag from Scratch
 let htag= document.createElement("h1");
 htag.className="title";
 htag.style.fontSize="25px";
 htag.style.color="lightgreen";
 htag.innerText="This is H1";
 document.body.appendChild(htag);

 //Create Elements using Loop
 for (let i = 0; i < 5; i++) {
     let para4s=document.createElement("p");
     para4s.className="para";
     para4s.style.fontSize="20px";
     para4s.style.color="lightblue";
     para4s.textContent=`This is Paragraph ${i}`;
     document.body.appendChild(para4s);
     console.log(para4s);            
 }