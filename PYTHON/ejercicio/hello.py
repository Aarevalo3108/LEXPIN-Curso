import tkinter as tk

root = tk.Tk()

root.geometry("300x300")
root.config(bg="gray")
tk.Wm.title(root,"Hello World")

tk.Button(
  root,
  font={"Courier", 30},
  text="Hello World",
  bg="red",
  fg="white",
).pack(
  fill=tk.BOTH,
  expand=True,
)
 

root.mainloop()