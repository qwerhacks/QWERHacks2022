import React from "react";

   function Sponsors(props) {

        return (
          <div>
            <img src={require("../img/mlh-trust-badge-2021-white.png")} alt="mlh badge" class="mlh" width="120px"/> 
            <h1><div>SPONSORS</div> 
            <div class="subtitle">//our <a class="edit" href="https://drive.google.com/file/d/17rk7LLz3M1pvERu4jV5smDqKyXVDLIkI/view?usp=sharing" target="_blank">sponsorship deck</a> + <a class="edit" href="https://tinyurl.com/qwer-sponsor" target="_blank">sponsorship form</a></div>
            </h1>
            {/* <p><b>contact us by email, facebook, or instagram if you're interested in sponsoring qwer hacks 2021!</b></p> */}
            <div class="sponsor-class">
                <b>#include &lt;spirit tier&gt;</b> 
                <div class="sponsors">
                    <a class="spons-img" href="https://www.xilinx.com/" target="_blank"> <img src={require("../img/xilinx.png")} alt="xilinx logo" width="90px"/> </a>
                </div>
            </div>
            <div class="sponsor-class">
                <b>#include &lt;harmony tier&gt;</b>
                <div class="sponsors">
                    <a class="spons-img" href="https://www.att.com" target="_blank"><img src={require("../img/att.png")} alt="att logo" width="90px"/></a>
                    <a class="spons-img" href="https://robinhood.com/us/en/" target="_blank"><img src={require("../img/robinhood2.png")} alt="robinhood logo" width="90px"/></a>
                </div>
            </div>
            <div class="sponsor-class">
                <b>#include &lt;life tier&gt;</b>
                <div class="sponsors">
                    <a class="spons-img" href="https://www.facebook.com/" target="_blank"><img src={require("../img/facebook.png")} alt="facebook logo" width="90px"/></a>
                    <a class="spons-img" href="https://www.northropgrumman.com/" target="_blank"><img src={require("../img/northrop.png")} alt="northop logo" width="90px"/></a>
                    <a class="spons-img" href="https://www.pimco.com" target="_blank"><img src={require("../img/pimco.png")} alt="pimco logo" width="90px"/></a>
                    <a class="spons-img" href="https://www.fmglobal.com/" target="_blank"><img src={require("../img/fmglobal.png")} alt="fmglobal logo" width="90px"/></a>
                    <a class="spons-img" href="https://aerospace.org/" target="_blank"><img src={require("../img/aerospace.png")} alt="aerospace logo" width="90px"/></a>
                    <a class="spons-img" href="https://www.chevron.com/" target="_blank"><img src={require("../img/chevron.png")} alt="chervon logo" width="90px"/></a>
                    <a class="spons-img" href="https://www.marathonpetroleum.com/" target="_blank"><img src={require("../img/marathon.png")} alt="marathon logo" width="90px"/></a>
                    <a class="spons-img" href="http://hackp.ac/mlh-stickermule-hackathons" target="_blank"><img src={require("../img/stickermule2.png")} alt="stickermule logo" width="90px"/></a>
                </div>
            </div>
            <h1>PARTNERS</h1>
            <div class="sponsor-class">
                <div class="sponsors">
                    <a class="spons-img" href="https://www.swe.ucla.edu/" target="_blank"><img src={require("../img/swe.png")} alt="swe-ucla logo" width="100px"/></a>
                    <a class="spons-img" href="https://teachla.uclaacm.com" target="_blank"><img src={require("../img/acm-teachla-updated.png")} alt="teach LA logo" width="90px"/></a>
                    <a class="spons-img" href="https://w.uclaacm.com" target="_blank"><img src={require("../img/acm-w-updated.png")} alt="acm-w logo" width="90px"/></a>
                    <a class="spons-img" href="https://www.instagram.com/queersinstem/" target="_blank"><img src={require("../img/qtstem.png")} alt="acm-w logo" width="90px"/></a>
                    <a class="spons-img" href="http://bruinentrepreneurs.org/" target="_blank"><img src={require("../img/be.png")} alt="be logo" width="90px"/></a>
                    <a class="spons-img" href="https://www.uclaacm.com/" target="_blank"><img src={require("../img/acm-impact.png")} alt="be logo" width="100px"/></a>
                    <a class="spons-img" href="https://uclaacmai.github.io/" target="_blank"><img src={require("../img/acm-ai.png")} alt="be logo" width="90px"/></a>
                    <a class="spons-img" href="https://www.uclaallbrains.org/" target="_blank"><img src={require("../img/allbrains.png")} alt="all brains logo" width="90px"/></a>
                </div>
            </div>
          </div>

        );

    }

    export default Sponsors;