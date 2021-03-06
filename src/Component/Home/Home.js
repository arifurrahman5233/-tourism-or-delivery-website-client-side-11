import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner1 from '../../images/banner-1.jpg'
import banner2 from '../../images/banner-2.jpg'
import banner3 from '../../images/banner-3.jpg'
import './Home.css'

const Home = () => {
    const [blogs, setBlog] = useState([]);

    useEffect(() => {
        const url = 'https://quiet-ravine-89740.herokuapp.com/event';
        fetch(url)
            .then(res => res.json())
            .then(data => setBlog(data));
    },[]);
    return (
        <div className="container my-5 shadow p-3">
            <div >
                {/* Slider */}
                <div>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={banner1} className="d-block img-fluid image" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={banner2} className="d-block img-fluid image" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={banner3} className="d-block img-fluid image" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="text-center p-3">TOURISM BLOG</h1>
                <div className="row row-cols-1 row-cols-lg-3 g-4">
                    {
                        blogs.slice(0, 6).map(blog => <div className="col" key={blog._id}>
                            <div className="card h-100 border-success">
                                <img src={blog.img} className="card-img-top img-fluid doctorsCard" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{blog.title}</h5>
                                    <h5 className="card-title">{blog.address}</h5>
                                    <Link to={`/detailsBlog/${blog._id}`}><button className="btn btn-dark p-2 fw-bold text-white">Details</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

                {/* Card */}
                <h1 className="text-center p-3">TOURISM EVENT</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* {
                        doctors.slice(0, 6).map(doctor => <HomeCard
                            key={doctor.id}
                            doctor={doctor}
                        ></HomeCard>)
                    } */}
                </div>

            </div>
        </div>
    );
};

export default Home;