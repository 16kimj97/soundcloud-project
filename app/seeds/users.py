from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    # demo = User(
    #     username='Demo', email='demo@aa.io', password='password', first_name='Demo', last_name='App', city='San Francisco', country='United States', bio='Hi this is test user ')
    # marnie = User(
    #     username='marnie', email='marnie@aa.io', password='password',first_name='Demo', last_name='App', city='San Francisco', country='United States', bio='Hi this is test user ')
    # bobbie = User(
    #     username='bobbie', email='bobbie@aa.io', password='password',first_name='Demo', last_name='App', city='San Francisco', country='United States', bio='Hi this is test user ')
    thanh = User(
        username='thanh', email='thanh@aa.io', password='password1',first_name='thanh', last_name='App', city='Dublin', country='United States', bio='Hi this is test user ')
    justin = User(
        username='justin', email='justin@aa.io', password='password2',first_name='justin', last_name='App', city='San Jose', country='United States', bio='Hi this is test user ')
    krishna = User(
        username='krishna', email='krishna@aa.io', password='password3',first_name='krishna', last_name='App', city='New York', country='United States', bio='Hi this is test user ')
    hun = User(
        username='hun', email='hun@aa.io', password='password',first_name='hun', last_name='App', city='San Francisco', country='Ohio', bio='Hi this is test user ')


    # db.session.add(demo)

    # db.session.add(marnie)
    # db.session.add(bobbie)
    db.session.add_all([thanh, justin, krishna, hun])
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
    db.session.commit()
