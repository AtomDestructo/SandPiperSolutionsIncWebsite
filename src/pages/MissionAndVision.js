import React, { Component } from 'react';

export class MissionAndVision extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <br />
                <div class="text-center font-a31 fs-1 fade-in-image"> Mission & Vision</div>
                <br/>
                <br/>
                <div class="row " >
                    <div class="col-3 text-right font-a11 fade-in-image">
                        <div>What we believe</div>
                    </div>
                    <div class="col-6 text-left fs-5 w3-animate-left">
                        <p>Our team’s mission and visions are to create value out of the investments through bringing life to our visions, goals and assets.   
                        </p>
                    </div>
                </div>
                <div class="row " >
                    <div class="col-3 text-right font-a11 ">
                    </div>
                    <div class="col-6 text-left fs-5 w3-animate-left" >
                        <p> Our focus is to promote and foster long term strategic visions which drives the team in a continuous 
                            growth pattern, based on our most valuable asset(s) our “People”.
                            We desire to support value through high quality planning, asset development, 
                            which in turn creates higher long-term growth for the Company, 
                            its People, Shareholders, Stakeholders, regardless of our economic growth or downturns.                          
                        </p>
                    </div>
                    <div class="col-3 bg11 justify-content-center font-a32 w3-animate-right hidden-pic"></div>
                </div>
                <br/>
                <br/>
                <br/>
            </>
        )
    }
}