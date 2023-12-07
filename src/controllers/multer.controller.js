export const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      error: "Failed to upload",
    });
  }

  const completePath = req.file.path.split("\\").slice(-2);
  const cutPath = "/media/" + completePath[0] + "/" + completePath[1];

  return res.json({ path: cutPath });
};
