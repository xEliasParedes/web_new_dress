#from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
    path ('list_product/',views.list_product, name='list_product'),
    path ('producto_0/',views.producto_0, name='producto'),
]