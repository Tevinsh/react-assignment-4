import { Card } from "../Components/Card";
import { Title } from "../Components/Title";
import { useState, useEffect } from 'react';
import './HomePage.css'

function HomePage(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('/articles')
        .then((res)=> res.json())
        .then((data)=>{
            setData(data);
        })
    },[])
    return(
        <div className="h-screen border-solid border-slate bg-gray-700 subpixel-antialiased">
            <Title title="React Assign 4"/>
            <div className="backdrop-blur-sm rounded-2xl px-5 border-solid bg-gray-600 py-5 mx-10">
                {
                    data.map((data)=>{
                        return <Card key={data.id} title={data.title} body={data.body} date={data.date}/>
                    })
                }
            </div>
        </div>
    )
}

export default HomePage;