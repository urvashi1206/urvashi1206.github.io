import img from "./images/urvashi_.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <section id="about" className="relative py-5" style={{ paddingTop: "150px" }}>
      <Container data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <Row>
          <Col lg={4} className="d-flex justify-content-center">
            <img
              src={img}
              height="100%"
              width="100%"
              style={{ borderRadius: "10%" }}
            />
          </Col>
          <Col lg={8} pt={4} className="content">
            <br />
            <h3 style={{ fontSize: "1.5rem" }}>Software Developer</h3>
            <br />
            <p style={{ color: "rgb(255,255,255,0.7)", fontSize: "1.1rem" }}>
              An aspiring Software Developer and Data Engineer, I specialize in designing and implementing scalable systems that drive efficiency and innovation.
              <br />
              <br />
            </p>
            <p style={{ color: "rgb(255,255,255,0.9)", fontSize: "1.1rem" }}>
              I'm a graduate student pursuing a Master of Science in Game Design and Development at Rochester Institute of Technology, with a GPA of 4.0. With professional experience as a Data Engineer at Quantiphi, I developed ETL pipelines, automated workflows, and implemented cloud-based solutions to process and analyze large datasets. My expertise spans backend development, cloud technologies like AWS and GCP, and programming languages including Python, Java, and SQL. At Rochester Institute of Technology, I have further honed my skills in software development by contributing to projects focused on data-driven solutions and system optimization.
              <br />
              <br />
              Consistently seeking challenging roles in organizations where I can leverage my skills to contribute to the company’s growth while continuously enhancing my expertise. I thrive in collaborative environments and actively seek mentorship and opportunities to grow professionally.
            </p>
            <br />
            <Row>
              <Col lg={4}>
                <ul style={{ fontSize: "1rem" }}>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
                    <span>+1 (551) 344-8575</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                    <span>Rochester, New York</span>
                  </li>
                </ul>
              </Col>
              <Col lg={7}>
                <ul style={{ fontSize: "1rem" }}>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
                    <span>MS - Game Design and Development</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
                    <span>
                      <a
                        href="mailto:dhingraurvashi99@gmail.com"
                        className="text-primary-green no-underline hover:text-hover-green"
                      >
                        dhingraurvashi99@gmail.com
                      </a>
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
