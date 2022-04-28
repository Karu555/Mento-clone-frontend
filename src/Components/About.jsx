import "./About.css"
import { Footerdown } from "./Footerdown";
import { Navbar } from "./Navbar";
export const About = () => {
    return( <>
    <Navbar />
      <div className="about">
        <div className="about12">
          Ever wondered what you really <br />
          like doing?What is your true <br /> 
          calling?
          <br /><br />
        </div>
        <div className="about13" >
          We often end up in careers or industries because we are either confused or clueless about <br /> what we want to do in life. Also, we don't actually have much information about <br /> the numerous career options available to us.
          <br />
          <br />
          Mento aims to solve that problem by providing first hand in-depth career advice from the <br />
           biggest and best in each field. You'll get all the information you need to decide if a <br /> particular career is for you or not.
        </div>
       <div className="video">
       <iframe width="558" height="339"  src="https://www.youtube.com/embed/0BlEW1nEF3s" title="YouTube video player"></iframe>
       </div>
   
      <div className="about2">
        From the biggest entrepreneur in India - Ritesh Agarwal, the director of the highest <br /> grossing film ever made in India - Nitesh Tiwari, to the biggest selling author in India - <br />  Amish Tripathi, the founders of the number one restaurant in India - Bombay Canteen, to <br /> the creator of three of the biggest web-series shows in India - Biswapati Sarkar amongst <br /> numerous others, Mento brings you an all star lineup to help you decide your future.
        <br /><br />
        Over the coming year we will have a rich content library of over 300 different career <br /> options to choose from. You'll also get all the information on how to do a certified course <br /> for a particular field as well as find internship opportunities to learn on the job.
        <br /><br />
        We look forward to helping millions of Indians find their calling and discover their dream career.
        <br /><br />
        Cheers to a new India!
      </div>
      <div>
        <div className="about3">P.S : Please send me your thoughts on</div>
        {/* <a href="mailto:Avdheshpal2201@gmail.com" >SUPPORT@gmail.com</a> */}
      </div>
      </div>
      <Footerdown />
    </>
    )};
  

  