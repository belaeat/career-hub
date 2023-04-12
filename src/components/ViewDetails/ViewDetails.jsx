import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const dynamic = useParams()
    console.log(dynamic.id)

    const jobsDetail = useLoaderData();
    // console.log(jobsDetail)

    const [details, setDetails] = useState({});

    useEffect(() => {
        const description = jobsDetail.find(occupation => occupation.id === 1);
        setDetails(description)
    }, [details])   

    

    return (
        <div>
            <h2>Details Here {dynamic.id}</h2>
            
        </div>
    );
};

export default ViewDetails;