const form = document.getElementById('subscribeForm');
    const message = document.getElementById('formMessage');
    const records = document.getElementById('subscriptionRecords');
    const videoMessage = document.getElementById('videoMessage');
    const videoContainer = document.getElementById('videoContainer');
    const youtubeFrame = document.getElementById('youtubeFrame');

    let userSubscription = '';

    const courseVideos = {
      'Web Development': 'https://www.youtube.com/embed/UB1O30fR-EE',
      'Data Science': 'https://www.youtube.com/embed/xC-c7E5PK0Y',
      'UI/UX Design': 'https://www.youtube.com/embed/3YjQutE-NdE'
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const username = form.username.value.trim();
      const email = form.email.value.trim();
      const course = form.course.value;

      if (!username || !email || !course) {
        message.textContent = 'Please fill out all fields correctly.';
        message.className = 'message error';
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.textContent = 'Please enter a valid email address.';
        message.className = 'message error';
        return;
      }

      message.textContent = `Successfully subscribed to ${course} course!`;
      message.className = 'message success';

      const li = document.createElement('li');
      li.textContent = `${username} subscribed to ${course}`;
      records.appendChild(li);

      form.reset();
      userSubscription = course;
    });

    function watchVideo(courseName) {
      if (userSubscription === courseName) {
        youtubeFrame.src = courseVideos[courseName];
        videoContainer.style.display = 'block';
        videoMessage.textContent = '';
      } else {
        videoMessage.textContent = `You must subscribe to the ${courseName} course to watch this video.`;
        videoMessage.className = 'message error';
        videoContainer.style.display = 'none';
        youtubeFrame.src = '';
      }
    }
