/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class PostsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PostsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PostsView

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
    const proxies = Controller !== PostsView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/jeff-appfairy-test.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="w-dyn-list">
            <div className="w-dyn-items">
              <div className="w-dyn-item">
                <div className="af-class-post-wrapper">
                  <div className="af-class-post-content">
                    <div className="w-row">
                      <div className="w-col w-col-4 w-col-medium-4"><a href="#" className="af-class-blog-image w-inline-block" /></div>
                      <div className="w-col w-col-8 w-col-medium-8">
                        <a href="#" className="af-class-blog-title-link w-inline-block">
                          <h2 className="af-class-blog-title" />
                        </a>
                        <div className="af-class-details-wrapper">
                          <div className="af-class-post-info" />
                          <div className="af-class-post-info">|</div><a href="#" className="af-class-post-info af-class-when-link" /></div>
                        <div className="af-class-post-summary-wrapper">
                          <p className="af-class-post-summary" /><a href="#" className="af-class-read-more-link">Read more...</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-dyn-empty">
              <p>No items found.</p>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default PostsView

/* eslint-enable */