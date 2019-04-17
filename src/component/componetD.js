import React from 'react'
import { PostsProvider } from '../context';
import ComponentA from './componentA';

export default function ComponetD(props) {
  return (
    <div>
     <PostsProvider value="manoj">
       <ComponentA />
     </PostsProvider>
    </div>
  )
}
