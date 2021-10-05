import Video from "../models/Video";

export const homeVideo = async (req, res) => {
  const videos = await Video.find({});
  res.render("home", { pageTitle: "Home", videos });
}

export const watchVideo = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) return res.render("404", { pageTitle: "Video not found" });
  res.render("watch", { pageTitle: `Watching ${video.title}`, video });
}
export const getEditVideo = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) return res.render("404", { pageTitle: "Video not found" });
  res.render("edit", { pageTitle: "Edit", video })
};

export const postEditVideo = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  await Video.findByIdAndUpdate(id, { title, description, hashtags: Video.formatHashtags(hashtags) })
  res.redirect(`/videos/${id}`)
};
export const getUploadVideo = (req, res) => {
  res.render("upload", { pageTitle: "Upload Video" });
}

export const postUploadVideo = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: Video.formatHashtags(hashtags)
    });
    res.redirect("/");
  } catch (error) {
    res.render("upload", { pageTitle: "Upload Video", errorMessage: "Video validation failed" });
  }
}
export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  res.redirect("/");
}

export const getSearchVideo = async (req, res) => {
  let videos = [];
  const { keyword } = req.query;
  if (keyword) {
    videos = await Video.find({
      title : {
        $regex : new RegExp(`${keyword}`, "i")
      }
    })
  }
  res.render("search", { pageTitle: "Search Video", videos , keyword});
}