import React from 'react';
import unsplash from '../Api.js/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    state = { 
        images: [],
        selectedImages: []
    }
    onSearchSubmit = async (term) => {
        const object = await unsplash.get('/search/photos',{
            params: {query: term}
        });
        var selectedImages = this.state.selectedImages;
        var i;
        for(i = 0; i < selectedImages.length; i++) {
            if(!selectedImages[i].selected) selectedImages.splice(i, 1);
        }
        var images = this.state.images;
        for(i = 0; i < images.length; i++) {
            if(images[i].selected) selectedImages.push(images[i]);
        }
        this.setState({ images: object.data.results, selectedImages: selectedImages });
    }
    selectImage = async (image,index) => {
        var i;
        if(index === 0) {//selectedImages
            var selectedImages = this.state.selectedImages;
            for(i = 0; i < selectedImages.length; i++) {
                if(selectedImages[i].id === image.id) {
                    if(selectedImages[i].selected) selectedImages[i].selected = false;
                    else selectedImages[i].selected = true;
                }
            }
            this.setState({selectedImages: selectedImages});
        }
        else {
            var images = this.state.images;
            for(i = 0; i < images.length; i++) {
                if(images[i].id === image.id) {
                    if(images[i].selected) images[i].selected = false;
                    else images[i].selected = true;
                }
            }
            this.setState({images: images});
        }
    }
    // showImages() {
    //     return (
    //         <div>
    //             for(image in this.state.images) {
    //                 {image}
    //             }
    //         </div>
    //     )
    // }
    render() {
        return  (
            <div className="container">
                <SearchBar searchBarInput={this.onSearchSubmit}/>
                <div className="container">
                    Found: {this.state.images.length} images
                </div>
                <div className="container">
                    <ImageList images={this.state.images} selectedImages={this.state.selectedImages} selectImage={this.selectImage} />
                </div>
            </div>
        );
    }
}
export default App