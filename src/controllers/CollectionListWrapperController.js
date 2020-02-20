import React from 'react';
import CollectionListWrapperView from '../views/CollectionListWrapperView'
import PostsWrapperController from './PostsWrapperController.js'

export default (props) => (
  <CollectionListWrapperView>
    <PostsWrapperController />
  </CollectionListWrapperView>
)
