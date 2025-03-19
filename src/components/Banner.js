import React from 'react';
import Image from '../assets/avatar.svg';
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='section' id='home'>
      <div className='container mx-auto'>
        <div>
          <div>
            <h1>
              BEN <span>AIDEN</span>
            </h1>
            <div>
              <span>I am a</span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Disinger',
                2000,
                'Youtuber',
                2000,
              ]}
              speed={50}
              />
            </div>
          </div>
          <div>
            <img src={Image} alt='' />
          </div>
        </div>
       </div>
    </section>
  );
};

export default Banner;
