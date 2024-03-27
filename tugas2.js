const getMonth = (callback) => {
    setTimeout(() => {
        let error = true;
        let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        if(!error){
            callback(null, month);
        } else{
            callback(new Error("Sorry Data Not Found"), []);
        }
    }, 4000);
    console.log();
}

function output(error,month){
    if(!error){ 
        month.map((value, index)=>{
            console.log(index+1+". "+value);
        });
    } else{
        console.log(error.message);
    }
    
}

getMonth(output);