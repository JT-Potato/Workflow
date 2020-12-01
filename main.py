from flaskwebgui import FlaskUI
from flask import *

app = Flask(__name__)
ui = FlaskUI(app)

@app.route("/")
def index():
    return render_template("index.html")

ui.run()