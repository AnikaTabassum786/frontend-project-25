import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";

const FindUs = () => {
    return (
        <div>
            Find Us

            <div>
                <div className="join join-vertical w-full ">
                    <button className="btn join-item justify-start bg-white">
                        <span><FaFacebook /></span> Facebook
                    </button>
                    <button className="btn join-item justify-start bg-white"> <span><AiFillTwitterCircle size={18} /></span> Twitter</button>
                    <button className="btn join-item justify-start bg-white"> <span><BiLogoInstagramAlt size={18} /></span> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;