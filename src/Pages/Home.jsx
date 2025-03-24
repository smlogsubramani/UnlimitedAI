import {Link} from "react-router-dom";
import Navbar from "../components/Navbar"
import bg from "../Assest/bg.jfif"
import topheaderbg from "../Assest/topheader.png"
const Home = () =>{
    return (
        <div>
            <Navbar/>
            <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <img className="topheaders" src={topheaderbg} width="350" height="80" alt="" />
                    <p className="para">The agentic AI Platform</p>
                    {/* <h2 className="header">We are making the Technology come closer to you</h2> */}
                    <p className="subcontent">Empowering lives through innovation—The Agentic AI Platform makes advanced technology accessible and personal.</p>
                    <Link class="nav-link" to="/signup"><button className="btn-discover">DISCOVER NOW</button></Link>
                </div>
                <div className="col">
                    <img className="image" src={bg} width="400" height="400" alt="" />
                </div>
            </div>
            <div className="row">
                <p className="services">Our Services</p>
                <h2 className="service-headers">Services We Provide</h2>
                <p className="service-subcontent" >Unifying Intelligence, Amplifying Potential—Your Gateway to Multiple AI features.</p>
            </div>
            <div id="servicecontainers" className="row">
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Agentic AI
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Agentic AI bridges the gap between advanced technology & human needs empowering individual and business</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Autonomus Agent
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Autonomous Agents are self-directed systems designed to perform tasks, make decisions without humans</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Predictive Models
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">Predictive models analyze historical data to forecast future outcomes, enabling smarter decisions and proactive strategies.</div>
                  </div>
                </div>
            </div>
            </div>

      
                {/* <div className="col">
                    <div className="cardcontainer">
                        <h1 className="card-number">01</h1>
                        <h1 className="cardheader">Agentic AI</h1>
                        <p className="cardpara">Agentic AI bridges the gap between advanced technology & human needs empowering individual and business</p>
                        <button className="cardbtn">Read More</button>
                    </div>
                </div>
                <div className="col">
                    <div className="cardcontainer">
                    <h1 className="card-number">02</h1>
                    <h1 className="cardheader">Autonomus Agent</h1>
                    <p className="cardpara">Autonomous Agents are self-directed systems designed to perform tasks, make decisions without humans</p>
                    <button className="cardbtn">Read More</button>
                    </div>
                </div>
                <div className="col">
                    <div className="cardcontainer">
                    <h1 className="card-number">03</h1>
                    <h1 className="cardheader">Predictive Models</h1>
                    <p className="cardpara">Predictive models analyze historical data to forecast future outcomes, enabling smarter decisions and proactive strategies.</p>
                    <button className="cardbtn">Read More</button>
                    </div>
                </div> */}
 
            </div>
        </div>
    )
}



export default Home;