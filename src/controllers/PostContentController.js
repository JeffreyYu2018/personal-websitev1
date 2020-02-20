import React from 'react'
import PostContentView from '../views/PostContentView'

const posttitles = ['one', 'two', 'three']

export default (props) => (
  <div>
    {posttitles.map((title, index) => {
      return (
        <PostContentView>
          <post-title />
          <post-thumbnail />
          <post-date />
          <post-content />
        </PostContentView>
      )
    })}
  </div>
)
