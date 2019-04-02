from django.shortcuts import render

import io
from PIL import Image
from django.http import JsonResponse, HttpResponse
from scripts.python_vaporize.vaporize import vaporize
import base64
import cv2
import numpy


def index(request):
    if request.method == 'GET':
        return render(request, 'index.html')


def ping(request):
    if request.method == 'GET':
        return HttpResponse('Success', status=200)


def upload(request):
    if request.method == 'POST' and request.POST.get('data'):
        data = request.POST.get('data')

        img_str = data.split(';base64,')[1]
        decoded = base64.b64decode(str(img_str))

        image = Image.open(io.BytesIO(decoded))
        cv2_image = cv2.cvtColor(numpy.array(image), cv2.COLOR_RGB2BGR)

        vaporized_buffer_string = vaporize(cv2_image)
        vaporized_64_string = base64.b64encode(vaporized_buffer_string)
        vapor = str(vaporized_64_string, 'utf-8')
        return JsonResponse({'vapor': vapor}, status=200)
