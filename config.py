import json
import os

location = os.path.expanduser("~/.spudsquad/workflow/cfg.json")
directories = os.path.expanduser("~/.spudsquad/workflow")
default_conf = {"wallpaper": "url(https://s27688.pcdn.co/wp-content/uploads/2013/08/canstockphoto1830254.jpg)"}

def repair():
    if os.path.exists(location) == False:
        os.makedirs(directories)
        json.dump(default_conf, open(location, "w"))
    if json.load(open(location, "r")).keys() != default_conf.keys():
        json.dump(default_conf, open(location, "w"))


def read():
    return json.load(open(location, "r"))