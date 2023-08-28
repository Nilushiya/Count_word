
let btn = document.getElementById("btn")



btn.addEventListener("click",()=>{
    let input = document.getElementById("input").value
    let count = 0
   let word = input.split(" ")
   for(let i = 0; i < word.length ; i++){
    count++
   }
   let result = document.getElementById("result")
   result.innerHTML = count + "Words"
})
