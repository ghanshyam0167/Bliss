from django.db import models

# Create your models here.
class Search(models.Model):
    S_image = models.ImageField(upload_to="search", max_length=500, default=None, null=False)
    s_title = models.CharField(max_length=30,default= None,null = True)
    s_lng = models.CharField(max_length=30,default= None,null = True)
    s_author = models.CharField(max_length=30,default= None,null = True)
    s_pdate = models.IntegerField(default= None,null = True)
    s_desc = models.CharField(max_length=100,default= None,null = True)
