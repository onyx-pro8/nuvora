import { useState } from 'react'

export default function ProductGallery({ images, alt, name }) {
  const [activeImage, setActiveImage] = useState(images[0])

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <img id="product-image" src={activeImage} alt={alt} />
      </div>
      <div className="product-gallery__thumbs" id="gallery-thumbs">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={`gallery-thumb${activeImage === image ? ' active' : ''}`}
            data-index={index}
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              setActiveImage(image)
            }}
          >
            <img src={image} alt={`${name} view ${index + 1}`} loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  )
}
