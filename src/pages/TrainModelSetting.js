import React, { useState } from 'react';
import { Container, Grid, Button, Select, MenuItem, FormControl, InputLabel, TextField, Typography, Paper, Box } from '@mui/material';

const TrainModelSetting = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [optimizer, setOptimizer] = useState('');
  const [model, setModel] = useState('');
  const [learningRate, setLearningRate] = useState('');
  const [epochs, setEpochs] = useState('');
  const [batchSize, setBatchSize] = useState('');
  const [distanceMetric, setDistanceMetric] = useState('');

  const handleFileUpload = (event) => {
    setUploadedFile(event.target.files[0]);
  };

  const handleStartTraining = () => {
    // Implement the training logic here
  };

  const handleStartExtraction = () => {
    // Implement the extraction logic here
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Train Model Setting & Features Extraction</Typography>

      {/* Step 1: Upload Training Set */}
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h6">Step 1: Upload Training Set</Typography>
        <Typography variant="body2" gutterBottom>Please upload your training data set. The training set should be a zip file.</Typography>
        <input
          accept=".zip"
          style={{ display: 'none' }}
          id="upload-file"
          type="file"
          onChange={handleFileUpload}
        />
        <label htmlFor="upload-file">
          <Button variant="contained" color="primary" component="span">Select file</Button>
        </label>
        {uploadedFile && <Typography variant="body2">Uploaded File: {uploadedFile.name}</Typography>}
      </Paper>

      {/* Step 2: Parameters */}
      <Paper elevation={3} sx={{ padding: 2, marginBottom: 3 }}>
        <Typography variant="h6">Step 2: Parameters</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Optimizer</InputLabel>
              <Select
                value={optimizer}
                onChange={(e) => setOptimizer(e.target.value)}
              >
                <MenuItem value="optimizer1">Optimizer 1</MenuItem>
                <MenuItem value="optimizer2">Optimizer 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Model</InputLabel>
              <Select
                value={model}
                onChange={(e) => setModel(e.target.value)}
              >
                <MenuItem value="model1">Model 1</MenuItem>
                <MenuItem value="model2">Model 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Learning Rate</InputLabel>
              <Select
                value={learningRate}
                onChange={(e) => setLearningRate(e.target.value)}
              >
                <MenuItem value="rate1">Rate 1</MenuItem>
                <MenuItem value="rate2">Rate 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Epochs"
              value={epochs}
              onChange={(e) => setEpochs(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Batch Size"
              value={batchSize}
              onChange={(e) => setBatchSize(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" onClick={handleStartTraining}>Start training</Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Step 3: Features Extraction */}
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h6">Step 3: Features Extraction</Typography>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>Distance Metric</InputLabel>
          <Select
            value={distanceMetric}
            onChange={(e) => setDistanceMetric(e.target.value)}
          >
            <MenuItem value="metric1">Metric 1</MenuItem>
            <MenuItem value="metric2">Metric 2</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleStartExtraction}>Start Extraction</Button>
      </Paper>
    </Container>
  );
};

export default TrainModelSetting;
