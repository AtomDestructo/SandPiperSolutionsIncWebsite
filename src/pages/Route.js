import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home.js";
import  Subsidiaries  from "./Subsidiaries";
import { InvestorRelations } from "./InvestorRelations";
import { OurTeam } from "./OurTeam.js";
import PageNotFound from './PageNotFound.js';

// Component exports the Home page structure to be rendered in the 'App' function
export class Pages extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <>
                <section className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/subsidiaries" element={<Subsidiaries />}/>
                        <Route path="/investors" element={<InvestorRelations />}/>
                        <Route path="*" element={<PageNotFound />} />
                        <Route path="/OurTeam" element={<OurTeam />} />
                    </Routes>
                </section>
            </>
        );
    }
}


