import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import Background from '../images/hero-bg-min.jpg'
import Waves from '../images/waves.svg'
import Block from '../components/Block'
import _ from 'underscore'
import { formatDollars } from '../util/helpers'

class Index extends React.Component {
  _renderHero = () => {
    let donations = 0
    let total = 0

    const style = {
      background: `url(${Background})`,
    }

    return (
      <div className="hero__root" style={style}>
        <div className="overlay" />
        <img src={Waves} alt="Waves" className="waves" />
        <div className="content">
          <h1>Support Local Grassroot Organizations</h1>
          <h2>
            While a <a target = '_blank' href='//en.wikipedia.org/wiki/2020_Puerto_Rico_earthquakes'>swarm of earthquakes</a> rattled the islands, 
            Puerto Ricans self-organized to help those affected. The efforts listed below accept donations online to support the affected communities. 
          </h2>
          <p>
            If you are in PR and would like to donate goods, 
            please see <a href = 'https://docs.google.com/document/d/1VE61j7xHmVgiVQMW1FhqR3ZxVgi__YonTNDmPjiUS7w/edit' target = '_blank'>this list of resources</a>.
          </p>
        </div>
      </div>
    )
  }

  _renderBlocks = () => {
    /**
    * Shuffles array in place.
    * @param {Array} a items An array containing the items.
    */
  function shuffleArray(a) {
    let i = a.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
    return a;
  }
  const records = this.props.data.allAirtable.edges
    return _.map(records, (record, index) => {
        let { EffortName, bio, Image, Description, PaypalEmail, PaypalUrl, Website, OtherDonationURL } = record.node.data
        let slug =
          EffortName.replace(/ /g, '-')
            .replace(/[,&]/g, '')
            .toLowerCase() + '/'
        return (
          <Block
            key={index}
            title={EffortName}
            bio={Description}
            img={Image}
            slug={slug}
            paypalEmail={PaypalEmail}
            paypalUrl={PaypalUrl}
            website={Website}
            otherDonationURL={OtherDonationURL}
          />
        )
    })
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>
            Puerto Rico Needs Money
          </title>
          <meta
            name="description"
            content="The organizations and efforts listed in this site are accepting cash donations in order to help the affected population in the south of Puerto Rico."
          />
        </Helmet>
        {this._renderHero()}
        <div className="blocks__root">{this._renderBlocks()}</div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    allAirtable {
      edges {
        node {
          data {
            EffortName
            Description
            Image {
              url
            }
            PaypalEmail
            PaypalUrl
            Website
            OtherDonationURL
          }
        }
      }
    }
  }
`