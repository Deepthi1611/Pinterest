import './galleryItem.css'
import { Link } from 'react-router-dom';
import Image from '../../components/image/Image.jsx'

const GalleryItem = ({item}) => {
  return (
    <div className='galleryItem' 
    style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
    <img src={item.media} alt='image' />
    <Link to={`/pin/${item.id}`} className="overlay" />
    <button className="saveButton">Save</button>
    <div className="overlayIcons">
      <button>
        <Image path="/general/share.svg" alt="" />
      </button>
      <button>
        <Image path="/general/more.svg" alt="" />
      </button>
    </div>
    </div>
  )
}

export default GalleryItem