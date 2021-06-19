import { useState, useEffect, useContext } from 'react'

export default function UseContent(target){
    const [content, setContent] = useState([]);

    useEffect(()=>{
        const allContent = fetch('https://jsonmock.hackerrank.com/api/articles').then(res=>res.json()).then(data=>console.log(data.data));
        setContent(allContent)
    }, [])
    return {content}
}