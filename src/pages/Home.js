import React, { useState } from 'react';
import '../Home.css';
import Button from '@mui/material/Button';
import InputFileUpload from '../Components/InputFileUpload';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const Home = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [predictionLabel, setPredictionLabel] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const handlePredict = () => {
    // Here you would add the prediction logic
    setPredictionLabel('Prediction Result');
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="header">ECG Classifier</h1>
      <div className="upload-section">
        <InputFileUpload onFileChange={handleFileUpload} />
        {uploadedFile && (
          <div className="file-info">
            Uploaded File: {uploadedFile.name}
          </div>
        )}
      </div>
      <div className="model-selection-section">
        <FormControl variant="outlined" className="form-control">
          <InputLabel id="model-select-label">Select Model</InputLabel>
          <Select
            labelId="model-select-label"
            value={selectedModel}
            onChange={handleModelChange}
            label="Select Model"
          >
            <MenuItem value={"model1"}>Model 1</MenuItem>
            <MenuItem value={"model2"}>Model 2</MenuItem>
            <MenuItem value={"model3"}>Model 3</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="predict-section">
        <div className="button-container">
          <Button variant="contained" onClick={handlePredict} disabled={!selectedModel}>Predict</Button>
          {predictionLabel && (
            <div className="prediction-label">
              Prediction: {predictionLabel}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
