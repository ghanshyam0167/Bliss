from django.db import models

# Create your models here.
class news_video(models.Model):
    video_title = models.CharField(max_length=30,default= None,null = True)
    video_lng = models.CharField(max_length=30,default= None,null = True)
    video_author = models.CharField(max_length=30,default= None,null = True)
    video_pdate = models.IntegerField(default= None,null = True)
    video_desc = models.CharField(max_length=150,default= None,null = True)
    video_img_preview = models.ImageField(upload_to="news_video_image/",default=None, null=True)
    video_img_show = models.ImageField(upload_to="news_video_image/",default=None, null=True)
    video_file = models.FileField(upload_to="news_video/", default=None, null=True)


class blogs_video(models.Model):
    video_title = models.CharField(max_length=30,default= None,null = True)
    video_lng = models.CharField(max_length=30,default= None,null = True)
    video_author = models.CharField(max_length=30,default= None,null = True)
    video_pdate = models.IntegerField(default= None,null = True)
    video_desc = models.CharField(max_length=150,default= None,null = True)
    video_img_preview = models.ImageField(upload_to="news_video_image/",default=None, null=True)
    video_img_show = models.ImageField(upload_to="news_video_image/",default=None, null=True)
    video_file = models.FileField(upload_to="news_video/", default=None, null=True)

class sports_video(models.Model):
    video_title = models.CharField(max_length=30,default= None,null = True)
    video_lng = models.CharField(max_length=30,default= None,null = True)
    video_author = models.CharField(max_length=30,default= None,null = True)
    video_pdate = models.IntegerField(default= None,null = True)
    video_desc = models.CharField(max_length=150,default= None,null = True)
    video_img_preview = models.ImageField(upload_to="news_video_image/",default=None, null=True)
    video_img_show = models.ImageField(upload_to="news_video_image/",default=None, null=True)
    video_file = models.FileField(upload_to="news_video/", default=None, null=True)