import platform
import tkinter as tk
import tkinter.font as TkFont
import os
import gui
from vidHelperTools import *

root = tk.Tk()
print(TkFont.families())
root.option_add("*Font", "Inter 40")
root.geometry(f"{getWidth()}x{getHeight()}")
if platform.system() == "Darwin":
    os.system('''/usr/bin/osascript -e 'tell app "Finder" to set frontmost of process "Python" to true' ''')
root.title("Workflow One")
#Splash
canvas  = tk.Canvas(root, width=getWidth(), height=getHeight())
canvas.create_text(int(getWidth())/2, int(getHeight())/2, text="Welcome to Workflow One")
canvas.pack()
root.mainloop()