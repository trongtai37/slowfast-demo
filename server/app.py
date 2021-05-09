import os
from flask import Flask, flash, request, redirect, url_for, send_file, session, send_from_directory
from flask_cors import CORS, cross_origin
# from flask_ngrok import run_with_ngrok

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# run_with_ngrok(app)


def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/api/test")
@cross_origin(origin="*")
def test():
    return send_from_directory(app.config['UPLOAD_FOLDER'], "output.mp4", as_attachment=True)


@app.route("/api/transform-image", methods=["POST"])
@cross_origin(origin="*")
def index():
    image = request.files['file']
    print(image)
    model_type = request.form.get("modelType")
    if image and allowed_file(image.filename):
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], image.filename))
        return 'Hello'


app.run('0.0.0.0', 5000)
