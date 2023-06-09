const addHTML = (selector, newContent) => {
  elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.innerHTML += newContent;
  });
};

// Review API Requests
function getPostsHome() {
  const url = 'https://www.bdom.digital/wp-json/wp/v2/posts?tags=8&per_page=3';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let posts = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].acf != -1) {
          posts.push(data[i].acf);
        }
      }
      console.log(posts);
      renderPostsHome(posts);
    });
}
getPostsHome();

function renderPostsHome(posts) {
  posts.forEach((post, index) => {
    let newHTML = `
  <div class="carousel-item ${index == 0 ? 'active' : ''}">
    <article>
      <p class="light fw-light col-6 rev-text">${post.text}</p>
      <div class="rev-info">
        <div class="text-group">
          <em><p class="light fw-light small">${post.name}</p></em>
          <em><p class="light fw-light small">${post.company}</p></em>
        </div>
        <img class="logo-rev" src="${post.logo}" alt="logo" loading="lazy">
      </div>
      
    </article>
    </div>            
  `;

    let button = `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}"
    class="active" aria-current="true" aria-label="Slide ${index + 1}"></button>`;
    addHTML("div#review-carousel-indicators", button);
    addHTML("div#review-carousel", newHTML);
  });
};

function getPostsAbout() {
  const url = 'https://www.bdom.digital/wp-json/wp/v2/posts?tags=8&per_page=10';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let posts = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].acf != -1) {
          posts.push(data[i].acf);
        }
      }
      console.log(posts);
      renderPostsAbout(posts);
    });
}
getPostsAbout();

function renderPostsAbout(posts) {
  posts.forEach((post, index) => {
    let newHTML = `
  <div class="carousel-item ${index == 0 ? 'active' : ''}">
    <article>
      <p class="light fw-light col-8 rev-text">${post.text}</p>
      <div class="rev-info">
        <div class="text-group">
          <em><p class="light fw-light small">${post.name}</p></em>
          <em><p class="light fw-light small">${post.company}</p></em>
        </div>
        <img class="logo-rev" src="${post.logo}" alt="logo" loading="lazy">
      </div>
      
    </article>
    </div>            
  `;

    let button = `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}"
    class="active" aria-current="true" aria-label="Slide ${index + 1}"></button>`;
    addHTML("div#review-carousel-indicators-more", button);
    addHTML("div#review-carousel-more", newHTML);
  });
};


// Photo API Requests
function getPostsAerial() {
  const url = 'https://www.bdom.digital/wp-json/wp/v2/posts?tags=12&per_page=16';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      renderPostsAerial(data);
    });
}
getPostsAerial();

function renderPostsAerial(data) {
  for (let i = 0; i < 16; i++) {
    let newHTML = `
    <a data-fancybox="video-gallery-1" data-caption="${data[i].acf.title}" href="${data[i].acf.image}">
      <img class="photoEl" src="${data[i].acf.thumbnail.url}" alt="aerial" loading="lazy">
    </a>
    `;
    addHTML("div#aerial", newHTML);
  }
}

function getPostsProd() {
  const url = 'https://www.bdom.digital/wp-json/wp/v2/posts?tags=13&per_page=16';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      renderPostsProd(data);
    });
}
getPostsProd();

function renderPostsProd(data) {
  for (let i = 0; i < 16; i++) {
    let newHTML = `
    <a data-fancybox="video-gallery-1" data-caption="${data[i].acf.title}" href="${data[i].acf.image}">
      <img class="photoEl" src="${data[i].acf.thumbnail.url}" alt="production" loading="lazy">
    </a>
    `;
    addHTML("div#production", newHTML);
  }
}

function getPostsAdv() {
  const url = 'https://www.bdom.digital/wp-json/wp/v2/posts?tags=14&per_page=16';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      renderPostsAdv(data);
    });
}
getPostsAdv();

function renderPostsAdv(data) {
  for (let i = 0; i < 16; i++) {
    let newHTML = `
    <a data-fancybox="video-gallery-1" data-caption="${data[i].acf.title}" href="${data[i].acf.image}">
      <img class="photoEl" src="${data[i].acf.image}" alt="advertising" loading="lazy">
    </a>
    `;
    addHTML("div#advertising", newHTML);
  }
};


//Videos API requests
const urlCommercials = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PLEBnbnJyPmKeab8Z9rCaihEAZZS8Mc-jc&key=AIzaSyCztXE50AKe8dB_Z-vBk4QR6cGEu-610jk";
const urlEvent = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PLEBnbnJyPmKdvPLhSJpZlSfdwKxsv3js5&key=AIzaSyCztXE50AKe8dB_Z-vBk4QR6cGEu-610jk";
const urlLocations = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PLEBnbnJyPmKfsZtQuMSnh6JDxqsbsk9KW&key=AIzaSyCztXE50AKe8dB_Z-vBk4QR6cGEu-610jk";
const urlSport = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PLEBnbnJyPmKcaNczb4foGp6t3HJkOFa-f&key=AIzaSyCztXE50AKe8dB_Z-vBk4QR6cGEu-610jk";
const urlMusic = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=PLEBnbnJyPmKcJkb06i0j1u457je-jy0vh&key=AIzaSyCztXE50AKe8dB_Z-vBk4QR6cGEu-610jk";

const addHTML2 = (selector, newContent) => {
  document.querySelector(selector).innerHTML += newContent;
}

fetch(urlCommercials)
  .then(res => {
    return res.json();
  })
  .then(data => {
    data.items.forEach(element => {
      //vidTitle = element.snippet.title;
      thumbnail = element.snippet.thumbnails.medium.url;
      vidURL = 'https://www.youtube.com/watch?v=' + element.snippet.resourceId.videoId;

      output = `
            <a data-fancybox="video-gallery-2" href="${vidURL}">
                <img src="${thumbnail}" class="photoEl" alt="commercials">
            </a>
            `;

      addHTML2("div#commercials", output);
    });
  });

fetch(urlEvent)
  .then(res => {
    return res.json();
  })
  .then(data => {
    data.items.forEach(element => {
      //vidTitle = element.snippet.title;
      thumbnail = element.snippet.thumbnails.medium.url;
      vidURL = 'https://www.youtube.com/watch?v=' + element.snippet.resourceId.videoId;

      output = `
            <a data-fancybox="video-gallery-2" href="${vidURL}">
                <img src="${thumbnail}" class="photoEl" alt="events" loading="lazy">
            </a>
            `;

      addHTML2("div#event", output);
    });
  });

fetch(urlLocations)
  .then(res => {
    return res.json();
  })
  .then(data => {
    data.items.forEach(element => {
      //vidTitle = element.snippet.title;
      thumbnail = element.snippet.thumbnails.medium.url;
      vidURL = 'https://www.youtube.com/watch?v=' + element.snippet.resourceId.videoId;

      output = `
            <a data-fancybox="video-gallery-2" href="${vidURL}">
                <img src="${thumbnail}" class="photoEl" alt="locations" loading="lazy">
            </a>
            `;

      addHTML2("div#locations", output);
    });
  });

fetch(urlMusic)
  .then(res => {
    return res.json();
  })
  .then(data => {
    data.items.forEach(element => {
      //vidTitle = element.snippet.title;
      thumbnail = element.snippet.thumbnails.medium.url;
      vidURL = 'https://www.youtube.com/watch?v=' + element.snippet.resourceId.videoId;

      output = `
            <a data-fancybox="video-gallery-2" href="${vidURL}">
                <img src="${thumbnail}" class="photoEl" alt="music" loading="lazy">
            </a>
            `;

      addHTML2("div#music", output);
    });
  });

fetch(urlSport)
  .then(res => {
    return res.json();
  })
  .then(data => {
    data.items.forEach(element => {
      vidTitle = element.snippet.title;
      thumbnail = element.snippet.thumbnails.medium.url;
      vidURL = 'https://www.youtube.com/watch?v=' + element.snippet.resourceId.videoId;

      output = `
            <a class="big-size" data-fancybox="video-gallery-2" href="${vidURL}">
                <img src="${thumbnail}" class="photoEl" alt="sport" loading="lazy">
            </a>
            `;

      addHTML2("div#sport", output);
    });
  });
// Lightbox source code https://codepen.io/chaly7500/pen/WPGMKb]
// YouTube API source https://www.youtube.com/watch?v=K9G3Yc0pw9g&list=LL&index=9&t=1s&ab_channel=Shainu