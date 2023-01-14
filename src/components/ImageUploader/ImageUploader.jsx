import React from "react";
import {
  Wrapper,
  Form,
  SubtitleType,
  Title,
  DropCard,
  Img,
  Text,
  BrowseBtn,
} from "./ImageUploaderStyles";
import {useDropzone} from "react-dropzone";

const ImageUploader = ({getUploadedImage}) => {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    maxFiles:1,
    accept:{'image/*':[]},
     //Handle dropping/uploading files.
    onDrop: acceptedFiles =>{
      //Check if the file is not empty or exist
      if(acceptedFiles && acceptedFiles.length >0){
        const file = acceptedFiles[0];
        console.log(file);
        const fileReader = new FileReader();
        fileReader.onload = () =>{
          getUploadedImage(
            {
              imgBase64:fileReader.result,
              fileName: file.name
            }
          )
        }
        fileReader.readAsDataURL(file);
      }
    }
  })
  return (
    <Wrapper>
      <Form>
        <Title>Upload file</Title>
        <SubtitleType>File should be PNG or JPEG.</SubtitleType>
            <DropCard {...getRootProps()}>
              <Img src="/image-uploader.png" alt="image-uploader" />
              <Text>Drag & Drop your image here</Text>
              <input {...getInputProps()} />
              <BrowseBtn>Browse computer</BrowseBtn>
            </DropCard>
         
      </Form>
    </Wrapper>
  );
};

export default ImageUploader;
