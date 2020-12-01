import platform
import tkinter as tk
import os
import gui
from vidHelperTools import *

root = tk.Tk()
text = tk.Text(master=self.frame)
text.configure(font-"Inter")
root.geometry(f"{getWidth()}x{getHeight()}")
if platform.system() == "Darwin":
    os.system('''/usr/bin/osascript -e 'tell app "Finder" to set frontmost of process "Python" to true' ''')
    gui.App(root)
root.mainloop()