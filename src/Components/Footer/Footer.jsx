import { FaFacebook, FaInfo, FaInstagram, FaTwitch } from 'react-icons/fa';
import { Button, DivLA, DivPo, FooterS , Icon, Input, Pf} from '../../HomepageStyle';

const Footer = () => {
    return (
        <>
        <FooterS>
          <div>
             <Pf>
                 <svg id="logo-14" width="73" height="49" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z" className="ccustom" fill="#68DBFF"></path> <path d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z" className="ccompli1" fill="#FF7917"></path> <path d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z" className="ccompli2" fill="#5D2C02"></path> </svg>
             </Pf>
            <Pf>BD product.com<br/>Providing reliable tech since 1992</Pf>
            <Pf>this is website on of the best <br/> product in BD</Pf>
          </div> 
          <div>
            <h2>Services</h2> 
            <Pf>First Output</Pf> 
            <Pf>Job Conform</Pf> 
            <Pf>Marketing</Pf> 
            <Pf>100% Support</Pf>
          </div> 
          <div>
            <h2>Web Details</h2> 
            <Pf>About us</Pf> 
            <Pf>Contact</Pf> 
            <Pf>Jobs</Pf> 
            <Pf>Press kit</Pf>
          </div> 
          <DivPo>
            <span>Sign up 10% off your first order</span> <br></br>
            <Input type="email" placeholder='Your Email Address'/>
            <Button>Subscribe</Button>
            <Icon>
              <FaInstagram />
              <FaFacebook />
              <FaTwitch />
              <FaInfo />
            </Icon>
          </DivPo>
        </FooterS>
          <DivLA>
            <Pf>Copyright © 2023 - All right reserved by BD product.com</Pf>
          </DivLA>
      </>
      
    );
};

export default Footer;