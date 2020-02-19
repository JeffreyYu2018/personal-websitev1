/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import PostWrapperView from './PostWrapperView'

const scripts = [

]

let Controller

class PostsWrapperView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/PostsWrapperController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PostsWrapperView

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
    const proxies = Controller !== PostsWrapperView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/jeff-appfairy-test.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="w-dyn-items">
            <div className="w-dyn-item">
              <PostWrapperView.Controller />
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default PostsWrapperView

/* eslint-enable */