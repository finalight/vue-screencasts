const express = require("express");
const router = express.Router();

const videosStore = [
  {
    id: 1,
    name: "video 1",
    description: "<b>description 1</b>",
    thumbnail: "https://picsum.photos/id/237/536/354",
    videoUrl:
      "https://vue-screencasts-uploads.s3-us-west-2.amazonaws.com/videos/948-introduction.mp4.mp4",
  },
  {
    id: 2,
    name: "video 2",
    description: "description 2",
    thumbnail:
      "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350",
    videoUrl:
      "https://vue-screencasts-uploads.s3-us-west-2.amazonaws.com/videos/460-2%20-%20Why%20We%20Need%20Reactivity.mp4.mp4",
  },
  {
    id: 3,
    name: "video 3",
    description: "description 3",
    thumbnail:
      "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350",
    videoUrl:
      "https://vue-screencasts-uploads.s3-us-west-2.amazonaws.com/videos/460-2%20-%20Why%20We%20Need%20Reactivity.mp4.mp4",
  },
  {
    id: 4,
    name: "video 4",
    description: "description 4",
    thumbnail:
      "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350",
    videoUrl:
      "https://vue-screencasts-uploads.s3-us-west-2.amazonaws.com/videos/460-2%20-%20Why%20We%20Need%20Reactivity.mp4.mp4",
  },
  {
    id: 5,
    name: "video 5",
    description: "description 5",
    thumbnail:
      "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350",
    videoUrl:
      "https://vue-screencasts-uploads.s3-us-west-2.amazonaws.com/videos/460-2%20-%20Why%20We%20Need%20Reactivity.mp4.mp4",
  },
  {
    id: 6,
    name: "video 6",
    description: "description 6",
    thumbnail:
      "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350",
    videoUrl:
      "https://vue-screencasts-uploads.s3-us-west-2.amazonaws.com/videos/460-2%20-%20Why%20We%20Need%20Reactivity.mp4.mp4",
  },
  {
    id: 7,
    name: "video 7",
    description: "description 7",
    thumbnail:
      "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350",
    videoUrl:
      "https://vue-screencasts-uploads.s3-us-west-2.amazonaws.com/videos/460-2%20-%20Why%20We%20Need%20Reactivity.mp4.mp4",
  },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(videosStore);
});

router.get("/:id", function (req, res, next) {
  const video = videosStore.find((video) => video.id === parseInt(req.params.id, 10));
  console.log('video', video)
  res.json(video);
});
module.exports = router;
