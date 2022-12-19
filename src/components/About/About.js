import React from "react";
import profileImage1 from "../../img/profileImage1.jpg";
import Button from "../UI/Button";
import { BiMedal } from "react-icons/bi";
import { BiPackage } from "react-icons/bi";
import { BiHeadphone } from "react-icons/bi";

const About = (props) => {
  return (
    <section className={props.className + " grid gap-4 "}>
      <div className='self-center'>
        <h1 className='text-center text-5xl font-medium text-zinc-800'>
          About me
        </h1>
      </div>
      <div className='grid grid-cols-2 justify-center'>
        <figure>
          <img
            src={profileImage1}
            alt='profile'
            className='col-span-1 h-56 w-56 items-center rounded-md object-cover shadow-xl grayscale'
          ></img>
        </figure>

        <div className='col-span-1'>
          <div className='mb-8 flex gap-8'>
            <div className='flex flex-col items-start justify-center'>
              <BiMedal className='h-7 w-7 fill-zinc-800 '></BiMedal>
              <p>Experience</p>
              <p>1 + year</p>
            </div>

            <div className='flex flex-col items-start justify-center'>
              <BiPackage className='h-7 w-7 fill-zinc-800'></BiPackage>
              <p>Completed</p>
              <p>3 + projects</p>
            </div>

            <div className='flex flex-col items-start justify-center'>
              <BiHeadphone className='h-7 w-7 fill-zinc-800'></BiHeadphone>
              <p>Support</p>
              <p>Office Hours</p>
            </div>
          </div>
          <p className='mb-8'>
            I am a beginner front-end developer and college student
          </p>
          <Button className='w-auto rounded-md bg-zinc-700 px-5 text-white hover:bg-zinc-600'>
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
