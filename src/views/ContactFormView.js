/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class ContactFormView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContactFormController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContactFormView

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
    const proxies = Controller !== ContactFormView ? transformProxies(this.props.children) : {
      'name': [],
      'submit': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/jeff-appfairy-test.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-post-content">
            <div className="af-class-body-copy w-richtext">
              <h1>Get in touch</h1>
              <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
            </div>
            <div className="af-class-form-wrapper w-form">
              <form id="email-form" name="email-form" data-name="Email Form"><label htmlFor="Name">Name</label>{map(proxies['name'], props => <input type="text" id="Name" name="Name" data-name="Name" placeholder="Enter your name" maxLength={256} {...{...props, className: `af-class-text-field w-input ${props.className || ''}`}}>{props.children}</input>)}<label htmlFor="Email">Email Address</label><input type="email" id="Email" name="Email" data-name="Email" placeholder="Enter your email address" maxLength={256} required className="af-class-text-field w-input" /><label htmlFor="Message">Message</label><textarea id="Message" name="Message" placeholder="Enter your message" maxLength={5000} data-name="Message" required className="af-class-text-field af-class-text-area w-input" defaultValue={""} />{map(proxies['submit'], props => <input type="submit" value="Submit" data-wait="Please wait..." {...{...props, className: `af-class-button w-button ${props.className || ''}`}}>{props.children}</input>)}</form>
              <div className="af-class-success-message w-form-done">
                <p className="af-class-success-text">Thank you! Your submission has been received!</p>
              </div>
              <div className="w-form-fail">
                <p>Oops! Something went wrong while submitting the form</p>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default ContactFormView

/* eslint-enable */