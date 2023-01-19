import React, { useEffect, useState, useRef } from "react";
import { fabric } from "fabric";
import { AiFillSave, AiFillCloseCircle } from "react-icons/ai";
import { BiDownload, BiImage } from "react-icons/bi";
import { Dropdown } from "../index";


import {
  Wrapper,
  Card,
  CardFilter,
  Col,
  Row,
  InputRange,
  SpanPer,
  Label,
  BtnSave,
  BtnModal,
  Modal,
  BtnFt,
} from "./ImagePreviewStyles";

const ImagePreview = ({ uploadedImage }) => {
  const { fileName, imgBase64 } = uploadedImage;
  const [selectedExt, setSelectedExt] = useState(null);

  const initialFilterValues = {
    brightness: 0,
    saturation: 0,
    contrast: 0,
    hue: 0,
    blur: 0,
    sepia: false,
    vintage: false,
  };
  const [filterValues, setFilterValues] = useState(initialFilterValues);
  const canvasWrapper = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
     //initializing canvas

    //get height and with on div that wrapper the canvas
    setWidth(canvasWrapper.current.offsetWidth);
    setHeight(canvasWrapper.current.offsetHeight);
    // console.log(height + "  " + width);

    const canvas = new fabric.Canvas("canvas", {
      //backgroundColor: '#f6f8fb',
      height: `${height}`,
      width: `${width}`,
    });

    //create image instance and add to canvas

    fabric.Image.fromURL(imgBase64, function (oImg) {
      resetFilterValues();
      // scale image down, and flip it, before adding it onto canvas
      oImg.scaleToHeight(height);
      oImg.scaleToWidth(width);
      oImg.set({
        radius: 12,
      });
      canvas.add(oImg);
      canvas.centerObject(oImg);

      // Create and register the filters in `filters` object
      const filters = {
        brightness: new fabric.Image.filters.Brightness(),
        saturation: new fabric.Image.filters.Saturation(),
        contrast: new fabric.Image.filters.Contrast(),
        hue: new fabric.Image.filters.HueRotation(),

        vintage: new fabric.Image.filters.Vintage(),
        sepia: new fabric.Image.filters.Sepia(),
        blur: new fabric.Image.filters.Blur(),
      };

      // - Brightness
      oImg.filters.push(filters.brightness);
      const brightnessInput = document.querySelector("#brightness");
      brightnessInput.oninput = () => {
        const value = parseFloat(brightnessInput.value);
        filters.brightness.brightness = value;
        oImg.applyFilters();
        canvas.renderAll();
      };

      // - Saturation
      oImg.filters.push(filters.saturation);
      const saturationInput = document.querySelector("#saturation");
      saturationInput.oninput = () => {
        const value = parseFloat(saturationInput.value);
        filters.saturation.saturation = value;
        oImg.applyFilters();
        canvas.renderAll();
      };

      // - Contrast
      oImg.filters.push(filters.contrast);
      const contrastInput = document.querySelector("#contrast");
      contrastInput.oninput = () => {
        const value = parseFloat(contrastInput.value);
        filters.contrast.contrast = value;
        oImg.applyFilters();
        canvas.renderAll();
      };

      // - Hue
      oImg.filters.push(filters.hue);
      const hueInput = document.querySelector("#hue");
      hueInput.oninput = () => {
        const value = parseFloat(hueInput.value);
        filters.hue.rotation = value;
        oImg.applyFilters();
        canvas.renderAll();
      };

      // - Blur
      oImg.filters.push(filters.blur);
      const blurInput = document.querySelector("#blur");
      blurInput.oninput = () => {
        const value = parseFloat(blurInput.value);
        filters.blur.blur = value;
        oImg.applyFilters();
        canvas.renderAll();
      };

      // - Sepia
      const sepiaInput = document.querySelector("#sepia");
      sepiaInput.oninput = (e) => {
        // toggling filter on/off
        if (e.target.checked) {
          oImg.filters.push(filters.sepia);
        } else {
          let index = findFilterIndex(oImg, "Sepia");
          if (index !== -1) {
            oImg.filters.splice(index, 1);
          }
        }
        oImg.applyFilters();
        canvas.renderAll();
      };

      // - Vintage
      const vintageInput = document.querySelector("#vintage");
      vintageInput.oninput = (e) => {
        // toggling filter on/off
        if (e.target.checked) {
          oImg.filters.push(filters.vintage);
        } else {
          let index = findFilterIndex(oImg, "Vintage");
          if (index !== -1) {
            oImg.filters.splice(index, 1);
          }
        }
        oImg.applyFilters();
        canvas.renderAll();
      };

      const fileExtention = (fileName) =>{
        let file = fileName.replace(/\.[^.$]+$/, selectedExt); 
      return file
      }

      const saveBtn = document.querySelector("#saveBtn");
        saveBtn.addEventListener(
          "click",
          function () {
            let file = fileName.replace(/\.[^.$]+$/, selectedExt); 
            console.log(file)
            saveBtn.href = canvas.toDataURL();
            saveBtn.download = `edit-${file}`;
          },
          false
        );
        
    });

   

    // canvas.requestRenderAll();
    

  }, [imgBase64, fileName, height, width, selectedExt]);

  /**
   * Handle filters' changes & update filterState.
   * @param {event} e Input change event.
   */
  const handleFilterChanges = (e) => {
    const value = parseFloat(e.target.value);
    const filter = e.target.id;
    const type = e.target.type;
    const isChecked = e.target.checked;

    setFilterValues((prevState) => ({
      ...prevState,
      [filter]: type === "checkbox" ? isChecked : value,
    }));
  };

  /**
   * Get filter index by it's name.
   * @param {object} object Canvas object.
   * @param {string} filterName Filter name.
   * @return {number}  filter index.
   */
  const findFilterIndex = (object, filterName) => {
    let filterIndex = object.filters.findIndex((f) => f.type === filterName);
    return filterIndex;
  };

  /**
   * Reset filter values to initial values.
   */
  const resetFilterValues = () => {
    setFilterValues(initialFilterValues);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleExtChange = (fileName, selectedExt) =>{
    let file = fileName.replace(/\.[^.$]+$/, selectedExt); 
    return file
  }

  const getSelectedExt = (ext) => {
   //alert(ext)
   setSelectedExt(ext)
  };
  return (
    <Wrapper className="">
      <Card ref={canvasWrapper}>
        <canvas id="canvas" />
      </Card>
      <CardFilter>
        <Col>
          <Label htmlFor="brightness">Brightness</Label>
          <Row>
            <InputRange
              type="range"
              id="brightness"
              value={filterValues.brightness}
              onChange={handleFilterChanges}
              min="0"
              max="1"
              step="0.05"
            />
            <SpanPer>{filterValues.brightness * 100} %</SpanPer>
          </Row>
        </Col>
        <Col>
          <Label htmlFor="saturation">Saturation</Label>
          <Row>
            <InputRange
              type="range"
              id="saturation"
              value={filterValues.saturation}
              onChange={handleFilterChanges}
              min="0"
              max="1"
              step="0.05"
            />
            <SpanPer>{filterValues.saturation * 100} %</SpanPer>
          </Row>
        </Col>
        <Col className="image-preview__filter-item">
          <Label htmlFor="contrast">Contrast</Label>
          <Row>
            <InputRange
              type="range"
              id="contrast"
              value={filterValues.contrast}
              onChange={handleFilterChanges}
              min="0"
              max="1"
              step="0.05"
            />
            <SpanPer className="image-preview__filter-value">
              {filterValues.contrast * 100} %
            </SpanPer>
          </Row>
        </Col>
        <Col>
          <Label htmlFor="hue">Hue</Label>
          <Row>
            <InputRange
              type="range"
              id="hue"
              value={filterValues.hue}
              onChange={handleFilterChanges}
              min="0"
              max="1"
              step="0.05"
            />
            <SpanPer className="image-preview__filter-value">
              {filterValues.hue * 100} %
            </SpanPer>
          </Row>
        </Col>
        <Col>
          <Label htmlFor="blur">Blur</Label>
          <Row>
            <InputRange
              type="range"
              id="blur"
              value={filterValues.blur}
              onChange={handleFilterChanges}
              min="0"
              max="1"
              step="0.05"
            />
            <SpanPer className="image-preview__filter-value">
              {filterValues.blur * 100} %
            </SpanPer>
          </Row>
        </Col>
        <Col>
          <Row>
            <Label htmlFor="sepia">Sepia</Label>
            <div className="switch_box box_1">
              <input
                id="sepia"
                checked={filterValues.sepia}
                onChange={handleFilterChanges}
                type="checkbox"
                className="switch_1"
              />
            </div>
          </Row>
        </Col>
        <Col>
          <Row>
            <Label htmlFor="vintage">Vintage</Label>
            <div className="switch_box box_1">
              <input
                id="vintage"
                checked={filterValues.vintage}
                onChange={handleFilterChanges}
                type="checkbox"
                className="switch_1"
              />
            </div>
          </Row>
        </Col>
        <Col>
          <Row>
            <BtnModal onClick={handleModal}>
              <AiFillSave size="1.5rem" style={{ paddingRight: ".5rem" }} />
              Save Image
            </BtnModal>
          </Row>
        </Col>
      </CardFilter>
      {isOpen && (
        <div id="overlay">
          <Modal>
            <AiFillCloseCircle
              onClick={handleModal}
              className="close"
              size="3rem"
            />
            <h3 style={{textAlign:'center' }}>Download the image as PNG or JPEG.</h3>
            
            <div className="format">
              <Dropdown getSelectedExt={getSelectedExt} />
            </div>
            
            <BtnSave   id='saveBtn' >
              <BiDownload size="1.5rem" style={{ paddingRight: ".5rem" }} />
              Download
            </BtnSave>
          </Modal>
        </div>
      )}
    </Wrapper>
  );
};

export default ImagePreview;
