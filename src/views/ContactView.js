/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class ContactView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContactController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContactView

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
    const proxies = Controller !== ContactView ? transformProxies(this.props.children) : {

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
                <nav role="navigation" className="af-class-navigation-menu w-nav-menu"><a href="index.html" className="af-class-navigation-link w-nav-link">Home</a><a href="about.html" className="af-class-navigation-link w-nav-link">About</a><a href="blog.html" className="af-class-navigation-link w-nav-link">Blog</a><a href="contact.html" className="af-class-navigation-link w-nav-link w--current">Contact</a></nav>
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
                          <div className="w-dyn-item"><a href="#" className="af-class-small-post-link" /></div>
                        </div>
                        <div className="w-dyn-empty">
                          <p>No items found.</p>
                        </div>
                      </div>
                      <div className="af-class-grey-rule" />
                      <div className="af-class-social-link-group"><a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-03.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-07.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-18.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-09.svg" width={25} alt /></a></div>
                      <p className="af-class-built-with-webflow">Built with <a target="_blank" href="https://webflow.com" className="af-class-webflow-link">Webflow</a></p>
                    </div>
                  </div>
                  <div className="af-class-content-column w-col w-col-9">
                    <div className="af-class-post-wrapper">
                      <div className="af-class-posts-list">
                        <div className="af-class-body-copy w-richtext">
                          <h1>Get in touch</h1>
                          <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                        </div>
                        <div className="af-class-form-wrapper w-form">
                          <form id="email-form" name="email-form" data-name="Email Form"><label htmlFor="Name">Name</label><input type="text" id="Name" name="Name" data-name="Name" placeholder="Enter your name" maxLength={256} className="af-class-text-field w-input" /><label htmlFor="Email">Email Address</label><input type="email" id="Email" name="Email" data-name="Email" placeholder="Enter your email address" maxLength={256} required className="af-class-text-field w-input" /><label htmlFor="Message">Message</label><textarea id="Message" name="Message" placeholder="Enter your message" maxLength={5000} data-name="Message" required className="af-class-text-field af-class-text-area w-input" defaultValue={""} /><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="af-class-button w-button" /></form>
                          <div className="af-class-success-message w-form-done">
                            <p className="af-class-success-text">Thank you! Your submission has been received!</p>
                          </div>
                          <div className="w-form-fail">
                            <p>Oops! Something went wrong while submitting the form</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="af-class-sidebar-on-mobile">
                      <div className="af-class-white-wrapper"><img src="images/photo-1443180236447-432ea00e6ead.jpg" alt className="af-class-circle-profile" />
                        <p className="af-class-site-description">Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.</p>
                        <div className="af-class-grey-rule" />
                        <h2 className="af-class-small-heading">Featured Posts:</h2>
                        <div className="af-class-feature-posts-list w-dyn-list">
                          <div className="w-dyn-items">
                            <div className="w-dyn-item"><a href="#" className="af-class-small-post-link" /></div>
                          </div>
                          <div className="w-dyn-empty">
                            <p>No items found.</p>
                          </div>
                        </div>
                        <div className="af-class-grey-rule" />
                        <div className="af-class-social-link-group"><a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-03.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-07.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-18.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-09.svg" width={25} alt /></a></div>
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

export default ContactView

/* eslint-enable */