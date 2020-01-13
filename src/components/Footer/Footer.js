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
              AWS Amplify
            </a>
          </p>
        </div>
      </div>
    )
  }
}
