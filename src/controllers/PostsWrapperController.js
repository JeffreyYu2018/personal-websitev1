import React from 'react'
import PostsWrapperView from '../views/PostsWrapperView'
import PostContentController from './PostContentController'

const posttitles = ['one', 'two', 'three']

export default (props) => (
  <PostsWrapperView>
    <PostContentController />
    <PostContentController />
  </PostsWrapperView>
)
