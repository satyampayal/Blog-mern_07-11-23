import React from 'react'

function Post() {
  return (
    <div className="post">
    <div className="image">
      <img src="https://techcrunch.com/wp-content/uploads/2023/11/GettyImages-1778704897.jpg?w=850&h=492&crop=1" />
    </div>
    <div className="text">
      <h2>OpenAI debuts GPT-4 Turbo and fine-tuning program for GPT-4</h2>
      <p className="info">
        <a className="author">Dawid </a>
        <time>2023/01/12 6:12</time>
      </p>
      <p className="summary">Today at its first-ever developer conference, OpenAI unveiled GPT-4 Turbo, an improved version of its flagship text-generating AI model, GPT-4, that the company claims is both “more powerful” and less expensive.</p>
    </div>
  </div>

  );
}

export default Post