import tkinter as tk
import os

class App():
    def __init__(self, master):
        self.master = master
        master.title("Vid Helper")

        #Labels
        self.label = tk.Label(master, text="Welcome")
        self.label.pack()