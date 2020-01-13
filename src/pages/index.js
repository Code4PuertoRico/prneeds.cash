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
    
    /**
    * Shuffles array in place.
    * @param {Array} a items An array containing the items.
    */
    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }
    let records = shuffle(this.props.data.allAirtable.edges)

    return (
      <div className="hero__root" style={style}>
        <div className="overlay" />
        <img src={Waves} alt="Waves" className="waves" />
        <div className="content">
          <h1>Puerto Rico Needs Ca$h</h1>
          <h2>
            After an <a target = '_blank' href='//en.wikipedia.org/wiki/2020_Puerto_Rico_earthquakes'>earthquake swarm</a> rattled the islands, 
            Puerto Ricans have self-organized to provide assistance to those affected. 
            The organizations and efforts listed below are accepting cash donations in order to help  
            the affected population in the south of Puerto Rico. 
          </h2>
          <p>
            This curated list focuses on cash donations. If you are in Puerto Rico and would like to donate goods, 
          </p>
        </div>
      </div>
    )
  }

  _renderBlocks = () => {
    let records = this.props.data.allAirtable.edges
    return _.map(records, (record, index) => {
        let { Name, bio, Image, Description, PaypalEmail, PaypalUrl, Website } = record.node.data
        let slug =
          Name.replace(/ /g, '-')
            .replace(/[,&]/g, '')
            .toLowerCase() + '/'
        let paypalEmail = "cdpecpr@gmail.com"
        let amount = "50"
        return (
          <Block
            key={index}
            title={Name}
            bio={Description}
            img={Image}
            slug={slug}
            paypalEmail={PaypalEmail}
            paypalUrl={PaypalUrl}
            website={Website}
          />
        )
    })
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>
            Chase Ohlson's Charities | Donations from Freelance Web Development
          </title>
          <meta
            name="description"
            content="When you work with Chase Ohlson on a freelance web development project, part of your donation will fo to one of these amazing organizations."
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
            Name
            Description
            Image {
              url
            }
            PaypalEmail
            PaypalUrl
            Website
          }
        }
      }
    }
  }
`