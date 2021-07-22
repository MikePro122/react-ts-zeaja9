import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import CoverImageView from './CoverImageView';
import './style.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);

  const reload = () => {
    setError(false);

    setLoading(true);

    setTimeout(() => setLoading(false), 1000)
  }

  const renderError = () => (
    <p style={{ paddingLeft: 16, color: '#d8000c' }}>
      {'Unexpected error'}
      <a
        href="#"
        style={{ marginLeft: 12 }}
        onClick={reload}
      >
        🔄
      </a>
    </p>
  )

  const renderLoading = () => (
    <p>Loading...</p>
  )

  const renderResult = () => (
    <div
      style={{
        marginLeft: 32,
        marginRight: 32,
        marginTop: -72,
        backgroundColor: '#fafafa',
        borderRadius: 12,
        border: '1px solid #c8c8c8',
        padding: 16,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <h2>{'Card Title'}</h2>
      <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
    </div>
  )

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fafafa'
      }}
    >
      <CoverImageView
        imgSrc={
          'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
        }
      />
      {error ? (
        renderError()
      ) : (
        loading ? renderLoading() : renderResult()
      )}
    </div>
  );
};

render(<App />, document.getElementById('root'));
