import React from 'react'
import Link from 'next/link'
import Butter from 'buttercms'

const butter = Butter('10c1b734def0683eb0924c6398bb171f6bf3e0dc')

export default class extends React.Component {
  static async getInitialProps({ query }) {
    let page = query.page || 1;

    const resp = await butter.post.list({page: page, page_size: 10})    
    return resp.data;
  }
  render() {
    const { next_page, previous_page } = this.props.meta;

    return (
      <div>
      <style jsx>{`
      .banner {
        display: flex;
        flex-direction: column;
        align-items: center;
        }
      .banner img {
         max-width: 400px;
        }
        `}
      </style>
      <div className="banner">
        <img src="/static/tg-icon.png" alt=""/>
      </div>
        {this.props.data.map((post) => {
          return (
            <div><a href={`/post/${post.slug}`}>{post.title}</a></div>
          )
        })}

        <br />

        <div>
          {previous_page && <Link href={`/?page=${previous_page}`}><a>Prev</a></Link>}
        
          {next_page && <Link href={`/?page=${next_page}`}><a>Next</a></Link>}
        </div>
      </div>
    )
  }
}