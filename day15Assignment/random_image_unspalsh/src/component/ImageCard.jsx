import React from 'react';

const ImageCard = ({ image }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={image.urls.small}
                alt={image.alt_description}
                className="w-full h-64 object-cover"
            />
            <div className="p-4">
                <p className="text-gray-700 font-bold">{image.description || 'Untitled'}</p>
                <p className="text-sm text-gray-500">By {image.user.name}</p>
            </div>
        </div>
    );
};

export default ImageCard;
