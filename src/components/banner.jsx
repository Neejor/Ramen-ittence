import React from "react";

function banner() {
    return (
        <section id="home">
            {/* <img id="banner" src = "/Banner.jpg" alt="banner"></img> */}
            <div id="banner">
                <img src="/Banner.jpg" alt="banner" />
                <div>
                    <span>Your One Stop For</span>
                    <h2>RAMEN</h2>
                </div>
            </div>
        </section>
    )
}

export default banner;