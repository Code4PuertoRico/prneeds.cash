import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../images/co-logo-white.svg'
import TwitterIcon from '../../images/icon-twitter.svg'
import GithubIcon from '../../images/icon-github.svg'
import MailIcon from '../../images/icon-mail.svg'

import './Header.scss'

const Header = ({ siteTitle }) => (
  <div className="header__root">
    <div className="links">
      <div className="icon">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="social">
        <a href="https://twitter.com/ChaseOhlsonWeb" target="blank">
          <img src={TwitterIcon} alt="Twitter" />
        </a>
        <a href="https://github.com/brohlson" target="blank">
          <img src={GithubIcon} alt="Github" />
        </a>
        <a href="mailto:chase@chaseohlson.com" target="blank">
          <img src={MailIcon} alt="Mail" />
        </a>
      </div>
    </div>
  </div>
)

export default Header
