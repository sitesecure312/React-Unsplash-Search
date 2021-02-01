import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

class ImageList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
		        <div className="image-list">
		        	{this.props.selectedImages.map((image) => {
				        return <ImageCard key={image.id} image={image} onclick={() => this.props.selectImage(image,0)} />
				    })}
		            {this.props.images.map((image) => {
				        return <ImageCard key={image.id} image={image} onclick={() => this.props.selectImage(image,1)} />
				    })}
		        </div>
		    </div>
        )
    }
}
export default ImageList;