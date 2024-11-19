import backgroundImage from '../../asset/images/img3.jpg';
import Header from '../components/Header';

function Home() {
  return (
    <>
      <div
        className="bg-cover bg-center h-[100vh] flex flex-col items-center justify-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <Header />
        <div className='relative text-center p-8 md:p-16 text-white b rounded-lg shadow-2xl'>
          <p className='text-4xl md:text-5xl font-bold text-green-800 mb-2'>
           I'AM MERON MULU
          </p>
          <p className='text-lg md:text-2xl font-semibold text-green-800'>
            Software Engineer
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
