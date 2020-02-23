/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class PostsListView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PostsListController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PostsListView

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
    const proxies = Controller !== PostsListView ? transformProxies(this.props.children) : {
      'post-thumbnail': [],
      'post-title': [],
      'post-date': [],
      'post-summary': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/jeff-appfairy-test.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-posts-list">
            <div className="w-row">
              <div className="w-col w-col-4"><a href="#" className="af-class-link-block w-inline-block">{map(proxies['post-thumbnail'], props => <img src="images/photo-1437623889155-075d40e2e59f-bw.jpg" alt {...{...props, className: `af-class-image ${props.className || ''}`}}>{props.children}</img>)}</a></div>
              <div className="w-col w-col-8">
                <a href="#" className="af-class-blog-title-link w-inline-block">
                  {map(proxies['post-title'], props => <div {...{...props, className: `af-class-text-block ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Post Title Here</React.Fragment>}</div>)}
                </a>
                <div className="af-class-details-wrapper">
                  {map(proxies['post-date'], props => <div {...{...props, className: `af-class-post-date ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Post Date here</React.Fragment>}</div>)}
                </div>
                <div className="af-class-post-summary-wrapper">
                  {map(proxies['post-summary'], props => <div {...{...props, className: `af-class-post-summary ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Post Content Here</React.Fragment>}</div>)}
                </div>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default PostsListView

/* eslint-enable */