import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { testimonialsData } from '../../data/siteData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-24 z-10 overflow-hidden bg-white"
    >
      {/* Decorative Blob */}
      <div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-brand-accent to-brand-primary opacity-5 blur-[100px] pointer-events-none animate-pulse-subtle" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold text-text-primary mb-4"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base font-inter font-medium text-text-tertiary"
          >
            Read reviews from international founders, technology directors, and product leaders who partnered with UareTech to scale.
          </motion.p>
        </div>

        {/* Carousel Slider */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="pb-16"
          >
            {testimonialsData.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <div className="glass-card h-full p-8 md:p-10 flex flex-col justify-between text-left relative overflow-hidden group hover:shadow-glass-hover hover:-translate-y-1 transition-all duration-300 border border-slate-200/60 bg-white">
                  
                  {/* Glowing decorative indicator */}
                  <div className="absolute top-0 right-0 p-6 opacity-[0.08] text-brand-primary group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-16 h-16" />
                  </div>

                  <div>
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFC857] text-[#FFC857]" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="font-inter text-sm md:text-base font-medium leading-relaxed text-text-secondary mb-8 italic relative z-10">
                      “{review.text}”
                    </p>
                  </div>

                  {/* Client Bio Container */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover shadow-sm border border-brand-primary/20"
                      loading="lazy"
                    />
                    <div className="text-left">
                      <h4 className="font-outfit font-extrabold text-sm text-text-primary">{review.name}</h4>
                      <span className="font-inter text-xs text-text-tertiary font-bold">{review.role}</span>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
