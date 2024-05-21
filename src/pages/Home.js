import React, { useState } from 'react';
import '../Home.css'; // Import your CSS file
import Button from '@mui/material/Button'; // Import Material-UI Button
import InputFileUpload from '../Components/InputFileUpload'; // Import the new file upload component

const Home = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [predictionLabel, setPredictionLabel] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
    // Additional logic to handle file upload
  };

  const handlePredict = () => {
    // Additional logic for prediction
    setPredictionLabel('Prediction Result');
  };

  return (
    <div className="container">
      <h1 className="header">ECG Classifier</h1> {/* Header added here */}
      <div className="upload-section">
        <InputFileUpload onFileChange={handleFileUpload} />
        {uploadedFile && (
          <div className="file-info">
            Uploaded File: {uploadedFile.name}
          </div>
        )}
      </div>
      <div className="predict-section">
        <div className="button-container">
          <Button variant="contained" onClick={handlePredict}>Predict</Button>
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
