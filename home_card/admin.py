from django.contrib import admin
from .models import ContentCard


@admin.register(ContentCard)
class ContentCardAdmin(admin.ModelAdmin):
    list_display = ("id", "category", "card_desc", "card_image")
    list_filter = ("category",)
    search_fields = ("card_desc",)
    list_per_page = 25