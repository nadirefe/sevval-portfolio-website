import Container from '../components/Container';

const Home = () => {
  return (
    <div>
      <Container isHome={true}>
        {/* <div className="bg-idcol w-full h-screen bg-cover bg-center bg-no-repeat bg-top" /> */}
        <div className='relative'>
          <img className='absolute collage' src='/images/idcollage.png' />
          <img className='absolute purple-cloud-bottom' src='/images/purple-cloud-bottom.png' />
          <img className='absolute purple-cloud-up' src='/images/purple-cloud-up.png' />
          <img className='absolute pink-cloud-bottom' src='/images/pink-cloud-bottom.png' />
          <img className='absolute pink-cloud-up' src='/images/pink-cloud-up.png' />
          <img className='absolute green-cloud' src='/images/green-cloud.png' />
        </div>
      </Container>
      {/* <div className="relative">
        <div className="purple-cloud-bottom absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
        <div className="pink-cloud-up absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
        <div className="pink-cloud-bottom absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
        <div className="purple-cloud-up absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
        <div className="green-cloud absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
        <div className="collage absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
      </div> */}
    </div>
  );
};

export default Home;
