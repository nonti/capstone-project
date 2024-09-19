import React from 'react'
import './Footer.css';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const Footer = () => {
  return (
    <div className="footer">
    <div className="upperend">
        <div className="section1">
            <div className="sectionheader">Support</div>
            <p>Help Center</p>
            <p>Safety information</p>
            <p>Cancellation options</p>
            <p>Our COVID-12 Response</p>
            <p>Supporting people wtih disabolities</p>
            <p>Report neighbourhood concern</p>
        </div>
        <div className="section2">
            <div className="sectionheader community">Community</div>
            <p>Airbnb.org: disaster relief housing</p>
            <p>Support: Afghan refugess</p>
            <p>Celebrating diversity & belongin</p>
            <p>Combating discrimination</p>
        </div>
        <div className="section3">
            <div className="sectionheader">Hosting</div>
            <p>Try hosting</p>
            <p>AirCover: protection for Hosts</p>
            <p>Hosting resources</p>
            <p>Explore hosting resources</p>
            <p>Visit our community</p>
            <p>How to host responsibly</p>
        </div>
        <div className="section4">
            <div className="sectionheader">Airbnb</div>
            <p>Newsroom</p>
            <p>Learn about new features</p>
            <p>Learn from our founders</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Airbnb Luxe</p>
        </div>
    </div>
    <div className="lowerend">
        <div className="leftside">
            <p>&copy; {new Date().getFullYear()} Airbnb,Inc.</p>
            <p>Privacy</p>
            <p>.</p>
            <p>Terms</p>
            <p>.</p>
            <p>Sitemap</p>
        </div>
        <div className="rightside">
            <LanguageIcon/>
            <select>
          <KeyboardArrowDownOutlinedIcon/>
              <option value='English'>English(EN)</option>
              <option value='English'>English(IN)</option>
              <option value='English'>English(US)</option>
            </select>
            <select>
            <KeyboardArrowDownOutlinedIcon/>
            <option value='zar'>R ZAR</option>
            <option value='usd'>$ USD</option>
            <option value='aud'>$ AUD</option>
            <option value='brl'>R$ BRL</option>
            </select>

            <FacebookIcon />
            <XIcon/>
            <InstagramIcon />
        </div>
    </div>
    </div>
  )
}

export default Footer