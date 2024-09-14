import {Swiper, SwiperSlide} from "swiper/react";
import { EffectCube } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/effect-cube';

function App() {
  return (
      <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
          }}
          modules={[EffectCube]}

      >
          <SwiperSlide>
              <img src='/forest.jpg' />
          </SwiperSlide>
          <SwiperSlide>
              <img src='/bridge.jpg' />
          </SwiperSlide>
          <SwiperSlide>
              <img src='/nastya.jpg' />
          </SwiperSlide>
          <SwiperSlide>
              <img src='/cat.jpg' />
          </SwiperSlide>
      </Swiper>
  );
}

export default App;
