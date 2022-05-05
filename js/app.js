const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const imageSlider = document.querySelector(".image__slider");
const aboutImage = document.querySelector(".parent__el");
let counter = 1;
let markup_p;
let markup_h1;

leftButton.addEventListener("click", () => {
  aboutImage.innerHTML = "";
  counter--;
  if (counter < 1) counter = 3;

  if (counter === 1) {
    markup_h1 = `Discover innovative ways to decorate`;
    markup_p = `We provide unmatched quality, comfort, and style for property
    owners across the country. Our experts combine form and function
    in bringing your vision to life. Create a room in your own style
    with our collection and make your property a reflection of you and
    what you love.`;
  }
  if (counter === 2) {
    markup_h1 = `We are available all across the globe`;
    markup_p = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`;
  }
  if (counter === 3) {
    markup_h1 = `Manufactured with the best materials`;

    markup_p = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`;
  }

  const markup = `
  <h1 class="about__title">${markup_h1}</h1>
          <p class="about__text">${markup_p}
          </p>
          `;
  imageSlider.style.backgroundImage = `url(/images/desktop-image-hero-${counter}.jpg)`;
  aboutImage.insertAdjacentHTML("afterbegin", markup);
});

rightButton.addEventListener("click", () => {
  aboutImage.innerHTML = "";
  counter++;
  if (counter > 3) counter = 1;

  if (counter === 1) {
    markup_h1 = `Discover innovative ways to decorate`;
    markup_p = `We provide unmatched quality, comfort, and style for property
    owners across the country. Our experts combine form and function
    in bringing your vision to life. Create a room in your own style
    with our collection and make your property a reflection of you and
    what you love.`;
  }
  if (counter === 2) {
    markup_h1 = `We are available all across the globe`;
    markup_p = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`;
  }
  if (counter === 3) {
    markup_h1 = `Manufactured with the best materials`;

    markup_p = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`;
  }

  const markup = `
  <h1 class="about__title">${markup_h1}</h1>
          <p class="about__text">${markup_p}
          </p>
          `;
  imageSlider.style.backgroundImage = `url(/images/desktop-image-hero-${counter}.jpg)`;
  aboutImage.insertAdjacentHTML("afterbegin", markup);
});
