from django.contrib import admin
from .models import ForumPost, Message


@admin.register(ForumPost)
class ForumPostAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "title", "created_at")
    search_fields = ("title", "description", "user__username")
    list_filter = ("created_at",)
    raw_id_fields = ("user",)


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "post", "created_at")
    search_fields = ("message", "user__username")
    raw_id_fields = ("user", "post")
