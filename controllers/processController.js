const { downloadAndUpload } = require("../services/googleDriveServices");

async function processTask(req, res, next) {
  const { sourceFileId, destinationFolderId } = req.query;

  try {
    const fileId = await downloadAndUpload(sourceFileId, destinationFolderId);
    res.status(200).json({ message: "Process completed successfully", fileId });
  } catch (error) {
    next(error);
  }
}

module.exports = { processTask };
