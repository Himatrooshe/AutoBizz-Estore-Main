import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import CountryFlag from "react-country-flag";
import reviews from "./reviewData"; // Import the updated reviews data

const Review = () => {
  return (
    <section className="py-12 bg-[#DBEAFE] sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative mt-10">
          <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
            <div
              className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
              style={{
                background:
                  "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            ></div>
          </div>
          <Swiper
            breakpoints={{
              340: { slidesPerView: 1, spaceBetween: 10 },
              700: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            slidesPerGroup={5} // Group slides to control pagination
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="relative pb-12" // Adjust padding to accommodate pagination
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div
                  className="flex flex-col overflow-hidden shadow-xl rounded-xl bg-white p-4 lg:py-6 lg:px-5"
                  style={{ height: "300px" }} // Adjust height
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(review.stars || 5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-[#FDB241]" // Adjust star size
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      {review.timeAgo}
                    </span>
                  </div>
                  <blockquote className="flex-1 mt-4 overflow-hidden text-ellipsis">
                    <p className="text-xs leading-relaxed text-gray-900 font-pj">
                      {review.review}
                    </p>
                  </blockquote>
                  <div className="flex items-center mt-3">
                    {review.image ? (
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-10 h-10" // Adjust avatar size
                        src={review.image}
                        alt={review.name}
                      />
                    ) : (
                      <div className="flex-shrink-0 flex items-center justify-center rounded-full w-10 h-10 bg-gray-200 text-gray-700 font-bold">
                        {review.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="ml-3">
                      <p className="text-sm font-bold text-gray-900 font-pj">
                        {review.name}
                      </p>
                      <div className="flex items-center space-x-2">
                        <CountryFlag
                          countryCode={review.country.code}
                          svg
                          style={{
                            width: "1.2em",
                            height: "1.2em",
                          }}
                        />
                        <span className="text-xs font-pj text-gray-600">
                          {review.country.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination mt-6 flex justify-center"></div>{" "}
          {/* Tailwind for pagination */}
        </div>
      </div>
    </section>
  );
};

export default Review;
