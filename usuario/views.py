from django.shortcuts import render

# Create your views here.
def login(request):
    context={}
    return render(request, 'usuario/login.html', context)

def registro(request):
    context={}
    return render(request, 'usuario/registrar.html', context)