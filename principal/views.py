from django.shortcuts import render
from producto.models import Producto


# Create your views here.
def index(request):
    productos= Producto.objects.all()
    alimentos = productos.filter(sub_categoria__categoria__nombre='ALIMENTO')
    cuidados = productos.filter(sub_categoria__categoria__nombre='CUIDADO')
    entretenimiento = productos.filter(sub_categoria__categoria__nombre='ENTRETENIMIENTO')
    farmacia = productos.filter(sub_categoria__categoria__nombre='FARMACIA')
    accesorio = productos.filter(sub_categoria__categoria__nombre='ACCESORIO')
    context={'productos':productos, 'alimentos': alimentos, 'cuidado':cuidados, 'entretenimiento': entretenimiento, 'farmacia':farmacia, "accesorios":accesorio}
    return render(request, 'principal/index.html', context)