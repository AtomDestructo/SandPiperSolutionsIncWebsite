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
<div class="slider">
	<div class="slide-track">

  <div class="slide">
    <img src="../media/proj1.svg" height="200" width="250" alt="proj1" />
		</div>
    <div class="slide">
    <img src="../media/proj2.svg" height="200" width="250" alt="proj2" />
		</div>
    <div class="slide">
    <img src="../media/proj3.svg" height="200" width="250" alt="proj3" />
		</div>
    <div class="slide">
    <img src="../media/proj4.svg" height="200" width="250" alt="proj4" />
		</div>

    <div class="slide">
    <img src="../media/utility1.svg" height="200" width="250" alt="utility1" />
		</div>
    <div class="slide">
    <img src="../media/utility2.svg" height="200" width="250" alt="utility2" />
		</div>


		<div class="slide">
    <img src="../media/electric1.svg" height="200" width="250" alt="electric1" />
		</div>
    <div class="slide">
    <img src="../media/electric2.svg" height="200" width="250" alt="electric2" />
		</div>
    <div class="slide">
    <img src="../media/electric3.svg" height="200" width="250" alt="electric3" />
		</div>
    <div class="slide">
    <img src="../media/electric4.svg" height="200" width="250" alt="electric4" />
		</div>

    <div class="slide">
			<img src="/media/natural1.svg" height="200" width="250" alt="natural1" />
		</div>
    <div class="slide">
			<img src="/media/natural2.svg" height="200" width="250" alt="natural2" />
		</div>
    <div class="slide">
			<img src="/media/natural3.svg" height="200" width="250" alt="natural3" />
		</div>
    <div class="slide">
			<img src="/media/natural4.svg" height="200" width="250" alt="natural4" />
		</div>

		<div class="slide">
			<img src="./media/grainsilo4.svg" height="200" width="250" alt="grainsilo4" />
		</div>
		<div class="slide">
			<img src="../media/grainsilo1.svg" height="200" width="250" alt="grainsilo1" />
		</div>
		<div class="slide">
    <img src="../media/grainsilo2.svg" height="200" width="250" alt="grainsilo2" />
		</div>
		<div class="slide">
    <img src="../media/grainsilo3.svg" height="200" width="250" alt="grainsilo3" />
		</div>

		<div class="slide">
    <img src="../media/greenhouse1.svg" height="200" width="250" alt="greenhouse1" />
		</div>
		<div class="slide">
    <img src="../media/greenhouse2.svg" height="200" width="250" alt="greenhouse2" />
		</div>


	</div>
</div>


{/* welcome container */}
<div class="container bg15">
<div class="container">
      <div>
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
                    <p>At SandPiper Solutions Inc., we are a dynamic and diversified company that prioritizes action-oriented problem-solving over obstacles. 
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
