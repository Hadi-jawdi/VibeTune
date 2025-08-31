# Mood Music Website

A Django-based web application that allows users to select their mood and get a matching Spotify playlist. The app features a responsive design with smooth animations and integrates with the Spotify API for dynamic playlist recommendations.


![Mood Music Screenshot](Images/project_demo.png)





## Features

- **Mood Selection**: Choose from Happy, Sad, Focused, or Relaxed moods
- **Dynamic Playlists**: Fetches playlists from Spotify based on selected mood
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Animations**: Uses Anime.js for interactive button animations
- **Bootstrap & Tailwind CSS**: Modern UI with custom gradients and styles
- **Spotify Integration**: Embeds Spotify player directly in the page

## Technologies Used

- **Backend**: Django 5.2
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: Bootstrap 5, Tailwind CSS
- **Animations**: Anime.js
- **API**: Spotify Web API
- **Database**: SQLite (default Django)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Mood_project
   ```

2. **Create a virtual environment** (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install django
   ```

4. **Set up the database**:
   ```bash
   python manage.py migrate
   ```

5. **Configure Spotify API** (optional for dynamic playlists):
   - Get your Spotify API credentials from [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
   - Update `clientId` and `clientSecret` in `static/js/mood_music.js`

6. **Run the development server**:
   ```bash
   python manage.py runserver
   ```

7. **Open your browser** and go to `http://127.0.0.1:8000/`

## Usage

1. Open the website in your browser
2. Click on one of the mood buttons (Happy, Sad, Focused, Relaxed)
3. The background will change to match the mood
4. A Spotify playlist will load and play automatically
5. Enjoy your mood-matched music!

## Project Structure

```
Mood_project/
├── core_app/
│   ├── migrations/
│   ├── static/
│   │   ├── css/
│   │   │   └── mood_music.css
│   │   └── js/
│   │       └── mood_music.js
│   ├── templates/
│   │   └── core_app/
│   │       ├── header.html
│   │       └── mood_music.html
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── project/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── static/
├── templates/
├── db.sqlite3
├── manage.py
├── .gitignore
├── README.md
└── TODO.md
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Spotify for providing the Web API
- Bootstrap and Tailwind CSS for UI components
- Anime.js for animations
