from django.contrib import admin
from .models import Video


@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ("id", "category", "video_title", "video_author", "video_pdate")
    list_filter = ("category",)
    search_fields = ("video_title", "video_author")
    list_per_page = 25