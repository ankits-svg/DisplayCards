import React, { useEffect, useState } from 'react'

const Page = () => {
    const [data, setData] = useState([])

    useEffect(() =>{
        fetch("https://www.reddit.com/r/reactjs.json").then((res) =>res.json()).then(res=>{
            console.log(res.data.children[0].data)
            const newdata = res.data.children
            setData(newdata)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    //Title, SelfText_HTML, URL and score
  return (
    <div className="container">
      <h1>Display Cards</h1>
      <div className="grid">
        {data.length > 0 &&
          data.map((e) => (
            <div key={e.data.id} className="card">
              <h2>{e.data.title}</h2>
              <p className="text-content" dangerouslySetInnerHTML={{ __html: e.data.SelfText_HTML }}></p>
              <a href={e.data.url} target="_blank" rel="error" className="url">
                Visit Link
              </a>
              <div className="score">
                <span>Score: </span>
                <strong>{e.data.score}</strong>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}



export default Page
