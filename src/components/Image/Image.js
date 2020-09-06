import React, { useState, useEffect } from 'react';
import './Image.css';
import fakeData from '../../fakeData';

const Image = () => {
    // console.log(fakeData);
    const [photo, setImg] = useState(fakeData);

    // useEffect(() => {
    //     const url = 'https://jsonplaceholder.typicode.com/photos?albumId=1';
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setImg(data))
    // },[])

    const {pic} = photo;
    return (
        <div className="img">
            <img src={pic} alt=""/>
        </div>
    );
};

export default Image;