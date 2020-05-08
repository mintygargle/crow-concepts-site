import React, { useState, useEffect } from "react";
import Tab from "./Tab";

const TabBar = props => {
  const [content, setContent] = useState("");

  useEffect(() => {
    console.log(content);
  }, [content]);

  function openContent(evt, contentName) {
    var i, tabcontent, tablinks;
    setContent(evt.currentTarget.getAttribute("content"));
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(contentName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  return (
    <div className="--center" {...props}>
      <div className="col">
        <div className="tab row">
          <Tab
            text="Our Founder"
            content_id="content"
            content={`        <article>
            <h1>Our Founder/CEO</h1>
            <h2>Experience</h2>
            <p>
              Christina Crow is a Director, Actor, Writer, and Producer. She’s
              explored many forms of work and has led projects in Art, Literature,
              Film and Photography. She currently specializes in producing photos
              for special occasions such as weddings, birthday’s, and other
              meaningful events.
            </p>
            <h2>Skills</h2>
            <ul>
              <li>Filming</li>
              <li>Writing/Producing scripts for Producers</li>
              <li>Photography for Special Events</li>
              <li>Modeling Photography </li>
            </ul>
            <h2>Works</h2>
            <ul>
              <li>
                Author of the children's book “The Tale of the Ant Brothers”
              </li>
              <li>
                Director of youtube sketches “Till Bacon Do Us Part” and
                “Egg-pocolypse.”
              </li>
              <li>Lead Role in Film - “Through Raging Storms”</li>
              <li>Editor of the children’s book “Amy Wormy”</li>
              <li>
                Illustrator of the children’s book “The Adventure of Cate R.
                Pillar”
              </li>
            </ul>
          </article>`}
            onClick={e => openContent(e, "content")}
          ></Tab>
          <Tab
            text="Our Company"
            content_id="content"
            content={`        <article>
            <section>
              <h1>Our Company</h1>
              <p>
                Crow Concepts offers a variety of services ranging from art,
                writing, and photography commissions. We make sure to give our
                best efforts into creating your concepts for you. Whether you’re
               looking for custom  art, business photography, or writing/editing assistance, we offer
                our resources to create your concept.
              </p>
            </section>
            <hr />
            <section>
              <h1>Services</h1>
              <h2>Photography</h2>
              <ul>
                <li>
                  Commissioned photography for social gatherings (Weddings,
                  Parties, Mixers.)
                </li>
                <li>Brand Development Photography for company photoshoots</li>
                <li>Short Film Making, Directing, and Film Consultation</li>
                <li>Personal Photoshoots</li>
              </ul>
              <h2>Art</h2>
              <ul>
                <li>Custom Art Designs for individual customers</li>
                <li>Logo Design for company brand development</li>
                <li>Commission art for independent story books</li>
              </ul>
              <h2>Writing</h2>
              <ul>
                <li>On-page and Off-Page SEO services</li>
                <li>Commission Blog posts for your company's websites</li>
                <li>Editing services for experienced or novice writers</li>
                <li>Content Consulting</li>
                <li>Writing/Literary assistance</li>
              </ul>
            </section>
          </article>`}
            onClick={e => openContent(e, "content")}
          ></Tab>
        </div>

        <div
          className="content-display-area wrapper"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

export default TabBar;
