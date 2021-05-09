import os
from flask import Flask, flash, request, redirect, url_for, send_file, session
from flask_cors import CORS, cross_origin
from flask_ngrok import run_with_ngrok

UPLOAD_FOLDER = '/uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

model_types_to_fn = {
    "cycle_gan": CycleGAN,
    "unit": CycleGAN,
    "munit": CycleGAN,
    "cut": CycleGAN,
}


def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def transform_image(image_path, model_type):
    return model_types_to_fn.get(model_type, CycleGAN)(image_path)


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = os.getcwd() + UPLOAD_FOLDER
run_with_ngrok(app)


@app.route("/api/test")
def test():
    return "Hello World!."


@app.route("/api/transform-image", methods=["POST"])
@cross_origin(origin="*")
def index():
    image = request.files['file']
    model_type = request.form.get("modelType")
    if image and allowed_file(image.filename):
        image_path = os.path.join(app.config['UPLOAD_FOLDER'], image.filename)
        image.save(image_path)
        image_output = transform_image(image_path, model_type)
        image_output_path = os.path.join(
            app.config['UPLOAD_FOLDER'], 'out.png')
        image_output.save(image_output_path)
        return send_file(image_output_path, mimetype='image/png')


app.run()
