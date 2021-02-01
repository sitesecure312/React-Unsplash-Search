import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = {spans: 0}
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({spans})
    }
    render() {
        const {description, urls, selected} = this.props.image
        return (
            <div style={{ gridRowEnd : `span ${this.state.spans}` }} onClick={() => this.props.selectImage(this.props.image, this.props.type)}>
                <img ref={this.imageRef} alt={description} src={urls.regular}/>
                {selected ? (<img className="top-right" src={ process.env.PUBLIC_URL + '/checked.png'} />) : (<img className="top-right" src={process.env.PUBLIC_URL + '/unchecked.png'} />) }
            </div>
        )
    }
}
export default ImageCard