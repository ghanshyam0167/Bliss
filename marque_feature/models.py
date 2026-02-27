from django.db import models

# Create your models here.
class marquee_feature_1(models.Model):
    book_image = models.ImageField(upload_to="book_image/",max_length=250,default=None,null=True)

class marquee_feature_2(models.Model):
    magazines_image = models.ImageField(upload_to="magazines_image/",max_length=250,default=None,null=True)

class marquee_feature_3(models.Model):
    book_image_2 = models.ImageField(upload_to="book_image_2/",max_length=250,default=None,null=True)
