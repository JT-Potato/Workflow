import tkinter as tk
import os
from vidHelperTools import *

class App():
    def __init__(self, master):
        self.master = master
        master.title("Workflow One")
        #Splash
        canvas  = tk.Canvas(tk.Tk(), f"{getWidth()}x{getHeight()}")
        canvas.create_text(50, 50, text="Welcome to Workflow One")
        canvas.pack()
        tk.update()