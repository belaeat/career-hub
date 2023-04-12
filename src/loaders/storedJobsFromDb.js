import { getFromDb } from "../utilities/fakebd"


const storedJobsFromDb = async () => {
    const loadedJobs = await fetch('/jobsData.json')
    const job = await loadedJobs.json()
    // console.log(job)
    const storedJobs = getFromDb();
    // console.log(storedJobs);
    const savedJobs = [];

    for (const id in storedJobs) {
        const addedJob = job.find(jobItem => jobItem.id == id)
        // console.log(addedJob)
        if (addedJob) {
            //         const quantity = storedJobs[id];
            //         addedJob.quantity = quantity;
            savedJobs.push(addedJob);
        }
    }
    return savedJobs;
}

export default storedJobsFromDb;