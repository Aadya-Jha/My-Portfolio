import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="min-h-screen w-full bg-black-light flex flex-col justify-center items-center">
            <h1 className="text-purple font-heading text-3xl font-extrabold">Oops! We couldn’t find that page.</h1>
            <p className="text-white font-heading text-xl font-medium pb-4 pt-3">It might’ve been moved, deleted, or never existed — let’s find the right direction.</p>
            <button className="text-white bg-purple font-medium font-heading h-12 w-32 rounded-2xl hover:scale-105 shadow-[0_0_17px_2px_rgba(166,74,201,0.5)]">
                <Link to='/'>
                    Back to Home
                </Link>
            </button>
        </div>
    );
}

export default NotFound