const r=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})
r.question("Please enter your name ",(Name)=>{
    console.log("Hello",Name)
    r.close()
})