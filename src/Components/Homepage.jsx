import React, { useState, useEffect } from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
const Homepage = () => {
    const [api, setapi] = useState([]);
    const fetchapi = async () => {
        let response = await fetch('https://api.tvmaze.com/search/shows?q=all%27').then(res => res.json());
        setapi(response);
    };

    useEffect(() => {
        fetchapi();
    }, []);

    return (
        <div className='dark'>
            <ul>
                {api?.map((data, index) => (
                    <div className='container'>
                        <section className="dark">
                            <div className="container py-4">
                                <article className="postcard dark blue">
                                    <a className="postcard__img_link" href="#">
                                        <img className="postcard__img" src={data?.show?.image?.medium} alt="Image Title" />
                                    </a>
                                    <div className="postcard__text">
                                        <h1 className="postcard__title blue"><Link to={`movie/${data?.show?.id}`} >{data?.show?.name}</Link></h1>
                                        <div className="postcard__subtitle small">
                                            <time dateTime="2020-05-25 12:00:00">
                                                <i className="fas fa-calendar-alt mr-2">Premiered : </i>{data.show.premiered}
                                            </time>
                                        </div>
                                        <div className="postcard__bar"></div>
                                        <div className="postcard__preview-txt"><div
                                            className='info__summary'
                                            dangerouslySetInnerHTML={{ __html: data?.show?.summary }}
                                        ></div></div>
                                        <ul className="postcard__tagbox">
                                            <li className="tag__item"><i className="fas fa-tag mr-2">Country : </i>{data.show.genres}</li>
                                            <li className="tag__item"><i className="fas fa-clock mr-2">Rating : </i>{data.show.rating.average}</li>
                                            <li className="tag__item"><i className="fas fa-clock mr-2">Language : </i>{data.show.language}</li>
                                        </ul>
                                        <Link to={`bookingform/${data?.show?.id}`} ><button className='btn btn-info'>Book Ticket</button></Link>
                                    </div>
                                </article>
                            </div>
                        </section>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Homepage