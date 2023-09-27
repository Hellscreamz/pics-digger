import ImageShow from '../image-show/image-show';
import './ImageList.css';

function ImageList ({ searchResults }) {
    if (searchResults === null) {
        return null;
    }

    const renderResults = searchResults.data.results.map((element, index) => {
        return <ImageShow key={element.id} results={element.urls.small}/>
    })

    return (
        <div className='image-list'>
        {renderResults}
        </div>
    )
}

export default ImageList;