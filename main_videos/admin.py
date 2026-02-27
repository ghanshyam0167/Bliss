from django.contrib import admin
from .models import news_video ,blogs_video , sports_video

class news_videoAdmin(admin.ModelAdmin):
    list_display = ("video_title","video_lng", "video_author", "video_pdate", "video_img_preview","video_img_show","video_file")
# Register your models here.

class blogs_videoAdmin(admin.ModelAdmin):
    list_display = ("video_title","video_lng", "video_author", "video_pdate", "video_img_preview","video_img_show","video_file")

class sports_videoAdmin(admin.ModelAdmin):
    list_display = ("video_title","video_lng", "video_author", "video_pdate", "video_img_preview","video_img_show","video_file")  

admin.site.register(news_video,news_videoAdmin)
admin.site.register(blogs_video,blogs_videoAdmin)
admin.site.register(sports_video,sports_videoAdmin)