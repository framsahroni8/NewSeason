import React from 'react';
// import FlipPage from 'react-flip-page';
import './FlipComponent.scss'

const FlipComponent = () => {
  const bookContent = [
    { id: 1, content: 'Halaman 1' },
    { id: 2, content: 'Halaman 2' },
    { id: 3, content: 'Halaman 3' },
    // ...
  ];
  
  return (
  <div className='p-2'>
 <h1>Contoh Book Flip</h1>
      {/* <FlipPage orientation="horizontal" flipOnTouch={true}>
        {bookContent.map(page => (
          <article key={page.id}>
            <h2>{page.content}</h2>
          </article>
        ))}
      </FlipPage> */}
  </div>
  )
}

export default FlipComponent
