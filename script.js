// Creative Corner Slideshow
document.addEventListener('DOMContentLoaded', () => {
  const quotes = document.querySelectorAll('.quote-item');
  let currentIndex = 0;

  function showQuote(index) {
      quotes.forEach((quote, i) => {
          quote.style.display = i === index ? 'block' : 'none';
      });
  }

  function nextQuote() {
      currentIndex = (currentIndex + 1) % quotes.length;
      showQuote(currentIndex);
  }

  showQuote(currentIndex);
  setInterval(nextQuote, 4000); // Change quote every 4 seconds
});

// Songs Page Carousel
document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel__button"></span>`;
    });
  
    carousel.insertAdjacentHTML(
      "beforeend",
      `
          <div class="carousel__nav">
              ${buttonsHtml.join("")}
          </div>
      `
    );
  
    const buttons = carousel.querySelectorAll(".carousel__button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // un-select all the items
        items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
  
        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
      });
    });
  
    // Select the first item on page load
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
  });

  // sidebar
  function toggle() {
    var nav = document.querySelector("#nav"),
      btn = document.querySelector("#btn");
    nav.classList.toggle("open");
    btn.classList.toggle("is-active");
  }
