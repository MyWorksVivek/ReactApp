db.enablePresistence().catch(err=>{
    if(err.code=='falied-precondition'){
        console.log('persistence failed');
    }
    else if(err.code == 'unimplemented'){
        console.log('persistence is not available');
    }
});

