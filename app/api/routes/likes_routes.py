from flask import Blueprint, request, jsonify, render_template
from app.models import likes, db, Song, User
from app.forms import AddLikeToSong
from flask_login import login_required, current_user
from sqlalchemy import delete, func

likes_routes = Blueprint('likes', __name__)

@likes_routes.route('/likes')
def get_likes(songId):

    song = Song.query.get(songId)

    if song is None:
        return jsonify("song can't be found"), 404

    likes_count = db.session.query(likes).filter(likes.c.song_id == songId).count()
    return jsonify(likes_count)

@likes_routes.route('/likes/add', methods=['GET','POST'])
@login_required
def add_song_like(songId):
    current_user_id = current_user.id
    form = AddLikeToSong()

    song = Song.query.get(songId)

    if song is None:
        return jsonify("song can't be found"), 404


    if request.method=="GET":
        print("add a like!")
        return render_template("add_like.html", form=form, songId=songId)

   
    existing_like = db.session.query(likes).filter_by(user_id=current_user_id, song_id=songId).first()
        ## use first if anything match it will return the first record and return non if no record match

    
    if existing_like is not None:
        delete_sql = delete(likes).where(likes.c.user_id == current_user.id, likes.c.song_id == songId)
        db.session.execute(delete_sql)
        db.session.commit()
        like_count = db.session.query(func.count()).filter(likes.c.song_id == songId).scalar()
        return jsonify({ "likes removed": like_count})

    else:
        like = likes.insert().values(user_id = current_user_id, song_id = songId)
        db.session.execute(like)
        db.session.commit() 
        like_count = db.session.query(func.count()).filter(likes.c.song_id == songId).scalar()
        return jsonify({"likes added":like_count})


    # return render_template("add_like.html", form=form, songId=songId)
