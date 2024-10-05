import React from 'react';
import ImageCard from './ImageCard';

const ImageGrid = ({ images }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {images && images?.length > 0 ? (
                images.map((image) => <ImageCard key={image.id} image={image} />)
            ) : (
                <p className="text-gray-700 text-center">No images found. Try another search term.</p>
            )}
        </div>
    );
};

export default ImageGrid;
