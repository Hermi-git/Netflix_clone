import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer-outer-container'>
      <div className="footer-inner-container">
      <div className="footer-icons">
        <FacebookOutlinedIcon/>
        <YouTubeIcon/>
        <InstagramIcon/>
      </div>
      <div className="footer-data">
        <div>
        <ul>
        <li>Audio description</li>
        <li>Investor Relations</li>
        <li>Legal Notice</li>
        </ul>
      </div>

      <div >
        <ul>
          <li>help center</li>
          <li>jobs</li>
          <li>cookie preference</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Gift Cards</li>
          <li>Terms of use</li>
          <li>Corporate Information</li>
        </ul>
      </div>
      <div >
        <ul>
          <li>Media center</li>
          <li> Privacy</li>
          <li>contact us</li>
        </ul>
      </div>
    </div>
    <div className='service-code'>
      <p>
        Service Code
      </p>
    </div>
    
    <div className="copy-writer">
      &copy; 1997-2024 Netflix,Inc.
    </div>
    </div>
    </div>
  )
}
 export default Footer