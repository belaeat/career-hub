const addToDb = id =>{    

    let appliedJobs = getFromDb();

    // get the applied jobs
    const quantity = appliedJobs[id];
    if (!quantity){
        appliedJobs[id] = 'Applied'
    }
    else{
        console.log('Already Applied')
    }

    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs))
    
}

const getFromDb = () =>{
    let appliedJobs = {};
    const storedJobs = localStorage.getItem('applied-jobs');
    // console.log(storedJobs)
    if(storedJobs){
        appliedJobs = JSON.parse(storedJobs);
    }
    return appliedJobs;
    
}

export {addToDb, getFromDb}
