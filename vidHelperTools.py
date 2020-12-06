from screeninfo import get_monitors
import json
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

class macOS():
    class config():
        def save(info):
            json.dump(info, open("~/.config/SpudSquad/Workflow/config.workflowconfig", "w"))
        def load():
            return json.load(open("~/.config/SpudSquad/Workflow/config.workflowconfig", "r"))