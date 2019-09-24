from flask import Flask
import scheduler
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/add-targets')
def add_targets():
    return "Target added"


if __name__ == '__main__':
    app.run()
