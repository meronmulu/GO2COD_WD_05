import React from 'react';

function Project() {
  return (
    <>
      <section className="bg-[#101010] p-8">
        <div className="container mx-auto text-center">
          {/* Title Section */}
          <div>
            <h1 className="text-white font-bold text-4xl sm:text-6xl m-8">My Projects</h1>
            <hr className="border-green-500 w-28 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 mt-8 items-center" data-aos="zoom-in">
            {/* Project 1 */}
            <div className="w-full max-w-sm mx-auto">
              <div className="bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="p-6 text-left">
                  <h3 className="text-xl text-white font-semibold mb-4 text-center">Netflix</h3>
                 
                  <a
                    href="https://673c60865f19f10f996f32c7--dashing-pothos-9c4835.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#009E66] text-black font-medium py-2 px-4 rounded hover:bg-green-400 transition-colors items-center text-center sm:ml-28 ml-20"
                  >
                    View project
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="w-full max-w-sm mx-auto items-center">
              <div className="bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="p-6 text-left">
                  <h3 className="text-xl text-white font-semibold mb-4 text-center">Ecommerce</h3>
                  <a
                    href="https://673c60865f19f10f996f32c7--dashing-pothos-9c4835.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#009E66] text-black font-medium py-2 px-4 rounded hover:bg-green-400 transition-colors sm:ml-28 ml-20"
                  >
                    View project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
