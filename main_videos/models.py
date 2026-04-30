"""
main_videos/models.py

Consolidates news_video, blogs_video, sports_video into a single Video model.
A data migration (0002_consolidate_videos.py) migrates all existing rows.
"""

from django.db import models


class Video(models.Model):
    NEWS = "news"
    BLOGS = "blogs"
    SPORTS = "sports"

    CATEGORY_CHOICES = [
        (NEWS, "News"),
        (BLOGS, "Blogs"),
        (SPORTS, "Sports"),
    ]

    category = models.CharField(
        max_length=10,
        choices=CATEGORY_CHOICES,
        default=NEWS,
        db_index=True,
    )
    video_title = models.CharField(max_length=100, null=True, blank=True)
    video_lng = models.CharField(max_length=30, null=True, blank=True)
    video_author = models.CharField(max_length=100, null=True, blank=True)
    video_pdate = models.IntegerField(null=True, blank=True)
    video_desc = models.CharField(max_length=250, null=True, blank=True)
    video_img_preview = models.ImageField(
        upload_to="video_previews/", null=True, blank=True
    )
    video_img_show = models.ImageField(
        upload_to="video_previews/", null=True, blank=True
    )
    video_file = models.FileField(upload_to="videos/", null=True, blank=True)

    class Meta:
        ordering = ["-id"]
        verbose_name = "Video"
        verbose_name_plural = "Videos"

    def __str__(self):
        return f"[{self.get_category_display()}] {self.video_title or 'Untitled'}"