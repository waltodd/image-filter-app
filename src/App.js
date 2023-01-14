import {ImagePreview, ImageUploader} from './components/index'
import './App.css';
import{useState} from 'react'

function App() {
  const [uploadedImage,setUploadedImage] =useState(null);

  const getUploadedImage = (image) => {
    setUploadedImage(image);
  }
  return (
    <div className="App">
     <ImageUploader getUploadedImage={getUploadedImage} />
     {
      uploadedImage && <ImagePreview {...uploadedImage} />
     }
    </div>
  );
}

export default App;
