from django.contrib import admin
from .models import Search


@admin.register(Search)
class SearchAdmin(admin.ModelAdmin):
    list_display = ("id", "s_title", "s_author", "s_lng", "s_pdate")
    search_fields = ("s_title", "s_author", "s_desc")