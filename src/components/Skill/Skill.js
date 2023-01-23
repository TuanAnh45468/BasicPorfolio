import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const Skill = (props) => {
  return (
    <section
      className={props.className + " grid grid-cols-2 grid-rows-[100px] gap-4"}
      id='skill'
    >
      <div className='col-start-1 col-end-3  justify-self-center'>
        <div>
          <p className='pl-3 text-5xl font-medium text-zinc-800'>Skills</p>
          <p className='text-zinc-400'>My technical level</p>
        </div>
      </div>

      <div className='col-start-1 col-end-2 grid grid-cols-2 grid-rows-[90px]'>
        <p className='col-start-1 col-end-3 mt-12 h-0 justify-self-center pr-14 text-xl font-medium'>
          Frontend Developer
        </p>
        <ul className='col-start-1 col-end-2 ml-5'>
          <li className='mb-6 grid grid-cols-[auto_1fr] gap-x-1'>
            <BsPatchCheckFill className='inline-block self-center'></BsPatchCheckFill>{" "}
            <span className='col-start-2 col-end-3'>HTML</span>
            <span className='col-start-2 col-end-3 text-sm text-zinc-400'>
              Intermediate
            </span>
          </li>

          <li className='mb-6 grid grid-cols-[auto_1fr] gap-x-1'>
            <BsPatchCheckFill className='inline-block self-center'></BsPatchCheckFill>{" "}
            <span className='col-start-2 col-end-3'>CSS</span>
            <span className='col-start-2 col-end-3 text-sm text-zinc-400'>
              Intermediate
            </span>
          </li>

          <li className='grid grid-cols-[auto_1fr] gap-x-1'>
            <BsPatchCheckFill className='inline-block self-center'></BsPatchCheckFill>{" "}
            <span className='col-start-2 col-end-3'>JavaScript</span>
            <span className='col-start-2 col-end-3 text-sm text-zinc-400'>
              Intermediate
            </span>
          </li>
        </ul>

        <ul className='col-start-2 col-end-3 ml-5'>
          <li className='mb-6 grid grid-cols-[auto_1fr] gap-x-1'>
            <BsPatchCheckFill className='inline-block self-center'></BsPatchCheckFill>{" "}
            <span className='col-start-2 col-end-3'>Tailwind</span>
            <span className='col-start-2 col-end-3 text-sm text-zinc-400'>
              Beginner
            </span>
          </li>

          <li className='mb-6 grid grid-cols-[auto_1fr] gap-x-1'>
            <BsPatchCheckFill className='inline-block self-center'></BsPatchCheckFill>{" "}
            <span className='col-start-2 col-end-3'>Git</span>
            <span className='col-start-2 col-end-3 text-sm text-zinc-400'>
              Intermediate
            </span>
          </li>

          <li className='grid grid-cols-[auto_1fr] gap-x-1'>
            <BsPatchCheckFill className='inline-block self-center'></BsPatchCheckFill>
            <span className='col-start-2 col-end-3'>React</span>{" "}
            <span className='col-start-2 col-end-3 text-sm text-zinc-400'>
              Intermediate
            </span>
          </li>
        </ul>
      </div>

      <div className='col-start-2 col-end-3 grid  grid-cols-2 grid-rows-[90px]'>
        <p className='col-start-1 col-end-3  mt-12 justify-self-center pr-14 text-xl font-medium'>
          Backend Developer
        </p>
        <ul className='col-start-1 col-end-2 ml-5'>
          <li className='mb-6 grid grid-cols-[auto_1fr] gap-x-1'>
            <BsPatchCheckFill className='inline-block self-center'></BsPatchCheckFill>{" "}
            <span className='col-start-2 col-end-3'>NodeJs</span>
            <span className='col-start-2 col-end-3 text-sm text-zinc-400'>
              Intermediate
            </span>
          </li>

          <li className='grid grid-cols-[auto_1fr] gap-x-1'>
            <BsPatchCheckFill className='inline-block self-center'></BsPatchCheckFill>
            <span className='col-start-2 col-end-3'>SQL</span>
            <span className='col-start-2 col-end-3 text-sm text-zinc-400'>
              Intermediate
            </span>
          </li>
        </ul>

        <ul className='col-start-2 col-end-3 ml-5'>
          <li className='mb-6 grid grid-cols-[auto_1fr] gap-x-1'>
            <BsPatchCheckFill className='inline-block self-center'></BsPatchCheckFill>
            <span className='col-start-2 col-end-3'>MySQL</span>
            <span className='col-start-2 col-end-3 text-sm text-zinc-400'>
              Intermediate
            </span>
          </li>

          <li className='grid grid-cols-[auto_1fr] gap-x-1'>
            <BsPatchCheckFill className='inline-block self-center'></BsPatchCheckFill>{" "}
            <span className='col-start-2 col-end-3'>Python</span>
            <span className='col-start-2 col-end-3 text-sm text-zinc-400'>
              Intermediate
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skill;
