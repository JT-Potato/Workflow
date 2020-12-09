import webview
from flask import *
import threading
import os
import platform
import json
import vidHelperTools
from vidHelperTools import config

os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '0'
app = Flask(__name__)
app.config["workflowconfig"] = vidHelperTools.default_config

@app.route("/")
def index():
    if platform.system() == "Darwin":
        if os.path.isfile(os.path.expanduser(vidHelperTools.config_file)) == False:
            os.makedirs(os.path.expanduser(vidHelperTools.config_folder))
            config.save(app.config["workflowconfig"])
        else:
            app.config["workflowconfig"] = config.load()
    if vidHelperTools.repairConfig() == "repaired":
        return render_template("something_went_wrong.html")
    return render_template("index.html", data=app.config["workflowconfig"])

@app.route("/internal/<action>/<extra>")
def internal(action, extra):
    if action == "mkproj":
        if extra != "none":
            os.makedirs(os.path.expanduser(app.config["workflowconfig"]["default_proj_loc"]) + "/" + extra)
            return render_template("success.html", message="Your Project Has Been Created!")
        else:
            return render_template("require_response.html", question="What is the name of your project?", return_loc="/internal/mkproj/")

def run():
    app.run()

t = threading.Thread(target=run)
t.daemon = True
t.start()

webview.create_window("Workflow One", "http://localhost:5000")
webview.start()