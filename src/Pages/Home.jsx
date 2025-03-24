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
                <div className="col">
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
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home;