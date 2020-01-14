import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import LinkIcon from '../../images/link.svg'
import Paypal from '../Paypal'
import OtherDonation from '../OtherDonation'

import './Block.scss'

export default class Block extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.array.isRequired,
    bio: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    paypalEmail: PropTypes.string,
    paypalUrl: PropTypes.string,
    otherDonationURL: PropTypes.string
  }

  render() {
    let { title, img, bio, slug, paypalEmail, paypalUrl, website, otherDonationURL } = this.props
  
    let style = {
      backgroundImage: `url(${img[0].url})`,
    }
    let desc = bio.length <= 420 ? bio : bio.substring(0, 420) + "..."
    let gClass = slug.substring(0, slug.length - 1)
    
    let buttonChoice
    if(paypalUrl || paypalEmail){
      buttonChoice = "paypal"
    } else if(otherDonationURL){
      buttonChoice = "other"
    }
    
    let block = 
      <div className="wrap">
        <div className="top">
          <div style={style} className="image">
            <div className={`overlay`} />
            <img className="icon" src={LinkIcon} alt="Link" />
          </div>
          <div className={`title`}>
            <a href = {website} target = '_blank'><h2>{title}</h2></a>
          </div>
        </div>
        <div className="text">
          <p>"{desc}"</p>
        </div>
        <div className = "cta-donate">
          {(buttonChoice == 'paypal') && 
            <Paypal
              paypalEmail={paypalEmail}
              paypalUrl={paypalUrl}
            />
          }

          {(buttonChoice == 'other') && 
            <OtherDonation
              url={otherDonationURL}
            />
          }

        </div>
      </div>
    return (
    <div className={`block__root ${gClass}`}>
      {block}
    </div>
    )
  }
}
