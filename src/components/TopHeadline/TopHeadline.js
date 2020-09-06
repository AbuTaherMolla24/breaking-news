import React, { useEffect, useState } from 'react';
import News from '../News/News';


const TopHeadline = () => {
    const  [articles, setArticles] = useState([]);
    useEffect ( () =>{
        const url = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8a3635485609457db2a537e0aea9a1bf'
        fetch(url)
        .then(res => res.json())
        .then(data =>setArticles(data.articles))
        
        }, [])
    return (
        <div>
            <h1>Top matha: {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;