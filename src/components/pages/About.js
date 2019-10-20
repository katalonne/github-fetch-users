import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-remarkable'
import md from '../../../README.md';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(md).then((response) => response.text()).then((text) => {
      setMarkdown(text)
    })
  },[]);

  return (
    <div className="react-transition swipe-right">
      <ReactMarkdown source={markdown} />
    </div>
  );
};

export default About;
