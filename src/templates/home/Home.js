import React from "react"
import Layout from "c/layout/Layout"
import "./Home.css"

export default ({ data }) => {
  console.log(data.odss)
  return (
    <Layout type="page" className="home">
      <div className="hero">
        <video
          className="trailer"
          preload="auto"
          width="640"
          height="360"
          autoPlay
          muted
          loop
        >
          <source src={data.videoPrincipal.video.file.url} type="video/mp4" />
        </video>
      </div>
      <ul className="odss">
        {data.odss.map((item, i) => (
          <li key={i}>
            <h2>
              ODS #{item.contentfulid} :: {item.nombre}
            </h2>
            <ul>
              {item.videos.map((item, i) => (
                <li key={i}>
                  <h3>{item.titulo}</h3>
                  <img src={item.portada.file.url} alt="x" width="360" />
                  <video
                    className="sub"
                    preload="auto"
                    width="360"
                    height="180"
                    controls
                  >
                    <source src={item.video.file.url} type="video/mp4" />
                  </video>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
