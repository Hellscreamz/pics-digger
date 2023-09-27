import './ImageShow.css';

function ImageShow({ results }) {
  return (
    <div className='image-show'>
        <img src={results} alt='Not Found' />
    </div>
  );
}

export default ImageShow;
