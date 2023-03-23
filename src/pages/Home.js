import React, { Component } from "react";

// Component exports the Home page structure to be rendered in the 'App' function
export class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
}
    render() {
        return (
            <>
{/*opening title */}
        <div class="container-fluid ">
          <div class="row " >
              <div class="bg9 min-vh-100 animation fade-in-image"></div>
          </div>
        </div>
{/*carousel*/}

<div id="carouselExampleIndicators" class="carousel slide carousel-fade carousel-top " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div class="carousel-inner ">
    <div class="carousel-item item active">
      <img src="/media/greenhouse-2.jpg" class="d-block w-100" alt="pic1"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img src="/media/OIP-2.jpg" class="d-block w-100" alt="pic2"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img src="./media/grainbin.jpg" class="d-block w-100" alt="pic3"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<hr/>

{/* welcome container */}
<div class="container bg15">
<div class="container">
        <div>
            <div class="container-fluid">
                <div class="row " >
                    <div class="col-1 text-right "></div>
                    <div class="col-10 left font-a21 w3-animate-right">
                    Welcome to our project management service page!! At SandPiper, we understand that managing a project can be a time-consuming and complex
                    process.  That's where we come in. We offer a range of project management services that are designed to help you achieve your goals efficiently and effectively.
                    </div>
                    <div class="col-1 text-right "></div>
                </div>
            <br/>
            </div>
      </div>
</div>
{/* blurb container */}
<br/>
<div class="container">
        <div>
            <div class="container-fluid ">
                <div class="row " >
                    <div class="col-3 text-right ">
                    <div class="font-a11 w3-animate-left">A little about us:</div>
                </div>
                    <div class="col-9 left font-a33 w3-animate-right">
                    <p>At SandPiper Solutions Inc. , we are a dynamic and diversified company that prioritizes action-oriented problem-solving over obstacles. 
                      Our team is composed of seasoned professionals with extensive experience across a range of industries and academic disciplines, 
                      making us uniquely qualified to deliver innovative solutions that meet the needs of our clients and stakeholders.
                    </p>
                    <p>Our company operates on a fully equity-based structure, allowing us to maintain complete financial independence and flexibility. As a result, we can focus on growth, development, 
                      and maximizing the benefits for all stakeholders involved. 
                      Our team is dedicated to providing exceptional service and delivering measurable results, with an unwavering commitment to ensuring positive cash flow and sustainable growth.
                    </p>
                    <p>At our core, we are a forward-thinking company that values creativity, collaboration, and innovation. We believe that every challenge presents an opportunity for growth and improvement, 
                      and we are committed to staying ahead of the curve in all aspects of our business. Our passion for excellence drives us to exceed expectations and deliver exceptional value to our clients and stakeholders.
                    </p>
                    </div>
                </div>
            <br/>
            <hr/>
            <br/>
            <div class="row " >
                <div class="col-3 right">
                <div class="font-a11 w3-animate-left">Our Employees:</div>
                </div>
                <div class="col-9 font-left font-a33 w3-animate-right">
                <p>We recognize that our employees are our most valuable asset. We hold ourselves to the highest standards of integrity and transparency in all our actions and decisions. 
                  As a company, we are committed to upholding the dignity and value of every individual, and we strive to foster a culture of collaboration, mentorship, and excellence in everything we do.
                  </p>
                  <p>Our team is dedicated to taking on complex challenges with innovation and tenacity, always seeking to exceed expectations and deliver exceptional results. We promote a culture of gratitude and appreciation for one another, 
                    recognizing the important contributions that each team member makes to our collective success.
                  </p>  
                  <p>Our commitment to excellence extends beyond our own organization and into the broader world around us.
                     We believe that by focusing on doing good, we can create positive change and make a meaningful impact on the lives of others. 
                    Through our work, we aim to create a better future for ourselves, our clients, and the world at large.
                  </p>  
                  <p>We take pride in the values that define our company and the exceptional team that embodies them. 
                    We are confident that our unwavering commitment to integrity, collaboration, and excellence will continue to drive our success and make a meaningful impact in the world.
                  </p>               
                </div>
            </div>
            <br/>
            <hr/>
            <br/>
            <div class="row " >
                <div class="col-3 right">
                <div class="font-a11 w3-animate-left">Our Stakeholders:</div>
                </div>
                <div class="col-9 left font-a33 w3-animate-right" >
                <p>At SandPiper Solutions Inc., we are committed to delivering the highest quality, innovative solutions that benefit all of our stakeholders. As a company, we recognize the importance of understanding the unique needs and challenges of each of our stakeholders, 
                  and we strive to deliver tailored solutions that meet and exceed their expectations.
                </p>
                <p>Our team is dedicated to staying at the forefront of technological innovation and industry trends, always seeking to push the boundaries of what is possible and drive positive change. 
                  We are committed to continuous learning and improvement, investing in the tools, resources, and expertise needed to deliver exceptional value to our clients and stakeholders.
                </p>
                <p>We understand that the success of our business is directly tied to the success of our stakeholders, and we are committed to fostering strong, 
                  collaborative partnerships that are built on trust, transparency, and mutual respect. We believe that by working together, we can achieve great things and make a meaningful impact in the world.
                </p>
                <p>Whether we are developing customized solutions for our clients, delivering cutting-edge technologies, or driving positive change in our communities, we are guided by a shared commitment to excellence, innovation, and service. 
                  We are confident that our unwavering dedication to our stakeholders and our commitment to delivering exceptional value will continue to drive our success for years to come.
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
            </>
        );
    }
}

export default Home;
