from django.contrib import admin
from .models import home_card_1,home_card_2,home_card_3,home_card_4, home_card_5, home_card_6
from .models import book_card_1,book_card_2,book_card_3,book_card_4, book_card_5, sport_card_1,sport_card_2, sport_card_3, sport_card_4, sport_card_5

# Register your models here.
class home_card_1Admin(admin.ModelAdmin):
    list_display= ("card_desc","card_image")
class home_card_2Admin(admin.ModelAdmin):
    list_display= ("card_desc","card_image")
class home_card_3Admin(admin.ModelAdmin):
    list_display= ("card_desc","card_image")
class home_card_4Admin(admin.ModelAdmin):
    list_display= ("card_desc","card_image") 
class home_card_5Admin(admin.ModelAdmin):
    list_display= ("card_desc","card_image")  
class home_card_6Admin(admin.ModelAdmin):
    list_display= ("card_desc","card_image")   




class book_card_1Admin(admin.ModelAdmin):
    list_display= ("card_desc","card_image")
class book_card_2Admin(admin.ModelAdmin):
    list_display= ("card_desc","card_image")
class book_card_3Admin(admin.ModelAdmin):
    list_display= ("card_desc","card_image")
class book_card_4Admin(admin.ModelAdmin):
    list_display= ("card_desc","card_image") 
class book_card_5Admin(admin.ModelAdmin):
    list_display= ("card_desc","card_image")        

class sport_card_1Admin(admin.ModelAdmin):
    list_display= ("card_desc","card_image")
class sport_card_2Admin(admin.ModelAdmin):
    list_display= ("card_desc","card_image")
class sport_card_3Admin(admin.ModelAdmin):
    list_display= ("card_desc","card_image")
class sport_card_4Admin(admin.ModelAdmin):
    list_display= ("card_desc","card_image") 
class sport_card_5Admin(admin.ModelAdmin):
    list_display= ("card_desc","card_image")  

admin.site.register(home_card_1,home_card_1Admin)    
admin.site.register(home_card_2,home_card_1Admin)    
admin.site.register(home_card_3,home_card_1Admin)    
admin.site.register(home_card_4,home_card_1Admin)    
admin.site.register(home_card_5,home_card_1Admin)    
admin.site.register(home_card_6,home_card_1Admin)
   
admin.site.register(book_card_1,book_card_1Admin)    
admin.site.register(book_card_2,book_card_1Admin)    
admin.site.register(book_card_3,book_card_1Admin)    
admin.site.register(book_card_4,book_card_1Admin)    
admin.site.register(book_card_5,book_card_1Admin)    

admin.site.register(sport_card_1,sport_card_1Admin)    
admin.site.register(sport_card_2,sport_card_1Admin)    
admin.site.register(sport_card_3,sport_card_1Admin)    
admin.site.register(sport_card_4,sport_card_1Admin)    
admin.site.register(sport_card_5,sport_card_1Admin) 