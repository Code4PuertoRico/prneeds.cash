import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './OtherDonation.scss'

export default class OtherDonation extends React.Component {
  static propTypes = {
    url: PropTypes.string.isRequired
  }

  render() {
    let { url } = this.props
    var matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
    var domain = matches && matches[1]; 
    
    return (
      <div className="box">
      <a className="other-button" href={url} target = '_blank'>
        <span className="other-button-title">
          Donate through {domain.replace("www.", "")}
        </span>
      </a>
    </div>
    )
  }
}
