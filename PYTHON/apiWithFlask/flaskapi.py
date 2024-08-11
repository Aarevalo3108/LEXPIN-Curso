from flask import jsonify, request
from routes.getUsers import get_users
from config import mysql, app

app.register_blueprint(get_users)


@app.route('/users', methods=['POST'])

def add_user():
  name = request.json['name']
  lastname = request.json['lastname']
  ci = request.json['ci']
  age = request.json['age']
  cursor = mysql.connection.cursor()
  cursor.execute('INSERT INTO users (name, lastname, ci, age) VALUES (%s, %s, %s, %s)', (name, lastname, ci, age))
  mysql.connection.commit()
  cursor.close()
  return jsonify('User added successfully')

@app.route('/users/<int:ci>', methods=['PATCH'])

def update_user(ci):
  name = request.json['name']
  lastname = request.json['lastname']
  age = request.json['age']
  cursor = mysql.connection.cursor()
  cursor.execute('UPDATE users SET name = %s, lastname = %s, age = %s WHERE ci = %s', (name, lastname, age, ci))
  mysql.connection.commit()
  cursor.close()
  return jsonify('User updated successfully')

@app.route('/users/<ci>', methods=['DELETE'])

def delete_user(ci):
  cursor = mysql.connection.cursor()
  cursor.execute('DELETE FROM users WHERE ci = %s', (ci,))
  mysql.connection.commit()
  cursor.close()
  return jsonify('User deleted successfully')

if __name__ == '__main__':
  app.run(debug=True)