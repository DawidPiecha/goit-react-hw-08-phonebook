import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        Home
      </div>
    </HelmetProvider>
  );
};

export default Home;
