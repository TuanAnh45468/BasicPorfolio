import React from "react";
import profileImage1 from "../../img/profileImage1.jpg";
import { FaRegHandPaper } from "react-icons/fa";

const Home = (props) => {
  return (
    <main className={props.className}>
      <section className='flex shrink items-center justify-center gap-8'>
        <div>
          <div className='text-5xl font-medium text-zinc-800'>
            <div className='flex items-end gap-8'>
              <span>Tuan Anh</span>
              <FaRegHandPaper className='inline-block fill-yellow-300'></FaRegHandPaper>
            </div>
          </div>
          <div className='mt-8'>
            <div className='text-xl text-zinc-700'>Web developer</div>
            <div className='text-xl text-zinc-700'>
              I'm a web developer and I interested in React
            </div>
          </div>
        </div>
        <img
          src={profileImage1}
          alt='profile'
          className='profile-image h-56 w-56 object-cover shadow-xl grayscale'
        ></img>
      </section>
    </main>
  );
};

export default Home;
