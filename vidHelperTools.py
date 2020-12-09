from screeninfo import get_monitors
import json
import os
def getWidth():
    width = get_monitors()[0].width/2
    width = str(width)
    tmp = width
    width = ""
    for c in range(len(tmp)-2):
        width += tmp[c]
    return width

def getHeight():
    height = get_monitors()[0].height/2
    height = str(height)
    tmp = height
    height = ""
    for c in range(len(tmp)-2):
        height += tmp[c]
    return height

config_file = "~/.config/SpudSquad/Workflow/config.workflowconfig"
config_folder = "~/.config/SpudSquad/Workflow"
default_config = {"wallpaper": "url(https://s27688.pcdn.co/wp-content/uploads/2013/08/canstockphoto1830254.jpg)", "default_proj_loc": "~/Desktop/Videos_Made_With_Workflow"}

class macOS():
    class config():
        def save(info):
            json.dump(info, open(os.path.expanduser("~/.config/SpudSquad/Workflow/config.workflowconfig"), "w"))
        def load():
            return json.load(open(os.path.expanduser("~/.config/SpudSquad/Workflow/config.workflowconfig"), "r"))

def repairConfig():
