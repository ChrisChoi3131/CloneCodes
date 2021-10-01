let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 2,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];

export const trendingVideo = (req, res) => res.render("home", { pageTitle: "Home", videos });

export const watchVideo = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("watch", { pageTitle: `Watching ${video.title}`, video });
}
export const getEditVideo = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("edit", { pageTitle: "Edit", video })
};

export const postEditVideo = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id-1].title = title;
  res.redirect(`/videos/${id}`)
};
export const uploadVideo = (req, res) => res.send("upload video");
export const deleteVideo = (req, res) => res.send("delete video");
