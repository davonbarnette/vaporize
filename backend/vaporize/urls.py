from django.urls import path
from vaporize import views

urlpatterns = [
    path('', views.index, name='index'),
    path('upload', views.upload, name='upload'),
    path('ping', views.ping, name='ping')
]