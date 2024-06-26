const URL="https://cat-fact.herokuapp.com/facts";
const factsPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");



let promise=fetch(URL);
console.log(promise)

const getFacts = async () =>{
    console.log("getting data....")
    let response=await fetch(URL);
    console.log(response);
    console.log(response.status);
    let data=await response.json();
    console.log(data[0].text);
    factsPara.innerText=data[3].text;
    
}
   

//promise chaining
/*function getFacts(){
    fetch(URL)
    .then((response) =>{
        return response.json()
        .then((data)=>{
            console.log(data);
            factsPara.innerText=data[3].text;

        })
    })

}
     */
btn.addEventListener("click",getFacts);