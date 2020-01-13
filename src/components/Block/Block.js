import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import LinkIcon from '../../images/link.svg'
import Paypal from '../Paypal'

import './Block.scss'

export default class Block extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.array.isRequired,
    bio: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    paypalEmail: PropTypes.string.isRequired,
    paypalUrl: PropTypes.string.isRequired
  }

  render() {
    let { title, img, bio, slug, paypalEmail, paypalUrl } = this.props
  
    let style = {
      backgroundImage: `url(${img[0].url})`,
    }
    let desc = bio.length <= 420 ? bio : bio.substring(0, 420) + "..."
    let gClass = slug.substring(0, slug.length - 1)
    let block
    if(paypalUrl || paypalEmail){
      block = <div className="wrap">
        <div style={style} className="image">
          <div className={`overlay`} />
          <img class="icon" src={LinkIcon} alt="Link" />
        </div>
        <div className={`title`}>
          <h2>{title}</h2>
        </div>
        <div className="text">
          <p>"{desc}"</p>
        </div>
        <div className = "cta-donate">
          
          <Paypal
            paypalEmail={paypalEmail}
            paypalUrl={paypalUrl}
          />
        </div>
      </div>
    } else{
      block = 
        <div className="wrap">
          <div style={style} className="image">
            <div className={`overlay`} />
            <img class="icon" src={LinkIcon} alt="Link" />
          </div>
          <div className={`title`}>
            <h2>{title}</h2>
          </div>
          <div className="text">
            <p>"{bio}"</p>
          </div>
          <div className = "cta-donate">
          </div>
          </div>
        
    }
    return (
    <div className={`block__root ${gClass}`}>
      {block}
    </div>
    )
  }
}
