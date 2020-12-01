import platform
import tkinter as tk
import os
import macOS
from vidHelperTools import *

root = tk.Tk()
root.geometry(f"{getWidth()}x{getHeight()}")
if platform.system() == "Darwin":
    os.system('''/usr/bin/osascript -e 'tell app "Finder" to set frontmost of process "Python" to true' ''')
    gui = macOS.App(root)
root.mainloop()