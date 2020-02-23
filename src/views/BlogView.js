/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class BlogView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/BlogController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = BlogView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
      return loaded.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return loading
      })
    })
  }

  render() {
    const proxies = Controller !== BlogView ? transformProxies(this.props.children) : {
      'post-image': [],
      'blog-title': [],
      'post-info': [],
      'post-body': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/jeff-appfairy-test.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div data-collapse="medium" data-animation="default" data-duration={400} className="af-class-navigation-bar w-nav">
              <div className="w-container">
                <a href="index.html" className="w-nav-brand">
                  <div className="af-class-site-name">Denali</div>
                </a>
                <nav role="navigation" className="af-class-navigation-menu w-nav-menu"><a href="index.html" className="af-class-navigation-link w-nav-link">Home</a><a href="about.html" className="af-class-navigation-link w-nav-link">About</a><a href="blog.html" className="af-class-navigation-link w-nav-link w--current">Blog</a><a href="contact.html" className="af-class-navigation-link w-nav-link">Contact</a></nav>
                <div className="af-class-menu-button w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="af-class-content-wrapper">
              <div className="w-container">
                <div className="w-row">
                  <div className="w-hidden-small w-hidden-tiny w-col w-col-3">
                    <div className="af-class-white-wrapper"><img src="images/photo-1443180236447-432ea00e6ead.jpg" alt className="af-class-circle-profile" />
                      <p className="af-class-site-description">Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.</p>
                      <div className="af-class-grey-rule" />
                      <h2 className="af-class-small-heading">Featured Posts:</h2>
                      <div className="af-class-feature-posts-list w-dyn-list">
                        <div className="w-dyn-items">
                          <div className="w-dyn-item" />
                        </div>
                        <div className="w-dyn-empty">
                          <p>No items found.</p>
                        </div>
                      </div>
                      <div className="af-class-grey-rule" />
                      <div className="af-class-social-link-group"><a href="#" className="af-class-social-icon-link w-inline-block"><img src="https://uploads-ssl.webflow.com/5e4ef3e0507f132c10405130/5e4ef3e01374657704c020dc_social-03.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="https://uploads-ssl.webflow.com/5e4ef3e0507f132c10405130/5e4ef3e01374650b35c02122_social-07.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="https://uploads-ssl.webflow.com/5e4ef3e0507f132c10405130/5e4ef3e01374657296c02161_social-18.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="https://uploads-ssl.webflow.com/5e4ef3e0507f132c10405130/5e4ef3e0137465a6e5c020e9_social-09.svg" width={25} alt /></a></div>
                      <p className="af-class-built-with-webflow">Built with <a target="_blank" href="https://webflow.com" className="af-class-webflow-link">Webflow</a></p>
                    </div>
                  </div>
                  <div className="af-class-content-column w-col w-col-9">
                    <div className="af-class-post-wrapper">
                      {map(proxies['post-image'], props => <div {...{...props, className: `af-class-blog-page-image ${props.className || ''}`}}>{props.children}</div>)}
                      <div className="af-class-posts-list">
                        {map(proxies['blog-title'], props => <h1 {...props}>{props.children ? props.children : <React.Fragment>Heading</React.Fragment>}</h1>)}
                        <div className="af-class-details-wrapper">
                          {map(proxies['post-info'], props => <div {...{...props, className: `af-class-post-info ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This is some text inside of a div block.</React.Fragment>}</div>)}
                          <div className="af-class-post-info">|</div><a href="#" className="af-class-post-info af-class-when-link">Text Link</a></div>
                        <div className="af-class-grey-rule" />
                        {map(proxies['post-body'], props => <div {...{...props, className: `af-class-body-copy w-richtext ${props.className || ''}`}}>{props.children}</div>)}
                      </div>
                    </div>
                    <div className="af-class-button-wrapper"><a href="#" className="af-class-button w-button">←&nbsp;All posts</a></div>
                    <div className="af-class-sidebar-on-mobile">
                      <div className="af-class-white-wrapper"><img src="images/photo-1443180236447-432ea00e6ead.jpg" alt className="af-class-circle-profile" />
                        <p className="af-class-site-description">Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.</p>
                        <div className="af-class-grey-rule" />
                        <h2 className="af-class-small-heading">Featured Posts:</h2>
                        <div className="af-class-feature-posts-list w-dyn-list">
                          <div className="w-dyn-items">
                            <div className="w-dyn-item" />
                          </div>
                          <div className="w-dyn-empty">
                            <p>No items found.</p>
                          </div>
                        </div>
                        <div className="af-class-grey-rule" />
                        <div className="af-class-social-link-group"><a href="#" className="af-class-social-icon-link w-inline-block"><img src="https://uploads-ssl.webflow.com/5e4ef3e0507f132c10405130/5e4ef3e01374657704c020dc_social-03.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="https://uploads-ssl.webflow.com/5e4ef3e0507f132c10405130/5e4ef3e01374650b35c02122_social-07.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="https://uploads-ssl.webflow.com/5e4ef3e0507f132c10405130/5e4ef3e01374657296c02161_social-18.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="https://uploads-ssl.webflow.com/5e4ef3e0507f132c10405130/5e4ef3e0137465a6e5c020e9_social-09.svg" width={25} alt /></a></div>
                        <p className="af-class-built-with-webflow">Built with <a target="_blank" href="https://webflow.com" className="af-class-webflow-link">Webflow</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default BlogView

/* eslint-enable */