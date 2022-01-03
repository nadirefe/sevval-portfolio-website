import React from 'react';
import Container from '../components/Container';

const About = () => {
  return (
    <>
      <Container title="about">
        <div className="grid grid-cols-2 gap-4">
          <div> <img className='z-10' src='/images/PP2.jpeg' /></div>
          <div>
            <div className='relative top-12'>
              <h1>
                Hello!
        </h1>
              <p>
                I am a recent Electronics Engineering graduate.
</p>
              <p>
                Regardless of my educational background, I have always had a stronger passion for the arts and have always felt most at ease using visual methods of communication and self-expression.
</p>
              <p>

                I would describe myself as a keen observer; exploring my surroundings and attempting to comprehend the laws of nature have always piqued my interest.
</p>
              <p>

                Satisfying my curiosity about the fundamentals of human nature led to more conceptual questions to be answered. I am intent on finding those answers through artistic way.
</p>


          My aim is to create projects that communicate my approach to understanding the world by combining my scientific knowledge with conceptual installations and artworks.</div >

          </div>

        </div>
      </Container >
    </>
  )
};

export default About;
