from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .playlist_songs import playlist_songs

class Playlist(db.Model):
    __tablename__ = 'playlists'

<<<<<<< HEAD
    if environment == "production": __table_args__ = {'schema': SCHEMA}
=======
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
>>>>>>> 49749ed45c218ea77617831afc5695f12fe2de3e

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    preview_img = db.Column(db.String(255))

    user = db.relationship("User", back_populates="playlists")

    # join table relationship
    playlist_to_songs = db.relationship("Song", secondary=playlist_songs, back_populates="song_to_playlists")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'user_id': self.user_id,
            'preview_img' : self.preview_img
        }
