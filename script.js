class Slider {
  constructor(sliderId, autoplay, delay) {
    this.slider = document.querySelector(`#${sliderId}`);
    this.sliderWrapper = this.slider.querySelector(".slider__wrapper");
    this.slides = [...this.slider.querySelectorAll(".slider__item")];
    this.prevSlideButton = this.slider.querySelector(".slider__button-prev");
    this.nextSlideButton = this.slider.querySelector(".slider__button-next");
    this.activeSlide = 0;

    if (this.prevSlideButton || this.nextSlideButton) {
      this.initHandlers();
    }
    this.initSwipeMechanism();
    if (autoplay) {
      this.autoPlay = setInterval(() => this.changeSlide(true), delay * 1000);
    }
  }
  initHandlers() {
    this.prevSlideButton.addEventListener("click", () => {
      this.changeSlide(false);
    });
    this.nextSlideButton.addEventListener("click", () => {
      this.changeSlide(true);
    });
  }
  initSwipeMechanism() {
    let startX;

    this.slider.addEventListener("touchstart", (event) => {
      startX = (event.touches || event.originalEvent.touches)[0].clientX;
    });

    this.slider.addEventListener("touchmove", (event) => {
      if (!startX) return;
      const xDelta = startX - (event.touches || event.originalEvent.touches)[0].clientX;

      if (xDelta > 45) {
        this.changeSlide(true);
        startX = null;
      } else if (xDelta < -45) {
        this.changeSlide(false);
        startX = null;
      }
    });
  }
  changeSlide(direction) {
    if (direction == true) {
      console.log("next");
      this.activeSlide < this.slides.length - 1 ? (this.activeSlide += 1) : (this.activeSlide = 0);
      this.sliderWrapper.style.transform = `translate3d(${-(this.slider.offsetWidth * this.activeSlide)}px,0,0)`;
    } else {
      console.log("prev");
      this.activeSlide == 0 ? (this.activeSlide = this.slides.length - 1) : (this.activeSlide -= 1);
      this.sliderWrapper.style.transform = `translate3d(${-(this.slider.offsetWidth * this.activeSlide)}px,0,0)`;
    }
  }
}

const sliderFirst = new Slider("slider-1", true, 5);
const sliderSecond = new Slider("slider-2", true, 5);

// const slider = document.querySelector("#slider-1");
// const sliderWrapper = slider.querySelector(".slider__wrapper");
// const slides = [...slider.querySelectorAll(".slider__item")];
// const prevSlideButton = slider.querySelector(".slider__button-prev");
// const nextSlideButton = slider.querySelector(".slider__button-next");

// let activeSlide = 0;

// const changeSlide = (direction) => {
//   if (direction == true) {
//     console.log("next");
//     activeSlide < slides.length - 1 ? (activeSlide += 1) : (activeSlide = 0);
//     sliderWrapper.style.transform = `translate3d(${-(slider.offsetWidth * activeSlide)}px,0,0)`;
//   } else {
//     console.log("prev");
//     activeSlide == 0 ? (activeSlide = slides.length - 1) : (activeSlide -= 1);
//     sliderWrapper.style.transform = `translate3d(${-(slider.offsetWidth * activeSlide)}px,0,0)`;
//   }
// };
// prevSlideButton.addEventListener("click", () => {
//   changeSlide(false);
// });
// nextSlideButton.addEventListener("click", () => {
//   changeSlide(true);
// });

// // autoplay slides in 5 sec
// const autoPlay = setInterval(() => changeSlide(true), 5000);

// /**
//  * Swipe process
//  */

// let startX;

// slider.addEventListener("touchstart", (event) => {
//   startX = (event.touches || event.originalEvent.touches)[0].clientX;
// });

// slider.addEventListener("touchmove", (event) => {
//   if (!startX) return;
//   const xDelta = startX - (event.touches || event.originalEvent.touches)[0].clientX;

//   if (xDelta > 45) {
//     changeSlide(true);
//     startX = null;
//   } else if (xDelta < -45) {
//     changeSlide(false);
//     startX = null;
//   }
// });
