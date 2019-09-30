from flask import Flask, jsonify
from flask_cors import CORS
from settings import REACT_PW
from flask_httpauth import HTTPBasicAuth
from werkzeug.security import generate_password_hash, check_password_hash
import scheduler

app = Flask(__name__)
CORS(app)
auth = HTTPBasicAuth()

users = {
    "speckle": generate_password_hash(REACT_PW),
}


@auth.verify_password
def verify_password(username, password):
    if username in users:
        return check_password_hash(users.get(username), password)
    return False


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/auth', methods=['POST'])
@auth.login_required
def authorize():
    response = jsonify({'authorized': True})
    return response


@app.route('/add-targets')
@auth.login_required
def add_targets():
    return "Target added"


if __name__ == '__main__':
    app.run()
