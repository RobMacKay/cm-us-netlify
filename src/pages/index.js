import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import cmtm from '../img/cmtm.jpg'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-1-mobile">US Licensed Casinos: Online Casino Authority - Advocate of Fair Play</h1>
              <div className="text">
                <img src={cmtm} alt="cm" className="alignleft"/>
                <p>Legal Online Gambling in the US: Casinomeister has been the advocate of fair play since its inception in 1998, and we have been the main platform for player grievances, experiences, and what is right - and what is wrong with the online casino industry. Hands down - we are the authority on online gambling.</p>
                <p>Casinomeister USA - Our mission: to provide US residents properly licensed US online casinos, crucial player information, and the resources to make waves (politically speaking) if you are unable to place an online wager in your state. If your state allows legalized gambling in any shape or form, then obviously you should have the right to play at home with a compliant and regulated online casino.</p>
              </div>
            </div>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
