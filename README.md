# Google Drive API Integration with Node.js

This project demonstrates how to integrate the Google Drive API with a Node.js application to download a large video file from a specific Google Drive directory and upload it to another Google Drive directory.

## Setup

### 1. Obtain Google Drive API Credentials

Before running the application, you need to obtain credentials from the Google Cloud Console:

- Create a project in the [Google Cloud Console](https://console.cloud.google.com/).
- Enable the Google Drive API for your project.
- Set up OAuth consent screen and create OAuth 2.0 credentials.
- Download the credentials as `credentials.json` and place it in the project directory.

### 2. Install Dependencies

Run the following command to install the necessary dependencies:


### 3. Start the Server

Run the following command to start the Node.js server:


The server will start running at `http://localhost:3000`.

## Usage

### Process Task

To initiate the download and upload process, make a GET request to the `/process` endpoint with the following query parameters:

- `sourceFileId`: Google Drive file ID of the source video.
- `destinationFolderId`: Google Drive folder ID of the destination.

Example request using cURL:


Replace `YOUR_SOURCE_FILE_ID` and `YOUR_DESTINATION_FOLDER_ID` with the actual IDs.

## Testing

For testing the application, you can use Postman or any HTTP client to send requests to the server endpoints. Additionally, you can write automated tests using libraries like Jest or Mocha.

## Resources

- [Google Drive API Documentation](https://developers.google.com/drive)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

