import Container from '../components/Container';

const Home = () => {
  return (
    <div>
      <Container isHome={true}>
        {/* <div className="bg-idcol w-full h-screen bg-cover bg-center bg-no-repeat bg-top" /> */}
      </Container>
      <div className="relative">
        <div className="bg-purpleCloudBottom purple-cloud absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
        <div className="bg-pinkCloudUp pink-cloud absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
        <div className="bg-pinkCloudBottom pink-cloud absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
        <div className="bg-purpleCloudUp purple-cloud absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
        <div className="bg-greenCloud green-cloud absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
        <div className="bg-collage collage absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
      </div>
    </div>
  );
};

export default Home;
