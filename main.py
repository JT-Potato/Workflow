import webview
from flask import *
import threading
import os
import platform
import json
import vidHelperTools

os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '0'
app = Flask(__name__)
app.config["workflowconfig"] = {"wallpaper": "url(https://s27688.pcdn.co/wp-content/uploads/2013/08/canstockphoto1830254.jpg)"}

@app.route("/")
def index():
    if platform.system() == "Darwin":
        if os.path.isfile(os.path.expanduser("~/.config/SpudSquad/Workflow/config.workflowconfig")) == False:
            os.makedirs(os.path.expanduser("~/.config/SpudSquad/Workflow"))
            vidHelperTools.macOS.config.save(app.config["workflowconfig"])
        else:
            app.config["workflowconfig"] = vidHelperTools.macOS.config.load()
    return render_template("index.html", data=app.config["workflowconfig"])

def run():
    app.run()

t = threading.Thread(target=run)
t.daemon = True
t.start()

webview.create_window("Workflow One", "http://localhost:5000")
webview.start()