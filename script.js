document.addEventListener('DOMContentLoaded', function() {
    const shortcuts = [
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Chat', url: 'https://mail.google.com/chat/u/0/#chat/home', thumbnail: 'thumbnails/chat.png' },
        { name: 'Calendar', url: 'https://calendar.google.com/calendar/u/0/r?tab=mc', thumbnail: 'thumbnails/calendar.png' },
        { name: 'Gitlab', url: 'https://gitlab.com/', thumbnail: 'thumbnails/gitlab.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },
        { name: 'Gmail', url: 'https://mail.google.com/mail/u/0/#inbox', thumbnail: 'thumbnails/gmail.png' },

        // Add more shortcuts as needed
    ];

    const container = document.querySelector('.shortcut-container');
    shortcuts.forEach(shortcut => {
        const anchor = document.createElement('a');
        anchor.href = shortcut.url;
        anchor.target = '_blank'; // Open in a new tab
        anchor.innerHTML = `
            <img src="${shortcut.thumbnail}" alt="${shortcut.name}" loading="lazy">
            <span>${shortcut.name}</span>
        `;
        container.appendChild(anchor);
    });
});