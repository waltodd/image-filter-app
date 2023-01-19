import {ImagePreview, ImageUploader} from './components/index'
import './App.css';
import {useState} from 'react'

function App() {
  const [uploadedImage,setUploadedImage] =useState(null);

  //Get uploaded image
  const getUploadedImage = (image) => {
    setUploadedImage(image);
   }
  return (
    <div className="App">
      <div className='container'>
      <div className='header'>
        <img src='/image-uploader.png' alt='image-uploader' /> 
        <span>Image Filter App</span>
      </div>
     <div className='main'>
        <ImageUploader getUploadedImage={getUploadedImage} />
        {
          uploadedImage && <ImagePreview uploadedImage={uploadedImage} />
        }
     </div>
      </div>
    </div>
  );
}

export default App;
