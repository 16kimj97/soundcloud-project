"""add song url

Revision ID: 11cba69a992f
Revises: 0b570e3a9493
Create Date: 2024-04-12 16:18:05.078604

"""
from alembic import op
import sqlalchemy as sa

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


# revision identifiers, used by Alembic.
revision = '11cba69a992f'
down_revision = '0b570e3a9493'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('songs', schema=None) as batch_op:
        batch_op.add_column(sa.Column('song_url', sa.String(length=255), nullable=True))

    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('songs', schema=None) as batch_op:
        batch_op.drop_column('song_url')


    # ### end Alembic commands ###
