import tkinter
from flaskwebgui import FlaskUI
from flask import *
import threading
import os
import config
import tkinter as tk
from tkinter import filedialog

os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '0'
app = Flask(__name__)
ui = FlaskUI(app)

config.repair()

@app.route("/")
def home():
    return render_template("index.html", wallpaper=config.read()["wallpaper"])

@app.route("/internal/<action>/<extra>")
def internal(action, extra):
    if action == "mkproj":
        if extra=="none":
            return render_template("require_response.html", question="What is the name of the project", return_loc="/internal/mkproj/")
        else:
            return "help me"

ui.run()