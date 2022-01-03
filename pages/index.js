import Container from '../components/Container';

const Home = () => {
  return (
    <div>
      <Container isHome={true}>
        {/* <div className="bg-idcol w-full h-screen bg-cover bg-center bg-no-repeat bg-top" /> */}
      </Container>
      <div className="relative">
        <div className="purple-cloud-bottom absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
        <div className="pink-cloud-up absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
        <div className="pink-cloud-bottom absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
        <div className="purple-cloud-up absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
        <div className="green-cloud absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
        <div className="collage absolute inset-0 bg-no-repeat bg-contain w-full h-screen bg-center"></div>
      </div>
    </div>
  );
};

export default Home;
