import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <div className={`card rounded overflow-hidden shadow-lg`}>
      <div className="overflow-hidden w-full">
        <img src={image.webformatURL} alt="" className="image w-full"/>
      </div>
      <div className="px-6 py-4">
        <div class="flex items-center">
          <img class="avatar rounded-full mr-4 mb-3" src={image.userImageURL} alt="Avatar of Jonathan Reinink" />
          <div className="card-title font-bold text-purple-500 text-xl mb-2">
            {image.user}
          </div>
        </div>
        <ul className='info'>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="tag inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #{tag}
        </span>
        ))}
      </div>
    </div>
    </div>
  )
}

export default ImageCard;
