from django.db import models
from dateutil.relativedelta import relativedelta


# Create your models here.



class Producto(models.Model):
    id_producto = models.AutoField(primary_key=True)
    imagen = models.ImageField(upload_to="producto", null=True)
    nombre = models.CharField(max_length=35)          
    cantidad = models.CharField(max_length=3)        
    descripcion = models.CharField(max_length=330)    
    precio_new = models.CharField(max_length=6)
    precio_old = models.CharField(max_length=6)     
    marca =models.ForeignKey('Marca',on_delete=models.CASCADE, db_column='id_marca')          
    provedor =models.ForeignKey('Provedor', on_delete=models.CASCADE, db_column='id_provedor')     
    dis_despacho = models.BooleanField()    
    dis_retiro =  models.BooleanField() 
    sub_categoria = models.ForeignKey('Sub_Categoria', on_delete=models.CASCADE, db_column='id_sub_categoria')

    def __str__(self):
        return str(self.nombre)


class Marca(models.Model):
    id_marca = models.CharField(primary_key=True, max_length= 2, db_column='id_marca')  
    nombre = models.CharField(max_length=35)
    categoria = models.ForeignKey('Categoria', on_delete=models.CASCADE, db_column='id_categoria') 

    def __str__(self):
        return str(self.nombre) 

class Provedor(models.Model):
    id_provedor = models.CharField(primary_key=True, max_length=2, db_column='id_provedor')
    nombre = models.CharField(max_length=35)

    def __str__(self):
        return str(self.nombre)


class Despacho(models.Model):
    id_soli_des = models.AutoField(primary_key=True, db_column= 'id_soli_des')
    direccion = models.CharField(max_length=100)  
    num_casa_dep= models.CharField(max_length=3, blank=True, null=True)
    info_add = models.CharField(max_length=100, blank=True, null=True)
    producto = models.ForeignKey('Producto', on_delete=models.CASCADE, db_column='id_producto')  
    comuna = models.ForeignKey('Comuna', on_delete=models.CASCADE,db_column='id_comuna')
    receptor =  models.CharField(max_length=65)

    def __str__(self):
        return str(self.id_soli_des)+"-"+str(self.direccion)+"-"+str(self.comuna)

class Retiro(models.Model):
    id_soli_ret = models.AutoField(primary_key=True,  db_column= 'id_soli_ret')
    producto = models.ForeignKey('Producto', on_delete=models.CASCADE, db_column='id_producto')
    fecha_estimada = relativedelta(days=15)
    sucursal= models.ForeignKey('Sucursal', on_delete=models.CASCADE, db_column='id_sucursal')
    receptor =  models.CharField(max_length=65)
    
    def __str__(self):
        return str(self.id_soli_ret)+"-"+str(self.sucursal)+"-"+str(self.fecha_estimada)



class Sucursal(models.Model):
    id_sucursal = models.CharField(primary_key=True, max_length=4)
    direccion = models.CharField(max_length=100) 
    nombre = models.CharField(max_length=50)
    comuna = models.ForeignKey('Comuna', on_delete=models.CASCADE, db_column='id_comuna')

    def __str__(self):
        return str(self.direccion)

class Comuna(models.Model):
    id_comuna = models.AutoField(primary_key=True,  db_column='id_comuna')
    nombre = models.CharField(max_length=20)
    region = models.ForeignKey('Region', on_delete=models.CASCADE, db_column='id_region')

    def __str__(self):
        return str(self.nombre)+"-"+str(self.region)

class Region(models.Model):
    id_region = models.AutoField(primary_key=True,  db_column='id_region')
    nombre = models.CharField(max_length=20)

    def __str__(self):
        return str(self.nombre)

class Categoria(models.Model):
    id_categoria = models.AutoField(primary_key=True, db_column= 'id_categoria')
    nombre = models.CharField(max_length=20)

    def __str__(self):
        return str(self.nombre)


class Sub_Categoria(models.Model):
    id_sub_categoria = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=20)
    categoria = models.ForeignKey('Categoria', on_delete=models.CASCADE, db_column='id_categoria')


    def __str__(self):
        return str(self.nombre)+"-"+str(self.categoria)



    

