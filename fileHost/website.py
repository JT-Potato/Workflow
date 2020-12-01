from flask import *
import os
from werkzeug.utils import secure_filename
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = "/Volumes/T7 Touch/Development/vidHelper/fileHost/files"
@app.route("/upload", methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        else:
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return "It worked! Remember this secret code:" + filename
    return render_template("upload.html")

@app.route("/files", methods=['GET', 'POST'])
def files():
    if request.method == 'POST':
        return redirect("/file/" + request.form["text"])
    return """
<h1>Upload new File</h1>
<form method=post enctype=multipart/form-data>
  <input type=text name=text>
  <input type=submit value=Go>
</form>
"""
@app.route("/file/<name>")
def file(name):
    return send_file(os.getcwd() + "/fileHost/files/" + name, as_attachment=True)

app.run(host="0.0.0.0", port=8080)