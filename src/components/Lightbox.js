import React from "react";
import PropTypes from "prop-types";

const Lightbox = props => {
  // Open the Modal
  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }

  return (
    <div>
      <div className="row">
        <div className="column">
          <img
            src="img1.jpg"
            onclick="openModal();currentSlide(1)"
            className="hover-shadow"
          />
        </div>
        <div className="column">
          <img
            src="img2.jpg"
            onclick="openModal();currentSlide(2)"
            className="hover-shadow"
          />
        </div>
        <div className="column">
          <img
            src="img3.jpg"
            onclick="openModal();currentSlide(3)"
            className="hover-shadow"
          />
        </div>
        <div className="column">
          <img
            src="img4.jpg"
            onclick="openModal();currentSlide(4)"
            className="hover-shadow"
          />
        </div>
      </div>

      <div id="myModal" className="modal">
        <span className="close cursor" onclick="closeModal()">
          &times;
        </span>
        <div className="modal-content">
          <div className="mySlides">
            <div className="numbertext">1 / 4</div>
            <img src="img1_wide.jpg" style="width:100%" />
          </div>

          <div className="mySlides">
            <div className="numbertext">2 / 4</div>
            <img src="img2_wide.jpg" style="width:100%" />
          </div>

          <div className="mySlides">
            <div className="numbertext">3 / 4</div>
            <img src="img3_wide.jpg" style="width:100%" />
          </div>

          <div className="mySlides">
            <div className="numbertext">4 / 4</div>
            <img src="img4_wide.jpg" style="width:100%" />
          </div>

          <a className="prev" onclick="plusSlides(-1)">
            &#10094;
          </a>
          <a className="next" onclick="plusSlides(1)">
            &#10095;
          </a>

          <div className="caption-container">
            <p id="caption"></p>
          </div>

          <div className="column">
            <img
              className="demo"
              src="img1.jpg"
              onclick="currentSlide(1)"
              alt="Nature"
            />
          </div>

          <div className="column">
            <img
              className="demo"
              src="img2.jpg"
              onclick="currentSlide(2)"
              alt="Snow"
            />
          </div>

          <div className="column">
            <img
              className="demo"
              src="img3.jpg"
              onclick="currentSlide(3)"
              alt="Mountains"
            />
          </div>

          <div className="column">
            <img
              className="demo"
              src="img4.jpg"
              onclick="currentSlide(4)"
              alt="Lights"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Lightbox.propTypes = {};

export default Lightbox;
