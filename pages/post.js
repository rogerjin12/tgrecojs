import React from 'react'
import Butter from 'buttercms'
import Link from 'next/link'
import Layout from '../components/layout'

const butter = Butter('10c1b734def0683eb0924c6398bb171f6bf3e0dc')

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const resp = await butter.post.retrieve(query.slug);  
    return resp.data;
  }
  render() {
    const post = this.props.data;
    return (
      <Layout>
      <style>
      {`
       .flex-col * {
          width: 80%;
          line-height: 1.3;
          font-size: 1em;
        }
        .flex-col div {
          width: 80%;
        }
        .flex-col {
          background: #00abff;
        }
        pre {
          background: #ff5400;
          padding: 1em;
          max-width: 60%;
          overflow: hidden;
        }
        pre code {
          margin-left: 10px;
        }
      `}
      </style>
        <h1>{post.title}</h1>
        <div className="flex-col" dangerouslySetInnerHTML={{__html: post.body}}></div>
      </Layout>
    )
  }
}