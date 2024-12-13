from django.shortcuts import render
from . models import Producto

# Create your views here.
def list_product(request):
    producto= Producto.objects.all()
    context={ 'producto': producto}
    return render(request, 'producto/listado_producto.html', context)

def producto_0(request):
    productos= Producto.objects.all()
    alimentos = productos.filter(sub_categoria__categoria__nombre='ALIMENTO')
    cuidados = productos.filter(sub_categoria__categoria__nombre='CUIDADO')
    entretenimiento = productos.filter(sub_categoria__categoria__nombre='ENTRETENIMIENTO')
    farmacia = productos.filter(sub_categoria__categoria__nombre='FARMACIA')
    accesorio = productos.filter(sub_categoria__categoria__nombre='ACCESORIO')
    context={'productos':productos, 'alimentos': alimentos, 'cuidado':cuidados, 'entretenimiento': entretenimiento, 'farmacia':farmacia, "accesorios":accesorio}
    return render(request, 'producto/producto.html', context)