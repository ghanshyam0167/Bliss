from django.contrib import admin
from .models import marquee_feature_1, marquee_feature_2, marquee_feature_3


@admin.register(marquee_feature_1)
class MarqueeBooks1Admin(admin.ModelAdmin):
    list_display = ("id", "book_image")


@admin.register(marquee_feature_2)
class MarqueeMagazinesAdmin(admin.ModelAdmin):
    list_display = ("id", "magazines_image")


@admin.register(marquee_feature_3)
class MarqueeBooks2Admin(admin.ModelAdmin):
    list_display = ("id", "book_image_2")