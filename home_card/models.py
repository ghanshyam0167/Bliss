from django.db import models

# Create your models here.
class home_card_1(models.Model):
    card_desc = models.CharField(max_length=250,default= None,null = True)
    card_image = models.ImageField(upload_to="homecard1/",max_length=250, default=None, null=True)

class home_card_2(models.Model):
    card_desc = models.CharField(max_length=250,default= None,null = True)
    card_image = models.ImageField(upload_to="homecard1/",max_length=250, default=None, null=True)

class home_card_3(models.Model):
    card_desc = models.CharField(max_length=250,default= None,null = True)
    card_image = models.ImageField(upload_to="homecard1/",max_length=250, default=None, null=True)

class home_card_4(models.Model):
    card_desc = models.CharField(max_length=250,default= None,null = True)
    card_image = models.ImageField(upload_to="homecard1/",max_length=250, default=None, null=True)

class home_card_5(models.Model):
    card_desc = models.CharField(max_length=250,default= None,null = True)
    card_image = models.ImageField(upload_to="homecard1/",max_length=250, default=None, null=True)    

class home_card_6(models.Model):
    card_desc = models.CharField(max_length=250,default= None,null = True)
    card_image = models.ImageField(upload_to="homecard1/",max_length=250, default=None, null=True)   

class book_card_1(models.Model):
    card_desc = models.CharField(max_length=250,default= None,null = True)
    card_image = models.ImageField(upload_to="homecard1/",max_length=250, default=None, null=True)

class book_card_2(models.Model):
    card_desc = models.CharField(max_length=250,default= None,null = True)
    card_image = models.ImageField(upload_to="homecard1/",max_length=250, default=None, null=True)

class book_card_3(models.Model):
    card_desc = models.CharField(max_length=250,default= None,null = True)
    card_image = models.ImageField(upload_to="homecard1/",max_length=250, default=None, null=True)

class book_card_4(models.Model):
    card_desc = models.CharField(max_length=250,default= None,null = True)
    card_image = models.ImageField(upload_to="homecard1/",max_length=250, default=None, null=True)

class book_card_5(models.Model):
    card_desc = models.CharField(max_length=250,default= None,null = True)
    card_image = models.ImageField(upload_to="homecard1/",max_length=250, default=None, null=True)    


class sport_card_1(models.Model):
    card_desc = models.CharField(max_length=250,default= None,null = True)
    card_image = models.ImageField(upload_to="homecard1/",max_length=250, default=None, null=True)

class sport_card_2(models.Model):
    card_desc = models.CharField(max_length=250,default= None,null = True)
    card_image = models.ImageField(upload_to="homecard1/",max_length=250, default=None, null=True)

class sport_card_3(models.Model):
    card_desc = models.CharField(max_length=250,default= None,null = True)
    card_image = models.ImageField(upload_to="homecard1/",max_length=250, default=None, null=True)

class sport_card_4(models.Model):
    card_desc = models.CharField(max_length=250,default= None,null = True)
    card_image = models.ImageField(upload_to="homecard1/",max_length=250, default=None, null=True)

class sport_card_5(models.Model):
    card_desc = models.CharField(max_length=250,default= None,null = True)
    card_image = models.ImageField(upload_to="homecard1/",max_length=250, default=None, null=True)    
