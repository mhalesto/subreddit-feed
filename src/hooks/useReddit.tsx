/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import reddit from "../api/reddit";

export default () => {
  const [posts, setPosts] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const getPostsBySubReddit: any = async (subredditName?: string) => {
    try {
      const response = await reddit.get(`/r/${subredditName}.json`);
      setPosts(response.data.data.children);
    } catch( err: any) {
      setErrorMsg('Something went wrong');
    }
  }

  useEffect(() => {
    getPostsBySubReddit();
  }, []);

  return [ posts, getPostsBySubReddit, errorMsg ];
}

