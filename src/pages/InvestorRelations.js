import React, { Component } from "react";

// Component exports the Investor Relations page structure to be rendered in the 'App' function
export class InvestorRelations extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
<div>
    <br />
    <div class="text-center font-a31 fs-1 fade-in-image">Investor Relations:</div>
    <br />
    <br/>
    <div class="row bg15" >
        <div class="col-3 text-right font-a11 w3-animate-right">
            <div> Why invest with SandPiper?</div>
        </div>
        <div class="col-6 text-left font-a33 w3-animate-left" >
                <p>At SandPiper Solutions Inc., we are proud of our track record for delivering exceptional value to our shareholders. 
                    We are committed to building strong, long-term relationships that are grounded in shared goals, 
                    mutual respect, and a commitment to excellence. As a highly diversified company, 
                    we are uniquely positioned to deliver top value to our shareholders across a range of industries and markets.       
                </p>
                <p>
                Our success is driven by our unwavering commitment to strong moral goals and expectations, 
                which guide our decision-making and ensure that we always act with integrity and professionalism. 
                We are deeply committed to meeting the high demands of our stakeholders, 
                while also prioritizing the safety and well-being of our people and the environment.
                </p>
                <p>
                Our leadership team is composed of highly regarded, innovative professionals who are proud to be part of SandPiper. 
                We believe in leading by example, rolling up our sleeves and diving in wherever needed to ensure that our company delivers exceptional results. 
                We are passionate about investing in our people, our technology, and our infrastructure, 
                and we believe that our continued success is a testament to the dedication and hard work of our entire team.
                </p>
                <p>
                At SandPiper Solutions Inc., we are committed to delivering measurable results and creating value for all of our stakeholders. 
                We are confident that our focus on innovation, collaboration, and excellence will continue to drive our success for years to come. 
                </p>
            </div>
        <div class="col-3 bg10 justify-content-center font-a32 fade-in-image hidden-pic"></div>
        </div>
    </div>
            </>
        );
    }
}

export default InvestorRelations;
