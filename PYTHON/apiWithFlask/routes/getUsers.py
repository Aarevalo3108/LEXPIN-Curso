from flask import jsonify, Blueprint
from apiWithFlask.config import mysql

get_users = Blueprint('get_users', __name__)

get_users.route('/users', methods=['GET'])

def home ():
  cursor = mysql.connection.cursor()
  cursor.execute('SELECT * FROM users')
  data = cursor.fetchall()
  cursor.close()
  res = jsonify(data)
  res.headers.add('Access-Control-Allow-Origin', '*')
  return res
