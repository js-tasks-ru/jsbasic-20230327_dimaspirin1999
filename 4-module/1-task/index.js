function makeFriendsList(friends) {
    let ul = document.createElement('ul');
    let html = '';

    friends.map((item) => {
      html += `<li>${item.firstName} ${item.lastName}</li>`;
    });

    ul.innerHTML = html;

    return ul;
}
