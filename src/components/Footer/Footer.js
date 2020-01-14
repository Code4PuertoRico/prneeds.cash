import React, { Component } from 'react'
import './Footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer__root">
        <div className="wrap">
          <p>
            Built with{' '}
            <span aria-label="heart" role="img">
              💕
            </span>
            &{' '}
            <a className="gatsby" href="https://gatsbyjs.org">
              Gatsby
            </a>{' '}
            &{' '}
            <a className="airtable" href="https://airtable.com">
              Airtable
            </a>{' '}
            &{' '}
            <a className="aws-amplify" href="https://aws.amazon.com/amplify/">
              AWS Amplify. {' '}
            </a>
            <a className="nominate-effort" href = "https://airtable.com/shrpyVJHb2f4v6R1r" target = "_blank">Nominate effort</a>{' '}
            ||{' '}
            <a className="download-list" href = "https://airtable.com/shrsh1Od4D8PtXVhI" target = "_blank">Download this list</a>{' '}
            ||{' '}
            <a className="improve-code" href = "https://github.com/Code4PuertoRico/prneeds.cash" target = "_blank">Contribute to this project.</a>{' '}
            
          </p>
        </div>
      </div>
    )
  }
}
