from django.contrib import admin
from .models import Search

class searchadmin(admin.ModelAdmin):
    list_display = ("S_image", "S_image", "s_lng","s_author","s_pdate","s_desc")

# Register your models here.
admin.site.register(Search, searchadmin)