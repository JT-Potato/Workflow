import webview
from flask import *
import threading
import os

os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '0'
app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

def run():
    app.run()

t = threading.Thread(target=run)
t.daemon = True
t.start()

webview.create_window("Workflow One", "http://localhost:5000")
webview.start()