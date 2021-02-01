import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

class ImageList extends React.Component {
    render() {
        return (
            <div className="container">
		        <div className="image-list">
		        	{this.props.selectedImages.map((image) => {
				        return <ImageCard key={image.id} image={image} type={0} selectImage = {this.props.selectImage} />
				    })}
		            {this.props.images.map((image) => {
				        return <ImageCard key={image.id} image={image} type={1} selectImage = {this.props.selectImage} />
				    })}
		        </div>
		    </div>
        )
    }
}
export default ImageList;