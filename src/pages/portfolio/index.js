import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/Layout'

export default function portfolio({ data }) {
    const penInkItems = data.penInkItems.nodes;
    const digitalItems = data.digitalItems.nodes;
    const paintedItems = data.paintedItems.nodes;
    const zenItems = data.zenItems.nodes;
    const commissionItems = data.commissionItems.nodes;

    return (
        <Layout>
            <h1 className="grid-title">Pen & Ink</h1>
            <div className="image-gallery">
                {penInkItems.map(item => (
                    <Link to={"/portfolio/" + item.frontmatter.slug} key={item.id} className="grid-image">
                        <GatsbyImage image={item.frontmatter.thumb.childImageSharp.gatsbyImageData}/>
                        <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>{ item.frontmatter.title }</h2>
                            <span></span>
                            <p>{ item.frontmatter.media }</p>
                            <p>{ item.frontmatter.date }</p>
                        </div>
                        </div>
                    </Link>  
                ))}
            </div>
            <h1 className="grid-title">Digital</h1>
            <div className="image-gallery">
                {digitalItems.map(item => (
                    <Link to={"/portfolio/" + item.frontmatter.slug} key={item.id} className="grid-image">
                        <GatsbyImage image={item.frontmatter.thumb.childImageSharp.gatsbyImageData}/>
                        <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>{ item.frontmatter.title }</h2>
                            <span></span>
                            <p>{ item.frontmatter.media }</p>
                            <p>{ item.frontmatter.date }</p>
                        </div>
                        </div>
                    </Link>  
                ))}
            </div>
            <h1 className="grid-title">Zen Doodles</h1>
            <div className="image-gallery">
                {zenItems.map(item => (
                    <Link to={"/portfolio/" + item.frontmatter.slug} key={item.id} className="grid-image">
                        <GatsbyImage image={item.frontmatter.thumb.childImageSharp.gatsbyImageData}/>
                        <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>{ item.frontmatter.title }</h2>
                            <span></span>
                            <p>{ item.frontmatter.media }</p>
                            <p>{ item.frontmatter.date }</p>
                        </div>
                        </div>
                    </Link>  
                ))}
            </div>
            <h1 className="grid-title">Commissions</h1>
            <div className="image-gallery">
                {commissionItems.map(item => (
                    <Link to={"/portfolio/" + item.frontmatter.slug} key={item.id} className="grid-image">
                        <GatsbyImage image={item.frontmatter.thumb.childImageSharp.gatsbyImageData}/>
                        <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>{ item.frontmatter.title }</h2>
                            <span></span>
                            <p>{ item.frontmatter.media }</p>
                            <p>{ item.frontmatter.date }</p>
                        </div>
                        </div>
                    </Link>  
                ))}
            </div>
            <h1 className="grid-title">Painted</h1>
            <div className="image-gallery">
                {paintedItems.map(item => (
                    <Link to={"/portfolio/" + item.frontmatter.slug} key={item.id} className="grid-image">
                        <GatsbyImage image={item.frontmatter.thumb.childImageSharp.gatsbyImageData}/>
                        <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>{ item.frontmatter.title }</h2>
                            <span></span>
                            <p>{ item.frontmatter.media }</p>
                            <p>{ item.frontmatter.date }</p>
                        </div>
                        </div>
                    </Link>  
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
query PortfolioPage {
    penInkItems: allMarkdownRemark(filter: {frontmatter: {category: {eq: "pen-ink"}}}) {
      nodes {
        frontmatter {
          title
          date
          media
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
    digitalItems: allMarkdownRemark(filter: {frontmatter: {category: {eq: "digital"}}}) {
      nodes {
        frontmatter {
          title
          date
          media
          slug
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
    zenItems: allMarkdownRemark(filter: {frontmatter: {category: {eq: "zen"}}}) {
        nodes {
          frontmatter {
            title
            date
            media
            slug
            thumb {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          id
        }
    }
    commissionItems: allMarkdownRemark(filter: {frontmatter: {category: {eq: "commission"}}}) {
        nodes {
          frontmatter {
            title
            date
            media
            slug
            thumb {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          id
        }
    }
    paintedItems: allMarkdownRemark(filter: {frontmatter: {category: {eq: "painted"}}}) {
        nodes {
          frontmatter {
            title
            date
            media
            slug
            thumb {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          id
        }
    }
  }
`
