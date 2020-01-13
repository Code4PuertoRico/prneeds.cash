import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './Paypal.scss'

export default class Paypal extends React.Component {
  static propTypes = {
    paypal: PropTypes.string.isRequired
  }

  render() {
    let { paypalEmail, paypalUrl } = this.props
    let url
    if(paypalEmail){
      let paypalTemplate = "https://www.paypal.com/cgi-bin/webscr?&cbt=Cancel&return=https://prneeds.cash&cancel_return=https://prneeds.cash&cmd=_donations&business=PAYPAL_EMAIL&currency_code=USD&amount=0&item_name=Earthquake%20relief%20(via%20prneeds.cash)"
      url = paypalTemplate.replace("PAYPAL_EMAIL", paypalEmail)
    } else{
      url = paypalUrl
    }
    return (
      <div class="box">
      <button class="paypal-button" onclick="window.location.href = '{url}';">
      <span class="paypal-button-title">
      Donate with<span> </span>
    </span>
    <span class="paypal-logo">
      <i>Pay</i><i>Pal</i>
    </span>

      </button>
      </div>
    )
  }
}
