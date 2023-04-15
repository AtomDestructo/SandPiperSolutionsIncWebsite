import React from "react";

export default function ToTheTop() {
    function scrollIntoView(){
        window.scrollTo(0, 0);
    }
    return (
        <>
            <div class="container row ">
                <div class="col-12 " >
                    <button href="#top" type="button" id="top-button" class=""  
                    onClick={scrollIntoView}>Top</button>
                </div>
            </div>
        </>
    );
  }