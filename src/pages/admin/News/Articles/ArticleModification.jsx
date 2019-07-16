import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css'
import connect from "react-redux/es/connect/connect";

import {updateProfilePhoto} from "middleware/ProfileSettings";

import {UploadImage} from './UploadImage';

import './articles.scss';

class ArticleModification extends Component {
  state = {
    image: null,
    disable: true,
    modalOpen: false,
    finalImage: null,
    title: 'Hands-On Preview of Samsung’s Galaxy S10 Phone Reveals New Crypto Details',
    tags: [],
    text: 'The recent Monero ($XMR) hardfork which introduced a new ASIC-resistant Proof-of-Work algorithm dropped the hashing rate by some 80%, although it is now on the rebound. The non-contentious fork, Boron Butterfly, was a move to keep the network decentralized. The drop in the hashrate confirmed suspicions of ASIC mining dominance.',
  }
  handleTitleChange = e => this.setState({title: e.target.value});
  handleTextChange = e => this.setState({text: e.target.value});
  handleTagsChange = tags => this.setState({tags});

  onSaveAvatar = () => {
    const {updateProfilePhoto} = this.props;
    if (this.editor) {
      const canvas = this.editor.getImage();
      const canvasScaled = this.editor.getImageScaledToCanvas().toDataURL();
      this.setState({finalImage: canvasScaled});
      if (canvas.width !== undefined) {
        updateProfilePhoto(canvasScaled);
        this.handleModalImage();
      }
    }
  };

  handleDrop = dropped => {
    this.setState({image: dropped[0], disable: false});
  };

  setEditorRef = editor => (this.editor = editor);

  handleModalImage = () => this.setState(({modalOpen}) => ({
    modalOpen: !modalOpen
  }));


  render() {
    const {title, text, tags, image, disable, modalOpen, finalImage} = this.state;
    const {add} = this.props;
    return (
      <div className='adminArticles__wrapper admin-wrapper'>
        <div className="adminArticles__header">
          <h1 className="adminArticles__title">{add ? 'New Article' : 'Edit Article'}</h1>
        </div>
        <div className="adminArticles__body">
          <div className="adminArticles__edit-item">
            <span className="adminArticles__edit-title">Source link</span>
            <p className="adminArticles__edit-source-link">https://coinmetrics.io/</p>
          </div>
          <div className="adminArticles__edit-item adminArticles__edit-item--avatar">
            <div className="adminArticles__edit-image-view">
              {modalOpen && <UploadImage image={image}
                                         disable={disable}
                                         handleModalImage={this.handleModalImage}
                                         onSaveAvatar={this.onSaveAvatar}
                                         setEditorRef={this.setEditorRef}
                                         handleDrop={this.handleDrop}/>}
              <img src={`${finalImage}`} alt='' className='adminArticles__edit-image--img'/>
            </div>
            <div className="adminArticles__edit-right">
              <span className="adminArticles__edit-title">Article Image</span>
              <button className='adminArticles__edit-image-btn' onClick={this.handleModalImage}>Change</button>
            </div>
          </div>
          <div className="adminArticles__edit-item">
            <span className="adminArticles__edit-title">Title</span>
            <textarea type='text' onChange={this.handleTitleChange} value={title}
                      className='adminArticles__textarea-title'/>
          </div>
          <div className="adminArticles__edit-item">
            <span className="adminArticles__edit-title">Text</span>
            <textarea type='text' onChange={this.handleTextChange} value={text}
                      className='adminArticles__textarea-text'/>
          </div>
          <div className="adminArticles__edit-item">
            <span className="adminArticles__edit-title">Tags</span>
            <TagsInput value={tags} onChange={this.handleTagsChange}/>
          </div>
          <div className="adminArticles__buttons">
            {add
              ? <Link to='/admin/articles' className="adminArticles__public-article-btn">Public Article</Link>
              : <>
                <Link to='/admin/articles' className="adminArticles__update-article-btn">Update Article</Link>
                <Link to='/admin/articles' className="adminArticles__cancel-btn">Cancel</Link>
              </>}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {updateProfilePhoto};

export default connect(
  null,
  mapDispatchToProps
)(ArticleModification);