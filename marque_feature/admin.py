from django.contrib import admin
from .models import marquee_feature_1,marquee_feature_2,marquee_feature_3
class marquee_feature_1Admin(admin.ModelAdmin):
    list_display=('book_image',)
class marquee_feature_2Admin(admin.ModelAdmin):
    list_display=('magazines_image',)
class marquee_feature_3Admin(admin.ModelAdmin):
    list_display=('book_image_2',)    
# Register your models here.
admin.site.register(marquee_feature_1,marquee_feature_1Admin)
admin.site.register(marquee_feature_2,marquee_feature_2Admin)
admin.site.register(marquee_feature_3,marquee_feature_3Admin)