from django.contrib import admin
from .models import Category,Company,Twit
# Register your models here.

admin.site.register(Category)
admin.site.register(Company)

class TwitAdmin(admin.ModelAdmin):
    list_display = ('description', 'title','status')
    list_editable = ('status',)
    list_filter = ('status',)


admin.site.register(Twit,TwitAdmin)