const jobsDataLoader = async () =>{
    const loadedJobs = await fetch('/jobsData.json')
    const jobs = await loadedJobs.json()
    console.log(jobs)
    return(jobs)
}

export default jobsDataLoader