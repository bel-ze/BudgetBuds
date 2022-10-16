from flask import Flask

def create_app():
    app = Flask (__name__)
    app.config['Key'] = '8hrSleep'

@app.route("/")
def home():
    return "This is the main page! <h1> HI THERE<h1>"

@app.route("/<name>")
def user(name):
    return "Hello {name}!"

if __name__ == "__main__":
    app.run()