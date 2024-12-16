from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
import os

# Create your views here.
def descarga(request):
    context={}
    return render(request, 'descarga/descarga.html', context)

def apk(request):
    # Ruta del archivo APK en tu sistema de archivos
    apk_path = os.path.join(settings.BASE_DIR, 'media/New_Dress.apk')

    if os.path.exists(apk_path):
        # Abre el archivo APK y devuelve una respuesta HTTP con el archivo como adjunto
        with open(apk_path, 'rb') as apk_file:
            response = HttpResponse(apk_file.read(), content_type='application/vnd.android.package-archive')
            response['Content-Disposition'] = 'attachment; filename="New_Dress.apk"'
            return response
    else:
        # Si el archivo no existe, devuelve un error 404
        return HttpResponse("APK no encontrado", status=404)

