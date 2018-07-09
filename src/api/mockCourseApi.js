import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
let videos = [
  {
    id: "react-flux-building-applications",
    title: "Building website using React, Ember, Ionic etc.",
    watchHref: "https://github.com/jhyapril",
    authorId: "jason",
    length: "5:08",
    category: "GitHub"
  },
  {
    id: "clean-code",
    title: "Some self introduction and FinTech talks ",
    watchHref: "https://www.linkedin.com/feed/update/urn:li:activity:6402081675857268736",
    authorId: "jason",
    length: "3:10",
    category: "LinkedIn Video"
  },
  {
    id: "architecture",
    title: "Profile on LinkedIn, might not be updated though",
    watchHref: "https://www.linkedin.com/in/hong-jie-jason-yang-14892692/",
    authorId: "jason",
    length: "2:52",
    category: "LinkedIn"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "I don't really use facebook, WeChat for the win :)",
    watchHref: "https://www.facebook.com/yang.hongjie",
    authorId: "jason",
    length: "2:30",
    category: "Facebook"
  },
  {
    id: "web-components-shadow-dom",
    title: "A test rental website based on Ember with Google Map API",
    watchHref: "http://jason_rental.surge.sh/",
    authorId: "jason",
    length: "5:10",
    category: "Ember.js"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (videos) => {
  return replaceAll(videos.title, ' ', '-');
};

class VideoApi {
  static getAllVideos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], videos));
      }, delay);
    });
  }

  static saveVideo(video) {
    video = Object.assign({}, video); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (video.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (video.id) {
          const existingVideoIndex = videos.findIndex(a => a.id == video.id);
          videos.splice(existingVideoIndex, 1, video);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          video.id = generateId(video);
          video.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
          videos.push(video);
        }

        resolve(video);
      }, delay);
    });
  }

  static deleteVideo(videoId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfVideoToDelete = videos.findIndex(video => {
          video.id == videoId;
        });
        videos.splice(indexOfVideoToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;
