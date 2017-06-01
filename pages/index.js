import React from 'react'
import Link from 'next/link'
import Butter from 'buttercms'
import Layout from '../components/layout'

const butter = Butter('10c1b734def0683eb0924c6398bb171f6bf3e0dc')

export default class extends React.Component {
  static async getInitialProps({ query }) {
    let page = query.page || 1;

    const resp = await butter.post.list({page: page, page_size: 2})    
    return resp.data;
  }
  render() {
    // meta comes from resp.data 
    const { next_page, previous_page } = this.props.meta;

    return (
     <Layout title="Blog Page">
     <style jsx>{`
      .post-card {
        padding: 1em;
        margin: 1em;
        background: #00abff;
        border: 2px solid #fff;
      }
      @media (max-width: 600px) {
        .post-card img {
          display: none;
        }
      }
      .flex-row a {
        font-size: 2em;
        text-decoration: none;
        margin-bottom: 1em;
        transition: all .3s; 
      }
      .flex-row a:hover {
        color: #fff;
      }
     `}</style>

        {this.props.data.map((post) => {
          return (
            <div className="flex-col post-card">
            <a href={`/post/${post.slug}`}>{post.title}</a>
            <p>
              {post.summary}
            </p>
            <img src={post.featured_image} />
            </div>
          )
        })}

        <br />

        <div className="flex-row">
          {previous_page && <Link href={`/?page=${previous_page}`}><a>Show me the previous 5 posts, please.</a></Link>}
        
          {next_page && <Link href={`/?page=${next_page}`}><a>Show me 5 more posts, please.</a></Link>}
        </div>
      </Layout>
    )
  }
}