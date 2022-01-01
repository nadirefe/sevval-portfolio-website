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
        <div className="bg-collage absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
        {/* <div className="z-0 bg-idcol absolute inset-0 bg-no-repeat bg-contain bg-top"></div> */}
        {/* <div className="bg-purpleCloudBottom absolute inset-0 bg-no-repeat bg-contain bg-top"></div> */}
        {/* <img src="images/purple-cloud-up.png" className="purple-cloud" />
        <img src="images/purple-cloud-bottom.png" className="purple-cloud" />
        <img src="images/green-cloud.png" className="green-cloud" />
        <img src="images/pink-cloud-bottom.png" className="pink-cloud" />
      <img src="images/pink-cloud-up.png" className="pink-cloud" /> */}
      </div>
    </div>
  );
};

export default Home;
