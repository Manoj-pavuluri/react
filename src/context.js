import React from 'react';


const PostsContexts = React.createContext();

const PostsProvider = PostsContexts.Provider;

const PostsConsumer = PostsContexts.Consumer;




export  {PostsProvider,PostsConsumer};
export default PostsContexts;