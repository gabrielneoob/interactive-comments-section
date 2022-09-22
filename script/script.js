const containerComents = document.querySelector('.comment-container');



async function puxarData() {
  try {
    const response = await fetch('../data.json')
    const data = await response.json();
    const totalComments = data.comments;
    // console.log(totalComments);
    // console.log(data);
    totalComments.forEach((userData, i) => {


      console.log(userData)
      const comments = document.createElement('section');
      comments.classList.add('comments')

      const vote = document.createElement('div');
      vote.classList.add('vote');
      const plus = document.createElement('span');
      plus.classList.add('plus')
      plus.innerHTML = '+';
      const score = document.createElement('span');
      score.classList.add('score')
      score.innerHTML = userData.score;
      const menos = document.createElement('span');
      menos.classList.add('menos')
      menos.innerHTML = '-';
      vote.appendChild(plus);
      vote.appendChild(score);
      vote.appendChild(menos);
      comments.appendChild(vote);

      //parte 2
      const perfil = document.createElement('div');
      perfil.classList.add('perfil');

      const user = document.createElement('div');
      user.classList.add('user');
      perfil.appendChild(user);

      const userPerfil = document.createElement('div');
      userPerfil.classList.add('user-perfil');
      user.appendChild(userPerfil);

      const userImg = document.createElement('div');
      userImg.classList.add('user-img');
      const img = document.createElement('img');
      img.setAttribute('src', `${userData.user.image.png}`);
      img.alt = 'oi';
      userImg.appendChild(img);
      const userName = document.createElement('h3');
      userName.classList.add('user-name');
      userName.innerHTML = `${userData.user.username}`;
      const createdDate = document.createElement('span');
      createdDate.classList.add('created');
      createdDate.innerHTML = `${userData.createdAt}`;

      userPerfil.appendChild(userImg);
      userPerfil.appendChild(userName);
      userPerfil.appendChild(createdDate);

      const reply = document.createElement('div');
      reply.classList.add('reply');
      const replyImg = document.createElement('img');
      replyImg.setAttribute('src', '../images/icon-reply.svg');
      replyImg.alt = ''
      const spanReply = document.createElement('span');
      spanReply.innerHTML = 'Reply';
      reply.appendChild(replyImg);
      reply.appendChild(spanReply);
      user.appendChild(reply);

      const comment = document.createElement('p');
      comment.classList.add('comment');
      comment.innerHTML = `${userData.content}`
      perfil.appendChild(comment);
      comments.appendChild(perfil);
      containerComents.appendChild(comments);
      console.log(containerComents);

      // reply comments

      const totalReplys = userData.replies;
      console.log(totalReplys)
      totalReplys.forEach((replyUser) => {
        const replyComment = document.createElement('div');
        replyComment.classList.add('reply-comment');

        const vote = document.createElement('div');
        vote.classList.add('vote');
        const plus = document.createElement('span');
        plus.classList.add('plus')
        plus.innerHTML = '+';
        const score = document.createElement('span');
        score.classList.add('score')
        score.innerHTML = replyUser.score;
        const menos = document.createElement('span');
        menos.classList.add('menos')
        menos.innerHTML = '-';
        vote.appendChild(plus);
        vote.appendChild(score);
        vote.appendChild(menos);
        replyComment.appendChild(vote);

        //parte 2
        const perfil = document.createElement('div');
        perfil.classList.add('perfil');

        const user = document.createElement('div');
        user.classList.add('user');
        perfil.appendChild(user);

        const userPerfil = document.createElement('div');
        userPerfil.classList.add('user-perfil');
        user.appendChild(userPerfil);

        const userImg = document.createElement('div');
        userImg.classList.add('user-img');
        const img = document.createElement('img');
        img.setAttribute('src', `${replyUser.user.image.png}`);
        img.alt = 'oi';
        userImg.appendChild(img);
        const userName = document.createElement('h3');
        userName.classList.add('user-name');
        userName.innerHTML = `${replyUser.user.username}`;
        const createdDate = document.createElement('span');
        createdDate.classList.add('created');
        createdDate.innerHTML = `${replyUser.createdAt}`;

        userPerfil.appendChild(userImg);
        userPerfil.appendChild(userName);
        userPerfil.appendChild(createdDate);

        const reply = document.createElement('div');
        reply.classList.add('reply');
        const replyImg = document.createElement('img');
        replyImg.setAttribute('src', '../images/icon-reply.svg');
        replyImg.alt = ''
        const spanReply = document.createElement('span');
        spanReply.innerHTML = 'Reply';
        reply.appendChild(replyImg);
        reply.appendChild(spanReply);
        user.appendChild(reply);

        const comment = document.createElement('p');
        comment.classList.add('comment');
        comment.innerHTML = `${replyUser.content}`
        perfil.appendChild(comment);
        replyComment.appendChild(perfil);
        containerComents.appendChild(replyComment);
        console.log(containerComents);
      })
    })
  }
  catch (e) {
    console.log(e)
  }
}

puxarData();

setTimeout(function () {
  const plus = document.querySelectorAll('.plus');
  const score = document.querySelectorAll('.score');
  const menos = document.querySelectorAll('.menos');
  console.log(plus);
  console.log(score);
  plus.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      score[i].innerText = +score[i].innerText + 1;
    })
  })

  menos.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      score[i].innerText = +score[i].innerText - 1;
    })
  })

}, 100)
