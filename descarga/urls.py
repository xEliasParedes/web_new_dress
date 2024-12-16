#from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
    path('', views.descarga, name='descarga'),
    path('descarga-new_dress/', views.apk, name='apk'),
]