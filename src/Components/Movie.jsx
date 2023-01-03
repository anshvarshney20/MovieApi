import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Info = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [id])

  return (

    // <div className='info__container'>
    //   <h1 className='info__title'>{data?.name}</h1>
    //   <img className='info__image' src={data?.image?.medium} alt={data?.name} />
    //   <div
    //     className='info__summary'
    //     dangerouslySetInnerHTML={{ __html: data?.summary }}
    //   ></div>
    // </div>
    <div className='dark'>
      <section className="container">
        <div className="container py-4">
          <article className="postcard dark blue">
            <a className="postcard__img_link" href="#">
              <img className="postcard__img" src={data?.image?.medium} alt="Image Title" />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue">{data?.name}</h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  {/* <i className="fas fa-calendar-alt mr-2">Premiered : </i>{data.premiered} */}
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt"><div
        className='info__summary'
        dangerouslySetInnerHTML={{ __html: data?.summary }}
      ></div></div>

              <ul className="postcard__tagbox">
                <li className="tag__item"><i className="fas fa-tag mr-2">Country : </i>{data?.genres}</li>
                <li className="tag__item"><i className="fas fa-clock mr-2">Rating : </i>{data?.rating?.average}</li>
                <li className="tag__item play blue">
                  <i className="fas fa-play mr-2">Language : </i>{data?.language}
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Info
